 /**
  * @name JQL.js
  * @version 1.0.3
  * @update Apr 16, 2017
  * @author Earthchie http://www.earthchie.com/
  * @license WTFPL v.2 - http://www.wtfpl.net/
  **/
function JQL(obj) {
     if (typeof obj === 'string') {
         obj = JSON.parse(obj);
     }
     this.data_source = obj;
     this.buffer = obj;
     this.focused_field = '';
     this.options = [];
     this.size = false;

     for (const key in obj) {
         for (const field in obj[key]) {
             this.options.push(field);
         }
         break;
     }

     this.fetch = function () {
         if (typeof this.options === 'object') {
             const obj = {};
             for (var i in this.buffer) {
                 obj[i] = {};
                 for (const j in this.options) {
                     const field = this.options[j];
                     if (this.buffer[i][field]) {
                         obj[i][field] = this.buffer[i][field];
                     }
                 }
             }

             this.buffer = obj;
         }

         if (this.size) {
             const temp = this.size.toString().split(',');

             let start = 0;
             let end = this.size;

             if (temp.length > 1 && temp[0] < temp[1]) {
                 start = parseInt(temp[0],10);
                 end = start + parseInt(temp[1],10);
             }

             const results = {};
             for (var ik = start; ik < end; ik++) {
                 if (this.buffer[ik]) {
                     results[ik] = this.buffer[ik];
                 } else {
                     break;
                 }
             }

             this.buffer = results;
         }

         return this.buffer;
     };

     this.new = function (obj) {
         this.data_source = obj;
         this.buffer = obj;
     };

     this.limit = function (limit) {
         this.size = limit;

         return this;
     };

     this.select = function (filters) {
         this.options = filters;

         if (typeof filters === 'string' && filters !== '*') {
             this.options = filters.split(',');
         }

         this.buffer = this.data_source;
         this.size = false;
         return this;
     };

     this.where = function (field) {
         this.focused_field = field;

         return this;
     };


     // sets of conditions

     this.contains = function (str, caseSensitive) {
         if (caseSensitive === undefined) {
             caseSensitive = false;
         }
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (caseSensitive) {
                 if (~obj[i][this.focused_field].indexOf(str)) {
                     this.buffer.push(obj[i]);
                 }
             } else if (~obj[i][this.focused_field].toLowerCase().indexOf(str.toLowerCase())) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.match = function (regex, options) {
         if (typeof regex === 'string' && regex !== '') {
             options = options || 'ig';

             regex = new RegExp(regex, options);

             const obj = this.buffer;
             this.buffer = [];

             for (const i in obj) {
                 regex.lastIndex = 0;
                 if (regex.exec(obj[i][this.focused_field])) {
                     this.buffer.push(obj[i]);
                 }
             }
         }
         return this;
     };

     this.equalTo = function (val) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (obj[i][this.focused_field] === val) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.in = function (vals) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (this.in_array(obj[i][this.focused_field], vals)) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.moreThan = function (val) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (parseFloat(obj[i][this.focused_field]) > parseFloat(val)) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.moreThanOrEqualTo = function (val) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (parseFloat(obj[i][this.focused_field]) >= parseFloat(val)) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.lessThan = function (val) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (parseFloat(obj[i][this.focused_field]) < parseFloat(val)) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     this.lessThanOrEqualTo = function (val) {
         const obj = this.buffer;
         this.buffer = [];

         for (const i in obj) {
             if (parseFloat(obj[i][this.focused_field]) <= parseFloat(val)) {
                 this.buffer.push(obj[i]);
             }
         }

         return this;
     };

     // end - set of conditions

     // order

     this.orderBy = function (field, mode) {
         let sequence = 'asc';
         const target = field.split(' ');
         const temp = target.pop();

         if (temp && temp.toLowerCase() === 'desc') {
             sequence = 'desc';
             field = target.join(' ');
         }

         // prepare object
         const obj = [];
         for (var i in this.buffer) {
             obj.push([i, this.buffer[i][field]]);
         }

         if (obj.length < 2) {
             return this;
         }

         if (mode === undefined && isNaN(obj[0][1])) {
             mode = 'string';
         } else {
             mode = 'numeric';
         }

         if (mode === 'string') {
             obj.sort((a, b) => {
                 if (a[1] < b[1]) return -1;
                 if (a[1] > b[1]) return 1;
                 return 0;
             });
         } else {
             obj.sort((a, b) => a[1] - b[1]);
         }

         var results = [];
         for (var ii in obj) {
             results.push(this.buffer[obj[ii][0]]);
         }

         this.buffer = results;
         if (sequence === 'desc') {
             this.buffer = this.buffer.reverse();
         }

         return this;
     };

     // alias
     this.and = this.where;
     this.is = this.equalTo;

     // helper
     this.in_array = function (val, list) {
         for (const i in list) {
             if (val === list[i]) {
                 return true;
             }
         }

         return false;
     };
}

if (typeof module === 'object' && module.exports) {
  module.exports = JQL;
}
