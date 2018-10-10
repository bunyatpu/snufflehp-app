webpackHotUpdate(5,{

/***/ "./components/commons/Header/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/app/components/commons/Header/Logo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Logo =
/*#__PURE__*/
function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      var responsive = this.props.responsive;
      console.log(responsive);
      var sty1 = {
        fontSize: '20px',
        color: 'rgba(255,255,255,0.75)'
      };
      var sty2 = {
        fontSize: '22px',
        color: 'orange'
      };

      if (responsive !== undefined && responsive.mobile) {
        sty1 = {
          fontSize: '30px',
          color: 'rgba(255,255,255,0.75)'
        };
        sty2 = {
          fontSize: '34px',
          color: 'orange'
        };
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: sty1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Snuffle"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: sty2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "HP"));
    }
  }]);

  return Logo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=5.e549ba5f337eee5ac9b7.hot-update.js.map