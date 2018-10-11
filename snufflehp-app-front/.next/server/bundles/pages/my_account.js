module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  LOGIN_TOGGLE: 'LOGIN_TOGGLE',
  LOGIN_ADD: 'LOGIN_ADD',
  LOGIN_CLEAR: 'LOGIN_CLEAR',
  UPDATE_ADDR: 'UPDATE_ADDR',
  PRODUCT_LOAD_ALL: 'PRODUCT_LOAD_ALL',
  PRODUCT_LOAD_NEW_BOOK: 'PRODUCT_LOAD_NEW_BOOK',
  PRODUCT_LOAD_NEW_OTHER: 'PRODUCT_LOAD_NEW_OTHER',
  PRODUCT_LOAD_DETAIL: 'PRODUCT_LOAD_DETAIL',
  CART_LOAD: 'CART_LOAD',
  CART_UPDATE: 'CART_UPDATE',
  TOGGLE_STATUS_TAG: 'TOGGLE_STATUS_TAG',
  TOGGLE_DIALOG_GOTO_SIGIN: 'TOGGLE_DIALOG_GOTO_SIGIN',
  TOGGLE_SHOW_CONFIRM_DELETE: 'TOGGLE_SHOW_CONFIRM_DELETE',
  DELETE_ORDER_PRODUCT: 'DELETE_ORDER_PRODUCT',
  UPDATE_SHIPPING_TYPE: 'UPDATE_SHIPPING_TYPE',
  TOGGLE_SHIELD_PACKAGE: 'TOGGLE_SHIELD_PACKAGE'
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);
// resource for handling cookies taken from here:
// https://github.com/carlos-peru/next-with-api/blob/master/lib/session.js

var setCookie = function setCookie(key, value) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  }); //

  if (!rawCookie) {
    return undefined;
  } //console.log('rawCookie',rawCookie)


  return rawCookie.split('=')[1];
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);


var _require = __webpack_require__(16),
    PHASE_DEVELOPMENT_SERVER = _require.PHASE_DEVELOPMENT_SERVER;

var getApi = function getApi() {
  var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
      API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST,
      API_URL_SERVER = _getConfig.serverRuntimeConfig.API_URL_SERVER; //console.log(API_URL_HOST,API_URL_SERVER)
  //console.log('process',process.browser)
  //console.log('window',window)


  return {
    API_URL: process.browser ? API_URL_HOST : API_URL_SERVER
  };
};



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadNewProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadNewOther; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadCarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteOrderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selShippingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return toggleShieldPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(6);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

 //import { getApi } from "../../config";


 // import { setCookie,removeCookie } from '../../components/commons/utility/cookie'



var loadAllProducts = function loadAllProducts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var res, _getApi, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi.API_URL;
                _context.next = 5;
                return fetch("".concat(API_URL, "/products/load_products_all"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                });

              case 5:
                raw = _context.sent;
                _context.next = 8;
                return raw.json();

              case 8:
                res = _context.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].PRODUCT_LOAD_ALL,
                    payload: res.products
                  });
                } else {
                  console.log('error', res.message);
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.log('error', _context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var loadNewProducts = function loadNewProducts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var res, _getApi2, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context2.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi2 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi2.API_URL;
                _context2.next = 5;
                return fetch("".concat(API_URL, "/products/load_products_new"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: "cond=".concat(JSON.stringify({
                    category_id: 1
                  }))
                });

              case 5:
                raw = _context2.sent;
                _context2.next = 8;
                return raw.json();

              case 8:
                res = _context2.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].PRODUCT_LOAD_NEW_BOOK,
                    payload: res.products
                  });
                } else {
                  console.log('error', res.message);
                }

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                console.log('error', _context2.t0.message);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var loadNewOther = function loadNewOther() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        var res, _getApi3, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context3.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi3 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi3.API_URL;
                _context3.next = 5;
                return fetch("".concat(API_URL, "/products/load_other_new"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                });

              case 5:
                raw = _context3.sent;
                _context3.next = 8;
                return raw.json();

              case 8:
                res = _context3.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].PRODUCT_LOAD_NEW_OTHER,
                    payload: res.products
                  });
                } else {
                  console.log('error', res.message);
                }

                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);
                console.log('error', _context3.t0.message);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 12]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var loadProductDetail = function loadProductDetail(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch) {
        var res, _getApi4, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context4.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi4 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi4.API_URL;
                _context4.next = 5;
                return fetch("".concat(API_URL, "/products/load_product_detail"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: "id=".concat(id)
                });

              case 5:
                raw = _context4.sent;
                _context4.next = 8;
                return raw.json();

              case 8:
                res = _context4.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].PRODUCT_LOAD_DETAIL,
                    payload: res.product
                  });
                } else {
                  console.log('error', res.message);
                }

                _context4.next = 15;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](1);
                console.log('error', _context4.t0.message);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 12]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

var loadCarts = function loadCarts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(dispatch) {
        var res, _getApi5, API_URL, token, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context5.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi5 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi5.API_URL;
                token = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__["a" /* getCookie */])('token'); //console.log('token',token)

                _context5.next = 6;
                return fetch("".concat(API_URL, "/products/load_carts"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  }
                });

              case 6:
                raw = _context5.sent;
                _context5.next = 9;
                return raw.json();

              case 9:
                res = _context5.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].CART_LOAD,
                    payload: res.carts
                  });
                } else {
                  console.log('error', res.message);
                }

                _context5.next = 16;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](1);
                console.log('error', _context5.t0.message);

              case 16:
                return _context5.abrupt("return", res);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 13]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

var updateCart = function updateCart(_ref6) {
  var product_id = _ref6.product_id,
      amount = _ref6.amount,
      status = _ref6.status;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(dispatch) {
        var res, _getApi6, API_URL, token, model, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context6.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi6 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi6.API_URL;
                token = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__["a" /* getCookie */])('token'); //console.log('token',token)

                model = {
                  product_id: product_id,
                  amount: amount,
                  status: status === undefined ? 1 : status
                };
                _context6.next = 7;
                return fetch("".concat(API_URL, "/products/update_cart"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  },
                  body: "params=".concat(JSON.stringify(model))
                });

              case 7:
                raw = _context6.sent;
                _context6.next = 10;
                return raw.json();

              case 10:
                res = _context6.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].CART_UPDATE,
                    payload: res.model
                  });
                } else {//console.log('error',res.message)
                }

                _context6.next = 17;
                break;

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](1);
                console.log('error', _context6.t0.message);

              case 17:
                return _context6.abrupt("return", res);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 14]]);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

var deleteOrderItem = function deleteOrderItem(item) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(dispatch) {
        var res, _getApi7, API_URL, token, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context7.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi7 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi7.API_URL;
                token = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__["a" /* getCookie */])('token'); //console.log('token',token)

                _context7.next = 6;
                return fetch("".concat(API_URL, "/products/delete_cart"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  },
                  body: "params=".concat(JSON.stringify(item))
                });

              case 6:
                raw = _context7.sent;
                _context7.next = 9;
                return raw.json();

              case 9:
                res = _context7.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].DELETE_ORDER_PRODUCT,
                    payload: item
                  });
                } else {//console.log('error',res.message)
                }

                _context7.next = 16;
                break;

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](1);
                console.log('error', _context7.t0.message);

              case 16:
                return _context7.abrupt("return", res);

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 13]]);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

var selShippingType = function selShippingType(type) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].UPDATE_SHIPPING_TYPE,
      payload: type
    });
  };
};

var toggleShieldPackage = function toggleShieldPackage(type) {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].TOGGLE_SHIELD_PACKAGE,
      payload: {
        type: type
      }
    });
  };
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showDialogGotoSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closeDialogGotoSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showConfirmDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeConfirmDelete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(6);



var showDialogGotoSignin = function showDialogGotoSignin() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_DIALOG_GOTO_SIGIN,
      payload: true
    });
  };
};

var closeDialogGotoSignin = function closeDialogGotoSignin() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_DIALOG_GOTO_SIGIN,
      payload: false
    });
  };
};

var showConfirmDelete = function showConfirmDelete(item) {
  //console.log('showConfirmDelete-->',item)
  return function (dispatch) {
    //console.log('dispatch')
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_SHOW_CONFIRM_DELETE,
      payload: {
        show: true,
        item: item
      }
    });
  };
};

var closeConfirmDelete = function closeConfirmDelete() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_SHOW_CONFIRM_DELETE,
      payload: {
        show: false,
        item: {}
      }
    });
  };
};



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signupAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signinAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logoutAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(6);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

 //import { getApi } from "../../config";



 // import getConfig from 'next/config'
// const { publicRuntimeConfig:{API_URL} } = getConfig()
//const { API_URL } = publicRuntimeConfig

var signupAction = function signupAction(datas) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var res, _getApi, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = {
                  status: true
                };
                _context.prev = 1;
                _getApi = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi.API_URL;
                _context.next = 5;
                return fetch("".concat(API_URL, "/auth/signup"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: "username=".concat(datas.username, "&password=").concat(datas.password, "&email=").concat(datas.email)
                });

              case 5:
                raw = _context.sent;
                _context.next = 8;
                return raw.json();

              case 8:
                res = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                //console.log('error',error.message)
                res.status = false;
                res.msg = _context.t0.message;

              case 15:
                return _context.abrupt("return", res);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var signinAction = function signinAction(datas) {
  //console.log('datas',datas)
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var res, _getApi2, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //console.log('indispath')
                res = {
                  status: true
                };
                _context2.prev = 1;
                _getApi2 = Object(__WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi2.API_URL; //console.log('API_URL',API_URL)

                _context2.next = 5;
                return fetch("".concat(API_URL, "/auth/signin"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: "email=".concat(datas.email, "&password=").concat(datas.password)
                });

              case 5:
                raw = _context2.sent;
                _context2.next = 8;
                return raw.json();

              case 8:
                res = _context2.sent;

                //console.log('res',res)
                //set cookie and localstorage
                if (res.status) {
                  Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__["c" /* setCookie */])('token', res.token); //localStorage.setItem('auth', JSON.stringify(model))
                } //return res;
                //--


                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                //console.log('error',error.message)
                res.status = false;
                res.msg = _context2.t0.message;

              case 16:
                return _context2.abrupt("return", res);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var logoutAction = function logoutAction() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* default */].LOGIN_CLEAR
                });
                Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__["b" /* removeCookie */])('token');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/constants");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-redux");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_utility_getApi__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_commons_utility_cookie__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_form__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 //import cookies from 'next-cookies'
//import { API_URL } from "../../config";
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()
// const { API_URL } = publicRuntimeConfig





var loadUserInfo = function loadUserInfo(token) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var res, _getApi, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = {
                  status: true //--

                };
                _context.prev = 1;
                //console.log('API_URL', API_URL)
                _getApi = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi.API_URL;
                _context.next = 5;
                return fetch("".concat(API_URL, "/user/load_user"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  }
                });

              case 5:
                raw = _context.sent;
                _context.next = 8;
                return raw.json();

              case 8:
                res = _context.sent;

                //console.log('res',res)
                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* default */].LOGIN_ADD,
                    payload: res.user
                  });
                } else {
                  console.log('error', res.msg);
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.log('error', _context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var updateUser = function updateUser(user) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var res, token, formData, k, _getApi2, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = {
                  status: true
                };
                token = Object(__WEBPACK_IMPORTED_MODULE_4__components_commons_utility_cookie__["a" /* getCookie */])('token'); //--

                _context2.prev = 2;
                formData = new FormData();

                for (k in user) {
                  formData.append(k, user[k]);
                }

                _getApi2 = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi2.API_URL;
                _context2.next = 8;
                return fetch("".concat(API_URL, "/user/update_user"), {
                  method: 'POST',
                  headers: {
                    // 'Content-Type':'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  },
                  //body:`user=${JSON.stringify(user)}`
                  body: formData
                });

              case 8:
                raw = _context2.sent;
                _context2.next = 11;
                return raw.json();

              case 11:
                res = _context2.sent;

                //console.log('res',res)
                if (res.status) {
                  user.avatar_path = res.model.avatar_path;
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* default */].LOGIN_ADD,
                    payload: user
                  });
                } else {
                  console.log('error1', res.msg);
                  res.status = false;
                  res.msg = res.msg;
                }

                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                console.log('error2', _context2.t0.message);
                res.status = false;
                res.msg = _context2.t0.message;

              case 20:
                return _context2.abrupt("return", res);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 15]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var updatePassword = function updatePassword(passObj) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        var res, token, _getApi3, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res = {
                  status: true
                };
                token = Object(__WEBPACK_IMPORTED_MODULE_4__components_commons_utility_cookie__["a" /* getCookie */])('token'); //--

                _context3.prev = 2;
                //console.log('user',user)
                //console.log('API_URL', API_URL)
                _getApi3 = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi3.API_URL;
                _context3.next = 6;
                return fetch("".concat(API_URL, "/user/update_password"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  },
                  body: "passObj=".concat(JSON.stringify(passObj))
                });

              case 6:
                raw = _context3.sent;
                _context3.next = 9;
                return raw.json();

              case 9:
                res = _context3.sent;

                if (res.status) {
                  dispatch(Object(__WEBPACK_IMPORTED_MODULE_5_redux_form__["reset"])('formPassword'));
                }

                _context3.next = 18;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](2);
                console.log('error', _context3.t0.message);
                res.status = false;
                res.error = _context3.t0.message;

              case 18:
                return _context3.abrupt("return", res);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 13]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var updateAddress = function updateAddress(addObj) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch) {
        var res, token, _getApi4, API_URL, raw;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                res = {
                  status: true
                };
                token = Object(__WEBPACK_IMPORTED_MODULE_4__components_commons_utility_cookie__["a" /* getCookie */])('token');
                _context4.prev = 2;
                _getApi4 = Object(__WEBPACK_IMPORTED_MODULE_3__components_commons_utility_getApi__["a" /* getApi */])(), API_URL = _getApi4.API_URL;
                _context4.next = 6;
                return fetch("".concat(API_URL, "/user/update_address"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Bearer ".concat(token)
                  },
                  body: "addrObj=".concat(JSON.stringify(addObj))
                });

              case 6:
                raw = _context4.sent;
                _context4.next = 9;
                return raw.json();

              case 9:
                res = _context4.sent;

                if (res.status) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* default */].UPDATE_ADDR,
                    payload: addObj
                  });
                }

                _context4.next = 18;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](2);
                console.log('error', _context4.t0.message);
                res.status = false;
                res.error = _context4.t0.message;

              case 18:
                return _context4.abrupt("return", res);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 13]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-responsive-redux"
var external__react_responsive_redux_ = __webpack_require__(18);
var external__react_responsive_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_redux_);

// EXTERNAL MODULE: external "react-sticky"
var external__react_sticky_ = __webpack_require__(22);
var external__react_sticky__default = /*#__PURE__*/__webpack_require__.n(external__react_sticky_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(2);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// CONCATENATED MODULE: ./components/commons/Header/Logo.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Logo_Logo =
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
      var responsive = this.props.responsive; //console.log('responsive',responsive)

      var sty1 = {
        fontSize: '20px',
        color: 'rgba(255,255,255,0.75)'
      };
      var sty2 = {
        fontSize: '22px',
        color: 'orange'
      };

      if (responsive !== undefined && responsive.mobile) {
        if (responsive.phone) {
          sty1 = {
            fontSize: '60px',
            color: 'rgba(255,255,255,0.75)'
          };
          sty2 = {
            fontSize: '68px',
            color: 'orange'
          };
        } else {
          sty1 = {
            fontSize: '30px',
            color: 'rgba(255,255,255,0.75)'
          };
          sty2 = {
            fontSize: '34px',
            color: 'orange'
          };
        }
      }

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("span", {
        style: sty1
      }, "Snuffle"), external__react__default.a.createElement("span", {
        style: sty2
      }, "HP"));
    }
  }]);

  return Logo;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(9);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// CONCATENATED MODULE: ./components/commons/Header/Search.js
function Search__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search__typeof = function _typeof(obj) { return typeof obj; }; } else { Search__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search__typeof(obj); }

function Search__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search__createClass(Constructor, protoProps, staticProps) { if (protoProps) Search__defineProperties(Constructor.prototype, protoProps); if (staticProps) Search__defineProperties(Constructor, staticProps); return Constructor; }

function Search__possibleConstructorReturn(self, call) { if (call && (Search__typeof(call) === "object" || typeof call === "function")) { return call; } return Search__assertThisInitialized(self); }

function Search__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Search_SearchHeader =
/*#__PURE__*/
function (_Component) {
  Search__inherits(SearchHeader, _Component);

  function SearchHeader() {
    Search__classCallCheck(this, SearchHeader);

    return Search__possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).apply(this, arguments));
  }

  Search__createClass(SearchHeader, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "SearchInput"
      }, external__react__default.a.createElement("input", {
        className: "align-middle",
        style: {
          background: '#e2e2e2'
        },
        type: "text",
        id: "",
        placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E19\u0E34\u0E22\u0E32\u0E22"
      }), external__react__default.a.createElement("button", {
        className: "btnSearch align-middle",
        style: {
          color: "#ffc96b"
        }
      }, external__react__default.a.createElement(fa_["FaSearch"], {
        style: {
          fontSize: "20px"
        }
      })));
    }
  }]);

  return SearchHeader;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/commons/Header/Cart.js


function Cart__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Cart__typeof = function _typeof(obj) { return typeof obj; }; } else { Cart__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Cart__typeof(obj); }

function Cart__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cart__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cart__createClass(Constructor, protoProps, staticProps) { if (protoProps) Cart__defineProperties(Constructor.prototype, protoProps); if (staticProps) Cart__defineProperties(Constructor, staticProps); return Constructor; }

function Cart__possibleConstructorReturn(self, call) { if (call && (Cart__typeof(call) === "object" || typeof call === "function")) { return call; } return Cart__assertThisInitialized(self); }

function Cart__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Cart__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 //import { loadCarts } from "../../../redux/actions/productsAction";

var Cart_Cart =
/*#__PURE__*/
function (_Component) {
  Cart__inherits(Cart, _Component);

  function Cart() {
    var _ref;

    var _temp, _this;

    Cart__classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Cart__possibleConstructorReturn(_this, (_temp = _this = Cart__possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Cart__assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        router__default.a.push(url);
      }
    }), _temp));
  }

  Cart__createClass(Cart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          carts = _props.carts,
          cartSize = _props.cartSize,
          responsive = _props.responsive; //console.log('carts',carts)

      var phone = responsive !== undefined && responsive.phone ? true : false;
      var cNow = 0;
      var size = cartSize === undefined ? '25' : cartSize;

      if (phone) {
        size = 60;
      } //console.log(Carts.lists);


      if (carts.amtTotal !== undefined) {
        cNow = carts.amtTotal;
      } //min-height: 30px;


      return external__react__default.a.createElement("div", {
        style: {
          color: 'rgba(255,255,255,0.75)'
        },
        className: style__default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]])
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "1671015616",
        css: [".Cart{position:relative;float:left;margin-left:15px;top:".concat(phone ? '19px' : '7px', ";}"), ".Cart:hover{cursor:pointer !important;top:9px;}", ".Badge{background:#f36e36;color:#fff;top:-4px;font-weight:400;right:-4px;text-align:center;border:3px solid #f36e36;font-size:13px;min-width:20px;line-height:14px;border-radius:50%;position:absolute;}"],
        dynamic: [phone ? '19px' : '7px']
      }), external__react__default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.goto('/order_lists');
        },
        className: style__default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]]) + " " + "Cart"
      }, external__react__default.a.createElement(fa_["FaShoppingCart"], {
        size: size
      }), external__react__default.a.createElement("div", {
        style: {
          left: '15px'
        },
        className: style__default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]]) + " " + "Badge"
      }, cNow)));
    }
  }]);

  return Cart;
}(external__react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    carts: state.products.cartOrders
  };
};

/* harmony default export */ var Header_Cart = (Object(external__react_redux_["connect"])(mapStateToProps, {})(Cart_Cart));
// EXTERNAL MODULE: ./redux/actions/authAction.js
var authAction = __webpack_require__(15);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(11);
var config__default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./components/commons/Header/Account.js


function Account__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Account__typeof = function _typeof(obj) { return typeof obj; }; } else { Account__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Account__typeof(obj); }

function Account__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Account__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Account__createClass(Constructor, protoProps, staticProps) { if (protoProps) Account__defineProperties(Constructor.prototype, protoProps); if (staticProps) Account__defineProperties(Constructor, staticProps); return Constructor; }

function Account__possibleConstructorReturn(self, call) { if (call && (Account__typeof(call) === "object" || typeof call === "function")) { return call; } return Account__assertThisInitialized(self); }

function Account__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Account__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 //import { FaSearch } from 'react-icons/fa';

var Account_Account =
/*#__PURE__*/
function (_Component) {
  Account__inherits(Account, _Component);

  function Account() {
    var _this;

    Account__classCallCheck(this, Account);

    _this = Account__possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this));
    Object.defineProperty(Account__assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        router__default.a.push(url);
      }
    });
    Object.defineProperty(Account__assertThisInitialized(_this), "toggleAccMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.state.openAccMenu) {
          // attach/remove event handler
          document.addEventListener('click', _this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', _this.handleOutsideClick, false);
        }

        _this.setState({
          openAccMenu: !_this.state.openAccMenu
        });
      }
    });
    Object.defineProperty(Account__assertThisInitialized(_this), "handleOutsideClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.node && _this.node.contains(e.target)) {
          return;
        }

        _this.toggleAccMenu();
      }
    });
    Object.defineProperty(Account__assertThisInitialized(_this), "openModalLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          modalLogout: true
        });
      }
    });
    Object.defineProperty(Account__assertThisInitialized(_this), "isLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        router__default.a.push('/signin');

        _this.setState({
          modalLogout: false
        });

        _this.props.logoutAction();
      }
    });
    Object.defineProperty(Account__assertThisInitialized(_this), "toggleDialogLogOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          modalLogout: !_this.state.modalLogout
        });
      }
    });
    _this.state = {
      openAccMenu: false,
      modalLogout: false
    };
    return _this;
  }

  Account__createClass(Account, [{
    key: "componentDidMount",
    value: function componentDidMount() {//load userinfo
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          userInfo = _props.userInfo,
          imgHeight = _props.imgHeight,
          responsive = _props.responsive;
      var _state = this.state,
          openAccMenu = _state.openAccMenu,
          modalLogout = _state.modalLogout;

      var _getConfig = config__default()(),
          API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST; //console.log('userInfo',userInfo)


      var fixStyle = responsive !== undefined && responsive.mobile ? {
        color: '#fff'
      } : {};
      var content = external__react__default.a.createElement("div", null, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.goto('/signup');
        },
        style: {
          marginRight: '5px',
          color: '#fff'
        }
      }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E43\u0E2B\u0E21\u0E48"), "|", external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.goto('/signin');
        },
        style: {
          marginLeft: '5px',
          color: '#fff'
        }
      }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"));
      var imgAvatar = userInfo.avatar_path === '' ? '/static/images/avatars/avatar-new.jpg' : "".concat(API_URL_HOST, "/images/avatars/").concat(userInfo.avatar_path); //

      if (userInfo.id !== undefined) {
        content = external__react__default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.toggleAccMenu();
          },
          className: "d-flex align-items-center justify-content-end myacount"
        }, external__react__default.a.createElement("div", {
          style: {
            color: '#fff'
          }
        }, userInfo.username), external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
          style: {
            height: imgHeight !== undefined ? imgHeight : '35px',
            width: imgHeight !== undefined ? imgHeight : '35px'
          },
          src: imgAvatar,
          className: "img-avatar",
          alt: ""
        })));
      }

      return external__react__default.a.createElement("div", {
        style: {
          fontSize: '14px'
        },
        className: "jsx-939965620" + " " + "Account"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "939965620",
        css: [".img-avatar{margin:0 10px;max-width:100%;border-radius:50em;vertical-align:middle;border-style:none;border:1px solid #fff;}", ".img-avatar:hover{border-color:#5dd208;}", ".myacount:hover{cursor:pointer;}", ".accountList{position:relative;z-index:10;}", ".accountList a{color:#555 !important;}", ".accountList .list-group{position:absolute;top:10px;width:150px;left:30%;}", ".accountList .pointerConnerGroup{position:absolute;width:20px;height:20px;top:7px;background:#fff;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);left:75%;z-index:11;}", ".accountList .list-group-item{padding-top:16px;}", ".accountList a.list-group-item:hover{cursor:pointer;}"]
      }), content, openAccMenu && external__react__default.a.createElement("div", {
        ref: function ref(node) {
          _this2.node = node;
        },
        className: "jsx-939965620" + " " + "accountList"
      }, external__react__default.a.createElement(external__reactstrap_["ListGroup"], null, external__react__default.a.createElement(external__reactstrap_["ListGroupItem"], {
        tag: "a",
        onClick: function onClick() {
          return _this2.goto('/my_account');
        }
      }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35"), external__react__default.a.createElement(external__reactstrap_["ListGroupItem"], {
        tag: "a",
        onClick: function onClick() {
          return _this2.openModalLogout();
        }
      }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")), external__react__default.a.createElement("div", {
        className: "jsx-939965620" + " " + "pointerConnerGroup"
      })), external__react__default.a.createElement(external__reactstrap_["Modal"], {
        isOpen: modalLogout,
        toggle: this.toggleDialogLogOut
      }, external__react__default.a.createElement(external__reactstrap_["ModalBody"], null, external__react__default.a.createElement("h3", {
        className: "jsx-939965620"
      }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?")), external__react__default.a.createElement(external__reactstrap_["ModalFooter"], null, external__react__default.a.createElement(external__reactstrap_["Button"], {
        color: "primary",
        onClick: this.isLogout
      }, "Logout"), external__react__default.a.createElement(external__reactstrap_["Button"], {
        olor: "inherit",
        onClick: this.toggleDialogLogOut
      }, "Cancel"))));
    }
  }]);

  return Account;
}(external__react_["Component"]);

var Account_mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.auth
  };
};

/* harmony default export */ var Header_Account = (Object(external__react_redux_["connect"])(Account_mapStateToProps, {
  logoutAction: authAction["a" /* logoutAction */]
})(Account_Account));
// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(23);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: ./redux/actions/productsAction.js
var productsAction = __webpack_require__(13);

// EXTERNAL MODULE: ./components/commons/utility/cookie.js
var cookie = __webpack_require__(8);

// EXTERNAL MODULE: ./redux/actions/UtilityAction.js
var UtilityAction = __webpack_require__(14);

// CONCATENATED MODULE: ./components/commons/GotoLoginPopup/index.js
function GotoLoginPopup__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GotoLoginPopup__typeof = function _typeof(obj) { return typeof obj; }; } else { GotoLoginPopup__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GotoLoginPopup__typeof(obj); }

function GotoLoginPopup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GotoLoginPopup__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GotoLoginPopup__createClass(Constructor, protoProps, staticProps) { if (protoProps) GotoLoginPopup__defineProperties(Constructor.prototype, protoProps); if (staticProps) GotoLoginPopup__defineProperties(Constructor, staticProps); return Constructor; }

function GotoLoginPopup__possibleConstructorReturn(self, call) { if (call && (GotoLoginPopup__typeof(call) === "object" || typeof call === "function")) { return call; } return GotoLoginPopup__assertThisInitialized(self); }

function GotoLoginPopup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function GotoLoginPopup__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var GotoLoginPopup_GotoLoginPopup =
/*#__PURE__*/
function (_Component) {
  GotoLoginPopup__inherits(GotoLoginPopup, _Component);

  function GotoLoginPopup() {
    var _ref;

    var _temp, _this;

    GotoLoginPopup__classCallCheck(this, GotoLoginPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return GotoLoginPopup__possibleConstructorReturn(_this, (_temp = _this = GotoLoginPopup__possibleConstructorReturn(this, (_ref = GotoLoginPopup.__proto__ || Object.getPrototypeOf(GotoLoginPopup)).call.apply(_ref, [this].concat(args))), Object.defineProperty(GotoLoginPopup__assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        var closeDialogGotoSignin = _this.props.closeDialogGotoSignin;
        closeDialogGotoSignin();
        router__default.a.push(url); //closeDialogGotoSignin()
      }
    }), Object.defineProperty(GotoLoginPopup__assertThisInitialized(_this), "toggleDialogLogOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var closeDialogGotoSignin = _this.props.closeDialogGotoSignin;
        closeDialogGotoSignin();
      }
    }), _temp));
  }

  GotoLoginPopup__createClass(GotoLoginPopup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log('render Home')
      var open = this.props.open;
      return external__react__default.a.createElement(external__reactstrap_["Modal"], {
        isOpen: open,
        toggle: this.toggleDialogLogOut
      }, external__react__default.a.createElement(external__reactstrap_["ModalBody"], null, external__react__default.a.createElement("h3", null, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A")), external__react__default.a.createElement(external__reactstrap_["ModalFooter"], null, external__react__default.a.createElement(external__reactstrap_["Button"], {
        color: "primary",
        onClick: function onClick() {
          return _this2.goto('/signin');
        }
      }, "login"), external__react__default.a.createElement(external__reactstrap_["Button"], {
        olor: "inherit",
        onClick: this.toggleDialogLogOut
      }, "Cancel")));
    }
  }]);

  return GotoLoginPopup;
}(external__react_["Component"]);

var GotoLoginPopup_mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.UtilityReducer.dialogShowGotoLogin
  };
};

/* harmony default export */ var commons_GotoLoginPopup = (Object(external__react_redux_["connect"])(GotoLoginPopup_mapStateToProps, {
  showDialogGotoSignin: UtilityAction["d" /* showDialogGotoSignin */],
  closeDialogGotoSignin: UtilityAction["b" /* closeDialogGotoSignin */]
})(GotoLoginPopup_GotoLoginPopup));
// CONCATENATED MODULE: ./components/commons/Header/index.js
function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














router__default.a.onRouteChangeStart = function (url) {
  //console.log(`Loading: ${url}`)
  external__nprogress__default.a.start();
};

router__default.a.onRouteChangeComplete = function () {
  return external__nprogress__default.a.done();
};

router__default.a.onRouteChangeError = function () {
  return external__nprogress__default.a.done();
};

var Header_MainHeader =
/*#__PURE__*/
function (_Component) {
  Header__inherits(MainHeader, _Component);

  function MainHeader() {
    Header__classCallCheck(this, MainHeader);

    return Header__possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).apply(this, arguments));
  }

  Header__createClass(MainHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('componentDidMount')
      var token = Object(cookie["a" /* getCookie */])('token');

      if (token !== undefined) {
        var _loadCarts = this.props.loadCarts;

        _loadCarts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      //console.log('render Home')
      //console.log('props responsive',this.props.responsive)
      return external__react__default.a.createElement(external__reactstrap_["Container"], null, external__react__default.a.createElement(commons_GotoLoginPopup, null), external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: {
          paddingTop: '15px'
        }
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 2
      }, external__react__default.a.createElement(Logo_Logo, null)), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 7
      }, external__react__default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center"
      }, external__react__default.a.createElement("div", {
        className: "text-center",
        style: {
          width: '85%'
        }
      }, external__react__default.a.createElement(Search_SearchHeader, null)))), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 3
      }, external__react__default.a.createElement("div", {
        className: "d-flex align-items-center justify-content-end"
      }, external__react__default.a.createElement("div", {
        style: {
          marginRight: '25px'
        }
      }, external__react__default.a.createElement(Header_Cart, null)), external__react__default.a.createElement(Header_Account, null)))));
    }
  }]);

  return MainHeader;
}(external__react_["Component"]);

var Header_mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
};

/* harmony default export */ var Header = (Object(external__react_redux_["connect"])(Header_mapStateToProps, {
  loadCarts: productsAction["c" /* loadCarts */]
})(Header_MainHeader)); // (
//   return (
//     <Container>
//       <Row>
//         <Col md={2}><Logo /></Col>
//         <Col md={7} style={{display:'flex'}}>
//           <div style={{flexDirection:'row',display:'contents'}}><Search /></div>
//           <div style={{flexDirection:'row',display:'contents'}}><Cart /></div>
//         </Col>
//         <Col md={3}>acount</Col>
//       </Row>
//     </Container>
//   );
// )
// CONCATENATED MODULE: ./components/commons/menu/index.js


function menu__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { menu__typeof = function _typeof(obj) { return typeof obj; }; } else { menu__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return menu__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function menu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu__createClass(Constructor, protoProps, staticProps) { if (protoProps) menu__defineProperties(Constructor.prototype, protoProps); if (staticProps) menu__defineProperties(Constructor, staticProps); return Constructor; }

function menu__possibleConstructorReturn(self, call) { if (call && (menu__typeof(call) === "object" || typeof call === "function")) { return call; } return menu__assertThisInitialized(self); }

function menu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function menu__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var menu_MenuHeader =
/*#__PURE__*/
function (_Component) {
  menu__inherits(MenuHeader, _Component);

  function MenuHeader(props) {
    var _this;

    menu__classCallCheck(this, MenuHeader);

    _this = menu__possibleConstructorReturn(this, (MenuHeader.__proto__ || Object.getPrototypeOf(MenuHeader)).call(this, props));
    Object.defineProperty(menu__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        //console.log(obj);
        // this.setState({
        //   sel:obj.item.link
        // })
        router__default.a.push(obj.link);
      }
    });
    _this.state = {
      "items": [{
        name: "หน้าหลัก",
        link: "/"
      }, {
        name: "สินค้าทั้งหมด",
        link: "/all_products"
      }, {
        name: "เปิดจอง แด่..รัก",
        link: "/product/1"
      }, {
        name: "ชำระเงิน",
        link: "/order_lists"
      }, {
        name: "แจ้งโอนเงิน",
        link: "/tran_status"
      }],
      sel: "/"
    };
    return _this;
  }

  menu__createClass(MenuHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      var _props = this.props,
          style = _props.style,
          isSticky = _props.isSticky; //const transTime = 500

      var menuStyle = _objectSpread({}, style); //console.log('isSticky',isSticky)
      //let pathNow = (match !== undefined) ? match.path:'/';


      var pathNow = '/';
      var lists = items.map(function (item, key) {
        //let selNow = (item.link === pathNow) ? true:false
        return external__react__default.a.createElement(external__reactstrap_["NavItem"], {
          active: item.link === pathNow ? true : false,
          key: key,
          onClick: function onClick() {
            return _this2.handleClick(item);
          }
        }, external__react__default.a.createElement(external__reactstrap_["NavLink"], {
          href: "#"
        }, item.name));
      });
      return external__react__default.a.createElement("div", {
        style: Object.assign({
          //top:'60px',
          backgroundColor: '#313340',
          //backgroundColor:'red',
          zIndex: '100',
          paddingTop: '7px'
        }, menuStyle),
        className: "jsx-3520042608" + " " + "mainMenu bgHeader"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "3520042608",
        css: [".mainMenu .nav-item a{color:rgba(255,255,255,.5);font-size:14px;}", ".mainMenu .nav-item a:hover{color:rgba(255,255,255,.8);}"]
      }), external__react__default.a.createElement(external__reactstrap_["Container"], {
        className: "mainMenu"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: isSticky ? 1 : 2
      }, external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        "in": isSticky,
        enter: false,
        exit: false
      }, external__react__default.a.createElement(Logo_Logo, null))), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: isSticky ? 8 : 7
      }, external__react__default.a.createElement(external__reactstrap_["Nav"], {
        className: "d-flex justify-content-center"
      }, lists, " ")), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: isSticky ? 3 : 3
      }, external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        className: "d-flex align-items-center justify-content-center",
        "in": isSticky,
        enter: false,
        exit: false
      }, external__react__default.a.createElement("div", {
        style: {
          width: '90px'
        },
        className: "jsx-3520042608"
      }, external__react__default.a.createElement(Header_Cart, {
        cartSize: 25
      })), external__react__default.a.createElement("div", {
        className: "jsx-3520042608"
      }, external__react__default.a.createElement(Header_Account, {
        fixSize: "small",
        imgHeight: "30px"
      })))))));
    }
  }]);

  return MenuHeader;
}(external__react_["Component"]);

var menu_mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ var menu = (Object(external__react_redux_["connect"])(menu_mapStateToProps, {})(menu_MenuHeader));
// CONCATENATED MODULE: ./components/commons/StatusTag/index.js
function StatusTag__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StatusTag__typeof = function _typeof(obj) { return typeof obj; }; } else { StatusTag__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StatusTag__typeof(obj); }

function StatusTag__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { StatusTag__defineProperty(target, key, source[key]); }); } return target; }

function StatusTag__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StatusTag__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StatusTag__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StatusTag__createClass(Constructor, protoProps, staticProps) { if (protoProps) StatusTag__defineProperties(Constructor.prototype, protoProps); if (staticProps) StatusTag__defineProperties(Constructor, staticProps); return Constructor; }

function StatusTag__possibleConstructorReturn(self, call) { if (call && (StatusTag__typeof(call) === "object" || typeof call === "function")) { return call; } return StatusTag__assertThisInitialized(self); }

function StatusTag__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StatusTag__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StatusTag_StatusTag =
/*#__PURE__*/
function (_Component) {
  StatusTag__inherits(StatusTag, _Component);

  function StatusTag() {
    StatusTag__classCallCheck(this, StatusTag);

    return StatusTag__possibleConstructorReturn(this, (StatusTag.__proto__ || Object.getPrototypeOf(StatusTag)).apply(this, arguments));
  }

  StatusTag__createClass(StatusTag, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          show = _props.show,
          msg = _props.msg,
          style = _props.style; //console.log('show-->',show)

      var top = '300px';

      if (show) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
        var scroll = {
          x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
          y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };
        top = "".concat(scroll.y + 200, "px"); //console.log('scroll',scroll)
      }

      return external__react__default.a.createElement(external__reactstrap_["Fade"], {
        "in": show,
        tag: "div",
        style: StatusTag__objectSpread({
          opacity: '1',
          textAlign: 'center',
          width: '300px',
          position: 'absolute',
          background: '#505050e3',
          border: '1px solid #040404',
          padding: '10px',
          borderRadius: '8px',
          color: '#fff',
          top: top,
          zIndex: '100',
          display: show ? 'block' : 'none'
        }, style)
      }, external__react__default.a.createElement(fa_["FaCheckCircle"], {
        size: 60,
        color: "rgb(81, 197, 13)"
      }), external__react__default.a.createElement("p", null, msg));
    }
  }]);

  return StatusTag;
}(external__react_["Component"]);

var StatusTag_mapStateToProps = function mapStateToProps(state) {
  return {
    show: state.StatusTagReducer.show
  };
};

/* harmony default export */ var commons_StatusTag = (Object(external__react_redux_["connect"])(StatusTag_mapStateToProps)(StatusTag_StatusTag));
// CONCATENATED MODULE: ./components/commons/HeaderMobile/index.js


function HeaderMobile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HeaderMobile__typeof = function _typeof(obj) { return typeof obj; }; } else { HeaderMobile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HeaderMobile__typeof(obj); }

function HeaderMobile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HeaderMobile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HeaderMobile__createClass(Constructor, protoProps, staticProps) { if (protoProps) HeaderMobile__defineProperties(Constructor.prototype, protoProps); if (staticProps) HeaderMobile__defineProperties(Constructor, staticProps); return Constructor; }

function HeaderMobile__possibleConstructorReturn(self, call) { if (call && (HeaderMobile__typeof(call) === "object" || typeof call === "function")) { return call; } return HeaderMobile__assertThisInitialized(self); }

function HeaderMobile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function HeaderMobile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import { slide as Menu } from 'react-burger-menu'







var HeaderMobile_HeaderMobile =
/*#__PURE__*/
function (_Component) {
  HeaderMobile__inherits(HeaderMobile, _Component);

  function HeaderMobile(props) {
    var _this;

    HeaderMobile__classCallCheck(this, HeaderMobile);

    _this = HeaderMobile__possibleConstructorReturn(this, (HeaderMobile.__proto__ || Object.getPrototypeOf(HeaderMobile)).call(this, props));
    Object.defineProperty(HeaderMobile__assertThisInitialized(_this), "toggleNavbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          collapsed: !_this.state.collapsed
        });
      }
    });
    Object.defineProperty(HeaderMobile__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        router__default.a.push(obj.link);
      }
    });
    _this.state = {
      items: [{
        name: "หน้าหลัก",
        link: "/"
      }, {
        name: "สินค้าทั้งหมด",
        link: "/all_products"
      }, {
        name: "เปิดจอง แด่..รัก",
        link: "/product/1"
      }, {
        name: "ชำระเงิน",
        link: "/order_lists"
      }, {
        name: "แจ้งโอนเงิน",
        link: "/tran_status" //{name:"ชำระเงิน",link:"/payment"},

      }],
      sel: "/",
      collapsed: true
    };
    return _this;
  }

  HeaderMobile__createClass(HeaderMobile, [{
    key: "render",
    value: function render() {
      var responsive = this.props.responsive;
      return external__react__default.a.createElement("div", {
        className: "jsx-2636891243"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2636891243",
        css: [".mobileHead .navbar-brand{color:#fff;}", ".mobileHead .navbar-toggler{color:rgba(210,209,209,0.63);border-color:rgba(236,236,236,0.34);}", ".mobileHead .navbar-toggler{padding:0.25rem 0.75rem;font-size:1.25rem;line-height:1;background-color:#72737c;border:1px solid transparent;border-radius:0.25rem;}", ".mobileHead .navbar-toggler-icon{width:4em;height:2.5em;}", ".mobileHead .xxxnavbar-collapse{width:300px;height:1000px;z-index:100;top:75px;position:absolute;background:#313341;left:0px;color:#fff;}"]
      }), external__react__default.a.createElement("div", {
        style: {
          backgroundColor: "#313340",
          zIndex: "100",
          fontSize: "20px",
          paddingTop: "7px"
        },
        className: "jsx-2636891243" + " " + "mobileHead"
      }, external__react__default.a.createElement("div", {
        style: {
          width: "100%"
        },
        className: "jsx-2636891243"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3"
      }), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "5",
        style: {
          textAlign: "center"
        }
      }, external__react__default.a.createElement(Logo_Logo, {
        responsive: responsive
      })), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "4"
      }, external__react__default.a.createElement("div", {
        style: {
          paddingRight: '20px'
        },
        className: "jsx-2636891243" + " " + "d-flex align-items-center justify-content-end"
      }, external__react__default.a.createElement("div", {
        style: {
          marginRight: "25px"
        },
        className: "jsx-2636891243"
      }, external__react__default.a.createElement(Header_Cart, {
        cartSize: "40",
        responsive: responsive
      })), external__react__default.a.createElement(Header_Account, {
        responsive: responsive
      })))))));
    }
  }]);

  return HeaderMobile;
}(external__react_["Component"]);

var HeaderMobile_mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
}; //!this.state.collapsed


/* harmony default export */ var commons_HeaderMobile = (Object(external__react_redux_["connect"])(HeaderMobile_mapStateToProps, {})(HeaderMobile_HeaderMobile)); // (
//   <Collapse isOpen={!this.state.collapsed}  className="navbar-toggleable-md" navbar >
//               <Nav  className="ml-auto" navbar >
//                 <NavItem>
//                   <NavLink href="/components/">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                 </NavItem>
//               </Nav>
//           </Collapse>
// )
// EXTERNAL MODULE: external "react-burger-menu"
var external__react_burger_menu_ = __webpack_require__(24);
var external__react_burger_menu__default = /*#__PURE__*/__webpack_require__.n(external__react_burger_menu_);

// CONCATENATED MODULE: ./components/commons/MenuMobile/index.js
function MenuMobile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MenuMobile__typeof = function _typeof(obj) { return typeof obj; }; } else { MenuMobile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MenuMobile__typeof(obj); }

function MenuMobile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuMobile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuMobile__createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuMobile__defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuMobile__defineProperties(Constructor, staticProps); return Constructor; }

function MenuMobile__possibleConstructorReturn(self, call) { if (call && (MenuMobile__typeof(call) === "object" || typeof call === "function")) { return call; } return MenuMobile__assertThisInitialized(self); }

function MenuMobile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MenuMobile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MenuMobile_MenuMobile =
/*#__PURE__*/
function (_Component) {
  MenuMobile__inherits(MenuMobile, _Component);

  function MenuMobile(props) {
    var _this;

    MenuMobile__classCallCheck(this, MenuMobile);

    _this = MenuMobile__possibleConstructorReturn(this, (MenuMobile.__proto__ || Object.getPrototypeOf(MenuMobile)).call(this, props));
    Object.defineProperty(MenuMobile__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        router__default.a.push(obj.link);
      }
    });
    _this.state = {
      "items": [{
        name: "หน้าหลัก",
        link: "/"
      }, {
        name: "สินค้าทั้งหมด",
        link: "/all_products"
      }, {
        name: "เปิดจอง แด่..รัก",
        link: "/product/1"
      }, {
        name: "ชำระเงิน",
        link: "/order_lists"
      }, {
        name: "แจ้งโอนเงิน",
        link: "/tran_status"
      }],
      sel: "/"
    };
    return _this;
  }

  MenuMobile__createClass(MenuMobile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      var sideMenuOpen = this.props.sideMenuOpen; //let pathNow = '/';

      var lists = items.map(function (item, key) {
        return external__react__default.a.createElement("a", {
          key: key,
          className: "menu-item",
          href: "#",
          onClick: function onClick() {
            return _this2.handleClick(item);
          }
        }, item.name);
      });
      return external__react__default.a.createElement(external__react_burger_menu_["slide"], {
        isOpen: sideMenuOpen,
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container",
        style: {
          background: '#555'
        }
      }, lists);
    }
  }]);

  return MenuMobile;
}(external__react_["Component"]);

var MenuMobile_mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ var commons_MenuMobile = (Object(external__react_redux_["connect"])(MenuMobile_mapStateToProps, {})(MenuMobile_MenuMobile));
// CONCATENATED MODULE: ./components/commons/Layouts/index.js


function Layouts__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layouts__typeof = function _typeof(obj) { return typeof obj; }; } else { Layouts__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layouts__typeof(obj); }

function Layouts__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layouts__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layouts__createClass(Constructor, protoProps, staticProps) { if (protoProps) Layouts__defineProperties(Constructor.prototype, protoProps); if (staticProps) Layouts__defineProperties(Constructor, staticProps); return Constructor; }

function Layouts__possibleConstructorReturn(self, call) { if (call && (Layouts__typeof(call) === "object" || typeof call === "function")) { return call; } return Layouts__assertThisInitialized(self); }

function Layouts__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layouts__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import Responsive from 'react-responsive';








 // const Desktop = props => <Responsive {...props} minWidth={992}  />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;

var Layouts_MainLayout =
/*#__PURE__*/
function (_Component) {
  Layouts__inherits(MainLayout, _Component);

  function MainLayout() {
    var _this;

    Layouts__classCallCheck(this, MainLayout);

    _this = Layouts__possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call(this));
    _this.state = {
      sideMenuOpen: false
    };
    return _this;
  }

  Layouts__createClass(MainLayout, [{
    key: "render",
    value: function render() {
      //console.log('render Home')
      var _props = this.props,
          children = _props.children,
          responsive = _props.responsive;
      var sideMenuOpen = this.state.sideMenuOpen;
      return external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2006523510",
        css: [".bgHeader{color:rgba(255,255,255,0.75);background-color:#313340;}", ".mainFooter{border-top:1px solid #c6c8ca;background:#525d69;height:200px;}", ".bm-burger-button{width:".concat(responsive.phone ? '76px' : '36px', " !important;height:").concat(responsive.phone ? '75px' : '30px', " !important;}")],
        dynamic: [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']
      }), external__react__default.a.createElement(external__react_responsive_redux_["DesktopScreen"], null, external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainHeader bgHeader"
      }, external__react__default.a.createElement(Header, null)), external__react__default.a.createElement(external__react_sticky_["StickyContainer"], null, external__react__default.a.createElement(external__react_sticky_["Sticky"], null, function (_ref) {
        var style = _ref.style,
            distanceFromTop = _ref.distanceFromTop,
            isSticky = _ref.isSticky;
        return external__react__default.a.createElement(menu, {
          style: style,
          isSticky: isSticky
        });
      }), external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainContent"
      }, children), external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainFooter"
      }, external__react__default.a.createElement("h1", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "footer")))), external__react__default.a.createElement(external__react_responsive_redux_["MobileScreen"], {
        id: "outer-container"
      }, external__react__default.a.createElement("div", {
        style: {
          position: 'fixed',
          width: '100%',
          zIndex: '1',
          top: '1px'
        },
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, external__react__default.a.createElement(commons_HeaderMobile, null)), external__react__default.a.createElement(commons_MenuMobile, {
        className: "MobileSideMenu",
        sideMenuOpen: sideMenuOpen
      }), external__react__default.a.createElement("div", {
        id: "page-wrap",
        style: {
          marginTop: '59px'
        },
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainContent"
      }, children), external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainFooter"
      }, external__react__default.a.createElement("h1", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "footer"))), external__react__default.a.createElement(commons_StatusTag, {
        msg: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
        style: {
          right: '43%'
        }
      }));
    }
  }]);

  return MainLayout;
}(external__react_["Component"]);

var Layouts_mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
};

/* harmony default export */ var Layouts = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(Layouts_mapStateToProps)(Layouts_MainLayout));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next-cookies"
var external__next_cookies_ = __webpack_require__(20);
var external__next_cookies__default = /*#__PURE__*/__webpack_require__.n(external__next_cookies_);

// EXTERNAL MODULE: ./components/commons/Layouts/index.js + 10 modules
var Layouts = __webpack_require__(21);

// EXTERNAL MODULE: ./redux/actions/userAction.js
var userAction = __webpack_require__(19);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(2);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// EXTERNAL MODULE: external "react-web-tabs"
var external__react_web_tabs_ = __webpack_require__(46);
var external__react_web_tabs__default = /*#__PURE__*/__webpack_require__.n(external__react_web_tabs_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux-form"
var external__redux_form_ = __webpack_require__(12);
var external__redux_form__default = /*#__PURE__*/__webpack_require__.n(external__redux_form_);

// CONCATENATED MODULE: ./components/commons/forms/RenderHorizontalFields.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

 //import { Form,Input,TextArea,Dropdown,Label} from 'semantic-ui-react'


var RenderHorizontalFields_RenderTextField = function RenderTextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      custom = _objectWithoutProperties(_ref, ["input", "label", "meta"]);

  //console.log('input',input)
  //custom.change(custom.name,'aaaa')
  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
    row: true,
    className: "align-items-center"
  }, external__react__default.a.createElement(external__reactstrap_["Col"], {
    md: "3",
    className: "text-right"
  }, external__react__default.a.createElement(external__reactstrap_["Label"], {
    htmlFor: "".concat(custom.name)
  }, label)), external__react__default.a.createElement(external__reactstrap_["Col"], {
    xs: "12",
    md: "9"
  }, external__react__default.a.createElement(external__reactstrap_["InputGroup"], null, external__react__default.a.createElement(external__reactstrap_["Input"], _extends({
    invalid: touched && error !== undefined,
    type: "text",
    value: input.value
  }, input, custom, {
    placeholder: label,
    autoComplete: label
  })), custom.addonapp !== undefined ? custom.addonapp : ''), touched && error && external__react__default.a.createElement("div", {
    style: {
      marginTop: '0.25rem',
      fontSize: '80%',
      color: '#f86c6b'
    }
  }, error)));
};
var RenderHorizontalFields_RenderTextAreaField = function RenderTextAreaField(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      warning = _ref2$meta.warning,
      custom = _objectWithoutProperties(_ref2, ["input", "label", "meta"]);

  //console.log('placeholder',placeholder)
  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id
  }, label), external__react__default.a.createElement(external__reactstrap_["Input"], _extends({
    invalid: touched && error !== undefined,
    type: "textarea",
    value: input.value
  }, input, custom)), touched && error && external__react__default.a.createElement(external__reactstrap_["FormFeedback"], null, error));
};
var RenderHorizontalFields_RenderDropdownField = function RenderDropdownField(_ref3) {
  var input = _ref3.input,
      label = _ref3.label,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      warning = _ref3$meta.warning,
      custom = _objectWithoutProperties(_ref3, ["input", "label", "meta"]);

  var option = custom.option; //console.log('option',option,'value->',input.value)

  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id
  }, label), external__react__default.a.createElement(external__reactstrap_["Input"], _extends({
    type: "select",
    invalid: touched && error !== undefined
  }, input, custom, {
    value: input.value
  }), external__react__default.a.createElement("option", {
    value: ""
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01 ", label), option.map(function (i, k) {
    return external__react__default.a.createElement("option", {
      key: k,
      value: i.value
    }, i.text);
  })), touched && error && external__react__default.a.createElement(external__reactstrap_["FormFeedback"], null, error));
};
// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(25);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(9);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(47);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./components/MyAccount/ImageUpload.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 //import { Form,Image} from 'semantic-ui-react'
//import resizeImage from 'resize-image';



 //import blankImg from '../manageWriting/blank_img.png'

var ImageUpload_ImageUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageUpload, _Component);

  function ImageUpload(props) {
    var _this;

    _classCallCheck(this, ImageUpload);

    _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props)); //let image = '/static/images/avatars/avatar-new.jpg';

    var image = '/static/images/avatars/avatar-new.jpg';

    if (props.pathImg !== undefined) {
      image = props.pathImg;
    }

    _this.state = {
      file: '',
      imagePreviewUrl: image
    };
    return _this;
  }

  _createClass(ImageUpload, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.pathImg !== undefined) {
        this.setState({
          imagePreviewUrl: props.pathImg
        });
      }
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(e) {
      e.preventDefault(); // TODO: do something with -> this.state.file
      //console.log('handle uploading-', this.state.file);
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        //console.log('dataURL',reader.result)
        _this2.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
      this.props.setImg(file); // let reader = new FileReader();
      // let file = e.target.files[0];
      // reader.onloadend = () => {
      //   //console.log('dataURL',reader.result)
      //   this.setState({
      //     file: file,
      //     imagePreviewUrl: reader.result
      //   });
      //   var img = new Image();
      //   img.onload= () =>  {
      //     var data = resizeImage.resize(img, '80', '80',resizeImage.PNG);
      //     //console.log('af data',data);
      //     this.props.setImg(data)
      //   };
      //   img.src = reader.result; // local image url
      // }
      // reader.readAsDataURL(file)
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;
      return external__react__default.a.createElement("div", {
        className: "jsx-1171171530"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "1171171530",
        css: [".borderAvatar{border:2px solid #e6e6e6;padding:5px;width:150px;height:155px;border-radius:.5em;text-align:center;position:relative;}", ".img-avatar-big{margin:0px;max-width:100%;border-radius:50em;vertical-align:middle;border-style:none;border:1px solid #fff;}", ".borderAvatar .footIcon{position:absolute;color:#c7c7c7;bottom:3px;right:3px;}", ".borderAvatar .overlay{position:absolute;top:0;left:0;height:100%;width:100%;}"]
      }), external__react__default.a.createElement("div", {
        className: "jsx-1171171530" + " " + "borderAvatar float-right"
      }, external__react__default.a.createElement("img", {
        style: {
          height: '140px'
        },
        src: imagePreviewUrl,
        alt: "",
        className: "jsx-1171171530" + " " + "img-avatar-big"
      }), external__react__default.a.createElement(fa_["FaCamera"], {
        className: "footIcon",
        size: 25
      }), external__react__default.a.createElement("div", {
        className: "jsx-1171171530" + " " + "overlay"
      }, external__react__default.a.createElement(external__reactstrap_["Input"], {
        type: "file",
        style: {
          width: '100%',
          height: '100%',
          opacity: '0'
        },
        name: "imgFile",
        onChange: function onChange(e) {
          return _this3._handleImageChange(e);
        }
      }))));
    }
  }]);

  return ImageUpload;
}(external__react_["Component"]);

/* harmony default export */ var MyAccount_ImageUpload = (ImageUpload_ImageUpload);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(11);
var config__default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./components/MyAccount/MyAccountForm.js



function MyAccountForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyAccountForm__typeof = function _typeof(obj) { return typeof obj; }; } else { MyAccountForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyAccountForm__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function MyAccountForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyAccountForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyAccountForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) MyAccountForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) MyAccountForm__defineProperties(Constructor, staticProps); return Constructor; }

function MyAccountForm__possibleConstructorReturn(self, call) { if (call && (MyAccountForm__typeof(call) === "object" || typeof call === "function")) { return call; } return MyAccountForm__assertThisInitialized(self); }

function MyAccountForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MyAccountForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var validate = function validate(values) {
  //console.log('validate',values);
  var errors = {};

  if (!values.email) {
    errors.email = "email ไม่ถูกต้อง";
  }

  if (!values.password) {
    errors.password = "รหัสผ่านไม่ถูกต้อง";
  }

  return errors;
};

var MyAccountForm_MyAccountForm =
/*#__PURE__*/
function (_Component) {
  MyAccountForm__inherits(MyAccountForm, _Component);

  function MyAccountForm() {
    var _this;

    MyAccountForm__classCallCheck(this, MyAccountForm);

    _this = MyAccountForm__possibleConstructorReturn(this, (MyAccountForm.__proto__ || Object.getPrototypeOf(MyAccountForm)).call(this));
    Object.defineProperty(MyAccountForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(_value) {
          var updateUser, formData, res;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  //console.log(value)
                  updateUser = _this.props.updateUser;
                  _value.imgAvatarFile = _this.state.imgAvatarFile;
                  formData = new FormData();

                  _this.setState({
                    loading: true
                  }); // for(let k in value){
                  //   formData.append(k,value[k])
                  // }


                  _context.next = 6;
                  return updateUser(_value);

                case 6:
                  res = _context.sent;

                  if (res.status) {
                    //this.setState({showSecc:true})
                    _this.setState({
                      showSucc: true
                    });

                    setTimeout(function () {
                      return _this.setState({
                        showSucc: false
                      });
                    }, 1500);
                  } else {
                    _this.setState({
                      alertOpen: true,
                      alertMsg: res.msg.message ? res.msg.message : res.msg
                    });
                  }

                  _this.setState({
                    loading: false
                  });

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(MyAccountForm__assertThisInitialized(_this), "setImg", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(files) {
        //console.log(files)
        _this.setState({
          imgAvatarFile: files
        });
      }
    });
    _this.state = {
      loading: false,
      showSucc: false,
      alertMsg: '',
      alertOpen: false,
      imgAvatarFile: null
    };
    return _this;
  }

  MyAccountForm__createClass(MyAccountForm, [{
    key: "render",
    value: function render() {
      var _getConfig = config__default()(),
          API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST;

      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          userInfo = _props.userInfo;
      var _state = this.state,
          loading = _state.loading,
          showSucc = _state.showSucc,
          alertMsg = _state.alertMsg,
          alertOpen = _state.alertOpen;
      var imgAvatar = userInfo.avatar_path === '' ? '/static/images/avatars/avatar-new.jpg' : "".concat(API_URL_HOST, "/images/avatars/").concat(userInfo.avatar_path); //
      //const imgAvatar = '/static/images/avatars/avatar-new.jpg';
      //console.log('userInfo',userInfo)
      // const verifiedEmail = (userInfo.verify_email === 1) ?
      //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="success" >verified</Badge>):
      //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="warning" >not verified</Badge>)

      var verifiedEmail = userInfo.verify_email === 1 ? external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "append"
      }, external__react__default.a.createElement(external__reactstrap_["InputGroupText"], {
        style: {
          backgroundColor: '#8ee28e',
          border: '1px solid #6a757e',
          zIndex: '1',
          color: '#565863'
        }
      }, "verified")) : external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "append"
      }, external__react__default.a.createElement(external__reactstrap_["InputGroupText"], {
        style: {
          backgroundColor: '#ffc000',
          border: '1px solid #6a757e',
          zIndex: '1',
          color: '#565863'
        }
      }, "not verified"));
      return external__react__default.a.createElement(external__reactstrap_["Container"], {
        fluid: true,
        style: {
          marginTop: '20px'
        }
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2457941379",
        css: [".alert-success{color:#155724 !important;background-color:#effbf2 !important;border-color:#4da962 !important;}"]
      }), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "3",
        sm: "3",
        lg: "3"
      }, external__react__default.a.createElement(MyAccount_ImageUpload, {
        pathImg: imgAvatar,
        setImg: this.setImg
      })), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "9",
        sm: "9",
        lg: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: ""
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Form"], {
        action: "",
        method: "post",
        className: "form-horizontal"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        id: "email",
        name: "email",
        component: RenderHorizontalFields_RenderTextField,
        label: "Email",
        addonapp: verifiedEmail
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        id: "username",
        name: "username",
        component: RenderHorizontalFields_RenderTextField,
        label: "Username"
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        id: "tel",
        name: "tel",
        component: RenderHorizontalFields_RenderTextField,
        label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"
      })))), external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: ""
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12"
      }, external__react__default.a.createElement(external__reactstrap_["Alert"], {
        isOpen: alertOpen,
        color: "danger"
      }, alertMsg))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3"
      }, " "), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        style: {
          width: '90px'
        },
        color: "info",
        onClick: handleSubmit(this.onSubmit),
        disabled: loading,
        className: "float-right"
      }, external__react__default.a.createElement(external__react_spinners_["ClipLoader"], {
        sizeUnit: "px",
        size: 16,
        color: '#fff',
        loading: loading
      }), !loading && 'บันทึก'))))))), external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        "in": showSucc,
        style: {
          position: 'absolute',
          top: '0',
          right: '0',
          margin: '10px',
          zIndex: '2'
        }
      }, external__react__default.a.createElement(external__reactstrap_["Alert"], {
        color: "success",
        className: "d-flex align-items-center",
        style: {
          width: '200px'
        }
      }, external__react__default.a.createElement(fa_["FaCheckCircle"], {
        size: 25,
        className: "mr-2"
      }), "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08")));
    }
  }]);

  return MyAccountForm;
}(external__react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.auth,
    initialValues: state.auth
  };
};

/* harmony default export */ var MyAccount_MyAccountForm = (Object(external__react_redux_["connect"])(mapStateToProps, {
  updateUser: userAction["d" /* updateUser */]
})(Object(external__redux_form_["reduxForm"])({
  form: 'formMyAccount',
  enableReinitialize: true,
  validate: validate
})(MyAccountForm_MyAccountForm)));
// CONCATENATED MODULE: ./components/MyAccount/PasswordForm.js



function PasswordForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PasswordForm__typeof = function _typeof(obj) { return typeof obj; }; } else { PasswordForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PasswordForm__typeof(obj); }

function PasswordForm__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function PasswordForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PasswordForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PasswordForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) PasswordForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) PasswordForm__defineProperties(Constructor, staticProps); return Constructor; }

function PasswordForm__possibleConstructorReturn(self, call) { if (call && (PasswordForm__typeof(call) === "object" || typeof call === "function")) { return call; } return PasswordForm__assertThisInitialized(self); }

function PasswordForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function PasswordForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var PasswordForm_validate = function validate(values) {
  //console.log('validate',values);
  var errors = {};

  if (!values.old_password) {
    errors.old_password = "รหัสผ่านไม่ถูกต้อง";
  }

  if (!values.new_password) {
    errors.new_password = "ยืนยันรหัสผ่าน";
  } else if (values.new_password !== values.re_new_password) {
    errors.re_password = "รหัสผ่านไม่ตรง";
  }

  return errors;
};

var PasswordForm_PasswordForm =
/*#__PURE__*/
function (_Component) {
  PasswordForm__inherits(PasswordForm, _Component);

  function PasswordForm() {
    var _this;

    PasswordForm__classCallCheck(this, PasswordForm);

    _this = PasswordForm__possibleConstructorReturn(this, (PasswordForm.__proto__ || Object.getPrototypeOf(PasswordForm)).call(this));
    Object.defineProperty(PasswordForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = PasswordForm__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(_value) {
          var _this$props, updatePassword, change, res;

          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log(_value);
                  _this$props = _this.props, updatePassword = _this$props.updatePassword, change = _this$props.change;

                  _this.setState({
                    loading: true
                  });

                  _context.next = 5;
                  return updatePassword(_value);

                case 5:
                  res = _context.sent;

                  if (res.status) {
                    //this.setState({showSecc:true})
                    _this.setState({
                      showSucc: true,
                      alertOpen: false,
                      alertMsg: ''
                    });

                    setTimeout(function () {
                      return _this.setState({
                        showSucc: false
                      });
                    }, 1500);
                  } else {
                    console.log('res', res);

                    _this.setState({
                      alertOpen: true,
                      alertMsg: res.msg
                    });
                  }

                  _this.setState({
                    loading: false
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      loading: false,
      showSucc: false,
      alertMsg: '',
      alertOpen: false
    };
    return _this;
  }

  PasswordForm__createClass(PasswordForm, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          userInfo = _props.userInfo;
      var _state = this.state,
          loading = _state.loading,
          showSucc = _state.showSucc,
          alertMsg = _state.alertMsg,
          alertOpen = _state.alertOpen; //console.log('userInfo',userInfo)
      // const verifiedEmail = (userInfo.verify_email === 1) ?
      //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="success" >verified</Badge>):
      //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="warning" >not verified</Badge>)

      var verifiedEmail = userInfo.verify_email === 1 ? external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "append"
      }, external__react__default.a.createElement(external__reactstrap_["InputGroupText"], {
        style: {
          backgroundColor: '#8ee28e',
          border: '1px solid #6a757e',
          zIndex: '1',
          color: '#565863'
        }
      }, "verified")) : external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "append"
      }, external__react__default.a.createElement(external__reactstrap_["InputGroupText"], {
        style: {
          backgroundColor: '#ffc000',
          border: '1px solid #6a757e',
          zIndex: '1',
          color: '#565863'
        }
      }, "not verified"));
      return external__react__default.a.createElement(external__reactstrap_["Container"], {
        style: {
          marginTop: '20px'
        }
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2336772865",
        css: [".alert-success{color:#155724 !important;background-color:#effbf2 !important;border-color:#4da962 !important;}"]
      }), external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: "justify-content-md-center"
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Form"], {
        action: "",
        method: "post",
        className: "form-horizontal"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        type: "password",
        id: "old_password",
        name: "old_password",
        component: RenderHorizontalFields_RenderTextField,
        label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21"
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        type: "password",
        id: "new_password",
        name: "new_password",
        component: RenderHorizontalFields_RenderTextField,
        label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48"
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        type: "password",
        id: "re_new_password",
        name: "re_new_password",
        component: RenderHorizontalFields_RenderTextField,
        label: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A"
      })))), external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: "justify-content-md-center row"
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12"
      }, external__react__default.a.createElement(external__reactstrap_["Alert"], {
        isOpen: alertOpen,
        color: "danger"
      }, alertMsg))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3"
      }, " "), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        style: {
          width: '90px'
        },
        color: "info",
        onClick: handleSubmit(this.onSubmit),
        disabled: loading
      }, external__react__default.a.createElement(external__react_spinners_["ClipLoader"], {
        sizeUnit: "px",
        size: 16,
        color: '#fff',
        loading: loading
      }), !loading && 'เปลี่ยน'))))), external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        "in": showSucc,
        style: {
          position: 'absolute',
          top: '0',
          right: '0',
          margin: '10px',
          zIndex: '2'
        }
      }, external__react__default.a.createElement(external__reactstrap_["Alert"], {
        color: "success",
        className: "d-flex align-items-center",
        style: {
          width: '200px'
        }
      }, external__react__default.a.createElement(fa_["FaCheckCircle"], {
        size: 25,
        className: "mr-2"
      }), "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08")));
    }
  }]);

  return PasswordForm;
}(external__react_["Component"]);

var PasswordForm_mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.auth,
    initialValues: {}
  };
};

/* harmony default export */ var MyAccount_PasswordForm = (Object(external__react_redux_["connect"])(PasswordForm_mapStateToProps, {
  updatePassword: userAction["c" /* updatePassword */]
})(Object(external__redux_form_["reduxForm"])({
  form: 'formPassword',
  enableReinitialize: true,
  validate: PasswordForm_validate
})(PasswordForm_PasswordForm)));
// EXTERNAL MODULE: external "react-select"
var external__react_select_ = __webpack_require__(48);
var external__react_select__default = /*#__PURE__*/__webpack_require__.n(external__react_select_);

// EXTERNAL MODULE: external "react-widgets"
var external__react_widgets_ = __webpack_require__(49);
var external__react_widgets__default = /*#__PURE__*/__webpack_require__.n(external__react_widgets_);

// CONCATENATED MODULE: ./components/commons/forms/RenderFields.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RenderFields__extends() { RenderFields__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RenderFields__extends.apply(this, arguments); }

function RenderFields__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

 //import { Form,Input,TextArea,Dropdown,Label} from 'semantic-ui-react'




var RenderFields_RenderTextField = function RenderTextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      custom = RenderFields__objectWithoutProperties(_ref, ["input", "label", "meta"]);

  //console.log('input',input)
  //custom.change(custom.name,'aaaa')
  //console.log('fixcss',custom.fixcss)
  var css = custom.fixcss !== undefined ? {
    width: '100%',
    textAlign: 'left',
    color: '#717070',
    fontSize: '14px'
  } : {};
  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id,
    style: css
  }, label), external__react__default.a.createElement(external__reactstrap_["Input"], RenderFields__extends({
    invalid: touched && error !== undefined,
    type: "text",
    value: input.value
  }, input, custom)), touched && error && external__react__default.a.createElement(external__reactstrap_["FormFeedback"], null, error));
};
var RenderFields_RenderTextAreaField = function RenderTextAreaField(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      warning = _ref2$meta.warning,
      custom = RenderFields__objectWithoutProperties(_ref2, ["input", "label", "meta"]);

  //console.log('placeholder',placeholder)
  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id
  }, label), external__react__default.a.createElement(external__reactstrap_["Input"], RenderFields__extends({
    invalid: touched && error !== undefined,
    type: "textarea",
    value: input.value
  }, input, custom)), touched && error && external__react__default.a.createElement(external__reactstrap_["FormFeedback"], null, error));
};
var RenderFields_RenderDropdownField = function RenderDropdownField(_ref3) {
  var input = _ref3.input,
      label = _ref3.label,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      warning = _ref3$meta.warning,
      custom = RenderFields__objectWithoutProperties(_ref3, ["input", "label", "meta"]);

  var optionData = custom.option; //console.log('option',option,'value->',input.value)
  //console.log('optionData',optionData)

  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id
  }, label), external__react__default.a.createElement(external__reactstrap_["Input"], RenderFields__extends({
    type: "select",
    invalid: touched && error !== undefined
  }, input, custom, {
    value: input.value
  }), external__react__default.a.createElement("option", {
    value: ""
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01 ", label), optionData && optionData.map(function (i, k) {
    return external__react__default.a.createElement("option", {
      key: k,
      value: i.value
    }, i.text);
  })), touched && error && external__react__default.a.createElement(external__reactstrap_["FormFeedback"], null, error));
};
var RenderFields_RenderSelectField = function RenderSelectField(_ref4) {
  var input = _ref4.input,
      label = _ref4.label,
      _ref4$meta = _ref4.meta,
      touched = _ref4$meta.touched,
      error = _ref4$meta.error,
      warning = _ref4$meta.warning,
      custom = RenderFields__objectWithoutProperties(_ref4, ["input", "label", "meta"]);

  var optionData = custom.options; // console.log('option',custom.options)
  // const optionData = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ];
  // console.log('optionData',optionData)

  console.log('input', input.value); //input.inputValue = input.value

  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    "for": custom.id
  }, label), external__react__default.a.createElement(external__react_select__default.a, {
    value: input.value,
    inputValue: '57000',
    onBlur: function onBlur() {
      // console.log('onblur',input)
      // let val = input.value;
      // if(typeof val === 'string'){
      //   val = {label:input.value,value:input.value}
      // }else{
      //   val = input.value
      // }
      input.onBlur(input.value); //custom.handleBlur(val)
    },
    options: optionData,
    simpleValue: true,
    onChange: function onChange(obj) {
      if (obj.text) {
        custom.handleChangeOption(_objectSpread({}, obj, {
          label: obj.text
        }));
      } //input.onChange(obj)

    },
    onInputChange: function onInputChange(obj) {
      console.log('onInputChange ', obj); //input.inputValue = 'aa'

      custom.onSearchChange(obj);
    }
  }));
};
var RenderFields_RenderDropdownLists = function RenderDropdownLists(_ref5) {
  var input = _ref5.input,
      label = _ref5.label,
      _ref5$meta = _ref5.meta,
      touched = _ref5$meta.touched,
      error = _ref5$meta.error,
      warning = _ref5$meta.warning,
      custom = RenderFields__objectWithoutProperties(_ref5, ["input", "label", "meta"]);

  var optionData = custom.options; //console.log('option',option,'value->',input.value)
  //console.log('optionData',optionData)
  // const optionData = [
  //   '57000','56000','54000'
  // ]

  var errClass = touched && error ? 'err-rw-widget-container' : '';
  return external__react__default.a.createElement(external__reactstrap_["FormGroup"], null, external__react__default.a.createElement(external__reactstrap_["Label"], {
    style: {
      width: '100%',
      textAlign: 'left',
      color: '#717070',
      fontSize: '14px'
    }
  }, label), external__react__default.a.createElement(external__react_widgets_["DropdownList"], {
    filter: true,
    containerClassName: errClass,
    data: optionData,
    value: input.value,
    allowCreate: "onFilter",
    onChange: function onChange(value) {
      console.log('onChange'); //input.onChange(value)

      custom.handleChangeOption(value);
    },
    onSearch: function onSearch(term) {
      //console.log('onSearch term',term)
      custom.onSearchChange(term);
    },
    itemComponent: function itemComponent(_ref6) {
      var item = _ref6.item;
      //console.log('item',item)
      return external__react__default.a.createElement("span", null, item.label, " ");
    },
    textField: function textField(item) {
      //console.log('textField',item)
      return typeof item === 'string' ? item : item.text;
    },
    placeholder: custom.placeholder
  }), external__react__default.a.createElement(external__reactstrap_["FormFeedback"], {
    valid: true
  }, 'xxxx'));
}; // (
//   <Select
//         value={input.value}
//         inputValue={input.value}
//         defaultInputValue={input.value}
//         autoFocus
//         options={optionData}
//         onInputChange={(obj)=>{
//           console.log('onInputChange ',obj)
//           custom.onSearchChange(obj)
//         }}
//         onChange={(obj) => {
//           console.log('onChange obj',obj)
//           //input.onChange(obj.text)
//           //input.value = obj.text
//           custom.handleChangeOption(obj.text)
//         }}
//       />
// )
// (
//   <Select
//         value={input.value}
//         onChange={input.onChange}
//         onBlur={() => input.onBlur(input.value)}
//         options={optionData}
//         simpleValue
//       />
// )
// CONCATENATED MODULE: ./components/commons/forms/AddrForm.js


function AddrForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddrForm__typeof = function _typeof(obj) { return typeof obj; }; } else { AddrForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddrForm__typeof(obj); }

function AddrForm__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { AddrForm__defineProperty(target, key, source[key]); }); } return target; }

function AddrForm__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AddrForm__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function AddrForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddrForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddrForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) AddrForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) AddrForm__defineProperties(Constructor, staticProps); return Constructor; }

function AddrForm__possibleConstructorReturn(self, call) { if (call && (AddrForm__typeof(call) === "object" || typeof call === "function")) { return call; } return AddrForm__assertThisInitialized(self); }

function AddrForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AddrForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import { Grid,Header,Form,Button } from 'semantic-ui-react'


 //import AddrField from './AddrField' 




var datas = __webpack_require__(50);

var JQL = __webpack_require__(51);

var AddrForm_validate = function validate(values) {
  //console.log('validate',values);
  var errors = {}; //--addr

  if (!values.postcode) {
    errors.postcode = "กรณุากรอก รหัสไปรษณีย์";
  }

  if (!values.province) {
    errors.province = "กรณุากรอก จังหวัด";
  }

  if (!values.district) {
    errors.district = "กรณุากรอก อำเภอ";
  }

  if (!values.sub_district) {
    errors.sub_district = "กรณุากรอก ตำบล";
  }

  if (!values.addr) {
    errors.addr = "กรณุากรอก ที่อยู่";
  }

  return errors;
};

var AddrForm_AddrForm =
/*#__PURE__*/
function (_Component) {
  AddrForm__inherits(AddrForm, _Component);

  function AddrForm(props) {
    var _this;

    AddrForm__classCallCheck(this, AddrForm);

    _this = AddrForm__possibleConstructorReturn(this, (AddrForm.__proto__ || Object.getPrototypeOf(AddrForm)).call(this, props));
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = AddrForm__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(_value) {
          var _this$props, updateAddress, onCloseDialog, userInf, addObj, res;

          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  //console.log('value',value)
                  _this.setState({
                    saving: true,
                    alertOpen: false,
                    alertMsg: ''
                  });

                  _this$props = _this.props, updateAddress = _this$props.updateAddress, onCloseDialog = _this$props.onCloseDialog, userInf = _this$props.userInf;
                  _value.user_id = userInf.id;
                  addObj = typeof _value.postcode === 'string' ? _value : AddrForm__objectSpread({}, _value, {
                    postcode: _value.postcode.text,
                    sub_district: _value.sub_district.text,
                    district: _value.district.text,
                    province: _value.province.text
                  });
                  _context.next = 6;
                  return updateAddress(addObj);

                case 6:
                  res = _context.sent;

                  if (res.status) {
                    onCloseDialog();
                  } else {
                    _this.setState({
                      alertOpen: true,
                      alertMsg: res.error
                    });
                  }

                  _this.setState({
                    saving: false
                  });

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "preData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var expanded = [];
        datas.forEach(function (provinceEntry) {
          var province = provinceEntry[0];
          var amphurList = provinceEntry[1];
          amphurList.forEach(function (amphurEntry) {
            var amphur = amphurEntry[0];
            var districtList = amphurEntry[1];
            districtList.forEach(function (districtEntry) {
              var district = districtEntry[0];
              var zipCodeList = districtEntry[1];
              zipCodeList.forEach(function (zipCode) {
                expanded.push({
                  d: district,
                  a: amphur,
                  p: province,
                  z: zipCode
                });
              });
            });
          });
        }); //console.log('all data',expanded);

        return expanded;
      }
    });
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "searchAddr", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(type, searchStr) {
        var res = []; // let searchStr = '57000'
        // let type = 'z';

        try {
          res = _this.state.db.select('*').where(type).match("^".concat(searchStr)).orderBy(type).fetch();
        } catch (e) {
          return [];
        } //console.log('res',res)


        var mapZip = res.filter(function (item, i) {
          return i < 500;
        }).map(function (obj, key) {
          var txt = obj.d + ' > ' + obj.a + ' > ' + obj.p + ' > ' + obj.z;
          var valueTxt = obj.d + '_' + obj.a + '_' + obj.p + '_' + obj.z; //const resTxt = txt.replace(reg, '<b>'+searchQuery+'</b>');

          return {
            key: key,
            text: obj[type],
            value: valueTxt,
            label: txt //return obj[type]

          };
        });
        var optName = '';

        switch (type) {
          case 'd':
            optName = 'optionSubDistrict';
            break;

          case 'a':
            optName = 'optionDistrict';
            break;

          case 'p':
            optName = 'optionProvince';
            break;

          case 'z':
            optName = 'optionZipcode';
            break;

          default:
            break;
        }

        _this.setState(AddrForm__defineProperty({}, optName, mapZip)); //return possibles

      }
    });
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "handleChangeOption", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(selObj) {
        //console.log('===>handleChangeOption selObj',selObj);
        var change = _this.props.change; //change('postCode',selObj)
        //change('postCode',selObj)

        var arrAddr = selObj.value.split('_'); // console.log('arrAddr',arrAddr)

        _this.searchAddr('d', arrAddr[0]);

        _this.searchAddr('a', arrAddr[1]);

        _this.searchAddr('p', arrAddr[2]);

        _this.searchAddr('z', arrAddr[3]);

        change('sub_district', AddrForm__objectSpread({}, selObj, {
          text: arrAddr[0],
          label: arrAddr[0]
        }));
        change('district', AddrForm__objectSpread({}, selObj, {
          text: arrAddr[1],
          label: arrAddr[1]
        }));
        change('province', AddrForm__objectSpread({}, selObj, {
          text: arrAddr[2],
          label: arrAddr[2]
        }));
        change('postcode', AddrForm__objectSpread({}, selObj, {
          text: arrAddr[3],
          label: arrAddr[3]
        }));
        var textAdd = 'ตำบล' + arrAddr[0] + ' อำเภอ' + arrAddr[1] + ' จังหวัด' + arrAddr[2] + ' ' + arrAddr[3];

        _this.setState({
          zipCodeValue: textAdd
        });
      }
    });
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "handleSearchChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(type) {
        return function (searchQuery) {
          //console.log('handleSearchChange->',type,searchQuery)
          //this.props.change('postCode',searchQuery)
          if (searchQuery.length > 1) {
            _this.searchAddr(type, searchQuery);
          }
        };
      }
    });
    Object.defineProperty(AddrForm__assertThisInitialized(_this), "showFullAddr", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          showFullAddr: true
        });
      }
    });
    _this.state = {
      saving: false,
      ptionZipcode: [],
      optionSubDistrict: [],
      optionDistrict: [],
      optionProvince: [],
      showFullAddr: false,
      zipCodeValue: "",
      db: '',
      alertOpen: false,
      alertMsg: ''
    };
    return _this;
  }

  AddrForm__createClass(AddrForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('componentDidMount')
      var initialValues = this.props.initialValues;
      var preData = this.preData();
      var DB = new JQL(preData);
      this.setState({
        preData: preData,
        db: DB
      }); //console.log('componentDidMount')
      //this.props.change('postCode','ดอยลาน_เมืองเชียงราย_เชียงราย_57000')

      var inital = initialValues; //check initail update
      //console.log('inital',inital);

      if (inital !== undefined && inital.postcode !== undefined) {
        var value = inital.sub_district + '_' + inital.district + '_' + inital.province + '_' + inital.postcode;
        var content = inital.sub_district + ' > ' + inital.district + ' > ' + inital.province + ' > ' + inital.postcode; //postCode

        var text = inital.postcode;
        this.setState({
          optionZipcode: [{
            key: 0,
            text: text,
            value: value,
            label: content
          }]
        });
        this.props.change('postcode', inital.postcode); //sub_district

        text = inital.sub_district;
        this.setState({
          optionSubDistrict: [{
            key: 0,
            text: text,
            value: value,
            label: content
          }]
        });
        this.props.change('sub_district', inital.sub_district); //district

        text = inital.district;
        this.setState({
          optionDistrict: [{
            key: 0,
            text: text,
            value: value,
            label: content
          }]
        });
        this.props.change('district', inital.district); //province

        text = inital.province;
        this.setState({
          optionProvince: [{
            key: 0,
            text: text,
            value: value,
            label: content
          }]
        });
        this.props.change('province', inital.province);
        this.props.change('addr', inital.addr);
      } //--

    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        row_devide: {
          paddingTop: '0px',
          paddingBottom: '0px'
        }
      };
      var _state = this.state,
          optionZipcode = _state.optionZipcode,
          optionSubDistrict = _state.optionSubDistrict,
          optionDistrict = _state.optionDistrict,
          optionProvince = _state.optionProvince,
          saving = _state.saving,
          alertOpen = _state.alertOpen,
          alertMsg = _state.alertMsg; //console.log('optionSubDistrict',optionSubDistrict)

      var _props = this.props,
          onCloseDialog = _props.onCloseDialog,
          handleSubmit = _props.handleSubmit,
          headTitle = _props.headTitle,
          pristine = _props.pristine,
          submitting = _props.submitting; //console.log('userInf',userInf)
      //console.log('optionZipcode',optionZipcode);

      var headTitleTxt = headTitle !== undefined ? external__react__default.a.createElement("div", {
        style: {
          textAlign: 'right'
        }
      }, headTitle) : 'เพิ่มที่อยู่';
      return external__react__default.a.createElement("div", {
        style: {
          width: '99%'
        }
      }, external__react__default.a.createElement(external__reactstrap_["Container"], null, external__react__default.a.createElement(external__reactstrap_["Form"], null, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 12,
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: style.row
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        name: "addr",
        component: RenderFields_RenderTextField,
        label: 'ที่อยู่',
        placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48",
        fixcss: "set",
        style: {
          textAlign: 'right'
        }
      }))))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 12,
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: style.row
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        name: "postcode",
        component: RenderFields_RenderDropdownLists,
        label: 'รหัสไปรษณีย์',
        options: optionZipcode,
        placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35\u0E22\u0E4C",
        handleChangeOption: this.handleChangeOption,
        onSearchChange: this.handleSearchChange('z')
      }))))), true && external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: style.row
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12",
        className: "text-right"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        name: "sub_district",
        component: RenderFields_RenderDropdownLists,
        label: 'ตำบล',
        options: optionSubDistrict,
        placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E15\u0E33\u0E1A\u0E25",
        handleChangeOption: this.handleChangeOption,
        onSearchChange: this.handleSearchChange('d')
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: style.row
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12",
        className: "text-right"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        name: "district",
        component: RenderFields_RenderDropdownLists,
        label: 'อำเภอ',
        options: optionDistrict,
        placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E2D\u0E33\u0E40\u0E20\u0E2D",
        handleChangeOption: this.handleChangeOption,
        onSearchChange: this.handleSearchChange('a')
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], {
        style: style.row
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "12",
        width: 16,
        className: "text-right"
      }, external__react__default.a.createElement(external__redux_form_["Field"], {
        name: "province",
        component: RenderFields_RenderDropdownLists,
        label: 'จังหวัด',
        options: optionProvince,
        placeholder: "\u0E01\u0E23\u0E2D\u0E01 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",
        handleChangeOption: this.handleChangeOption,
        onSearchChange: this.handleSearchChange('p')
      })))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 12
      }, external__react__default.a.createElement(external__reactstrap_["Alert"], {
        isOpen: alertOpen,
        color: "danger"
      }, alertMsg))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: 12,
        style: {
          textAlign: 'right',
          paddingTop: '20px'
        }
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        onClick: handleSubmit(this.onSubmit),
        color: "success",
        className: "mr-2",
        disabled: pristine || saving
      }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"), external__react__default.a.createElement(external__reactstrap_["Button"], {
        onClick: onCloseDialog
      }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"))))));
    }
  }]);

  return AddrForm;
}(external__react_["Component"]);

var AddrForm_mapStateToProps = function mapStateToProps(state) {
  return {
    userInf: state.auth,
    initialValues: state.auth.address !== null ? state.auth.address : {}
  };
};

/* harmony default export */ var forms_AddrForm = (Object(external__react_redux_["connect"])(AddrForm_mapStateToProps, {
  change: external__redux_form_["change"],
  updateAddress: userAction["b" /* updateAddress */]
})(Object(external__redux_form_["reduxForm"])({
  form: 'addrForm',
  enableReinitialize: true,
  validate: AddrForm_validate
})(AddrForm_AddrForm))); // (
//   initialValues:{
//     sub_district:'ดอยลาน',
//     district:'เมืองเชียงราย',
//     province:'เชียงราย',
//     postCode:"57000",
//     addr:"xxxx"
//   }
// )
// CONCATENATED MODULE: ./components/MyAccount/MyAddressForm.js


function MyAddressForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyAddressForm__typeof = function _typeof(obj) { return typeof obj; }; } else { MyAddressForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyAddressForm__typeof(obj); }

function MyAddressForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyAddressForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyAddressForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) MyAddressForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) MyAddressForm__defineProperties(Constructor, staticProps); return Constructor; }

function MyAddressForm__possibleConstructorReturn(self, call) { if (call && (MyAddressForm__typeof(call) === "object" || typeof call === "function")) { return call; } return MyAddressForm__assertThisInitialized(self); }

function MyAddressForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MyAddressForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MyAddressForm_MyAddressForm =
/*#__PURE__*/
function (_Component) {
  MyAddressForm__inherits(MyAddressForm, _Component);

  function MyAddressForm() {
    var _this;

    MyAddressForm__classCallCheck(this, MyAddressForm);

    _this = MyAddressForm__possibleConstructorReturn(this, (MyAddressForm.__proto__ || Object.getPrototypeOf(MyAddressForm)).call(this));
    Object.defineProperty(MyAddressForm__assertThisInitialized(_this), "showDialogAddr", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dialogAddr: true
        });
      }
    });
    Object.defineProperty(MyAddressForm__assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dialogAddr: !_this.state.dialogAddr
        });
      }
    });
    _this.state = {
      dialogAddr: false
    };
    return _this;
  }

  MyAddressForm__createClass(MyAddressForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var address = this.props.userInfo.address;
      var dialogAddr = this.state.dialogAddr;
      address = address ? address : {}; //console.log('address',address)

      return external__react__default.a.createElement(external__reactstrap_["Container"], {
        style: {
          marginTop: '20px'
        }
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2336772865",
        css: [".alert-success{color:#155724 !important;background-color:#effbf2 !important;border-color:#4da962 !important;}"]
      }), external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: "justify-content-md-center"
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Form"], {
        action: "",
        method: "post",
        className: "form-horizontal"
      }, external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
        row: true
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3",
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Label"], {
        htmlFor: ""
      }, "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, address.addr !== undefined ? address.addr : '-')), external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
        row: true
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3",
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Label"], {
        htmlFor: ""
      }, "\u0E15\u0E33\u0E1A\u0E25")), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, address.sub_district !== undefined ? address.sub_district : '-')), external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
        row: true
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3",
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Label"], {
        htmlFor: ""
      }, "\u0E2D\u0E33\u0E40\u0E20\u0E2D")), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, address.district !== undefined ? address.district : '-')), external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
        row: true
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3",
        className: "text-right"
      }, external__react__default.a.createElement(external__reactstrap_["Label"], {
        htmlFor: ""
      }, "\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E4C\u0E13\u0E35")), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, address.postcode !== undefined ? address.postcode : '-')), external__react__default.a.createElement(external__reactstrap_["FormGroup"], {
        row: true
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "3",
        className: "text-right"
      }), external__react__default.a.createElement(external__reactstrap_["Col"], {
        xs: "12",
        md: "9"
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        style: {
          width: '90px'
        },
        color: "info",
        onClick: function onClick() {
          return _this2.showDialogAddr();
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")))))), external__react__default.a.createElement(external__reactstrap_["Modal"], {
        isOpen: dialogAddr,
        toggle: function toggle() {
          return _this2.toggle();
        }
      }, external__react__default.a.createElement(external__reactstrap_["ModalHeader"], {
        toggle: function toggle() {
          return _this2.toggle();
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48"), external__react__default.a.createElement(external__reactstrap_["ModalBody"], null, external__react__default.a.createElement(forms_AddrForm, {
        onCloseDialog: this.toggle
      }))));
    }
  }]);

  return MyAddressForm;
}(external__react_["Component"]);

var MyAddressForm_mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.auth
  };
};

/* harmony default export */ var MyAccount_MyAddressForm = (Object(external__react_redux_["connect"])(MyAddressForm_mapStateToProps, {})(MyAddressForm_MyAddressForm));
// CONCATENATED MODULE: ./components/MyAccount/index.js


function MyAccount__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyAccount__typeof = function _typeof(obj) { return typeof obj; }; } else { MyAccount__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyAccount__typeof(obj); }

function MyAccount__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyAccount__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyAccount__createClass(Constructor, protoProps, staticProps) { if (protoProps) MyAccount__defineProperties(Constructor.prototype, protoProps); if (staticProps) MyAccount__defineProperties(Constructor, staticProps); return Constructor; }

function MyAccount__possibleConstructorReturn(self, call) { if (call && (MyAccount__typeof(call) === "object" || typeof call === "function")) { return call; } return MyAccount__assertThisInitialized(self); }

function MyAccount__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyAccount__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 //import 'react-web-tabs/dist/react-web-tabs.css';





var MyAccount_MyAccount =
/*#__PURE__*/
function (_Component) {
  MyAccount__inherits(MyAccount, _Component);

  function MyAccount() {
    MyAccount__classCallCheck(this, MyAccount);

    return MyAccount__possibleConstructorReturn(this, (MyAccount.__proto__ || Object.getPrototypeOf(MyAccount)).apply(this, arguments));
  }

  MyAccount__createClass(MyAccount, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__reactstrap_["Container"], {
        fluid: true,
        style: {
          marginTop: '20px'
        }
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "3412027979",
        css: [".rwt__tab[aria-selected=\"true\"]{background:#f3f3f3;}", ".rwt__tabpanel{width:100%;font-size:14px;}"]
      }), external__react__default.a.createElement("h3", {
        className: "jsx-3412027979" + " " + "text-center"
      }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35"), external__react__default.a.createElement(external__reactstrap_["Card"], null, external__react__default.a.createElement(external__reactstrap_["CardBody"], null, external__react__default.a.createElement(external__react_web_tabs_["Tabs"], {
        defaultTab: "vertical-tab-one",
        vertical: true
      }, external__react__default.a.createElement(external__react_web_tabs_["TabList"], null, external__react__default.a.createElement(external__react_web_tabs_["Tab"], {
        tabFor: "vertical-tab-one"
      }, "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"), external__react__default.a.createElement(external__react_web_tabs_["Tab"], {
        tabFor: "vertical-tab-two"
      }, "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"), external__react__default.a.createElement(external__react_web_tabs_["Tab"], {
        tabFor: "vertical-tab-three"
      }, "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")), external__react__default.a.createElement(external__react_web_tabs_["TabPanel"], {
        tabId: "vertical-tab-one"
      }, external__react__default.a.createElement(MyAccount_MyAccountForm, null)), external__react__default.a.createElement(external__react_web_tabs_["TabPanel"], {
        tabId: "vertical-tab-two"
      }, external__react__default.a.createElement(MyAccount_PasswordForm, null)), external__react__default.a.createElement(external__react_web_tabs_["TabPanel"], {
        tabId: "vertical-tab-three"
      }, external__react__default.a.createElement(MyAccount_MyAddressForm, null))))));
    }
  }]);

  return MyAccount;
}(external__react_["Component"]);

/* harmony default export */ var components_MyAccount = (MyAccount_MyAccount);
// CONCATENATED MODULE: ./pages/my_account.js


function my_account__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { my_account__typeof = function _typeof(obj) { return typeof obj; }; } else { my_account__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return my_account__typeof(obj); }

function my_account__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function my_account__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function my_account__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function my_account__createClass(Constructor, protoProps, staticProps) { if (protoProps) my_account__defineProperties(Constructor.prototype, protoProps); if (staticProps) my_account__defineProperties(Constructor, staticProps); return Constructor; }

function my_account__possibleConstructorReturn(self, call) { if (call && (my_account__typeof(call) === "object" || typeof call === "function")) { return call; } return my_account__assertThisInitialized(self); }

function my_account__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function my_account__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var my_account_MyAccountPage =
/*#__PURE__*/
function (_Component) {
  my_account__inherits(MyAccountPage, _Component);

  function MyAccountPage() {
    my_account__classCallCheck(this, MyAccountPage);

    return my_account__possibleConstructorReturn(this, (MyAccountPage.__proto__ || Object.getPrototypeOf(MyAccountPage)).apply(this, arguments));
  }

  my_account__createClass(MyAccountPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layouts["a" /* default */], null, external__react__default.a.createElement("div", {
        style: {
          height: '1000px'
        }
      }, external__react__default.a.createElement(components_MyAccount, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = my_account__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(ctx) {
        var _cookies, token;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _cookies = external__next_cookies__default()(ctx), token = _cookies.token; //console.log('token',token)

                if (!(token !== undefined)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return Object(userAction["a" /* loadUserInfo */])(token)(ctx.store.dispatch);

              case 4:
                return _context.abrupt("return", {});

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyAccountPage;
}(external__react_["Component"]);

/* harmony default export */ var my_account = __webpack_exports__["default"] = (my_account_MyAccountPage);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-web-tabs");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  API_URL: 'http://localhost:3005'
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-widgets");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = [["กระบี่",[["คลองท่อม",[["คลองท่อมเหนือ",[81120]],["คลองท่อมใต้",[81120]],["คลองพน",[81170]],["ทรายขาว",[81170]],["พรุดินนา",[81120]],["ห้วยน้ำขาว",[81120]],["เพหลา",[81120]]]],["ปลายพระยา",[["คีรีวง",[81160]],["ปลายพระยา",[81160]],["เขาต่อ",[81160]],["เขาเขน",[81160]]]],["ลำทับ",[["ดินอุดม",[81190]],["ดินแดง",[81190]],["ทุ่งไทรทอง",[81190]],["ลำทับ",[81190]]]],["อ่าวลึก",[["คลองยา",[81110]],["คลองหิน",[81110]],["นาเหนือ",[81110]],["บ้านกลาง",[81110]],["อ่าวลึกน้อย",[81110]],["อ่าวลึกเหนือ",[81110]],["อ่าวลึกใต้",[81110]],["เขาใหญ่",[81110]],["แหลมสัก",[81110]]]],["เกาะลันตา",[["คลองยาง",[81120]],["ศาลาด่าน",[81150]],["เกาะกลาง",[81120]],["เกาะลันตาน้อย",[81150]],["เกาะลันตาใหญ่",[81150]]]],["เขาพนม",[["พรุเตียว",[81140]],["สินปุน",[80240]],["หน้าเขา",[81140]],["เขาดิน",[81140]],["เขาพนม",[81140]],["โคกหาร",[80240]]]],["เมืองกระบี่",[["กระบี่น้อย",[81000]],["กระบี่ใหญ่",[81000]],["คลองประสงค์",[81000]],["ทับปริก",[81000]],["ปากน้ำ",[81000]],["หนองทะเล",[81180]],["อ่าวนาง",[81180]],["เขาคราม",[81000]],["เขาทอง",[81000]],["ไสไทย",[81000]]]],["เหนือคลอง",[["คลองขนาน",[81130]],["คลองเขม้า",[81130]],["ตลิ่งชัน",[81130]],["ปกาสัย",[81130]],["ห้วยยูง",[81130]],["เกาะศรีบอยา",[81130]],["เหนือคลอง",[81130]],["โคกยาง",[81130]]]]]],["กรุงเทพมหานคร",[["คลองสาน",[["คลองต้นไทร",[10600]],["คลองสาน",[10600]],["บางลำภูล่าง",[10600]],["สมเด็จเจ้าพระยา",[10600]]]],["คลองสามวา",[["ทรายกองดิน",[10510]],["ทรายกองดินใต้",[10510]],["บางชัน",[10510]],["สามวาตะวันตก",[10510]],["สามวาตะวันออก",[10510]]]],["คลองเตย",[["คลองตัน",[10110]],["คลองเตย",[10110]],["พระโขนง",[10110]]]],["คันนายาว",[["คันนายาว",[10230]],["รามอินทรา",[10230]]]],["จตุจักร",[["จตุจักร",[10900]],["จอมพล",[10900]],["จันทรเกษม",[10900]],["ลาดยาว",[10900]],["เสนานิคม",[10900]]]],["จอมทอง",[["จอมทอง",[10150]],["บางขุนเทียน",[10150]],["บางค้อ",[10150]],["บางมด",[10150]]]],["ดอนเมือง",[["ดอนเมือง",[10210]],["สนามบิน",[10210]],["สีกัน",[10210]]]],["ดินแดง",[["ดินแดง",[10400]]]],["ดุสิต",[["ดุสิต",[10300]],["ถนนนครไชยศรี",[10300]],["วชิรพยาบาล",[10300]],["สวนจิตรลดา",[10300]],["สี่แยกมหานาค",[10300]]]],["ตลิ่งชัน",[["คลองชักพระ",[10170]],["ฉิมพลี",[10170]],["ตลิ่งชัน",[10170]],["บางพรม",[10170]],["บางระมาด",[10170]],["บางเชือกหนัง",[10170]]]],["ทวีวัฒนา",[["ทวีวัฒนา",[10170]],["ศาลาธรรมสพน์",[10170]]]],["ทุ่งครุ",[["ทุ่งครุ",[10140]],["บางมด",[10140]]]],["ธนบุรี",[["ดาวคะนอง",[10600]],["ตลาดพลู",[10600]],["บางยี่เรือ",[10600]],["บุคคโล",[10600]],["วัดกัลยาณ์",[10600]],["สำเหร่",[10600]],["หิรัญรูจี",[10600]]]],["บางกอกน้อย",[["บางขุนนนท์",[10700]],["บางขุนศรี",[10700]],["บ้านช่างหล่อ",[10700]],["ศิริราช",[10700]],["อรุณอัมรินทร์",[10700]]]],["บางกอกใหญ่",[["วัดท่าพระ",[10600]],["วัดอรุณ",[10600]]]],["บางกะปิ",[["คลองจั่น",[10240]],["หัวหมาก",[10240]]]],["บางขุนเทียน",[["ท่าข้าม",[10150]],["แสมดำ",[10150]]]],["บางคอแหลม",[["บางคอแหลม",[10120]],["บางโคล่",[10120]],["วัดพระยาไกร",[10120]]]],["บางซื่อ",[["บางซื่อ",[10800]],["วงศ์สว่าง",[10800]]]],["บางนา",[["บางนา",[10260]]]],["บางบอน",[["บางบอน",[10150]]]],["บางพลัด",[["บางบำหรุ",[10700]],["บางพลัด",[10700]],["บางยี่ขัน",[10700]],["บางอ้อ",[10700]]]],["บางรัก",[["บางรัก",[10500]],["มหาพฤฒาราม",[10500]],["สีลม",[10500]],["สี่พระยา",[10500]],["สุริยวงศ์",[10500]]]],["บางเขน",[["ท่าแร้ง",[10220]],["อนุสาวรีย์",[10220]]]],["บางแค",[["บางแค",[10160]],["บางแคเหนือ",[10160]],["บางไผ่",[10160]],["หลักสอง",[10160]]]],["บึงกุ่ม",[["คลองกุ่ม",[10230]],["นวมินทร์",[10230]],["นวลจันทร์",[10230]]]],["ปทุมวัน",[["ปทุมวัน",[10330]],["รองเมือง",[10330]],["ลุมพินี",[10330]],["วังใหม่",[10330]]]],["ประเวศ",[["ดอกไม้",[10250]],["ประเวศ",[10250]],["หนองบอน",[10250]]]],["ป้อมปราบศัตรูพ่าย",[["คลองมหานาค",[10100]],["บ้านบาตร",[10100]],["ป้อมปราบ",[10100]],["วัดเทพศิรินทร์",[10100]],["วัดโสมนัส",[10100]]]],["พญาไท",[["สามเสนใน",[10400]]]],["พระนคร",[["ชนะสงคราม",[10200]],["ตลาดยอด",[10200]],["บวรนิเวศ",[10200]],["บางขุนพรหม",[10200]],["บ้านพานถม",[10200]],["พระบรมมหาราชวัง",[10200]],["วังบูรพาภิรมย์",[10200]],["วัดราชบพิธ",[10200]],["วัดสามพระยา",[10200]],["ศาลเจ้าพ่อเสือ",[10200]],["สำราญราษฎร์",[10200]],["เสาชิงช้า",[10200]]]],["พระโขนง",[["บางจาก",[10260]]]],["ภาษีเจริญ",[["คลองขวาง",[10160]],["คูหาสวรรค์",[10160]],["บางจาก",[10160]],["บางด้วน",[10160]],["บางหว้า",[10160]],["บางแวก",[10160]],["ปากคลองภาษีเจริญ",[10160]]]],["มีนบุรี",[["มีนบุรี",[10510]],["แสนแสบ",[10510]]]],["ยานนาวา",[["ช่องนนทรี",[10120]],["บางโพงพาง",[10120]]]],["ราชเทวี",[["ถนนพญาไท",[10400]],["ถนนเพชรบุรี",[10400]],["ทุ่งพญาไท",[10400]],["มักกะสัน",[10400]]]],["ราษฎร์บูรณะ",[["บางปะกอก",[10140]],["ราษฎร์บูรณะ",[10140]]]],["ลาดกระบัง",[["ขุมทอง",[10520]],["คลองสองต้นนุ่น",[10520]],["คลองสามประเวศ",[10520]],["ทับยาว",[10520]],["ลาดกระบัง",[10520]],["ลำปลาทิว",[10520]]]],["ลาดพร้าว",[["จรเข้บัว",[10230]],["ลาดพร้าว",[10230]]]],["วังทองหลาง",[["คลองเจ้าคุณสิงห์",[10310]],["พลับพลา",[10310]],["วังทองหลาง",[10310]],["สะพานสอง",[10310]]]],["วัฒนา",[["คลองตันเหนือ",[10110]],["คลองเตยเหนือ",[10110]],["พระโขนงเหนือ",[10110]]]],["สวนหลวง",[["สวนหลวง",[10250]]]],["สะพานสูง",[["สะพานสูง",[10240]]]],["สัมพันธวงศ์",[["จักรวรรดิ์",[10100]],["ตลาดน้อย",[10100]],["สัมพันธวงศ์",[10100]]]],["สาทร",[["ทุ่งมหาเมฆ",[10120]],["ทุ่งวัดดอน",[10120]],["ยานนาวา",[10120]]]],["สายไหม",[["คลองถนน",[10220]],["สายไหม",[10220]],["ออเงิน",[10220]]]],["หนองจอก",[["กระทุ่มราย",[10530]],["คลองสิบ",[10530]],["คลองสิบสอง",[10530]],["คู้ฝั่งเหนือ",[10530]],["ลำต้อยติ่ง",[10530]],["ลำผักชี",[10530]],["หนองจอก",[10530]],["โคกแฝด",[10530]]]],["หนองแขม",[["หนองค้างพลู",[10160]],["หนองแขม",[10160]]]],["หลักสี่",[["ตลาดบางเขน",[10210]],["ทุ่งสองห้อง",[10210]]]],["ห้วยขวาง",[["บางกะปิ",[10310]],["สามเสนนอก",[10310]],["ห้วยขวาง",[10310]]]]]],["กาญจนบุรี",[["ด่านมะขามเตี้ย",[["กลอนโด",[71260]],["จรเข้เผือก",[71260]],["ด่านมะขามเตี้ย",[71260]],["หนองไผ่",[71260]]]],["ทองผาภูมิ",[["ชะแล",[71180]],["ท่าขนุน",[71180]],["ปิล๊อก",[71180]],["ลิ่นถิ่น",[71180]],["สหกรณ์นิคม",[71180]],["หินดาด",[71180]],["ห้วยเขย่ง",[71180]]]],["ท่ามะกา",[["ดอนขมิ้น",[71120]],["ดอนชะเอม",[71130]],["ตะคร้ำเอน",[71130]],["ท่ามะกา",[71120]],["ท่าเรือ",[71130]],["ท่าเสา",[71120]],["ท่าไม้",[71120]],["พงตึก",[71120]],["พระแท่น",[71130]],["ยางม่วง",[71120]],["สนามแย้",[70190]],["หนองลาน",[71130]],["หวายเหนียว",[71120]],["อุโลกสี่หมื่น",[71130]],["เขาสามสิบหาบ",[71120]],["แสนตอ",[71130]],["โคกตะบอง",[71120]]]],["ท่าม่วง",[["ทุ่งทอง",[71110]],["ท่าตะคร้อ",[71130]],["ท่าม่วง",[71110]],["ท่าล้อ",[71000]],["บ้านใหม่",[71110]],["พังตรุ",[71110]],["ม่วงชุม",[71110]],["รางสาลี่",[71110]],["วังขนาย",[71110]],["วังศาลา",[71110]],["หนองขาว",[71110]],["หนองตากยา",[71110]],["เขาน้อย",[71110]]]],["บ่อพลอย",[["ช่องด่าน",[71160]],["บ่อพลอย",[71160]],["หนองกร่าง",[71220]],["หนองกุ่ม",[71160]],["หนองรี",[71220]],["หลุมรัง",[71160]]]],["พนมทวน",[["ดอนตาเพชร",[71140]],["ดอนเจดีย์",[71140]],["ทุ่งสมอ",[71140]],["พนมทวน",[71140]],["พังตรุ",[71140]],["รางหวาย",[71170]],["หนองสาหร่าย",[71140]],["หนองโรง",[71140]]]],["ศรีสวัสดิ์",[["ด่านแม่แฉลบ",[71250]],["ท่ากระดาน",[71250]],["นาสวน",[71250]],["หนองเป็ด",[71250]],["เขาโจด",[71220]],["แม่กระบุง",[71250]]]],["สังขละบุรี",[["ปรังเผล",[71240]],["หนองลู",[71240]],["ไล่โว่",[71240]]]],["หนองปรือ",[["สมเด็จเจริญ",[71220]],["หนองปรือ",[71220]],["หนองปลาไหล",[71220]]]],["ห้วยกระเจา",[["ดอนแสลบ",[71170]],["วังไผ่",[71170]],["สระลงเรือ",[71170]],["ห้วยกระเจา",[71170]]]],["เมืองกาญจนบุรี",[["ช่องสะเดา",[71190]],["ท่ามะขาม",[71000]],["บ้านเก่า",[71000]],["บ้านเหนือ",[71000]],["บ้านใต้",[71000]],["ปากแพรก",[71000]],["ลาดหญ้า",[71190]],["วังด้ง",[71190]],["วังเย็น",[71000]],["หนองบัว",[71190]],["หนองหญ้า",[71000]],["เกาะสำโรง",[71000]],["แก่งเสี้ยน",[71000]]]],["เลาขวัญ",[["ทุ่งกระบ่ำ",[71210]],["หนองนกแก้ว",[71210]],["หนองประดู่",[71210]],["หนองปลิง",[71210]],["หนองฝ้าย",[71210]],["หนองโสน",[71210]],["เลาขวัญ",[71210]]]],["ไทรโยค",[["ท่าเสา",[71150]],["บ้องตี้",[71150]],["ลุ่มสุ่ม",[71150]],["วังกระแจะ",[71150]],["ศรีมงคล",[71150]],["สิงห์",[71150]],["ไทรโยค",[71150]]]]]],["กาฬสินธุ์",[["กมลาไสย",[["กมลาไสย",[46130]],["ดงลิง",[46130]],["ธัญญา",[46130]],["หนองแปน",[46130]],["หลักเมือง",[46130]],["เจ้าท่า",[46130]],["โคกสมบูรณ์",[46130]],["โพนงาม",[46130]]]],["กุฉินารายณ์",[["กุดค้าว",[46110]],["กุดหว้า",[46110]],["จุมจัง",[46110]],["นาขาม",[46110]],["นาโก",[46110]],["บัวขาว",[46110]],["สมสะอาด",[46110]],["สามขา",[46110]],["หนองห้าง",[46110]],["เหล่าใหญ่",[46110]],["เหล่าไฮงาม",[46110]],["แจนแลน",[46110]]]],["คำม่วง",[["ดินจี่",[46180]],["ทุ่งคลอง",[46180]],["นาทัน",[46180]],["นาบอน",[46180]],["เนินยาง",[46180]],["โพน",[46180]]]],["ฆ้องชัย",[["ฆ้องชัยพัฒนา",[46130]],["ลำชี",[46130]],["เหล่ากลาง",[46130]],["โคกสะอาด",[46130]],["โนนศิลาเลิง",[46130]]]],["ดอนจาน",[["ดงพยุง",[46000]],["ดอนจาน",[46000]],["นาจำปา",[46000]],["ม่วงนา",[46000]],["สะอาดไชยศรี",[46000]]]],["ท่าคันโท",[["กุงเก่า",[46190]],["กุดจิก",[46190]],["ดงสมบูรณ์",[46190]],["ท่าคันโท",[46190]],["นาตาล",[46190]],["ยางอู้ม",[46190]]]],["นาคู",[["นาคู",[46160]],["บ่อแก้ว",[46160]],["ภูแล่นช้าง",[46160]],["สายนาวัง",[46160]],["โนนนาจาน",[46160]]]],["นามน",[["นามน",[46230]],["ยอดแกง",[46230]],["สงเปลือย",[46230]],["หนองบัว",[46230]],["หลักเหลี่ยม",[46230]]]],["ยางตลาด",[["คลองขาม",[46120]],["ดอนสมบูรณ์",[46120]],["นาดี",[46120]],["นาเชือก",[46120]],["บัวบาน",[46120]],["ยางตลาด",[46120]],["หนองตอกแป้น",[46120]],["หนองอิเฒ่า",[46120]],["หัวงัว",[46120]],["หัวนาคำ",[46120]],["อิตื้อ",[46120]],["อุ่มเม่า",[46120]],["เขาพระนอน",[46120]],["เว่อ",[46120]],["โนนสูง",[46120]]]],["ร่องคำ",[["ร่องคำ",[46210]],["สามัคคี",[46210]],["เหล่าอ้อย",[46210]]]],["สมเด็จ",[["ผาเสวย",[46150]],["มหาไชย",[46150]],["ลำห้วยหลัว",[46150]],["ศรีสมเด็จ",[46150]],["สมเด็จ",[46150]],["หนองแวง",[46150]],["หมูม่น",[46150]],["แซงบาดาล",[46150]]]],["สหัสขันธ์",[["นามะเขือ",[46140]],["นิคม",[46140]],["ภูสิงห์",[46140]],["สหัสขันธ์",[46140]],["โนนน้ำเกลี้ยง",[46140]],["โนนบุรี",[46140]],["โนนศิลา",[46140]],["โนนแหลมทอง",[46140]]]],["สามชัย",[["คำสร้างเที่ยง",[46180]],["สำราญ",[46180]],["สำราญใต้",[46180]],["หนองช้าง",[46180]]]],["หนองกุงศรี",[["ดงมูล",[46220]],["ลำหนองแสน",[46220]],["หนองกุงศรี",[46220]],["หนองบัว",[46220]],["หนองสรวง",[46220]],["หนองหิน",[46220]],["หนองใหญ่",[46220]],["เสาเล้า",[46220]],["โคกเครือ",[46220]]]],["ห้วยผึ้ง",[["คำบง",[46240]],["นิคมห้วยผึ้ง",[46240]],["หนองอีบุตร",[46240]],["ไค้นุ่น",[46240]]]],["ห้วยเม็ก",[["กุดโดน",[46170]],["คำเหมือดแก้ว",[46170]],["คำใหญ่",[46170]],["ทรายทอง",[46170]],["บึงนาเรียง",[46170]],["พิมูล",[46170]],["หัวหิน",[46170]],["ห้วยเม็ก",[46170]],["โนนสะอาด",[46170]]]],["เขาวง",[["กุดปลาค้าว",[46160]],["กุดสิมคุ้มใหม่",[46160]],["คุ้มเก่า",[46160]],["สงเปลือย",[46160]],["สระพังทอง",[46160]],["หนองผือ",[46160]]]],["เมืองกาฬสินธุ์",[["กลางหมื่น",[46000]],["กาฬสินธุ์",[46000]],["ขมิ้น",[46000]],["นาจารย์",[46000]],["บึงวิชัย",[46000]],["ภูดิน",[46000]],["ภูปอ",[46000]],["ลำคลอง",[46000]],["ลำปาว",[46000]],["ลำพาน",[46000]],["หนองกุง",[46000]],["หลุบ",[46000]],["ห้วยโพธิ์",[46000]],["เชียงเครือ",[46000]],["เหนือ",[46000]],["โพนทอง",[46000]],["ไผ่",[46000]]]]]],["กำแพงเพชร",[["ขาณุวรลักษบุรี",[["ดอนแตง",[62140]],["บ่อถ้ำ",[62140]],["ปางมะค่า",[62140]],["ป่าพุทรา",[62130]],["ยางสูง",[62130]],["วังชะพลู",[62140]],["วังหามแห",[62140]],["สลกบาตร",[62140]],["เกาะตาล",[62130]],["แสนตอ",[62130]],["โค้งไผ่",[62140]]]],["คลองขลุง",[["คลองขลุง",[62120]],["คลองสมบูรณ์",[62120]],["ท่าพุทรา",[62120]],["ท่ามะเขือ",[62120]],["วังบัว",[62120]],["วังยาง",[62120]],["วังแขม",[62120]],["วังไทร",[62120]],["หัวถนน",[62120]],["แม่ลาด",[62120]]]],["คลองลาน",[["คลองน้ำไหล",[62180]],["คลองลานพัฒนา",[62180]],["สักงาม",[62180]],["โป่งน้ำร้อน",[62180]]]],["ทรายทองวัฒนา",[["ถาวรวัฒนา",[62190]],["ทุ่งทราย",[62190]],["ทุ่งทอง",[62190]]]],["บึงสามัคคี",[["บึงสามัคคี",[62210]],["ระหาน",[62210]],["วังชะโอน",[62210]],["เทพนิมิต",[62210]]]],["ปางศิลาทอง",[["ปางตาไว",[62120]],["หินดาต",[62120]],["โพธิ์ทอง",[62120]]]],["พรานกระต่าย",[["คลองพิไกร",[62110]],["คุยบ้านโอง",[62110]],["ถ้ำกระต่ายทอง",[62110]],["ท่าไม้",[62110]],["พรานกระต่าย",[62110]],["วังควง",[62110]],["วังตะแบก",[62110]],["หนองหัววัว",[62110]],["ห้วยยั้ง",[62110]],["เขาคีริส",[62110]]]],["ลานกระบือ",[["จันทิมา",[62170]],["ช่องลม",[62170]],["บึงทับแรต",[62170]],["ประชาสุขสันต์",[62170]],["ลานกระบือ",[62170]],["หนองหลวง",[62170]],["โนนพลวง",[62170]]]],["เมืองกำแพงเพชร",[["คณฑี",[62000]],["คลองแม่ลาย",[62000]],["ทรงธรรม",[62000]],["ท่าขุนราม",[62000]],["ธำมรงค์",[62160]],["นครชุม",[62000]],["นาบ่อคำ",[62000]],["นิคมทุ่งโพธิ์ทะเล",[62000]],["ลานดอกไม้",[62000]],["วังทอง",[62000]],["สระแก้ว",[62000]],["หนองปลิง",[62000]],["อ่างทอง",[62000]],["เทพนคร",[62000]],["ในเมือง",[62000]],["ไตรตรึงษ์",[62160]]]],["โกสัมพีนคร",[["ลานดอกไม้ตก",[62000]],["เพชรชมภู",[62000]],["โกสัมพี",[62000]]]],["ไทรงาม",[["พานทอง",[62150]],["มหาชัย",[62150]],["หนองคล้า",[62150]],["หนองทอง",[62150]],["หนองแม่แตง",[62150]],["หนองไม้กอง",[62150]],["ไทรงาม",[62150]]]]]],["ขอนแก่น",[["กระนวน",[["ดูนสาด",[40170]],["น้ำอ้อม",[40170]],["บ้านฝาง",[40170]],["หนองกุงใหญ่",[40170]],["หนองโก",[40170]],["หนองโน",[40170]],["หัวนาคำ",[40170]],["ห้วยยาง",[40170]],["ห้วยโจด",[40170]]]],["ชนบท",[["กุดเพียขอม",[40180]],["ชนบท",[40180]],["บ้านแท่น",[40180]],["ปอแดง",[40180]],["วังแสง",[40180]],["ศรีบุญเรือง",[40180]],["ห้วยแก",[40180]],["โนนพะยอม",[40180]]]],["ชุมแพ",[["ขัวเรียง",[40130]],["ชุมแพ",[40130]],["นาหนองทุ่ม",[40290]],["นาเพียง",[40130]],["วังหินลาด",[40130]],["หนองเขียด",[40290]],["หนองเสาเล้า",[40130]],["หนองไผ่",[40130]],["โนนสะอาด",[40290]],["โนนหัน",[40290]],["โนนอุดม",[40130]],["ไชยสอ",[40130]]]],["ซำสูง",[["กระนวน",[40170]],["คำแมด",[40170]],["คูคำ",[40170]],["บ้านโนน",[40170]],["ห้วยเตย",[40170]]]],["น้ำพอง",[["กุดน้ำใส",[40310]],["ทรายมูล",[40140]],["ท่ากระเสริม",[40140]],["น้ำพอง",[40140]],["บัวเงิน",[40140]],["บัวใหญ่",[40140]],["บ้านขาม",[40140]],["พังทุย",[40140]],["ม่วงหวาน",[40310]],["วังชัย",[40140]],["สะอาด",[40310]],["หนองกุง",[40140]]]],["บ้านฝาง",[["บ้านฝาง",[40270]],["บ้านเหล่า",[40270]],["ป่ามะนาว",[40270]],["ป่าหวายนั่ง",[40270]],["หนองบัว",[40270]],["โคกงาม",[40270]],["โนนฆ้อง",[40270]]]],["บ้านแฮด",[["บ้านแฮด",[40110]],["หนองแซง",[40110]],["โคกสำราญ",[40110]],["โนนสมบูรณ์",[40110]]]],["บ้านไผ่",[["บ้านลาน",[40110]],["บ้านไผ่",[40110]],["ป่าปอ",[40110]],["ภูเหล็ก",[40110]],["หนองน้ำใส",[40110]],["หัวหนอง",[40110]],["หินตั้ง",[40110]],["เมืองเพีย",[40110]],["แคนเหนือ",[40110]],["ในเมือง",[40110]]]],["พระยืน",[["ขามป้อม",[40320]],["บ้านโต้น",[40320]],["พระบุ",[40320]],["พระยืน",[40320]],["หนองแวง",[40320]]]],["พล",[["ลอมคอม",[40120]],["หนองมะเขือ",[40120]],["หนองแวงนางเบ้า",[40120]],["หนองแวงโสกพระ",[40120]],["หัวทุ่ง",[40120]],["เก่างิ้ว",[40120]],["เพ็กใหญ่",[40120]],["เมืองพล",[40120]],["โคกสง่า",[40120]],["โจดหนองแก",[40120]],["โนนข่า",[40120]],["โสกนกเต็น",[40120]]]],["ภูผาม่าน",[["นาฝาย",[40350]],["ภูผาม่าน",[40350]],["วังสวาบ",[40350]],["ห้วยม่วง",[40350]],["โนนคอม",[40350]]]],["ภูเวียง",[["กุดขอนแก่น",[40150]],["ดินดำ",[40150]],["ทุ่งชมพู",[40150]],["นาชุมแสง",[40150]],["นาหว้า",[40150]],["บ้านเรือ",[40150]],["ภูเวียง",[40150]],["สงเปือย",[40150]],["หนองกุงธนสาร",[40150]],["หนองกุงเซิน",[40150]],["หว้าทอง",[40150]],["เขาน้อย",[40150]],["เมืองเก่าพัฒนา",[40150]],["ในเมือง",[40150]]]],["มัญจาคีรี",[["กุดเค้า",[40160]],["คำแคน",[40160]],["ท่าศาลา",[40160]],["นาข่า",[40160]],["นางาม",[40160]],["สวนหม่อน",[40160]],["หนองแปน",[40160]],["โพนเพ็ก",[40160]]]],["สีชมพู",[["ซำยาง",[40220]],["ดงลาน",[40220]],["นาจาน",[40220]],["บริบูรณ์",[40220]],["บ้านใหม่",[40220]],["ภูห่าน",[40220]],["วังเพิ่ม",[40220]],["ศรีสุข",[40220]],["สีชมพู",[40220]],["หนองแดง",[40220]]]],["หนองนาคำ",[["กุดธาตุ",[40150]],["ขนวน",[40150]],["บ้านโคก",[40150]]]],["หนองสองห้อง",[["คึมชาด",[40190]],["ดงเค็ง",[40190]],["ดอนดั่ง",[40190]],["ดอนดู่",[40190]],["ตะกั่วป่า",[40190]],["วังหิน",[40190]],["สำโรง",[40190]],["หนองสองห้อง",[40190]],["หนองเม็ก",[40190]],["หนองไผ่ล้อม",[40190]],["หันโจด",[40190]],["โนนธาตุ",[40190]]]],["หนองเรือ",[["กุดกว้าง",[40210]],["จระเข้",[40240]],["บ้านกง",[40240]],["บ้านผือ",[40240]],["บ้านเม็ง",[40210]],["ยางคำ",[40240]],["หนองเรือ",[40210]],["โนนทอง",[40210]],["โนนทัน",[40210]],["โนนสะอาด",[40210]]]],["อุบลรัตน์",[["ทุ่งโป่ง",[40250]],["นาคำ",[40250]],["บ้านดง",[40250]],["ศรีสุขสำราญ",[40250]],["เขื่อนอุบลรัตน์",[40250]],["โคกสูง",[40250]]]],["เขาสวนกวาง",[["คำม่วง",[40280]],["ดงเมืองแอม",[40280]],["นางิ้ว",[40280]],["เขาสวนกวาง",[40280]],["โนนสมบูรณ์",[40280]]]],["เปือยน้อย",[["ขามป้อม",[40340]],["วังม่วง",[40340]],["สระแก้ว",[40340]],["เปือยน้อย",[40340]]]],["เมืองขอนแก่น",[["ดอนช้าง",[40000]],["ดอนหัน",[40260]],["ท่าพระ",[40260]],["บึงเนียม",[40000]],["บ้านค้อ",[40000]],["บ้านทุ่ม",[40000]],["บ้านหว้า",[40000]],["บ้านเป็ด",[40000]],["พระลับ",[40000]],["ศิลา",[40000]],["สาวะถี",[40000]],["สำราญ",[40000]],["หนองตูม",[40000]],["เมืองเก่า",[40000]],["แดงใหญ่",[40000]],["โคกสี",[40000]],["โนนท่อน",[40000]],["ในเมือง",[40000]]]],["แวงน้อย",[["ก้านเหลือง",[40230]],["ทางขวาง",[40230]],["ท่านางแนว",[40230]],["ท่าวัด",[40230]],["ละหานนา",[40230]],["แวงน้อย",[40230]]]],["แวงใหญ่",[["คอนฉิม",[40330]],["แวงใหญ่",[40330]],["โนนทอง",[40330]],["โนนสะอาด",[40330]],["ใหม่นาเพียง",[40330]]]],["โคกโพธิ์ไชย",[["ซับสมบูรณ์",[40160]],["นาแพง",[40160]],["บ้านโคก",[40160]],["โพธิ์ไชย",[40160]]]],["โนนศิลา",[["บ้านหัน",[40110]],["หนองปลาหมอ",[40110]],["เปือยใหญ่",[40110]],["โนนศิลา",[40110]],["โนนแดง",[40110]]]]]],["จันทบุรี",[["ขลุง",[["ขลุง",[22110]],["ซึ้ง",[22110]],["ตกพรม",[22110]],["ตรอกนอง",[22110]],["ตะปอน",[22110]],["บางชัน",[22110]],["บ่อ",[22110]],["บ่อเวฬุ",[22150]],["มาบไพ",[22110]],["วังสรรพรส",[22110]],["วันยาว",[22110]],["เกวียนหัก",[22110]]]],["ท่าใหม่",[["คลองขุด",[22120]],["ตะกาดเง้า",[22120]],["ทุ่งเบญจา",[22170]],["ท่าใหม่",[22120]],["บ่อพุ",[22120]],["พลอยแหวน",[22120]],["ยายร้า",[22120]],["รำพัน",[22170]],["สองพี่น้อง",[22120]],["สีพยา",[22120]],["เขาบายศรี",[22120]],["เขาวัว",[22120]],["เขาแก้ว",[22170]],["โขมง",[22170]]]],["นายายอาม",[["กระแจะ",[22170]],["ช้างข้าม",[22160]],["นายายอาม",[22160]],["วังโตนด",[22170]],["วังใหม่",[22170]],["สนามไชย",[22170]]]],["มะขาม",[["ฉมัน",[22150]],["ท่าหลวง",[22150]],["ปัถวี",[22150]],["มะขาม",[22150]],["วังแซ้ม",[22150]],["อ่างคีรี",[22150]]]],["สอยดาว",[["ทรายขาว",[22180]],["ทับช้าง",[22180]],["ทุ่งขนาน",[22180]],["ปะตง",[22180]],["สะตอน",[22180]]]],["เขาคิชฌกูฏ",[["คลองพลู",[22210]],["จันทเขลม",[22210]],["ชากไทย",[22210]],["ตะเคียนทอง",[22210]],["พลวง",[22210]]]],["เมืองจันทบุรี",[["คมบาง",[22000]],["คลองนารายณ์",[22000]],["จันทนิมิต",[22000]],["ตลาด",[22000]],["ท่าช้าง",[22000]],["บางกะจะ",[22000]],["พลับพลา",[22000]],["วัดใหม่",[22000]],["หนองบัว",[22000]],["เกาะขวาง",[22000]],["แสลง",[22000]]]],["แก่งหางแมว",[["ขุนซ่อง",[22220]],["พวา",[22220]],["สามพี่น้อง",[22220]],["เขาวงกต",[22220]],["แก่งหางแมว",[22220]]]],["แหลมสิงห์",[["คลองน้ำเค็ม",[22190]],["บางกะไชย",[22120]],["บางสระเก้า",[22190]],["ปากน้ำแหลมสิงห์",[22130]],["พลิ้ว",[22190]],["หนองชิ่ม",[22130]],["เกาะเปริด",[22130]]]],["โป่งน้ำร้อน",[["คลองใหญ่",[22140]],["ทับไทร",[22140]],["หนองตาคง",[22140]],["เทพนิมิต",[22140]],["โป่งน้ำร้อน",[22140]]]]]],["ฉะเชิงเทรา",[["คลองเขื่อน",[["ก้อนแก้ว",[24000]],["คลองเขื่อน",[24000]],["บางตลาด",[24110]],["บางเล่า",[24000]],["บางโรง",[24000]]]],["ท่าตะเกียบ",[["คลองตะเกรา",[24160]],["ท่าตะเกียบ",[24160]]]],["บางคล้า",[["ท่าทองหลาง",[24110]],["บางกระเจ็ด",[24110]],["บางคล้า",[24110]],["บางสวน",[24110]],["ปากน้ำ",[24110]],["สาวชะโงก",[24110]],["หัวไทร",[24110]],["เสม็ดเหนือ",[24110]],["เสม็ดใต้",[24110]]]],["บางน้ำเปรี้ยว",[["ดอนฉิมพลี",[24170]],["ดอนเกาะกา",[24170]],["บางขนาก",[24150]],["บางน้ำเปรี้ยว",[24150]],["บึงน้ำรักษ์",[24170]],["ศาลาแดง",[24000]],["สิงโตทอง",[24150]],["หมอนทอง",[24150]],["โพรงอากาศ",[24150]],["โยธะกา",[24150]]]],["บางปะกง",[["ท่าข้าม",[24130]],["ท่าสะอ้าน",[24130]],["บางปะกง",[24130]],["บางผึ้ง",[24130]],["บางวัว",[24180]],["บางสมัคร",[24180]],["บางเกลือ",[24180]],["พิมพา",[24180]],["สองคลอง",[24130]],["หนองจอก",[24130]],["หอมศีล",[24180]],["เขาดิน",[24130]]]],["บ้านโพธิ์",[["คลองขุด",[24140]],["คลองบ้านโพธิ์",[24140]],["คลองประเวศ",[24140]],["ดอนทราย",[24140]],["ท่าพลับ",[24140]],["บางกรูด",[24140]],["บางซ่อน",[24140]],["บ้านโพธิ์",[24140]],["ลาดขวาง",[24140]],["สนามจันทร์",[24140]],["สิบเอ็ดศอก",[24140]],["หนองตีนนก",[24140]],["หนองบัว",[24140]],["เกาะไร่",[24140]],["เทพราช",[24140]],["แสนภูดาษ",[24140]],["แหลมประดู่",[24140]]]],["พนมสารคาม",[["ท่าถ่าน",[24120]],["บ้านซ่อง",[24120]],["พนมสารคาม",[24120]],["หนองยาว",[24120]],["หนองแหน",[24120]],["เกาะขนุน",[24120]],["เขาหินซ้อน",[24120]],["เมืองเก่า",[24120]]]],["ราชสาส์น",[["ดงน้อย",[24120]],["บางคา",[24120]],["เมืองใหม่",[24120]]]],["สนามชัยเขต",[["คู้ยายหมี",[24160]],["ทุ่งพระยา",[24160]],["ท่ากระดาน",[24160]],["ลาดกระทิง",[24160]]]],["เมืองฉะเชิงเทรา",[["คลองจุกกระเฌอ",[24000]],["คลองนครเนื่องเขต",[24000]],["คลองนา",[24000]],["คลองหลวงแพ่ง",[24000]],["คลองอุดมชลจร",[24000]],["คลองเปรง",[24000]],["ท่าไข่",[24000]],["บางกะไห",[24000]],["บางขวัญ",[24000]],["บางตีนเป็ด",[24000]],["บางพระ",[24000]],["บางเตย",[24000]],["บางแก้ว",[24000]],["บางไผ่",[24000]],["บ้านใหม่",[24000]],["วังตะเคียน",[24000]],["หนามแดง",[24000]],["หน้าเมือง",[24000]],["โสธร",[24000]]]],["แปลงยาว",[["วังเย็น",[24190]],["หนองไม้แก่น",[24190]],["หัวสำโรง",[24190]],["แปลงยาว",[24190]]]]]],["ชลบุรี",[["บางละมุง",[["ตะเคียนเตี้ย",[20150]],["นาเกลือ",[20150]],["บางละมุง",[20150]],["หนองปรือ",[20150]],["หนองปลาไหล",[20150]],["ห้วยใหญ่",[20150]],["เขาไม้แก้ว",[20150]],["โป่ง",[20150]]]],["บ่อทอง",[["ธาตุทอง",[20270]],["บ่อกวางทอง",[20270]],["บ่อทอง",[20270]],["พลวงทอง",[20270]],["วัดสุวรรณ",[20270]],["เกษตรสุวรรณ",[20270]]]],["บ้านบึง",[["คลองกิ่ว",[20220]],["บ้านบึง",[20170]],["มาบไผ่",[20170]],["หนองชาก",[20170]],["หนองซ้ำซาก",[20170]],["หนองบอนแดง",[20170]],["หนองอิรุณ",[20220]],["หนองไผ่แก้ว",[20220]]]],["พนัสนิคม",[["กุฎโง้ง",[20140]],["ทุ่งขวาง",[20140]],["ท่าข้าม",[20140]],["นามะตูม",[20140]],["นาวังหิน",[20140]],["นาเริก",[20140]],["บ้านช้าง",[20140]],["บ้านเซิด",[20140]],["พนัสนิคม",[20140]],["วัดหลวง",[20140]],["วัดโบสถ์",[20140]],["สระสี่เหลี่ยม",[20140]],["หนองขยาด",[20140]],["หนองปรือ",[20140]],["หนองเหียง",[20140]],["หน้าพระธาตุ",[20140]],["หมอนนาง",[20140]],["หัวถนน",[20140]],["โคกเพลาะ",[20140]],["ไร่หลักทอง",[20140]]]],["พานทอง",[["บางนาง",[20160]],["บางหัก",[20160]],["บ้านเก่า",[20160]],["พานทอง",[20160]],["มาบโป่ง",[20160]],["หนองกะขะ",[20160]],["หนองตำลึง",[20160]],["หนองหงษ์",[20160]],["หน้าประดู่",[20160]],["เกาะลอย",[20160]],["โคกขี้หนอน",[20160]]]],["ศรีราชา",[["ทุ่งสุขลา",[20230]],["บางพระ",[20110]],["บึง",[20230]],["บ่อวิน",[20230]],["ศรีราชา",[20110]],["สุรศักดิ์",[20110]],["หนองขาม",[20230]],["เขาคันทรง",[20110]]]],["สัตหีบ",[["นาจอมเทียน",[20250]],["บางเสร่",[20250]],["พลูตาหลวง",[20180]],["สัตหีบ",[20180]],["แสมสาร",[20180]]]],["หนองใหญ่",[["คลองพลู",[20190]],["หนองเสือช้าง",[20190]],["หนองใหญ่",[20190]],["ห้างสูง",[20190]],["เขาซก",[20190]]]],["เกาะจันทร์",[["ท่าบุญมี",[20240]],["เกาะจันทร์",[20240]]]],["เกาะสีชัง",[["ท่าเทววงษ์",[20120]]]],["เมืองชลบุรี",[["คลองตำหรุ",[20000]],["ดอนหัวฬ่อ",[20000]],["นาป่า",[20000]],["บางทราย",[20000]],["บางปลาสร้อย",[20000]],["บ้านปึก",[20130]],["บ้านสวน",[20000]],["บ้านโขด",[20000]],["มะขามหย่ง",[20000]],["สำนักบก",[20000]],["หนองข้างคอก",[20000]],["หนองรี",[20000]],["หนองไม้แดง",[20000]],["ห้วยกะปิ",[20000]],["อ่างศิลา",[20000]],["เสม็ด",[20000]],["เหมือง",[20130]],["แสนสุข",[20130]]]]]],["ชัยนาท",[["มโนรมย์",[["คุ้งสำเภา",[17110]],["ท่าฉนวน",[17110]],["วัดโคก",[17110]],["ศิลาดาน",[17110]],["หางน้ำสาคร",[17170]],["อู่ตะเภา",[17170]],["ไร่พัฒนา",[17170]]]],["วัดสิงห์",[["บ่อแร่",[17120]],["มะขามเฒ่า",[17120]],["วังหมัน",[17120]],["วัดสิงห์",[17120]],["หนองขุ่น",[17120]],["หนองน้อย",[17120]],["หนองบัว",[17120]]]],["สรรคบุรี",[["ดงคอน",[17140]],["ดอนกำ",[17140]],["บางขุด",[17140]],["ห้วยกรด",[17140]],["ห้วยกรดพัฒนา",[17140]],["เที่ยงแท้",[17140]],["แพรกศรีราชา",[17140]],["โพงาม",[17140]]]],["สรรพยา",[["ตลุก",[17150]],["บางหลวง",[17150]],["สรรพยา",[17150]],["หาดอาษา",[17150]],["เขาแก้ว",[17150]],["โพนางดำตก",[17150]],["โพนางดำออก",[17150]]]],["หนองมะโมง",[["กุดจอก",[17120]],["วังตะเคียน",[17120]],["สะพานหิน",[17120]],["หนองมะโมง",[17120]]]],["หันคา",[["บ้านเชี่ยน",[17130]],["วังไก่เถื่อน",[17130]],["สามง่ามท่าโบสถ์",[17160]],["หนองแซง",[17160]],["หันคา",[17130]],["ห้วยงู",[17160]],["เด่นใหญ่",[17130]],["ไพรนกยูง",[17130]]]],["เนินขาม",[["กะบกเตี้ย",[17130]],["สุขเดือนห้า",[17130]],["เนินขาม",[17130]]]],["เมืองชัยนาท",[["ชัยนาท",[17000]],["ท่าชัย",[17000]],["ธรรมามูล",[17000]],["นางลือ",[17000]],["บ้านกล้วย",[17000]],["หาดท่าเสา",[17120]],["เขาท่าพระ",[17000]],["เสือโฮก",[17000]],["ในเมือง",[17000]]]]]],["ชัยภูมิ",[["คอนสวรรค์",[["คอนสวรรค์",[36140]],["ช่องสามหมอ",[36140]],["บ้านโสก",[36140]],["ยางหวาย",[36140]],["ศรีสำราญ",[36140]],["หนองขาม",[36140]],["ห้วยไร่",[36140]],["โคกมั่งงอย",[36140]],["โนนสะอาด",[36140]]]],["คอนสาร",[["คอนสาร",[36180]],["ดงกลาง",[36180]],["ดงบัง",[36180]],["ทุ่งนาเลา",[36180]],["ทุ่งพระ",[36180]],["ทุ่งลุยลาย",[36180]],["ห้วยยาง",[36180]],["โนนคูณ",[36180]]]],["จัตุรัส",[["กุดน้ำใส",[36130]],["บ้านกอก",[36130]],["บ้านขาม",[36130]],["ละหาน",[36130]],["ส้มป่อย",[36130]],["หนองบัวบาน",[36130]],["หนองบัวโคก",[36220]],["หนองบัวใหญ่",[36130]],["หนองโดน",[36130]]]],["ซับใหญ่",[["ซับใหญ่",[36130]],["ตะโกทอง",[36130]],["ท่ากูบ",[36130]]]],["บำเหน็จณรงค์",[["บ้านชวน",[36160]],["บ้านตาล",[36220]],["บ้านเพชร",[36160]],["หัวทะเล",[36220]],["เกาะมะนาว",[36160]],["โคกเพชรพัฒนา",[36160]],["โคกเริงรมย์",[36160]]]],["บ้านเขว้า",[["ชีบน",[36170]],["ตลาดแร้ง",[36170]],["บ้านเขว้า",[36170]],["ภูแลนคา",[36170]],["ลุ่มลำชี",[36170]],["โนนแดง",[36170]]]],["บ้านแท่น",[["บ้านเต่า",[36190]],["บ้านแท่น",[36190]],["สระพัง",[36190]],["สามสวน",[36190]],["หนองคู",[36190]]]],["ภักดีชุมพล",[["บ้านเจียง",[36260]],["วังทอง",[36260]],["เจาทอง",[36260]],["แหลมทอง",[36260]]]],["ภูเขียว",[["กวางโจน",[36110]],["กุดยม",[36110]],["ธาตุทอง",[36110]],["บ้านดอน",[36110]],["บ้านเพชร",[36110]],["บ้านแก้ง",[36110]],["ผักปัง",[36110]],["หนองคอนไทย",[36110]],["หนองตูม",[36110]],["โคกสะอาด",[36110]],["โอโล",[36110]]]],["หนองบัวระเหว",[["วังตะเฆ่",[36250]],["หนองบัวระเหว",[36250]],["ห้วยแย้",[36250]],["โคกสะอาด",[36250]],["โสกปลาดุก",[36250]]]],["หนองบัวแดง",[["กุดชุมแสง",[36210]],["คูเมือง",[36210]],["ถ้ำวัวแดง",[36210]],["ท่าใหญ่",[36210]],["นางแดด",[36210]],["วังชมภู",[36210]],["หนองบัวแดง",[36210]],["หนองแวง",[36210]]]],["เกษตรสมบูรณ์",[["กุดเลาะ",[36120]],["บ้านบัว",[36120]],["บ้านยาง",[36120]],["บ้านหัน",[36120]],["บ้านเดื่อ",[36120]],["บ้านเป้า",[36120]],["สระโพนทอง",[36120]],["หนองข่า",[36120]],["หนองโพนงาม",[36120]],["โนนกอก",[36120]],["โนนทอง",[36120]]]],["เทพสถิต",[["นายางกลัก",[36230]],["บ้านไร่",[36230]],["วะตะแบก",[36230]],["ห้วยยายจิ๋ว",[36230]],["โป่งนก",[36230]]]],["เนินสง่า",[["กะฮาด",[36130]],["ตาเนิน",[36130]],["รังงาม",[36130]],["หนองฉิม",[36130]]]],["เมืองชัยภูมิ",[["กุดตุ้ม",[36000]],["ชีลอง",[36000]],["ซับสีทอง",[36000]],["ท่าหินโงม",[36000]],["นาฝาย",[36000]],["นาเสียว",[36000]],["บุ่งคล้า",[36000]],["บ้านค่าย",[36240]],["บ้านเล่า",[36000]],["รอบเมือง",[36000]],["ลาดใหญ่",[36000]],["หนองนาแซง",[36000]],["หนองไผ่",[36240]],["ห้วยต้อน",[36000]],["ห้วยบง",[36000]],["โคกสูง",[36000]],["โนนสำราญ",[36240]],["โพนทอง",[36000]],["ในเมือง",[36000]]]],["แก้งคร้อ",[["ช่องสามหมอ",[36150]],["ท่ามะไฟหวาน",[36150]],["นาหนองทุ่ม",[36150]],["บ้านแก้ง",[36150]],["หนองขาม",[36150]],["หนองสังข์",[36150]],["หนองไผ่",[36150]],["หลุบคา",[36150]],["เก่าย่าดี",[36150]],["โคกกุง",[36150]]]]]],["ชุมพร",[["ทุ่งตะโก",[["ช่องไม้แก้ว",[86220]],["ตะโก",[86220]],["ทุ่งตะไคร",[86220]],["ปากตะโก",[86220]],["หมู่เกาะศรีอบยา",[""]],["เกาะขี้นก",[""]],["เกาะคราม",[""]],["เกาะคางสือ",[""]],["เกาะมะพร้าว",[""]],["เกาะมุก",[""]],["เกาะยอ",[""]],["เกาะรางบรรทัด",[""]],["เกาะสูบ",[""]]]],["ท่าแซะ",[["คุริง",[86140]],["ทรัพย์อนันต์",[86140]],["ท่าข้าม",[86140]],["ท่าแซะ",[86140]],["นากระตาม",[86140]],["รับร่อ",[86190]],["สลุย",[86140]],["สองพี่น้อง",[86140]],["หงษ์เจริญ",[86140]],["หินแก้ว",[86190]]]],["ปะทิว",[["ชุมโค",[86160]],["ดอนยาง",[86210]],["ทะเลทรัพย์",[86160]],["บางสน",[86160]],["ปากคลอง",[86210]],["สะพลี",[86230]],["เกาะซีกง",[""]],["เกาะพระ",[""]],["เกาะยอ",[""]],["เกาะรัง",[""]],["เกาะร้านเป็ด",[""]],["เกาะร้านไก่",[""]],["เกาะเอียง",[""]],["เกาะไข่",[""]],["เขาไชยราช",[86210]]]],["พะโต๊ะ",[["ปังหวาน",[86180]],["ปากทรง",[86180]],["พระรักษ์",[86180]],["พะโต๊ะ",[86180]]]],["ละแม",[["ทุ่งคาวัด",[86170]],["ทุ่งหลวง",[86170]],["ละแม",[86170]],["สวนแตง",[86170]]]],["สวี",[["ครน",[86130]],["ด่านสวี",[86130]],["ทุ่งระยะ",[86130]],["ท่าหิน",[86130]],["นาสัก",[86130]],["นาโพธิ์",[86130]],["ปากแพรก",[86130]],["วิสัยใต้",[86130]],["สวี",[86130]],["เกาะกระ",[""]],["เกาะกุลา",[""]],["เกาะทองแก้ว",[""]],["เกาะบาตร์",[""]],["เกาะพัดหวายเล็ก",[""]],["เกาะพัดหวายใหญ่",[""]],["เกาะยูง",[""]],["เกาะหนู",[""]],["เกาะแมว",[""]],["เกาะแรด",[""]],["เขาค่าย",[86130]],["เขาทะลุ",[86130]]]],["หลังสวน",[["ขันเงิน",[86110]],["ท่ามะพลา",[86110]],["นาขา",[86110]],["นาพญา",[86110]],["บางน้ำจืด",[86150]],["บางมะพร้าว",[86110]],["บ้านควน",[86110]],["ปากน้ำ",[86150]],["พ้อแดง",[86110]],["วังตะกอ",[86110]],["หลังสวน",[86110]],["หาดยาย",[86110]],["เกาะพิทักษ์",[""]],["แหลมทราย",[86110]]]],["เมืองชุมพร",[["ขุนกระทิง",[86190]],["ตากแดด",[86000]],["ถ้ำสิงห์",[86100]],["ทุ่งคา",[86100]],["ท่าตะเภา",[86000]],["ท่ายาง",[86000]],["นาชะอัง",[86000]],["นาทุ่ง",[86000]],["บางลึก",[86000]],["บางหมาก",[86000]],["บ้านนา",[86190]],["ปากน้ำ",[86120]],["วังใหม่",[86190]],["วังไผ่",[86000]],["วิสัยเหนือ",[86100]],["หาดทรายรี",[86120]],["หาดพันไกร",[86000]],["เกาะกา",[""]],["เกาะกินหลักง้ำ",[""]],["เกาะงามเล็ก",[""]],["เกาะงามใหญ่",[""]],["เกาะทองหลาง",[""]],["เกาะทะลุ",[""]],["เกาะมะพร้าว",[""]],["เกาะมัตโพน",[""]],["เกาะมาตรา",[""]],["เกาะรังกาจิว",[""]],["เกาะละวะ",[""]],["เกาะสาก",[""]],["เกาะหลักแรด",[""]],["เกาะอีแรด",[""]],["เกาะเสม็ด",[""]]]]]],["ตรัง",[["กันตัง",[["กันตัง",[92110]],["กันตังใต้",[92110]],["คลองชีล้อม",[92110]],["คลองลุ",[92110]],["ควนธานี",[92110]],["นาเกลือ",[92110]],["บางสัก",[92110]],["บางหมาก",[92110]],["บางเป้า",[92110]],["บ่อน้ำร้อน",[92110]],["ย่านซื่อ",[92110]],["วังวน",[92110]],["เกาะลิบง",[92110]],["โคกยาง",[92110]]]],["นาโยง",[["ช่อง",[92170]],["นาข้าวเสีย",[92170]],["นาหมื่นศรี",[92170]],["นาโยงเหนือ",[92170]],["ละมอ",[92170]],["โคกสะบ้า",[92170]]]],["ปะเหลียน",[["ทุ่งยาว",[92180]],["ท่าข้าม",[92120]],["ท่าพญา",[92140]],["บางด้วน",[92140]],["บ้านนา",[92140]],["ปะเหลียน",[92180]],["ลิพัง",[92180]],["สุโสะ",[92120]],["เกาะสุกร",[92120]],["แหลมสอม",[92180]]]],["ย่านตาขาว",[["ทุ่งกระบือ",[92140]],["ทุ่งค่าย",[92140]],["นาชุมเห็ด",[92140]],["ย่านตาขาว",[92140]],["หนองบ่อ",[92140]],["เกาะเปียะ",[92140]],["โพรงจระเข้",[92140]],["ในควน",[92140]]]],["รัษฎา",[["คลองปาง",[92160]],["ควนเมา",[92160]],["หนองบัว",[92160]],["หนองปรือ",[92130]],["เขาไพร",[92160]]]],["วังวิเศษ",[["ท่าสะบ้า",[92000]],["วังมะปราง",[92220]],["วังมะปรางเหนือ",[92220]],["อ่าวตง",[92220]],["เขาวิเศษ",[92220]]]],["สิเกา",[["กะลาเส",[92150]],["นาเมืองเพชร",[92000]],["บ่อหิน",[92150]],["เขาไม้แก้ว",[92150]],["ไม้ฝาด",[92150]]]],["หาดสำราญ",[["ตะเสะ",[92120]],["บ้าหวี",[92120]],["หาดสำราญ",[92120]]]],["ห้วยยอด",[["ทุ่งต่อ",[92130]],["ท่างิ้ว",[92130]],["นาวง",[92210]],["บางกุ้ง",[92210]],["บางดี",[92210]],["ปากคม",[92130]],["ปากแจ่ม",[92190]],["ลำภูรา",[92190]],["วังคีรี",[92210]],["หนองช้างแล่น",[92130]],["ห้วยนาง",[92130]],["ห้วยยอด",[92130]],["เขากอบ",[92130]],["เขาขาว",[92130]],["เขาปูน",[92130]],["ในเตา",[92130]]]],["เมืองตรัง",[["ควนปริง",[92000]],["ทับเที่ยง",[92000]],["นาตาล่วง",[92000]],["นาท่ามเหนือ",[92190]],["นาท่ามใต้",[92190]],["นาบินหลา",[92170]],["นาพละ",[92000]],["นาโต๊ะหมิง",[92000]],["นาโยงใต้",[92170]],["น้ำผุด",[92000]],["บางรัก",[92000]],["บ้านควน",[92000]],["บ้านโพธิ์",[92000]],["หนองตรุด",[92000]],["โคกหล่อ",[92000]]]]]],["ตราด",[["คลองใหญ่",[["คลองใหญ่",[23110]],["หาดเล็ก",[23110]],["ไม้รูด",[23110]]]],["บ่อไร่",[["ช้างทูน",[23140]],["ด่านชุมพล",[23140]],["นนทรีย์",[23140]],["บ่อพลอย",[23140]],["หนองบอน",[23140]]]],["เกาะกูด",[["เกาะกูด",[23000]],["เกาะหมาก",[23000]]]],["เกาะช้าง",[["เกาะช้าง",[23170]],["เกาะช้างใต้",[23170]]]],["เขาสมิง",[["ทุ่งนนทรี",[23130]],["ท่าโสม",[23150]],["ประณีต",[23150]],["วังตะเคียน",[23130]],["สะตอ",[23150]],["เขาสมิง",[23130]],["เทพนิมิต",[23150]],["แสนตุ้ง",[23150]]]],["เมืองตราด",[["ชำราก",[23000]],["ตะกาง",[23000]],["ท่ากุ่ม",[23000]],["ท่าพริก",[23000]],["บางพระ",[23000]],["วังกระแจะ",[23000]],["หนองคันทรง",[23000]],["หนองเสม็ด",[23000]],["หนองโสน",[23000]],["ห้วงน้ำขาว",[23000]],["ห้วยแร้ง",[23000]],["อ่าวใหญ่",[23000]],["เนินทราย",[23000]],["แหลมกลัด",[23000]]]],["แหลมงอบ",[["คลองใหญ่",[23120]],["น้ำเชี่ยว",[23120]],["บางปิด",[23120]],["แหลมงอบ",[23120]]]]]],["ตาก",[["ท่าสองยาง",[["ท่าสองยาง",[63150]],["แม่ต้าน",[63150]],["แม่วะหลวง",[63150]],["แม่สอง",[63150]],["แม่หละ",[63150]],["แม่อุสุ",[63150]]]],["บ้านตาก",[["ตากตก",[63120]],["ตากออก",[63120]],["ทุ่งกระเชาะ",[63120]],["ท้องฟ้า",[63120]],["สมอโคน",[63120]],["เกาะตะเภา",[63120]],["แม่สลิด",[63120]]]],["พบพระ",[["คีรีราษฎร์",[63160]],["ช่องแคบ",[63160]],["พบพระ",[63160]],["รวมไทยพัฒนา",[63160]],["วาเล่ย์",[63160]]]],["วังเจ้า",[["นาโบสถ์",[63000]],["ประดาง",[63000]],["เชียงทอง",[63000]]]],["สามเงา",[["บ้านนา",[63130]],["ยกกระบัตร",[63130]],["ย่านรี",[63130]],["วังจันทร์",[63130]],["วังหมัน",[63130]],["สามเงา",[63130]]]],["อุ้มผาง",[["หนองหลวง",[63170]],["อุ้มผาง",[63170]],["แม่กลอง",[63170]],["แม่จัน",[63170]],["แม่ละมุ้ง",[63170]],["โมโกร",[63170]]]],["เมืองตาก",[["ตลุกกลางทุ่ง",[63000]],["น้ำรึม",[63000]],["ป่ามะม่วง",[63000]],["ระแหง",[63000]],["วังประจบ",[63000]],["วังหิน",[63000]],["หนองบัวเหนือ",[63000]],["หนองบัวใต้",[63000]],["หนองหลวง",[63000]],["หัวเดียด",[63000]],["เชียงเงิน",[63000]],["แม่ท้อ",[63000]],["โป่งแดง",[63000]],["ไม้งาม",[63000]]]],["แม่ระมาด",[["ขะเนจื้อ",[63140]],["พระธาตุ",[63140]],["สามหมื่น",[63140]],["แม่จะเรา",[63140]],["แม่ตื่น",[63140]],["แม่ระมาด",[63140]]]],["แม่สอด",[["ด่านแม่ละเมา",[63110]],["ท่าสายลวด",[63110]],["พระธาตุผาแดง",[63110]],["พะวอ",[63110]],["มหาวัน",[63110]],["แม่กาษา",[63110]],["แม่กุ",[63110]],["แม่ตาว",[63110]],["แม่ปะ",[63110]],["แม่สอด",[63110]]]]]],["นครนายก",[["บ้านนา",[["ทองหลาง",[26110]],["บางอ้อ",[26110]],["บ้านนา",[26110]],["บ้านพริก",[26110]],["บ้านพร้าว",[26110]],["ป่าขะ",[26110]],["พิกุลออก",[26110]],["ศรีกะอาง",[26110]],["อาษา",[26110]],["เขาเพิ่ม",[26110]]]],["ปากพลี",[["ท่าเรือ",[26130]],["นาหินลาด",[26130]],["ปากพลี",[26130]],["หนองแสง",[26130]],["เกาะหวาย",[26130]],["เกาะโพธิ์",[26130]],["โคกกรวด",[26130]]]],["องครักษ์",[["คลองใหญ่",[26120]],["ชุมพล",[26120]],["ทรายมูล",[26120]],["บางปลากด",[26120]],["บางลูกเสือ",[26120]],["บางสมบูรณ์",[26120]],["บึงศาล",[26120]],["พระอาจารย์",[26120]],["ศีรษะกระบือ",[26120]],["องครักษ์",[26120]],["โพธิ์แทน",[26120]]]],["เมืองนครนายก",[["ดงละคร",[26000]],["ดอนยอ",[26000]],["ท่าช้าง",[26000]],["ท่าทราย",[26000]],["นครนายก",[26000]],["บ้านใหญ่",[26000]],["พรหมณี",[26000]],["วังกระโจม",[26000]],["ศรีจุฬา",[26000]],["ศรีนาวา",[26000]],["สาริกา",[26000]],["หินตั้ง",[26000]],["เขาพระ",[26000]]]]]],["นครปฐม",[["กำแพงแสน",[["กระตีบ",[73180]],["กำแพงแสน",[73140]],["ดอนข่อย",[73140]],["ทุ่งกระพังโหม",[73140]],["ทุ่งขวาง",[73140]],["ทุ่งบัว",[73140]],["ทุ่งลูกนก",[73140]],["รางพิกุล",[73140]],["วังน้ำเขียว",[73140]],["สระพัฒนา",[73180]],["สระสี่มุม",[73140]],["หนองกระทุ่ม",[73140]],["ห้วยขวาง",[73140]],["ห้วยม่วง",[73180]],["ห้วยหมอนทอง",[73140]]]],["ดอนตูม",[["ดอนพุทรา",[73150]],["ดอนรวก",[73150]],["บ้านหลวง",[73150]],["ลำลูกบัว",[73150]],["ลำเหย",[73150]],["สามง่าม",[73150]],["ห้วยด้วน",[73150]],["ห้วยพระ",[73150]]]],["นครชัยศรี",[["ขุนแก้ว",[73120]],["งิ้วราย",[73120]],["ดอนแฝก",[73120]],["ท่ากระชับ",[73120]],["ท่าตำหนัก",[73120]],["ท่าพระยา",[73120]],["นครชัยศรี",[73120]],["บางกระเบา",[73120]],["บางพระ",[73120]],["บางระกำ",[73120]],["บางแก้ว",[73120]],["บางแก้วฟ้า",[73120]],["พะเนียด",[73120]],["ลานตากฟ้า",[73120]],["วัดละมุด",[73120]],["วัดสำโรง",[73120]],["วัดแค",[73120]],["ศรีมหาโพธิ์",[73120]],["ศรีษะทอง",[73120]],["สัมปทวน",[73120]],["ห้วยพลู",[73120]],["แหลมบัว",[73120]],["โคกพระเจดีย์",[73120]],["ไทยาวาส",[73120]]]],["บางเลน",[["คลองนกกระทุง",[73130]],["ดอนตูม",[73130]],["นราภิรมย์",[73130]],["นิลเพชร",[73130]],["บัวปากท่า",[73130]],["บางปลา",[73130]],["บางภาษี",[73130]],["บางระกำ",[73130]],["บางหลวง",[73190]],["บางเลน",[73130]],["บางไทรป่า",[73130]],["ลำพญา",[73130]],["หินมูล",[73190]],["ไทรงาม",[73130]],["ไผ่หูช้าง",[73130]]]],["พุทธมณฑล",[["คลองโยง",[73170]],["มหาสวัสดิ์",[73170]],["ศาลายา",[73170]]]],["สามพราน",[["กระทุ่มล้ม",[73220]],["คลองจินดา",[73110]],["คลองใหม่",[73110]],["ตลาดจินดา",[73110]],["ทรงคนอง",[73210]],["ท่าข้าม",[73110]],["ท่าตลาด",[73110]],["บางกระทึก",[73210]],["บางช้าง",[73110]],["บางเตย",[73210]],["บ้านใหม่",[73110]],["ยายชา",[73110]],["สามพราน",[73110]],["หอมเกร็ด",[73110]],["อ้อมใหญ่",[73160]],["ไร่ขิง",[73210]]]],["เมืองนครปฐม",[["ดอนยายหอม",[73000]],["ตาก้อง",[73000]],["ถนนขาด",[73000]],["ทัพหลวง",[73000]],["ทุ่งน้อย",[73000]],["ธรรมศาลา",[73000]],["นครปฐม",[73000]],["บางแขม",[73000]],["บ่อพลับ",[73000]],["บ้านยาง",[73000]],["พระปฐมเจดีย์",[73000]],["พระประโทน",[73000]],["มาบแค",[73000]],["ลำพยา",[73000]],["วังตะกู",[73000]],["วังเย็น",[73000]],["สนามจันทร์",[73000]],["สระกะเทียม",[73000]],["สวนป่าน",[73000]],["สามควายเผือก",[73000]],["หนองงูเหลือม",[73000]],["หนองดินแดง",[73000]],["หนองปากโลง",[73000]],["ห้วยจรเข้",[73000]],["โพรงมะเดื่อ",[73000]]]]]],["นครพนม",[["ท่าอุเทน",[["ท่าจำปา",[48120]],["ท่าอุเทน",[48120]],["พนอม",[48120]],["พะทาย",[48120]],["รามราช",[48120]],["หนองเทา",[48120]],["เวินพระบาท",[48120]],["โนนตาล",[48120]],["ไชยบุรี",[48120]]]],["ธาตุพนม",[["กุดฉิม",[48110]],["ดอนนางหงส์",[48110]],["ธาตุพนม",[48110]],["ธาตุพนมเหนือ",[48110]],["นาถ่อน",[48110]],["นาหนาด",[48110]],["น้ำก่ำ",[48110]],["ฝั่งแดง",[48110]],["พระกลางทุ่ง",[48110]],["อุ่มเหม้า",[48110]],["แสนพัน",[48110]],["โพนแพง",[48110]]]],["นาทม",[["ดอนเตย",[48140]],["นาทม",[48140]],["หนองซน",[48140]]]],["นาหว้า",[["ท่าเรือ",[48180]],["นาคูณใหญ่",[48180]],["นางัว",[48180]],["นาหว้า",[48180]],["บ้านเสียว",[48180]],["เหล่าพัฒนา",[48180]]]],["นาแก",[["ก้านเหลือง",[48130]],["คำพี้",[48130]],["นาคู่",[48130]],["นาเลียง",[48130]],["นาแก",[48130]],["บ้านแก้ง",[48130]],["พระซอง",[48130]],["พิมาน",[48130]],["พุ่มแก",[48130]],["สีชมพู",[48130]],["หนองบ่อ",[48130]],["หนองสังข์",[48130]]]],["บ้านแพง",[["นางัว",[48140]],["นาเข",[48140]],["บ้านแพง",[48140]],["หนองแวง",[48140]],["โพนทอง",[48140]],["ไผ่ล้อม",[48140]]]],["ปลาปาก",[["กุตาไก้",[48160]],["นามะเขือ",[48160]],["ปลาปาก",[48160]],["มหาชัย",[48160]],["หนองฮี",[48160]],["หนองเทาใหญ่",[48160]],["โคกสว่าง",[48160]],["โคกสูง",[48160]]]],["วังยาง",[["ยอดชาด",[48130]],["วังยาง",[48130]],["หนองโพธิ์",[48130]],["โคกสี",[48130]]]],["ศรีสงคราม",[["ท่าบ่อสงคราม",[48150]],["นาคำ",[48150]],["นาเดื่อ",[48150]],["บ้านข่า",[48150]],["บ้านเอื้อง",[48150]],["ศรีสงคราม",[48150]],["สามผง",[48150]],["หาดแพง",[48150]],["โพนสว่าง",[48150]]]],["เมืองนครพนม",[["กุรุคุ",[48000]],["ขามเฒ่า",[48000]],["คำเตย",[48000]],["ดงขวาง",[48000]],["ท่าค้อ",[48000]],["นาทราย",[48000]],["นาราชควาย",[48000]],["บ้านกลาง",[48000]],["บ้านผึ้ง",[48000]],["วังตามัว",[48000]],["หนองญาติ",[48000]],["หนองแสง",[48000]],["อาจสามารถ",[48000]],["โพธิ์ตาก",[48000]],["ในเมือง",[48000]]]],["เรณูนคร",[["ท่าลาด",[48170]],["นาขาม",[48170]],["นางาม",[48170]],["หนองย่างชิ้น",[48170]],["เรณู",[48170]],["เรณูใต้",[48170]],["โคกหินแฮ่",[48170]],["โพนทอง",[48170]]]],["โพนสวรรค์",[["นาขมิ้น",[48190]],["นาหัวบ่อ",[48190]],["นาใน",[48190]],["บ้านค้อ",[48190]],["โพนจาน",[48190]],["โพนบก",[48190]],["โพนสวรรค์",[48190]]]]]],["นครราชสีมา",[["ขามทะเลสอ",[["ขามทะเลสอ",[30280]],["บึงอ้อ",[30280]],["พันดุง",[30280]],["หนองสรวง",[30280]],["โป่งแดง",[30280]]]],["ขามสะแกแสง",[["ขามสะแกแสง",[30290]],["ชีวึก",[30290]],["พะงาด",[30290]],["หนองหัวฟาน",[30290]],["เมืองนาท",[30290]],["เมืองเกษตร",[30290]],["โนนเมือง",[30290]]]],["คง",[["ขามสมบูรณ์",[30260]],["คูขาด",[30260]],["ดอนใหญ่",[30260]],["ตาจั่น",[30260]],["บ้านปรางค์",[30260]],["หนองบัว",[30260]],["หนองมะนาว",[30260]],["เทพาลัย",[30260]],["เมืองคง",[30260]],["โนนเต็ง",[30260]]]],["ครบุรี",[["ครบุรี",[30250]],["ครบุรีใต้",[30250]],["จระเข้หิน",[30250]],["ตะแบกบาน",[30250]],["บ้านใหม่",[30250]],["มาบตะโกเอน",[30250]],["ลำเพียก",[30250]],["สระว่านพระยา",[30250]],["อรพิมพ์",[30250]],["เฉลียง",[30250]],["แชะ",[30250]],["โคกกระชาย",[30250]]]],["จักราช",[["คลองเมือง",[30230]],["จักราช",[30230]],["ทองหลาง",[30230]],["ศรีละกอ",[30230]],["สีสุก",[30230]],["หนองขาม",[30230]],["หนองพลวง",[30230]],["หินโคน",[30230]]]],["ชุมพวง",[["ชุมพวง",[30270]],["ตลาดไทร",[30270]],["ท่าลาด",[30270]],["ประสุข",[30270]],["สาหร่าย",[30270]],["หนองหลัก",[30270]],["โนนตูม",[30270]],["โนนยอ",[30270]],["โนนรัง",[30270]]]],["ด่านขุนทด",[["กุดพิมาน",[30210]],["ด่านขุนทด",[30210]],["ด่านนอก",[30210]],["ด่านใน",[30210]],["ตะเคียน",[30210]],["บ้านเก่า",[30210]],["บ้านแปรง",[36220]],["พันชนะ",[30210]],["สระจรเข้",[30210]],["หนองกราด",[30210]],["หนองบัวตะเกียด",[30210]],["หนองบัวละคร",[30210]],["หนองไทร",[36220]],["หินดาด",[30210]],["ห้วยบง",[30210]],["โนนเมืองพัฒนา",[30210]]]],["บัวลาย",[["บัวลาย",[30120]],["หนองหว้า",[30120]],["เมืองพะไล",[30120]],["โนนจาน",[30120]]]],["บัวใหญ่",[["กุดจอก",[30120]],["ขุนทอง",[30120]],["ดอนตะหนิน",[30120]],["ด่านช้าง",[30120]],["บัวใหญ่",[30120]],["หนองบัวสะอาด",[30120]],["หนองแจ้งใหญ่",[30120]],["ห้วยยาง",[30120]],["เสมาใหญ่",[30120]],["โนนทองหลาง",[30120]]]],["บ้านเหลื่อม",[["ช่อระกา",[30350]],["บ้านเหลื่อม",[30350]],["วังโพธิ์",[30350]],["โคกกระเบื้อง",[30350]]]],["ประทาย",[["กระทุ่มราย",[30180]],["ดอนมัน",[30180]],["ตลาดไทร",[30180]],["ทุ่งสว่าง",[30180]],["นางรำ",[30180]],["ประทาย",[30180]],["วังไม้แดง",[30180]],["หนองค่าย",[30180]],["หนองพลวง",[30180]],["หันห้วยทราย",[30180]],["เมืองโดน",[30180]],["โคกกลาง",[30180]],["โนนเพ็ด",[30180]]]],["ปักธงชัย",[["งิ้ว",[30150]],["ดอน",[30150]],["ตะขบ",[30150]],["ตะคุ",[30150]],["ตูม",[30150]],["ธงชัยเหนือ",[30150]],["นกออก",[30150]],["บ่อปลาทอง",[30150]],["ภูหลวง",[30150]],["ลำนางแก้ว",[30150]],["สะแกราช",[30150]],["สำโรง",[30150]],["สุขเกษม",[30150]],["เกษมทรัพย์",[30150]],["เมืองปัก",[30150]],["โคกไทย",[30150]]]],["ปากช่อง",[["กลางดง",[30320]],["ขนงพระ",[30130]],["คลองม่วง",[30130]],["จันทึก",[30130]],["ปากช่อง",[30130]],["พญาเย็น",[30320]],["วังกะทะ",[30130]],["วังไทร",[30130]],["หนองน้ำแดง",[30130]],["หนองสาหร่าย",[30130]],["หมูสี",[30130]],["โป่งตาลอง",[30130]]]],["พระทองคำ",[["ทัพรั้ง",[30220]],["พังเทียม",[30220]],["มาบกราด",[30220]],["สระพระ",[30220]],["หนองหอย",[30220]]]],["พิมาย",[["กระชอน",[30110]],["กระเบื้องใหญ่",[30110]],["ชีวาน",[30110]],["ดงใหญ่",[30110]],["ท่าหลวง",[30110]],["ธารละหลอด",[30110]],["นิคมสร้างตนเอง",[30110]],["รังกาใหญ่",[30110]],["สัมฤทธิ์",[30110]],["หนองระเวียง",[30110]],["โบสถ์",[30110]],["ในเมือง",[30110]]]],["ลำทะเมนชัย",[["ขุย",[30270]],["ช่องแมว",[30270]],["บ้านยาง",[30270]],["ไพล",[30270]]]],["วังน้ำเขียว",[["ระเริง",[30150]],["วังน้ำเขียว",[30370]],["วังหมี",[30370]],["อุดมทรัพย์",[30370]],["ไทยสามัคคี",[30370]]]],["สีคิ้ว",[["กฤษณา",[30140]],["กุดน้อย",[30140]],["คลองไผ่",[30340]],["ดอนเมือง",[30140]],["บ้านหัน",[30140]],["มิตรภาพ",[30140]],["ลาดบัวขาว",[30340]],["วังโรงใหญ่",[30140]],["สีคิ้ว",[30140]],["หนองน้ำใส",[30140]],["หนองบัวน้อย",[30140]],["หนองหญ้าขาว",[30140]]]],["สีดา",[["สามเมือง",[30430]],["สีดา",[30430]],["หนองตาดใหญ่",[30430]],["โนนประดู่",[30430]],["โพนทอง",[30430]]]],["สูงเนิน",[["กุดจิก",[30380]],["นากลาง",[30380]],["บุ่งขี้เหล็ก",[30170]],["มะเกลือเก่า",[30170]],["มะเกลือใหม่",[30170]],["สูงเนิน",[30170]],["หนองตะไก้",[30380]],["เสมา",[30170]],["โคราช",[30170]],["โค้งยาง",[30170]],["โนนค่า",[30170]]]],["หนองบุญมาก",[["บ้านใหม่",[30410]],["ลุงเขว้า",[30410]],["สารภี",[30410]],["หนองตะไก้",[30410]],["หนองบุนนาก",[30410]],["หนองหัวแรต",[30410]],["หนองไม้ไผ่",[30410]],["แหลมทอง",[30410]],["ไทยเจริญ",[30410]]]],["ห้วยแถลง",[["กงรถ",[30240]],["งิ้ว",[30240]],["ตะโก",[30240]],["ทับสวาย",[30240]],["หลุ่งตะเคียน",[30240]],["หลุ่งประดู่",[30240]],["หินดาด",[30240]],["ห้วยแคน",[30240]],["ห้วยแถลง",[30240]],["เมืองพลับพลา",[30240]]]],["เฉลิมพระเกียรติ",[["ช้างทอง",[30230]],["ท่าช้าง",[30230]],["พระพุทธ",[30230]],["หนองงูเหลือม",[30000]],["หนองยาง",[30230]]]],["เทพารักษ์",[["บึงปรือ",[30210]],["วังยายทอง",[30210]],["สำนักตะคร้อ",[30210]],["หนองแวง",[30210]]]],["เมืองนครราชสีมา",[["จอหอ",[30310]],["ตลาด",[30310]],["บ้านเกาะ",[30000]],["บ้านโพธิ์",[30310]],["บ้านใหม่",[30000]],["ปรุใหญ่",[30000]],["พลกรัง",[30000]],["พะเนา",[30000]],["พุดซา",[30000]],["มะเริง",[30000]],["สีมุม",[30000]],["สุรนารี",[30000]],["หนองกระทุ่ม",[30000]],["หนองจะบก",[30000]],["หนองบัวศาลา",[30000]],["หนองระเวียง",[30000]],["หนองไข่น้ำ",[30310]],["หนองไผ่ล้อม",[30000]],["หมื่นไวย",[30000]],["หัวทะเล",[30000]],["โคกกรวด",[30280]],["โคกสูง",[30310]],["โพธิ์กลาง",[30000]],["ในเมือง",[30000]],["ไชยมงคล",[30000]]]],["เมืองยาง",[["กระเบื้องนอก",[30270]],["ละหานปลาค้าว",[30270]],["เมืองยาง",[30270]],["โนนอุดม",[30270]]]],["เสิงสาง",[["กุดโบสถ์",[30330]],["บ้านราษฎร์",[30330]],["สระตะเคียน",[30330]],["สุขไพบูลย์",[30330]],["เสิงสาง",[30330]],["โนนสมบูรณ์",[30330]]]],["แก้งสนามนาง",[["บึงพะไล",[30440]],["บึงสำโรง",[30440]],["สีสุก",[30440]],["แก้งสนามนาง",[30440]],["โนนสำราญ",[30440]]]],["โชคชัย",[["กระโทก",[30190]],["ด่านเกวียน",[30190]],["ทุ่งอรุณ",[30190]],["ท่าจะหลุง",[30190]],["ท่าลาดขาว",[30190]],["ท่าอ่าง",[30190]],["ท่าเยี่ยม",[30190]],["พลับพลา",[30190]],["ละลมใหม่พัฒนา",[30190]],["โชคชัย",[30190]]]],["โนนสูง",[["ขามเฒ่า",[30160]],["จันอัด",[30160]],["ดอนชมพู",[30160]],["ดอนหวาย",[30160]],["ด่านคล้า",[30160]],["ธารปราสาท",[30420]],["บิง",[30160]],["พลสงคราม",[30160]],["มะค่า",[30160]],["ลำคอหงษ์",[30160]],["ลำมูล",[30160]],["หลุมข้าว",[30160]],["เมืองปราสาท",[30160]],["โตนด",[30160]],["โนนสูง",[30160]],["ใหม่",[30160]]]],["โนนแดง",[["ดอนยาวใหญ่",[30360]],["วังหิน",[30360]],["สำพะเนียง",[30360]],["โนนตาเถร",[30360]],["โนนแดง",[30360]]]],["โนนไทย",[["กำปัง",[30220]],["ค้างพลู",[30220]],["ด่านจาก",[30220]],["ถนนโพธิ์",[30220]],["บัลลังก์",[30220]],["บ้านวัง",[30220]],["มะค่า",[30220]],["สายออ",[30220]],["สำโรง",[30220]],["โนนไทย",[30220]]]]]],["นครศรีธรรมราช",[["ขนอม",[["ขนอม",[80210]],["ควนทอง",[80210]],["ท้องเนียน",[80210]]]],["จุฬาภรณ์",[["ควนหนองคว้า",[80130]],["ทุ่งโพธิ์",[80130]],["นาหมอบุญ",[80130]],["บ้านควนมุด",[80180]],["บ้านชะอวด",[80180]],["สามตำบล",[80130]]]],["ฉวาง",[["กะเปียด",[80260]],["จันดี",[80250]],["ฉวาง",[80150]],["นากะชะ",[80150]],["นาเขลียง",[80260]],["นาแว",[80260]],["ละอาย",[80250]],["ห้วยปริก",[80260]],["ไม้เรียง",[80260]],["ไสหร้า",[80150]]]],["ชะอวด",[["ขอนหาด",[80180]],["ควนหนองหงษ์",[80180]],["ชะอวด",[80180]],["ท่าประจะ",[80180]],["ท่าเสม็ด",[80180]],["นางหลง",[80180]],["บ้านตูล",[80180]],["วังอ่าง",[80180]],["เกาะขันธ์",[80180]],["เขาพระทอง",[80180]],["เคร็ง",[80180]]]],["ช้างกลาง",[["ช้างกลาง",[80250]],["สวนขัน",[80250]],["หลักช้าง",[80250]]]],["ถ้ำพรรณรา",[["คลองเส",[80260]],["ดุสิต",[80260]],["ถ้ำพรรณรา",[80260]]]],["ทุ่งสง",[["กะปาง",[80310]],["ควนกรด",[80110]],["ชะมาย",[80110]],["ถ้ำใหญ่",[80110]],["ที่วัง",[80110]],["นาหลวงเสน",[80110]],["นาโพธิ์",[80110]],["นาไม้ไผ่",[80110]],["น้ำตก",[80110]],["ปากแพรก",[80110]],["หนองหงส์",[80110]],["เขาขาว",[80110]],["เขาโร",[80110]]]],["ทุ่งใหญ่",[["กรุงหยัน",[80240]],["กุแหระ",[80240]],["ทุ่งสัง",[80240]],["ทุ่งใหญ่",[80240]],["ท่ายาง",[80240]],["บางรูป",[80240]],["ปริก",[80240]]]],["ท่าศาลา",[["กลาย",[80160]],["ดอนตะโก",[80160]],["ตลิ่งชัน",[80160]],["ท่าขึ้น",[80160]],["ท่าศาลา",[80160]],["สระแก้ว",[80160]],["หัวตะพาน",[80160]],["โพธิ์ทอง",[80160]],["โมคลาน",[80160]],["ไทยบุรี",[80160]]]],["นบพิตำ",[["กรุงชิง",[80160]],["กะหรอ",[80160]],["นบพิตำ",[80160]],["นาเหรง",[80160]]]],["นาบอน",[["ทุ่งสง",[80220]],["นาบอน",[80220]],["แก้วแสน",[80220]]]],["บางขัน",[["บางขัน",[80360]],["บ้านนิคม",[80360]],["บ้านลำนาว",[80360]],["วังหิน",[80360]]]],["ปากพนัง",[["ขนาบนาก",[80140]],["คลองกระบือ",[80370]],["คลองน้อย",[80330]],["ชะเมา",[80330]],["ท่าพยา",[80140]],["บางตะพง",[80370]],["บางพระ",[80140]],["บางศาลา",[80370]],["บ้านเพิง",[80140]],["บ้านใหม่",[80370]],["ปากพนัง",[80140]],["ปากพนังฝั่งตะวันตก",[80370]],["ปากพนังฝั่งตะวันออก",[80140]],["ปากแพรก",[80140]],["ป่าระกำ",[80370]],["หูล่อง",[80370]],["เกาะทวด",[80330]],["แหลมตะลุมพุก",[80140]]]],["พรหมคีรี",[["ทอนหงส์",[80320]],["นาเรียง",[80320]],["บ้านเกาะ",[80320]],["พรหมโลก",[80320]],["อินคีรี",[80320]]]],["พระพรหม",[["ช้างซ้าย",[80000]],["ท้ายสำเภา",[80000]],["นาพรุ",[80000]],["นาสาร",[80000]]]],["พิปูน",[["กะทูน",[80270]],["ควนกลาง",[80270]],["พิปูน",[80270]],["ยางค้อม",[80270]],["เขาพระ",[80270]]]],["ร่อนพิบูลย์",[["ควนชุม",[80130]],["ควนพัง",[80130]],["ควนเกย",[80130]],["ร่อนพิบูลย์",[80130]],["หินตก",[80350]],["เสาธง",[80350]]]],["ลานสกา",[["กำโลน",[80230]],["ขุนทะเล",[80230]],["ท่าดี",[80230]],["ลานสกา",[80230]],["เขาแก้ว",[80230]]]],["สิชล",[["ฉลอง",[80120]],["ทุ่งปรัง",[80120]],["ทุ่งใส",[80120]],["สิชล",[80120]],["สี่ขีด",[80120]],["เขาน้อย",[80120]],["เทพราช",[80340]],["เปลี่ยน",[80120]],["เสาเภา",[80340]]]],["หัวไทร",[["ควนชะลิก",[80170]],["ทรายขาว",[80170]],["ท่าซอม",[80170]],["บางนบ",[80170]],["บ้านราม",[80170]],["รามแก้ว",[80170]],["หน้าสตน",[80170]],["หัวไทร",[80170]],["เกาะเพชร",[80170]],["เขาพังไกร",[80170]],["แหลม",[80170]]]],["เฉลิมพระเกียรติ",[["ดอนตรอ",[80290]],["ทางพูน",[80290]],["สวนหลวง",[80190]],["เชียรเขา",[80190]]]],["เชียรใหญ่",[["การะเกด",[80190]],["ท่าขนาน",[80190]],["ท้องลำเจียก",[80190]],["บ้านกลาง",[80190]],["บ้านเนิน",[80190]],["เขาพระบาท",[80190]],["เชียรใหญ่",[80190]],["เสือหึง",[80190]],["แม่เจ้าอยู่หัว",[80190]],["ไสหมาก",[80190]]]],["เมืองนครศรีธรรมราช",[["กำแพงเซา",[80280]],["คลัง",[80000]],["ท่างิ้ว",[80280]],["ท่าซัก",[80000]],["ท่าวัง",[80000]],["ท่าเรือ",[80000]],["ท่าไร่",[80000]],["นาทราย",[80280]],["นาเคียน",[80000]],["บางจาก",[80330]],["ปากนคร",[80000]],["ปากพูน",[80000]],["มะม่วงสองต้น",[80000]],["โพธิ์เสด็จ",[80000]],["ในเมือง",[80000]],["ไชยมนตรี",[80000]]]]]],["นครสวรรค์",[["ชุมตาบง",[["ชุมตาบง",[60150]],["ปางสวรรค์",[60150]]]],["ชุมแสง",[["ฆะมัง",[60120]],["ชุมแสง",[60120]],["ทับกฤช",[60250]],["ทับกฤชใต้",[60250]],["ท่าไม้",[60120]],["บางเคียน",[60120]],["พันลาน",[60250]],["พิกุล",[60120]],["หนองกระเจา",[60120]],["เกยไชย",[60120]],["โคกหม้อ",[60120]],["ไผ่สิงห์",[60120]]]],["ตากฟ้า",[["ตากฟ้า",[60190]],["พุนกยูง",[60190]],["ลำพยนต์",[60190]],["สุขสำราญ",[60190]],["หนองพิกุล",[60190]],["อุดมธัญญา",[60190]],["เขาชายธง",[60190]]]],["ตาคลี",[["จันเสน",[60260]],["ช่องแค",[60210]],["ตาคลี",[60140]],["พรหมนิมิต",[60210]],["ลาดทิพรส",[60260]],["สร้อยทอง",[60210]],["หนองหม้อ",[60140]],["หนองโพ",[60140]],["หัวหวาย",[60140]],["ห้วยหอม",[60210]]]],["ท่าตะโก",[["ดอนคา",[60160]],["ทำนบ",[60160]],["ท่าตะโก",[60160]],["พนมรอก",[60160]],["พนมเศษ",[60160]],["วังมหากร",[60160]],["วังใหญ่",[60160]],["สายลำโพง",[60160]],["หนองหลวง",[60160]],["หัวถนน",[60160]]]],["บรรพตพิสัย",[["ด่านช้าง",[60180]],["ตาขีด",[60180]],["ตาสัง",[60180]],["ท่างิ้ว",[60180]],["บางตาหงาย",[60180]],["บางแก้ว",[60180]],["บึงปลาทู",[60180]],["บ้านแดน",[60180]],["หนองกรด",[60180]],["หนองตางู",[60180]],["หูกวาง",[60180]],["อ่างทอง",[60180]],["เจริญผล",[60180]]]],["พยุหะคีรี",[["ท่าน้ำอ้อย",[60130]],["นิคมเขาบ่อแก้ว",[60130]],["น้ำทรง",[60130]],["พยุหะ",[60130]],["ม่วงหัก",[60130]],["ยางขาว",[60130]],["ย่านมัทรี",[60130]],["สระทะเล",[60130]],["เขากะลา",[60130]],["เขาทอง",[60130]],["เนินมะกอก",[60130]]]],["ลาดยาว",[["บ้านไร่",[60150]],["มาบแก",[60150]],["ลาดยาว",[60150]],["วังม้า",[60150]],["วังเมือง",[60150]],["ศาลเจ้าไก่ต่อ",[60150]],["สระแก้ว",[60150]],["สร้อยละคร",[60150]],["หนองนมวัว",[60150]],["หนองยาว",[60150]],["ห้วยน้ำหอม",[60150]],["เนินขี้เหล็ก",[60150]]]],["หนองบัว",[["ทุ่งทอง",[60110]],["ธารทหาร",[60110]],["วังบ่อ",[60110]],["หนองกลับ",[60110]],["หนองบัว",[60110]],["ห้วยถั่วเหนือ",[60110]],["ห้วยถั่วใต้",[60110]],["ห้วยร่วม",[60110]],["ห้วยใหญ่",[60110]]]],["เก้าเลี้ยว",[["มหาโพธิ",[60230]],["หนองเต่า",[60230]],["หัวดง",[60230]],["เก้าเลี้ยว",[60230]],["เขาดิน",[60230]]]],["เมืองนครสวรรค์",[["กลางแดด",[60000]],["ตะเคียนเลื่อน",[60000]],["นครสวรรค์ตก",[60000]],["นครสวรรค์ออก",[60000]],["บางพระหลวง",[60000]],["บางม่วง",[60000]],["บึงเสนาท",[60000]],["บ้านมะเกลือ",[60000]],["บ้านแก่ง",[60000]],["ปากน้ำโพ",[60000]],["พระนอน",[60000]],["วัดไทรย์",[60000]],["หนองกรด",[60240]],["หนองกระโดน",[60240]],["หนองปลิง",[60000]],["เกรียงไกร",[60000]],["แควใหญ่",[60000]]]],["แม่วงก์",[["วังซ่าน",[60150]],["เขาชนกัน",[60150]],["แม่วงก์",[60150]],["แม่เล่ย์",[60150]]]],["แม่เปิน",[["แม่เปิน",[60150]]]],["โกรกพระ",[["นากลาง",[60170]],["บางประมุง",[60170]],["บางมะฝ่อ",[60170]],["ยางตาล",[60170]],["ศาลาแดง",[60170]],["หาดสูง",[60170]],["เนินกว้าว",[60170]],["เนินศาลา",[60170]],["โกรกพระ",[60170]]]],["ไพศาลี",[["ตะคร้อ",[60220]],["นาขอม",[60220]],["วังข่อย",[60220]],["วังน้ำลัด",[60220]],["สำโรงชัย",[60220]],["โคกเดื่อ",[60220]],["โพธิ์ประสาท",[60220]],["ไพศาลี",[60220]]]]]],["นนทบุรี",[["บางกรวย",[["บางกรวย",[11130]],["บางขนุน",[11130]],["บางขุนกอง",[11130]],["บางคูเวียง",[11130]],["บางสีทอง",[11130]],["ปลายบาง",[11130]],["มหาสวัสดิ์",[11130]],["วัดชลอ",[11130]],["ศาลากลาง",[11130]]]],["บางบัวทอง",[["บางคูรัด",[11110]],["บางบัวทอง",[11110]],["บางรักพัฒนา",[11110]],["บางรักใหญ่",[11110]],["พิมลราช",[11110]],["ละหาร",[11110]],["ลำโพ",[11110]],["โสนลอย",[11110]]]],["บางใหญ่",[["บางม่วง",[11140]],["บางเลน",[11140]],["บางแม่นาง",[11140]],["บางใหญ่",[11140]],["บ้านใหม่",[11140]],["เสาธงหิน",[11140]]]],["ปากเกร็ด",[["คลองข่อย",[11120]],["คลองพระอุดม",[11120]],["คลองเกลือ",[11120]],["ท่าอิฐ",[11120]],["บางตลาด",[11120]],["บางตะไนย์",[11120]],["บางพลับ",[11120]],["บางพูด",[11120]],["บ้านใหม่",[11120]],["ปากเกร็ด",[11120]],["อ้อมเกร็ด",[11120]],["เกาะเกร็ด",[11120]]]],["เมืองนนทบุรี",[["ตลาดขวัญ",[11000]],["ท่าทราย",[11000]],["บางกระสอ",[11000]],["บางกร่าง",[11000]],["บางรักน้อย",[11000]],["บางศรีเมือง",[11000]],["บางเขน",[11000]],["บางไผ่",[11000]],["สวนใหญ่",[11000]],["ไทรม้า",[11000]]]],["ไทรน้อย",[["ขุนศรี",[11150]],["คลองขวาง",[11150]],["ทวีวัฒนา",[11150]],["ราษฎร์นิยม",[11150]],["หนองเพรางาย",[11150]],["ไทรน้อย",[11150]],["ไทรใหญ่",[11150]]]]]],["นราธิวาส",[["จะแนะ",[["จะแนะ",[96220]],["ช้างเผือก",[96220]],["ดุซงญอ",[96220]],["ผดุงมาตร",[96220]]]],["ตากใบ",[["นานาค",[96110]],["บางขุนทอง",[96110]],["พร่อน",[96110]],["ศาลาใหม่",[96110]],["เกาะสะท้อน",[96110]],["เจ๊ะเห",[96110]],["โฆษิต",[96110]],["ไพรวัน",[96110]]]],["บาเจาะ",[["กาเยาะมาตี",[96170]],["บาเจาะ",[96170]],["บาเระเหนือ",[96170]],["บาเระใต้",[96170]],["ปะลุกาสาเมาะ",[96170]],["ลุโบะสาวอ",[96170]]]],["ยี่งอ",[["จอเบาะ",[96180]],["ตะปอเยาะ",[96180]],["ยี่งอ",[96180]],["ละหาร",[96180]],["ลุโบะบายะ",[96180]],["ลุโบะบือซา",[96180]]]],["ระแงะ",[["กาลิซา",[96130]],["ตันหยงมัส",[96130]],["ตันหยงลิมอ",[96130]],["บองอ",[96220]],["บาโงสะโต",[96130]],["มะรือโบตก",[96130]],["เฉลิม",[96130]]]],["รือเสาะ",[["บาตง",[96150]],["รือเสาะ",[96150]],["รือเสาะออก",[96150]],["ลาโละ",[96150]],["สามัคคี",[96150]],["สาวอ",[96150]],["สุวารี",[96150]],["เรียง",[96150]],["โคกสะตอ",[96150]]]],["ศรีสาคร",[["กาหลง",[96210]],["ซากอ",[96210]],["ตะมะยูง",[96210]],["ศรีบรรพต",[96210]],["ศรีสาคร",[96210]],["เชิงคีรี",[96210]]]],["สุคิริน",[["ภูเขาทอง",[96190]],["มาโมง",[96190]],["ร่มไทร",[96190]],["สุคิริน",[96190]],["เกียร์",[96190]]]],["สุไหงปาดี",[["กาวะ",[96140]],["ปะลุรู",[96140]],["ริโก๋",[96140]],["สากอ",[96140]],["สุไหงปาดี",[96140]],["โต๊ะเด็ง",[96140]]]],["สุไหงโก-ลก",[["ปาเสมัส",[96120]],["ปูโยะ",[96120]],["มูโนะ",[96120]],["สุไหงโก-ลก",[96120]]]],["เจาะไอร้อง",[["จวบ",[96130]],["บูกิต",[96130]],["มะรือโบออก",[96130]]]],["เมืองนราธิวาส",[["กะลุวอ",[96000]],["กะลุวอเหนือ",[96000]],["บางนาค",[96000]],["บางปอ",[96000]],["มะนังตายอ",[96000]],["ลำภู",[96000]],["โคกเคียน",[96000]]]],["แว้ง",[["กายูคละ",[96160]],["ฆอเลาะ",[96160]],["เอราวัณ",[96160]],["แม่ดง",[96160]],["แว้ง",[96160]],["โละจูด",[96160]]]]]],["น่าน",[["ทุ่งช้าง",[["งอบ",[55130]],["ทุ่งช้าง",[55130]],["ปอน",[55130]],["และ",[55130]]]],["ท่าวังผา",[["จอมพระ",[55140]],["ตาลชุม",[55140]],["ท่าวังผา",[55140]],["ป่าคา",[55140]],["ผาตอ",[55140]],["ผาทอง",[55140]],["ยม",[55140]],["ริม",[55140]],["ศรีภูมิ",[55140]],["แสนทอง",[55140]]]],["นาน้อย",[["นาน้อย",[55150]],["น้ำตก",[55150]],["บัวใหญ่",[55150]],["ศรีษะเกษ",[55150]],["สถาน",[55150]],["สันทะ",[55150]],["เชียงของ",[55150]]]],["นาหมื่น",[["นาทะนุง",[55180]],["บ่อแก้ว",[55180]],["ปิงหลวง",[55180]],["เมืองลี",[55180]]]],["บ่อเกลือ",[["ดงพญา",[55220]],["บ่อเกลือเหนือ",[55220]],["บ่อเกลือใต้",[55220]],["ภูฟ้า",[55220]]]],["บ้านหลวง",[["บ้านพี้",[55190]],["บ้านฟ้า",[55190]],["ป่าคาหลวง",[55190]],["สวด",[55190]]]],["ปัว",[["ปัว",[55120]],["ป่ากลาง",[55120]],["ภูคา",[55120]],["วรนคร",[55120]],["ศิลาเพชร",[55120]],["ศิลาแลง",[55120]],["สกาด",[55120]],["สถาน",[55120]],["อวน",[55120]],["เจดีย์ชัย",[55120]],["แงง",[55120]],["ไชยวัฒนา",[55120]]]],["ภูเพียง",[["ท่าน้าว",[55000]],["นาปัง",[55000]],["น้ำเกี๋ยน",[55000]],["น้ำแก่น",[55000]],["ฝายแก้ว",[55000]],["ม่วงตึ๊ด",[55000]],["เมืองจัง",[55000]]]],["สองแคว",[["ชนแดน",[55160]],["นาไร่หลวง",[55160]],["ยอด",[55160]]]],["สันติสุข",[["ดู่พงษ์",[55210]],["ป่าแลวหลวง",[55210]],["พงษ์",[55210]]]],["เฉลิมพระเกียรติ",[["ขุนน่าน",[55130]],["ห้วยโก๋น",[55130]]]],["เชียงกลาง",[["พญาแก้ว",[55160]],["พระธาตุ",[55160]],["พระพุทธบาท",[55160]],["เชียงกลาง",[55160]],["เชียงคาน",[55160]],["เปือ",[55160]]]],["เมืองน่าน",[["กองควาย",[55000]],["ดู่ใต้",[55000]],["ถืมตอง",[55000]],["นาซาว",[55000]],["บ่อ",[55000]],["ผาสิงห์",[55000]],["สวก",[55000]],["สะเนียน",[55000]],["เรือง",[55000]],["ในเวียง",[55000]],["ไชยสถาน",[55000]]]],["เวียงสา",[["กลางเวียง",[55110]],["ขึ่ง",[55110]],["จอมจันทร์",[55110]],["ตาลชุม",[55110]],["ทุ่งศรีทอง",[55110]],["นาเหลือง",[55110]],["น้ำปั้ว",[55110]],["น้ำมวบ",[55110]],["ปงสนุก",[55110]],["ยาบหัวนา",[55110]],["ส้าน",[55110]],["ส้านนาหนองใหม่",[55110]],["อ่ายนาไลย",[55110]],["แม่ขะนิง",[55110]],["แม่สา",[55110]],["แม่สาคร",[55110]],["ไหล่น่าน",[55110]]]],["แม่จริม",[["น้ำปาย",[55170]],["น้ำพาง",[55170]],["หนองแดง",[55170]],["หมอเมือง",[55170]],["แม่จริม",[55170]]]]]],["บึงกาฬ",[["บึงโขงหลง",[["ดงบัง",[38220]],["ท่าดอกคำ",[38220]],["บึงโขงหลง",[38220]],["โพธิ์หมากแข้ง",[38220]]]],["บุ่งคล้า",[["บุ่งคล้า",[38000]],["หนองเดิ่น",[38000]],["โคกกว้าง",[38000]]]],["ปากคาด",[["นากั้ง",[38190]],["นาดง",[38190]],["ปากคาด",[38190]],["สมสนุก",[38190]],["หนองยอง",[38190]],["โนนศิลา",[38190]]]],["พรเจริญ",[["ดอนหญ้านาง",[38180]],["ป่าแฝก",[38180]],["พรเจริญ",[38180]],["วังชมภู",[38180]],["ศรีชมภู",[38180]],["ศรีสำราญ",[38180]],["หนองหัวช้าง",[38180]]]],["ศรีวิไล",[["ชุมภูพร",[38210]],["นาสะแบง",[38210]],["นาสิงห์",[38210]],["นาแสง",[38210]],["ศรีวิไล",[38210]]]],["เซกา",[["ซาง",[38150]],["ท่ากกแดง",[38150]],["ท่าสะอาด",[38150]],["น้ำจั้น",[38150]],["บ้านต้อง",[38150]],["ป่งไฮ",[38150]],["หนองทุ่ม",[38150]],["เซกา",[38150]],["โสกก่าม",[38150]]]],["เมืองบึงกาฬ",[["คำนาดี",[38000]],["ชัยพร",[38000]],["นาสวรรค์",[38000]],["บึงกาฬ",[38000]],["วิศิษฐ์",[38000]],["หนองเข็ง",[38000]],["หนองเลิง",[38000]],["หอคำ",[38000]],["โคกก่อง",[38000]],["โนนสมบูรณ์",[38000]],["โป่งเปือย",[38000]],["ไคสี",[38000]]]],["โซ่พิสัย",[["คำแก้ว",[38170]],["ถ้ำเจริญ",[38170]],["บัวตูม",[38170]],["ศรีชมภู",[38170]],["หนองพันทา",[38170]],["เหล่าทอง",[38170]],["โซ่",[38170]]]]]],["บุรีรัมย์",[["กระสัง",[["กระสัง",[31160]],["กันทรารมย์",[31160]],["ชุมแสง",[31160]],["บ้านปรือ",[31160]],["ลำดวน",[31160]],["ศรีภูมิ",[31160]],["สองชั้น",[31160]],["สูงเนิน",[31160]],["หนองเต็ง",[31160]],["ห้วยสำราญ",[31160]],["เมืองไผ่",[31160]]]],["คูเมือง",[["คูเมือง",[31190]],["ตูมใหญ่",[31190]],["บ้านแพ",[31190]],["ปะเคียบ",[31190]],["พรสำราญ",[31190]],["หนองขมาร",[31190]],["หินเหล็กไฟ",[31190]]]],["ชำนิ",[["ชำนิ",[31110]],["ช่อผกา",[31110]],["ละลวด",[31110]],["หนองปล่อง",[31110]],["เมืองยาง",[31110]],["โคกสนวน",[31110]]]],["นางรอง",[["ก้านเหลือง",[31110]],["ชุมแสง",[31110]],["ถนนหัก",[31110]],["ทรัพย์พระยา",[31110]],["ทุ่งแสงทอง",[31110]],["นางรอง",[31110]],["บ้านสิงห์",[31110]],["ลำไทรโยง",[31110]],["สะเดา",[31110]],["หนองกง",[31110]],["หนองยายพิมพ์",[31110]],["หนองโบสถ์",[31110]],["หนองโสน",[31110]],["หนองไทร",[31110]],["หัวถนน",[31110]]]],["นาโพธิ์",[["ดอนกอก",[31230]],["นาโพธิ์",[31230]],["บ้านคู",[31230]],["บ้านดู่",[31230]],["ศรีสว่าง",[31230]]]],["บ้านกรวด",[["จันทบเพชร",[31180]],["บึงเจริญ",[31180]],["บ้านกรวด",[31180]],["ปราสาท",[31180]],["สายตะกู",[31180]],["หนองไม้งาม",[31180]],["หินลาด",[31180]],["เขาดินเหนือ",[31180]],["โนนเจริญ",[31180]]]],["บ้านด่าน",[["บ้านด่าน",[31000]],["ปราสาท",[31000]],["วังเหนือ",[31000]],["โนนขวาง",[31000]]]],["บ้านใหม่ไชยพจน์",[["กู่สวนแตง",[31120]],["ทองหลาง",[31120]],["หนองเยือง",[31120]],["หนองแวง",[31120]],["แดงใหญ่",[31120]]]],["ประโคนชัย",[["จรเข้มาก",[31140]],["ตะโกตาพิ",[31140]],["บ้านไทร",[31140]],["ประทัดบุ",[31140]],["ประโคนชัย",[31140]],["ปังกู",[31140]],["ละเวี้ย",[31140]],["สี่เหลี่ยม",[31140]],["หนองบอน",[31140]],["เขาคอก",[31140]],["แสลงโทน",[31140]],["โคกตูม",[31140]],["โคกมะขาม",[31140]],["โคกม้า",[31140]],["โคกย่าง",[31140]],["ไพศาล",[31140]]]],["ปะคำ",[["ปะคำ",[31220]],["หนองบัว",[31220]],["หูทำนบ",[31220]],["โคกมะม่วง",[31220]],["ไทยเจริญ",[31220]]]],["พลับพลาชัย",[["จันดุม",[31250]],["ป่าชัน",[31250]],["สะเดา",[31250]],["สำโรง",[31250]],["โคกขมิ้น",[31250]]]],["พุทไธสง",[["บ้านจาน",[31120]],["บ้านยาง",[31120]],["บ้านเป้า",[31120]],["บ้านแวง",[31120]],["พุทไธสง",[31120]],["มะเฟือง",[31120]],["หายโศก",[31120]]]],["ละหานทราย",[["ตาจง",[31170]],["ละหานทราย",[31170]],["สำโรงใหม่",[31170]],["หนองตะครอง",[31170]],["หนองแวง",[31170]],["โคกว่าน",[31170]]]],["ลำปลายมาศ",[["ตลาดโพธิ์",[31130]],["ทะเมนชัย",[31130]],["บุโพธิ์",[31130]],["บ้านยาง",[31130]],["ผไทรินทร์",[31130]],["ลำปลายมาศ",[31130]],["หนองกะทิง",[31130]],["หนองคู",[31130]],["หนองบัวโคก",[31130]],["หนองโดน",[31130]],["หินโคน",[31130]],["เมืองแฝก",[31130]],["แสลงพัน",[31130]],["โคกกลาง",[31130]],["โคกล่าม",[31130]],["โคกสะอาด",[31130]]]],["สตึก",[["กระสัง",[31150]],["ชุมแสง",[31150]],["ดอนมนต์",[31150]],["ทุ่งวัง",[31150]],["ท่าม่วง",[31150]],["นิคม",[31150]],["ร่อนทอง",[31150]],["สตึก",[31150]],["สนามชัย",[31150]],["สะแก",[31150]],["หนองใหญ่",[31150]],["เมืองแก",[31150]]]],["หนองกี่",[["ดอนอะราง",[31210]],["ทุ่งกระตาดพัฒนา",[31210]],["ทุ่งกระเต็น",[31210]],["ท่าโพธิ์ชัย",[31210]],["บุกระสัง",[31210]],["หนองกี่",[31210]],["เมืองไผ่",[31210]],["เย้ยปราสาท",[31210]],["โคกสว่าง",[31210]],["โคกสูง",[31210]]]],["หนองหงส์",[["สระทอง",[31240]],["สระแก้ว",[31240]],["หนองชัยศรี",[31240]],["ห้วยหิน",[31240]],["เมืองฝ้าย",[31240]],["เสาเดียว",[31240]],["ไทยสามัคคี",[31240]]]],["ห้วยราช",[["ตาเสา",[31000]],["บ้านตะโก",[31000]],["สนวน",[31000]],["สามแวง",[31000]],["ห้วยราช",[31000]],["ห้วยราชา",[31000]],["เมืองโพธิ์",[31000]],["โคกเหล็ก",[31000]]]],["เฉลิมพระเกียรติ",[["ตาเป๊ก",[31110]],["ถาวร",[31170]],["ยายแย้มวัฒนา",[31170]],["อีสานเขต",[31110]],["เจริญสุข",[31110]]]],["เมืองบุรีรัมย์",[["กระสัง",[31000]],["กลันทา",[31000]],["ชุมเห็ด",[31000]],["ถลุงเหล็ก",[31000]],["บัวทอง",[31000]],["บ้านบัว",[31000]],["บ้านยาง",[31000]],["พระครู",[31000]],["ลุมปุ๊ก",[31000]],["สวายจีก",[31000]],["สองห้อง",[31000]],["สะแกซำ",[31000]],["สะแกโพรง",[31000]],["หนองตาด",[31000]],["หลักเขต",[31000]],["อิสาณ",[31000]],["เมืองฝาง",[31000]],["เสม็ด",[31000]],["ในเมือง",[31000]]]],["แคนดง",[["ดงพลอง",[31150]],["สระบัว",[31150]],["หัวฝาย",[31150]],["แคนดง",[31150]]]],["โนนดินแดง",[["ลำนางรอง",[31260]],["ส้มป่อย",[31260]],["โนนดินแดง",[31260]]]],["โนนสุวรรณ",[["ดงอีจาน",[31110]],["ทุ่งจังหัน",[31110]],["โกรกแก้ว",[31110]],["โนนสุวรรณ",[31110]]]]]],["ปทุมธานี",[["คลองหลวง",[["คลองสอง",[12120]],["คลองสาม",[12120]],["คลองสี่",[12120]],["คลองหก",[12120]],["คลองหนึ่ง",[12120]],["คลองห้า",[12120]],["คลองเจ็ด",[12120]]]],["ธัญบุรี",[["บึงน้ำรักษ์",[12110]],["บึงยี่โถ",[12130]],["บึงสนั่น",[12110]],["ประชาธิปัตย์",[12130]],["รังสิต",[12110]],["ลำผักกูด",[12110]]]],["ลาดหลุมแก้ว",[["คลองพระอุดม",[12140]],["คูขวาง",[12140]],["คูบางหลวง",[12140]],["บ่อเงิน",[12140]],["ระแหง",[12140]],["ลาดหลุมแก้ว",[12140]],["หน้าไม้",[12140]]]],["ลำลูกกา",[["คูคต",[12130]],["บึงคอไห",[12150]],["บึงคำพร้อย",[12150]],["บึงทองหลาง",[12150]],["พืชอุดม",[12150]],["ลาดสวาย",[12150]],["ลำลูกกา",[12150]],["ลำไทร",[12150]]]],["สามโคก",[["กระแชง",[12160]],["คลองควาย",[12160]],["ท้ายเกาะ",[12160]],["บางกระบือ",[12160]],["บางเตย",[12160]],["บางโพธิ์เหนือ",[12160]],["บ้านงิ้ว",[12160]],["บ้านปทุม",[12160]],["สามโคก",[12160]],["เชียงรากน้อย",[12160]],["เชียงรากใหญ่",[12160]]]],["หนองเสือ",[["นพรัตน์",[12170]],["บึงกาสาม",[12170]],["บึงชำอ้อ",[12170]],["บึงบอน",[12170]],["บึงบา",[12170]],["ศาลาครุ",[12170]],["หนองสามวัง",[12170]]]],["เมืองปทุมธานี",[["บางกะดี",[12000]],["บางขะแยง",[12000]],["บางคูวัด",[12000]],["บางปรอก",[12000]],["บางพูด",[12000]],["บางพูน",[12000]],["บางหลวง",[12000]],["บางเดื่อ",[12000]],["บ้านกระแชง",[12000]],["บ้านกลาง",[12000]],["บ้านฉาง",[12000]],["บ้านใหม่",[12000]],["สวนพริกไทย",[12000]],["หลักหก",[12000]]]]]],["ประจวบคีรีขันธ์",[["กุยบุรี",[["กุยบุรี",[77150]],["กุยเหนือ",[77150]],["ดอนยายหนู",[77150]],["สามกระทาย",[77150]],["หาดขาม",[77150]],["เขาแดง",[77150]]]],["ทับสะแก",[["ทับสะแก",[77130]],["นาหูกวาง",[77130]],["ห้วยยาง",[77130]],["อ่างทอง",[77130]],["เขาล้าน",[77130]],["แสงอรุณ",[77130]]]],["บางสะพาน",[["กำเนิดนพคุณ",[77140]],["ชัยเกษม",[77190]],["ทองมงคล",[77230]],["ธงชัย",[77190]],["พงศ์ประศาสน์",[77140]],["ร่อนทอง",[77230]],["แม่รำพึง",[77140]]]],["บางสะพานน้อย",[["ช้างแรก",[77170]],["ทรายทอง",[77170]],["บางสะพาน",[77170]],["ปากแพรก",[77170]],["ไชยราช",[77170]]]],["ปราณบุรี",[["ปราณบุรี",[77120,77160]],["ปากน้ำปราณ",[77220]],["วังก์พง",[77120,77160]],["หนองตาแต้ม",[77120,77160]],["เขาจ้าว",[77120,77160]],["เขาน้อย",[77120,77160]]]],["สามร้อยยอด",[["ศาลาลัย",[77180]],["ศิลาลอย",[77180]],["สามร้อยยอด",[77120,77160]],["ไร่เก่า",[77180]],["ไร่ใหม่",[77180]]]],["หัวหิน",[["ทับใต้",[77110]],["บึงนคร",[77110]],["หนองพลับ",[77110]],["หนองแก",[77110]],["หัวหิน",[77110]],["หินเหล็กไฟ",[77110]],["ห้วยสัตว์ใหญ่",[77110]]]],["เมืองประจวบคีรีขันธ์",[["คลองวาฬ",[77000]],["บ่อนอก",[77210]],["ประจวบคีรีขันธ์",[77000]],["ห้วยทราย",[77000]],["อ่าวน้อย",[77210]],["เกาะหลัก",[77000]]]]]],["ปราจีนบุรี",[["กบินทร์บุรี",[["กบินทร์",[25110]],["นนทรี",[25110]],["นาแขม",[25110]],["บ่อทอง",[25110]],["บ้านนา",[25110]],["ย่านรี",[25110]],["ลาดตะเคียน",[25110]],["วังดาล",[25110]],["วังตะเคียน",[25110]],["วังท่าช้าง",[25110]],["หนองกี่",[25110]],["หาดนางแก้ว",[25110]],["เขาไม้แก้ว",[25110]],["เมืองเก่า",[25240]]]],["นาดี",[["ทุ่งโพธิ์",[25220]],["นาดี",[25220]],["บุพราหมณ์",[25220]],["สะพานหิน",[25220]],["สำพันตา",[25220]],["แก่งดินสอ",[25220]]]],["บ้านสร้าง",[["กระทุ่มแพ้ว",[25150]],["บางกระเบา",[25150]],["บางขาม",[25150]],["บางปลาร้า",[25150]],["บางพลวง",[25150]],["บางยาง",[25150]],["บางเตย",[25150]],["บางแตน",[25150]],["บ้านสร้าง",[25150]]]],["ประจันตคาม",[["คำโตนด",[25130]],["ดงบัง",[25130]],["บุฝ้าย",[25130]],["บ้านหอย",[25130]],["ประจันตคาม",[25130]],["หนองแก้ว",[25130]],["หนองแสง",[25130]],["เกาะลอย",[25130]],["โพธิ์งาม",[25130]]]],["ศรีมหาโพธิ",[["กรอกสมบูรณ์",[25140]],["ดงกระทงยาม",[25140]],["ท่าตูม",[25140]],["บางกุ้ง",[25140]],["บ้านทาม",[25140]],["ศรีมหาโพธิ",[25140]],["สัมพันธ์",[25140]],["หนองโพรง",[25140]],["หัวหว้า",[25140]],["หาดยาง",[25140]]]],["ศรีมโหสถ",[["คู้ลำพัน",[25190]],["โคกปีบ",[25190]],["โคกไทย",[25190]],["ไผ่ชะเลือด",[25190]]]],["เมืองปราจีนบุรี",[["ดงขี้เหล็ก",[25000]],["ดงพระราม",[25000]],["ท่างาม",[25000]],["บางบริบูรณ์",[25000]],["บางเดชะ",[25000]],["บ้านพระ",[25230]],["รอบเมือง",[25000]],["วัดโบสถ์",[25000]],["หน้าเมือง",[25000]],["เนินหอม",[25230]],["โคกไม้ลาย",[25230]],["โนนห้อม",[25000]],["ไม้เค็ด",[25230]]]]]],["ปัตตานี",[["กะพ้อ",[["กะรุบี",[94230]],["ตะโละดือรามัน",[94230]],["ปล่องหอย",[94230]]]],["ทุ่งยางแดง",[["ตะโละแมะนา",[94140]],["น้ำดำ",[94140]],["ปากู",[94140]],["พิเทน",[94140]]]],["ปะนาเระ",[["ควน",[94190]],["คอกกระบือ",[94130]],["ดอน",[94190]],["ท่าข้าม",[94130]],["ท่าน้ำ",[94130]],["บ้านกลาง",[94130]],["บ้านนอก",[94130]],["บ้านน้ำบ่อ",[94130]],["ปะนาเระ",[94130]],["พ่อมิ่ง",[94130]]]],["มายอ",[["กระหวะ",[94190]],["กระเสาะ",[94140]],["ตรัง",[94140]],["ถนน",[94140]],["ปะโด",[94140]],["ปานัน",[94140]],["มายอ",[94140]],["ลางา",[94190]],["ลุโบะยิไร",[94140]],["สะกำ",[94140]],["สาคอบน",[94140]],["สาคอใต้",[94140]],["เกาะจัน",[94140]]]],["ยะรัง",[["กระโด",[94160]],["กอลำ",[94160]],["คลองใหม่",[94160]],["ประจัน",[94160]],["ปิตูมุดี",[94160]],["ยะรัง",[94160]],["ระแว้ง",[94160]],["วัด",[94160]],["สะดาวา",[94160]],["สะนอ",[94160]],["เขาตูม",[94160]],["เมาะมาวี",[94160]]]],["ยะหริ่ง",[["จะรัง",[94150]],["ตอหลัง",[94150]],["ตะโละ",[94150]],["ตะโละกาโปร์",[94150]],["ตันหยงจึงงา",[94190]],["ตันหยงดาลอ",[94150]],["ตาลีอายร์",[94150]],["ตาแกะ",[94150]],["บางปู",[94150]],["บาโลย",[94190]],["ปิยามุมัง",[94150]],["ปุลากง",[94150]],["มะนังยง",[94150]],["ยามู",[94150]],["ราตาปันยัง",[94150]],["สาบัน",[94150]],["หนองแรต",[94150]],["แหลมโพธิ์",[94150]]]],["สายบุรี",[["กะดุนง",[94110]],["ตะบิ้ง",[94110]],["ตะลุบัน",[94110]],["ทุ่งคล้า",[94190]],["บางเก่า",[94110]],["บือเระ",[94110]],["ปะเสยะวอ",[94110]],["มะนังดาลำ",[94110]],["ละหาร",[94110]],["เตราะบอน",[94110]],["แป้น",[94110]]]],["หนองจิก",[["คอลอตันหยง",[94170]],["ดอนรัก",[94170]],["ดาโต๊ะ",[94170]],["ตุยง",[94170]],["ท่ากำชำ",[94170]],["บางตาวา",[94170]],["บางเขา",[94170]],["บ่อทอง",[94170]],["ปุโละปุโย",[94170]],["ยาบี",[94170]],["ลิปะสะโง",[94170]],["เกาะเปาะ",[94170]]]],["เมืองปัตตานี",[["กะมิยอ",[94000]],["คลองมานิง",[94000]],["จะบังติกอ",[94000]],["ตะลุโบะ",[94000]],["ตันหยงลุโละ",[94000]],["บานา",[94000]],["บาราเฮาะ",[94000]],["บาราโหม",[94000]],["ปะกาฮะรัง",[94000]],["ปุยุด",[94000]],["รูสะมิแล",[94000]],["สะบารัง",[94000]],["อาเนาะรู",[94000]]]],["แม่ลาน",[["ป่าไร่",[94180]],["ม่วงเตี้ย",[94180]],["แม่ลาน",[94180]]]],["โคกโพธิ์",[["ควนโนรี",[94180]],["ช้างให้ตก",[94120]],["ทรายขาว",[94120]],["ทุ่งพลา",[94180]],["ท่าเรือ",[94120]],["นาประดู่",[94180]],["นาเกตุ",[94120]],["บางโกระ",[94120]],["ปากล่อ",[94180]],["ป่าบอน",[94120]],["มะกรูด",[94120]],["โคกโพธิ์",[94120]]]],["ไม้แก่น",[["ดอนทราย",[94220]],["ตะโละไกรทอง",[94220]],["ไทรทอง",[94220]],["ไม้แก่น",[94220]]]]]],["พระนครศรีอยุธยา",[["ท่าเรือ",[["จำปา",[13130]],["ท่าหลวง",[18270]],["ท่าเจ้าสนุก",[13130]],["ท่าเรือ",[13130]],["บ้านร่อม",[13130]],["ปากท่า",[13130]],["วังแดง",[13130]],["ศาลาลอย",[13130]],["หนองขนาก",[13130]],["โพธิ์เอน",[13130]]]],["นครหลวง",[["คลองสะแก",[13260]],["ท่าช้าง",[13260]],["นครหลวง",[13260]],["บางพระครู",[13260]],["บางระกำ",[13260]],["บ่อโพง",[13260]],["บ้านชุ้ง",[13260]],["ปากจั่น",[13260]],["พระนอน",[13260]],["สามไถ",[13260]],["หนองปลิง",[13260]],["แม่ลา",[13260]]]],["บางซ้าย",[["บางซ้าย",[13270]],["ปลายกลัด",[13270]],["วังพัฒนา",[13270]],["เต่าเล่า",[13270]],["เทพมงคล",[13270]],["แก้วฟ้า",[13270]]]],["บางบาล",[["กบเจา",[13250]],["ทางช้าง",[13250]],["น้ำเต้า",[13250]],["บางชะนี",[13250]],["บางบาล",[13250]],["บางหลวง",[13250]],["บางหลวงโดด",[13250]],["บางหัก",[13250]],["บ้านกุ่ม",[13250]],["บ้านคลัง",[13250]],["พระขาว",[13250]],["มหาพราหมณ์",[13250]],["วัดตะกู",[13250]],["วัดยม",[13250]],["สะพานไทย",[13250]],["ไทรน้อย",[13250]]]],["บางปะหัน",[["ขยาย",[13220]],["ขวัญเมือง",[13220]],["ตานิม",[13220]],["ตาลเอน",[13220]],["ทับน้ำ",[13220]],["ทางกลาง",[13220]],["บางนางร้า",[13220]],["บางปะหัน",[13220]],["บางเดื่อ",[13220]],["บางเพลิง",[13220]],["บ้านขล้อ",[13220]],["บ้านม้า",[13220]],["บ้านลี่",[13220]],["พุทเลา",[13220]],["หันสัง",[13220]],["เสาธง",[13220]],["โพธิ์สามต้น",[13220]]]],["บางปะอิน",[["ขนอนหลวง",[13160]],["คลองจิก",[13160]],["คุ้งลาน",[13160]],["ตลาดเกรียบ",[13160]],["ตลิ่งชัน",[13160]],["บางกระสั้น",[13160]],["บางประแดง",[13160]],["บ้านกรด",[13160]],["บ้านพลับ",[13160]],["บ้านสร้าง",[13170]],["บ้านหว้า",[13160]],["บ้านเลน",[13160]],["บ้านแป้ง",[13160]],["บ้านโพ",[13160]],["วัดยม",[13160]],["สามเรือน",[13160]],["เกาะเกิด",[13160]],["เชียงรากน้อย",[13180]]]],["บางไทร",[["กกแก้วบูรพา",[13190]],["กระแชง",[13190]],["ช่างเหล็ก",[13190]],["ช้างน้อย",[13190]],["ช้างใหญ่",[13290]],["บางพลี",[13190]],["บางยี่โท",[13190]],["บางไทร",[13190]],["บ้านกลึง",[13190]],["บ้านม้า",[13190]],["บ้านเกาะ",[13190]],["บ้านแป้ง",[13190]],["ราชคราม",[13290]],["สนามชัย",[13190]],["หน้าไม้",[13190]],["ห่อหมก",[13190]],["เชียงรากน้อย",[13290]],["แคตก",[13190]],["แคออก",[13190]],["โคกช้าง",[13190]],["โพแตง",[13290]],["ไผ่พระ",[13190]],["ไม้ตรา",[13190]]]],["บ้านแพรก",[["คลองน้อย",[13240]],["บ้านแพรก",[13240]],["บ้านใหม่",[13240]],["สองห้อง",[13240]],["สำพะเนียง",[13240]]]],["ผักไห่",[["กุฎี",[13120]],["จักราช",[13280]],["ดอนลาน",[13280]],["ตาลาน",[13120]],["ท่าดินแดง",[13120]],["นาคู",[13280]],["บ้านแค",[13120]],["บ้านใหญ่",[13120]],["ผักไห่",[13120]],["ลาดชิด",[13120]],["ลาดน้ำเค็ม",[13120]],["ลำตะเคียน",[13280]],["หนองน้ำใหญ่",[13280]],["หน้าโคก",[13120]],["อมฤต",[13120]],["โคกช้าง",[13120]]]],["พระนครศรีอยุธยา",[["กะมัง",[13000]],["คลองตะเคียน",[13000]],["คลองสระบัว",[13000]],["คลองสวนพลู",[13000]],["ท่าวาสุกรี",[13000]],["บ้านป้อม",[13000]],["บ้านรุน",[13000]],["บ้านเกาะ",[13000]],["บ้านใหม่",[13000]],["ประตูชัย",[13000]],["ปากกราน",[13000]],["ภูเขาทอง",[13000]],["ลุมพลี",[13000]],["วัดตูม",[13000]],["สวนพริก",[13000]],["สำเภาล่ม",[13000]],["หอรัตนไชย",[13000]],["หันตรา",[13000]],["หัวรอ",[13000]],["เกาะเรียน",[13000]],["ไผ่ลิง",[13000]]]],["ภาชี",[["กระจิว",[13140]],["ดอนหญ้านาง",[13140]],["พระแก้ว",[13140]],["ภาชี",[13140]],["ระโสม",[13140]],["หนองน้ำใส",[13140]],["โคกม่วง",[13140]],["ไผ่ล้อม",[13140]]]],["มหาราช",[["กะทุ่ม",[13150]],["ท่าตอ",[13150]],["น้ำเต้า",[13150]],["บางนา",[13150]],["บ้านขวาง",[13150]],["บ้านนา",[13150]],["บ้านใหม่",[13150]],["พิตเพียน",[13150]],["มหาราช",[13150]],["หัวไผ่",[13150]],["เจ้าปลุก",[13150]],["โรงช้าง",[13150]]]],["ลาดบัวหลวง",[["คลองพระยาบันลือ",[13230]],["คู้สลอด",[13230]],["พระยาบันลือ",[13230]],["ลาดบัวหลวง",[13230]],["สามเมือง",[13230]],["สิงหนาท",[13230]],["หลักชัย",[13230]]]],["วังน้อย",[["ข้าวงาม",[13170]],["ชะแมบ",[13170]],["บ่อตาโล่",[13170]],["พยอม",[13170]],["ลำตาเสา",[13170]],["ลำไทร",[13170]],["วังจุฬา",[13170]],["วังน้อย",[13170]],["สนับทึบ",[13170]],["หันตะเภา",[13170]]]],["อุทัย",[["ข้าวเม่า",[13210]],["คานหาม",[13210]],["ธนู",[13210]],["บ้านช้าง",[13210]],["บ้านหีบ",[13210]],["สามบัณฑิต",[13210]],["หนองน้ำส้ม",[13210]],["หนองไม้ซุง",[13210]],["อุทัย",[13210]],["เสนา",[13210]],["โพสาวหาญ",[13210]]]],["เสนา",[["ชายนา",[13110]],["ดอนทอง",[13110]],["บางนมโค",[13110]],["บ้านกระทุ่ม",[13110]],["บ้านหลวง",[13110]],["บ้านแถว",[13110]],["บ้านแพน",[13110]],["บ้านโพธิ์",[13110]],["มารวิชัย",[13110]],["รางจรเข้",[13110]],["ลาดงา",[13110]],["สามกอ",[13110]],["สามตุ่ม",[13110]],["หัวเวียง",[13110]],["เจ้าเจ็ด",[13110]],["เจ้าเสด็จ",[13110]],["เสนา",[13110]]]]]],["พะเยา",[["จุน",[["จุน",[56150]],["ทุ่งรวงทอง",[56150]],["พระธาตุขิงแกง",[56150]],["ลอ",[56150]],["หงส์หิน",[56150]],["ห้วยข้าวก่ำ",[56150]],["ห้วยยางขาม",[56150]]]],["ดอกคำใต้",[["คือเวียง",[56120]],["ดงสุวรรณ",[56120]],["ดอกคำใต้",[56120]],["ดอนศรีชุม",[56120]],["บุญเกิด",[56120]],["บ้านถ้ำ",[56120]],["บ้านปิน",[56120]],["ป่าซาง",[56120]],["สว่างอารมณ์",[56120]],["สันโค้ง",[56120]],["หนองหล่ม",[56120]],["ห้วยลาน",[56120]]]],["ปง",[["ขุนควร",[56140]],["ควร",[56140]],["งิม",[56140]],["นาปรัง",[56140]],["ปง",[56140]],["ผาช้างน้อย",[56140]],["ออย",[56140]]]],["ภูกามยาว",[["ดงเจน",[56000]],["ห้วยแก้ว",[56000]],["แม่อิง",[56000]]]],["ภูซาง",[["ทุ่งกล้วย",[56110]],["ป่าสัก",[56110]],["ภูซาง",[56110]],["สบบง",[56110]],["เชียงแรง",[56110]]]],["เชียงคำ",[["ทุ่งผาสุข",[56110]],["น้ำแวน",[56110]],["ฝายกวาง",[56110]],["ร่มเย็น",[56110]],["หย่วน",[56110]],["อ่างทอง",[56110]],["เจดีย์คำ",[56110]],["เชียงบาน",[56110]],["เวียง",[56110]],["แม่ลาว",[56110]]]],["เชียงม่วน",[["บ้านมาง",[56160]],["สระ",[56160]],["เชียงม่วน",[56160]]]],["เมืองพะเยา",[["จำป่าหวาย",[56000]],["ท่าจำปี",[56000]],["ท่าวังทอง",[56000]],["บ้านตุ่น",[56000]],["บ้านต๊ำ",[56000]],["บ้านต๋อม",[56000]],["บ้านสาง",[56000]],["บ้านใหม่",[56000]],["สันป่าม่วง",[56000]],["เวียง",[56000]],["แม่กา",[56000]],["แม่ต๋ำ",[56000]],["แม่นาเรือ",[56000]],["แม่ปืม",[56000]],["แม่ใส",[56000]]]],["แม่ใจ",[["บ้านเหล่า",[56130]],["ป่าแฝก",[56130]],["ศรีถ้อย",[56130]],["เจริญราษฎร์",[56130]],["แม่สุก",[56130]],["แม่ใจ",[56130]]]]]],["พังงา",[["กะปง",[["กะปง",[82170]],["ท่านา",[82170]],["รมณีย์",[82170]],["เหมาะ",[82170]],["เหล",[82170]]]],["คุระบุรี",[["คุระ",[82150]],["บางวัน",[82150]],["เกาะพระทอง",[82150]],["แม่นางขาว",[82150]]]],["ตะกั่วทุ่ง",[["กระโสม",[82130]],["กะไหล",[82130]],["คลองเคียน",[82130]],["ถ้ำ",[82130]],["ท่าอยู่",[82130]],["หล่อยูง",[82140]],["โคกกลอย",[82140]]]],["ตะกั่วป่า",[["คึกคัก",[82220]],["ตะกั่วป่า",[82110]],["ตำตัว",[82110]],["บางนายสี",[82110]],["บางม่วง",[82190]],["บางไทร",[82110]],["เกาะคอเขา",[82190]],["โคกเคียน",[82110]]]],["ทับปุด",[["ถ้ำทองหลาง",[82180]],["ทับปุด",[82180]],["บางเหรียง",[82180]],["บ่อแสน",[82180]],["มะรุ่ย",[82180]],["โคกเจริญ",[82180]]]],["ท้ายเหมือง",[["ทุ่งมะพร้าว",[82120]],["ท้ายเหมือง",[82120]],["นาเตย",[82120]],["บางทอง",[82120]],["ลำภี",[82120]],["ลำแก่น",[82210]]]],["เกาะยาว",[["พรุใน",[83000]],["เกาะยาวน้อย",[82160]],["เกาะยาวใหญ่",[82160]]]],["เมืองพังงา",[["ตากแดด",[82000]],["ถ้ำน้ำผุด",[82000]],["ทุ่งคาโงก",[82000]],["ท้ายช้าง",[82000]],["นบปริง",[82000]],["บางเตย",[82000]],["ป่ากอ",[82000]],["สองแพรก",[82000]],["เกาะปันหยี",[82000]]]]]],["พัทลุง",[["กงหรา",[["กงหรา",[93180]],["คลองทรายขาว",[93180]],["คลองเฉลิม",[93180]],["ชะรัด",[93000]],["สมหวัง",[93000]]]],["ควนขนุน",[["ควนขนุน",[93110]],["ชะมวง",[93110]],["ดอนทราย",[93110]],["ทะเลน้อย",[93150]],["นาขยาด",[93110]],["ปันแต",[93110]],["พนมวังก์",[93110]],["พนางตุง",[93150]],["มะกอกเหนือ",[93150]],["แพรกหา",[93110]],["แหลมโตนด",[93110]],["โตนดด้วน",[93110]]]],["ตะโหมด",[["คลองใหญ่",[93160]],["ตะโหมด",[93160]],["แม่ขรี",[93160]]]],["บางแก้ว",[["ท่ามะเดื่อ",[93140]],["นาปะขอ",[93140]],["โคกสัก",[93140]]]],["ปากพะยูน",[["ดอนทราย",[93120]],["ดอนประดู่",[93120]],["ปากพะยูน",[93120]],["ฝาละมี",[93120]],["หารเทา",[93120]],["เกาะนางคำ",[93120]],["เกาะหมาก",[93120]]]],["ป่าบอน",[["ทุ่งนารี",[93170]],["ป่าบอน",[93170]],["วังใหม่",[93170]],["หนองธง",[93170]],["โคกทราย",[93170]]]],["ป่าพะยอม",[["บ้านพร้าว",[93210]],["ป่าพะยอม",[93210]],["ลานข่อย",[93210]],["เกาะเต่า",[93210]]]],["ศรีนครินทร์",[["ชุมพล",[93000]],["บ้านนา",[93000]],["ลำสินธุ์",[93000]],["อ่างทอง",[93000]]]],["ศรีบรรพต",[["ตะแพน",[93190]],["เขาปู่",[93190]],["เขาย่า",[93190]]]],["เขาชัยสน",[["ควนขนุน",[93130]],["จองถนน",[93130]],["หานโพธิ์",[93130]],["เขาชัยสน",[93130]],["โคกม่วง",[93130]]]],["เมืองพัทลุง",[["ควนมะพร้าว",[93000]],["คูหาสวรรค์",[93000]],["ชัยบุรี",[93000]],["ตำนาน",[93000]],["ท่ามิหรำ",[93000]],["ท่าแค",[93000]],["นาท่อม",[93000]],["นาโหนด",[93000]],["ปรางหมู่",[93000]],["พญาขัน",[93000]],["ร่มเมือง",[93000]],["ลำปำ",[93000]],["เขาเจียก",[93000]],["โคกชะงาย",[93000]]]]]],["พิจิตร",[["ดงเจริญ",[["วังงิ้ว",[66210]],["วังงิ้วใต้",[66210]],["สำนักขุนเณร",[66210]],["ห้วยพุก",[66210]],["ห้วยร่วม",[66210]]]],["ตะพานหิน",[["คลองคูณ",[66110]],["งิ้วราย",[66110]],["ดงตะขบ",[66110]],["ตะพานหิน",[66110]],["ทับหมัน",[66110]],["ทุ่งโพธิ์",[66150]],["วังสำโรง",[66110]],["วังหลุม",[66150]],["วังหว้า",[66110]],["หนองพยอม",[66110]],["ห้วยเกตุ",[66110]],["ไทรโรงโขน",[66110]],["ไผ่หลวง",[66110]]]],["ทับคล้อ",[["ทับคล้อ",[66150]],["ท้ายทุ่ง",[66150]],["เขาทราย",[66230]],["เขาเจ็ดลูก",[66230]]]],["บางมูลนาก",[["บางมูลนาก",[66120]],["บางไผ่",[66120]],["ภูมิ",[66120]],["ลำประดา",[66120]],["วังกรด",[66120]],["วังตะกู",[66210]],["วังสำโรง",[66120]],["หอไกร",[66120]],["ห้วยเขน",[66120]],["เนินมะกอก",[66120]]]],["บึงนาราง",[["บางลาย",[66130]],["บึงนาราง",[66130]],["ห้วยแก้ว",[66130]],["แหลมรัง",[66130]],["โพธิ์ไทรงาม",[66130]]]],["วชิรบารมี",[["บึงบัว",[66140]],["บ้านนา",[66140]],["วังโมกข์",[66140]],["หนองหลุม",[66220]]]],["วังทรายพูน",[["วังทรายพูน",[66180]],["หนองปลาไหล",[66180]],["หนองปล้อง",[66180]],["หนองพระ",[66180]]]],["สากเหล็ก",[["คลองทราย",[66160]],["ท่าเยี่ยม",[66160]],["วังทับไทร",[66160]],["สากเหล็ก",[66160]],["หนองหญ้าไทร",[66160]]]],["สามง่าม",[["กำแพงดิน",[66220]],["รังนก",[66140]],["สามง่าม",[66140]],["หนองโสน",[66140]],["เนินปอ",[66140]]]],["เมืองพิจิตร",[["คลองคะเชนทร์",[66000]],["ฆะมัง",[66000]],["ดงกลาง",[66170]],["ดงป่าคำ",[66170]],["ท่าหลวง",[66000]],["ท่าฬ่อ",[66000]],["บ้านบุ่ง",[66000]],["ปากทาง",[66000]],["ป่ามะคาบ",[66000]],["ย่านยาว",[66000]],["สายคำโห้",[66000]],["หัวดง",[66170]],["เมืองเก่า",[66000]],["โรงช้าง",[66000]],["ในเมือง",[66000]],["ไผ่ขวาง",[66000]]]],["โพทะเล",[["ทะนง",[66130]],["ทุ่งน้อย",[66130]],["ท่าขมิ้น",[66130]],["ท่านั่ง",[66130]],["ท่าบัว",[66130]],["ท่าเสา",[66130]],["ท้ายน้ำ",[66130]],["บางคลาน",[66130]],["บ้านน้อย",[66130]],["วัดขวาง",[66130]],["โพทะเล",[66130]]]],["โพธิ์ประทับช้าง",[["ดงเสือเหลือง",[66190]],["ทุ่งใหญ่",[66190]],["วังจิก",[66190]],["เนินสว่าง",[66190]],["โพธิ์ประทับช้าง",[66190]],["ไผ่ท่าโพ",[66190]],["ไผ่รอบ",[66190]]]]]],["พิษณุโลก",[["ชาติตระการ",[["ชาติตระการ",[65170]],["ท่าสะแก",[65170]],["บ่อภาค",[65170]],["บ้านดง",[65170]],["ป่าแดง",[65170]],["สวนเมี่ยง",[65170]]]],["นครไทย",[["นครชุม",[65120]],["นครไทย",[65120]],["นาบัว",[65120]],["น้ำกุ่ม",[65120]],["บ่อโพธิ์",[65120]],["บ้านพร้าว",[65120]],["บ้านแยง",[65120]],["ยางโกลน",[65120]],["หนองกะท้าว",[65120]],["ห้วยเฮี้ย",[65120]],["เนินเพิ่ม",[65120]]]],["บางกระทุ่ม",[["ท่าตาล",[65110]],["นครป่าหมาก",[65110]],["บางกระทุ่ม",[65110]],["บ้านไร่",[65110]],["วัดตายม",[65210]],["สนามคลี",[65110]],["เนินกุ่ม",[65210]],["โคกสลุด",[65110]],["ไผ่ล้อม",[65110]]]],["บางระกำ",[["คุยม่วง",[65240]],["ชุมแสงสงคราม",[65240]],["ท่านางงาม",[65140]],["นิคมพัฒนา",[65140]],["บางระกำ",[65140]],["บึงกอก",[65140]],["บ่อทอง",[65140]],["ปลักแรด",[65140]],["พันเสา",[65140]],["วังอิทก",[65140]],["หนองกุลา",[65140]]]],["พรหมพิราม",[["ดงประคำ",[65180]],["ตลุกเทียม",[65180]],["ทับยายเชียง",[65150]],["ท่าช้าง",[65150]],["พรหมพิราม",[65150]],["มะตูม",[65150]],["มะต้อง",[65180]],["วงฆ้อง",[65180]],["วังวน",[65150]],["ศรีภิรมย์",[65180]],["หนองแขม",[65150]],["หอกลอง",[65150]]]],["วังทอง",[["ชัยนาม",[65130]],["ดินทอง",[65130]],["ท่าหมื่นราม",[65130]],["บ้านกลาง",[65220]],["พันชาลี",[65130]],["วังทอง",[65130]],["วังนกแอ่น",[65130]],["วังพิกุล",[65130]],["หนองพระ",[65130]],["แก่งโสภา",[65220]],["แม่ระกา",[65130]]]],["วัดโบสถ์",[["คันโช้ง",[65160]],["ท่างาม",[65160]],["ท้อแท้",[65160]],["บ้านยาง",[65160]],["วัดโบสถ์",[65160]],["หินลาด",[65160]]]],["เนินมะปราง",[["ชมพู",[65190]],["บ้านน้อยซุ้มขี้เหล็ก",[65190]],["บ้านมุง",[65190]],["วังยาง",[65190]],["วังโพรง",[65190]],["เนินมะปราง",[65190]],["ไทรย้อย",[65190]]]],["เมืองพิษณุโลก",[["งิ้วงาม",[65230]],["จอมทอง",[65000]],["ดอนทอง",[65000]],["ท่าทอง",[65000]],["ท่าโพธิ์",[65000]],["บึงพระ",[65000]],["บ้านกร่าง",[65000]],["บ้านคลอง",[65000]],["บ้านป่า",[65000]],["ปากโทก",[65000]],["พลายชุมพล",[65000]],["มะขามสูง",[65000]],["วังน้ำคู้",[65230]],["วัดจันทร์",[65000]],["วัดพริก",[65230]],["สมอแข",[65000]],["หัวรอ",[65000]],["อรัญญิก",[65000]],["ในเมือง",[65000]],["ไผ่ขอดอน",[65000]]]]]],["ภูเก็ต",[["กะทู้",[["กมลา",[83120]],["กะทู้",[83120]],["ป่าตอง",[83150]]]],["ถลาง",[["ป่าคลอก",[83110]],["ศรีสุนทร",[83110]],["สาคู",[83110]],["เชิงทะเล",[83110]],["เทพกระษัตรี",[83110]],["ไม้ขาว",[83110]]]],["เมืองภูเก็ต",[["กะรน",[83100]],["ฉลอง",[83000]],["ตลาดเหนือ",[83000]],["ตลาดใหญ่",[83000]],["รัษฎา",[83000]],["ราไวย์",[83100]],["วิชิต",[83000]],["เกาะแก้ว",[83000]]]]]],["มหาสารคาม",[["กันทรวิชัย",[["กุดใส้จ่อ",[44150]],["ขามเฒ่าพัฒนา",[44150]],["ขามเรียง",[44150]],["คันธารราษฎร์",[44150]],["ท่าขอนยาง",[44150]],["นาสีนวน",[44150]],["มะค่า",[44150]],["ศรีสุข",[44150]],["เขวาใหญ่",[44150]],["โคกพระ",[44150]]]],["กุดรัง",[["กุดรัง",[44130]],["นาโพธิ์",[44130]],["หนองแวง",[44130]],["ห้วยเตย",[44130]],["เลิงแฝก",[44130]]]],["ชื่นชม",[["กุดปลาดุก",[44160]],["ชื่นชม",[44160]],["หนองกุง",[44160]],["เหล่าดอกไม้",[44160]]]],["นาดูน",[["กู่สันตรัตน์",[44180]],["ดงดวน",[44180]],["ดงบัง",[44180]],["ดงยาง",[44180]],["นาดูน",[44180]],["พระธาตุ",[44180]],["หนองคู",[44180]],["หนองไผ่",[44180]],["หัวดง",[44180]]]],["นาเชือก",[["นาเชือก",[44170]],["ปอพาน",[44170]],["สันป่าตอง",[44170]],["สำโรง",[44170]],["หนองกุง",[44170]],["หนองเม็ก",[44170]],["หนองเรือ",[44170]],["หนองแดง",[44170]],["หนองโพธิ์",[44170]],["เขวาไร่",[44170]]]],["บรบือ",[["กำพี้",[44130]],["ดอนงัว",[44130]],["บรบือ",[44130]],["บัวมาศ",[44130]],["บ่อใหญ่",[44130]],["ยาง",[44130]],["วังใหม่",[44130]],["วังไชย",[44130]],["หนองคูขาด",[44130]],["หนองจิก",[44130]],["หนองม่วง",[44130]],["หนองสิม",[44130]],["หนองโก",[44130]],["โนนราษี",[44130]],["โนนแดง",[44130]]]],["พยัคฆภูมิพิสัย",[["ก้ามปู",[44110]],["นาสีนวล",[44110]],["ปะหลาน",[44110]],["ภารแอ่น",[44110]],["ราษฎร์พัฒนา",[44110]],["ราษฎร์เจริญ",[44110]],["ลานสะแก",[44110]],["หนองบัว",[44110]],["หนองบัวแก้ว",[44110]],["เมืองเตา",[44110]],["เมืองเสือ",[44110]],["เม็กดำ",[44110]],["เวียงชัย",[44110]],["เวียงสะอาด",[44110]]]],["ยางสีสุราช",[["ขามเรียน",[44210]],["ดงเมือง",[44210]],["นาภู",[44210]],["บ้านกู่",[44210]],["ยางสีสุราช",[44210]],["หนองบัวสันตุ",[44210]],["แวงดง",[44210]]]],["วาปีปทุม",[["ขามป้อม",[44120]],["งัวบา",[44120]],["ดงใหญ่",[44120]],["นาข่า",[44120]],["บ้านหวาย",[44120]],["ประชาพัฒนา",[44120]],["หนองทุ่ม",[44120]],["หนองแสง",[44120]],["หนองแสน",[44120]],["หนองไฮ",[44120]],["หัวเรือ",[44120]],["เสือโก้ก",[44120]],["แคน",[44120]],["โคกสีทองหลาง",[44120]],["โพธิ์ชัย",[44120]]]],["เชียงยืน",[["กู่ทอง",[44160]],["ดอนเงิน",[44160]],["นาทอง",[44160]],["หนองซอน",[44160]],["เชียงยืน",[44160]],["เสือเฒ่า",[44160]],["เหล่าบัวบาน",[44160]],["โพนทอง",[44160]]]],["เมืองมหาสารคาม",[["ดอนหว่าน",[44000]],["ตลาด",[44000]],["ท่าตูม",[44000]],["ท่าสองคอน",[44000]],["บัวค้อ",[44000]],["ลาดพัฒนา",[44000]],["หนองปลิง",[44000]],["หนองโน",[44000]],["ห้วยแอ่ง",[44000]],["เกิ้ง",[44000]],["เขวา",[44000]],["แก่งเลิงจาน",[44000]],["แวงน่าง",[44000]],["โคกก่อ",[44000]]]],["แกดำ",[["มิตรภาพ",[44190]],["วังแสง",[44190]],["หนองกุง",[44190]],["แกดำ",[44190]],["โนนภิบาล",[44190]]]],["โกสุมพิสัย",[["ดอนกลาง",[44140]],["ยางท่าแจ้ง",[44140]],["ยางน้อย",[44140]],["วังยาว",[44140]],["หนองกุงสวรรค์",[44140]],["หนองบอน",[44140]],["หนองบัว",[44140]],["หนองเหล็ก",[44140]],["หัวขวาง",[44140]],["เขวาไร่",[44140]],["เขื่อน",[44140]],["เลิงใต้",[44140]],["เหล่า",[44140]],["แก้งแก",[44140]],["แพง",[44140]],["แห่ใต้",[44140]],["โพนงาม",[44140]]]]]],["มุกดาหาร",[["คำชะอี",[["คำชะอี",[49110]],["คำบก",[49110]],["น้ำเที่ยง",[49110]],["บ้านค้อ",[49110]],["บ้านซ่ง",[49110]],["บ้านเหล่า",[49110]],["หนองเอี่ยน",[49110]],["เหล่าสร้างถ่อ",[49110]],["โพนงาม",[49110]]]],["ดงหลวง",[["กกตูม",[49140]],["ชะโนดน้อย",[49140]],["ดงหลวง",[49140]],["พังแดง",[49140]],["หนองบัว",[49140]],["หนองแคน",[49140]]]],["ดอนตาล",[["ดอนตาล",[49120]],["นาสะเม็ง",[49120]],["บ้านบาก",[49120]],["บ้านแก้ง",[49120]],["ป่าไร่",[49120]],["เหล่าหมี",[49120]],["โพธิ์ไทร",[49120]]]],["นิคมคำสร้อย",[["กกแดง",[49130]],["นากอก",[49130]],["นาอุดม",[49130]],["นิคมคำสร้อย",[49130]],["ร่มเกล้า",[49130]],["หนองแวง",[49130]],["โชคชัย",[49130]]]],["หนองสูง",[["บ้านเป้า",[49160]],["ภูวง",[49160]],["หนองสูง",[49160]],["หนองสูงเหนือ",[49160]],["หนองสูงใต้",[49160]],["โนนยาง",[49160]]]],["หว้านใหญ่",[["ชะโนด",[49150]],["ดงหมู",[49150]],["บางทรายน้อย",[49150]],["ป่งขาม",[49150]],["หว้านใหญ่",[49150]]]],["เมืองมุกดาหาร",[["กุดแข้",[49000]],["คำป่าหลาย",[49000]],["คำอาฮวน",[49000]],["ดงมอน",[49000]],["ดงเย็น",[49000]],["นาสีนวน",[49000]],["นาโสก",[49000]],["บางทรายใหญ่",[49000]],["บ้านโคก",[49000]],["ผึ่งแดด",[49000]],["มุกดาหาร",[49000]],["ศรีบุญเรือง",[49000]],["โพนทราย",[49000]]]]]],["ยะลา",[["กรงปินัง",[["กรงปินัง",[95000]],["ปุโรง",[95000]],["สะเอะ",[95000]],["ห้วยกระทิง",[95000]]]],["กาบัง",[["กาบัง",[95120]],["บาละ",[95120]]]],["ธารโต",[["คีรีเขต",[95150]],["ธารโต",[95150]],["บ้านแหร",[95150]],["แม่หวาด",[95170]]]],["บันนังสตา",[["ตลิ่งชัน",[95130]],["ตาเนาะปูเต๊ะ",[95130]],["ถ้ำทะลุ",[95130]],["บันนังสตา",[95130]],["บาเจาะ",[95130]],["เขื่อนบางลาง",[95130]]]],["ยะหา",[["กาตอง",[95120]],["ตาชี",[95120]],["บาโงยซิแน",[95120]],["บาโร๊ะ",[95120]],["ปะแต",[95120]],["ยะหา",[95120]],["ละแอ",[95120]]]],["รามัน",[["กอตอตือร๊ะ",[95140]],["กายูบอเกาะ",[95140]],["กาลอ",[95140]],["กาลูปัง",[95140]],["จะกว๊ะ",[95140]],["ตะโล๊ะหะลอ",[95140]],["ท่าธง",[95140]],["บาลอ",[95140]],["บาโงย",[95140]],["บือมัง",[95140]],["ยะต๊ะ",[95140]],["วังพญา",[95140]],["อาซ่อง",[95140]],["เกะรอ",[95140]],["เนินงาม",[95140]],["โกตาบารู",[95140]]]],["เบตง",[["ตาเนาะแมเราะ",[95110]],["ธารน้ำทิพย์",[95110]],["ยะรม",[95110]],["อัยเยอร์เวง",[95110]],["เบตง",[95110]]]],["เมืองยะลา",[["ตาเซะ",[95000]],["ท่าสาป",[95000]],["บันนังสาเรง",[95000]],["บุดี",[95000]],["พร่อน",[95160]],["ยะลา",[95000]],["ยุโป",[95000]],["ลำพะยา",[95160]],["ลำใหม่",[95160]],["ลิดล",[95160]],["สะเตง",[95000]],["สะเตงนอก",[95000]],["หน้าถ้ำ",[95000]],["เปาะเส้ง",[95000]]]]]],["ยโสธร",[["กุดชุม",[["กำแมด",[35140]],["กุดชุม",[35140]],["คำน้ำสร้าง",[35140]],["นาโส่",[35140]],["หนองหมี",[35140]],["หนองแหน",[35140]],["ห้วยแก้ง",[35140]],["โนนเปือย",[35140]],["โพนงาม",[35140]]]],["คำเขื่อนแก้ว",[["กุดกุง",[35110]],["กู่จาน",[35110]],["ดงเจริญ",[35110]],["ดงแคนใหญ่",[35180]],["ทุ่งมน",[35110]],["นาคำ",[35180]],["นาแก",[35180]],["ย่อ",[35110]],["ลุมพุก",[35110]],["สงเปือย",[35110]],["เหล่าไฮ",[35110]],["แคนน้อย",[35180]],["โพนทัน",[35110]]]],["ค้อวัง",[["กุดน้ำใส",[35160]],["ค้อวัง",[35160]],["น้ำอ้อม",[35160]],["ฟ้าห่วน",[35160]]]],["ทรายมูล",[["ดงมะไฟ",[35170]],["ดู่ลาด",[35170]],["ทรายมูล",[35170]],["นาเวียง",[35170]],["ไผ่",[35170]]]],["ป่าติ้ว",[["กระจาย",[35150]],["ศรีฐาน",[35150]],["เชียงเพ็ง",[35150]],["โคกนาโก",[35150]],["โพธิ์ไทร",[35150]]]],["มหาชนะชัย",[["คูเมือง",[35130]],["บากเรือ",[35130]],["บึงแก",[35130]],["ผือฮี",[35130]],["พระเสาร์",[35130]],["ฟ้าหยาด",[35130]],["ม่วง",[35130]],["สงยาง",[35130]],["หัวเมือง",[35130]],["โนนทราย",[35130]]]],["เมืองยโสธร",[["ขั้นไดใหญ่",[35000]],["ขุมเงิน",[35000]],["ค้อเหนือ",[35000]],["ดู่ทุ่ง",[35000]],["ตาดทอง",[35000]],["ทุ่งนางโอก",[35000]],["ทุ่งแต้",[35000]],["นาสะไมย์",[35000]],["น้ำคำใหญ่",[35000]],["สำราญ",[35000]],["สิงห์",[35000]],["หนองคู",[35000]],["หนองหิน",[35000]],["หนองเป็ด",[35000]],["หนองเรือ",[35000]],["เขื่องคำ",[35000]],["เดิด",[35000]],["ในเมือง",[35000]]]],["เลิงนกทา",[["กุดเชียงหมี",[35120]],["กุดแห่",[35120]],["บุ่งค้า",[35120]],["ศรีแก้ว",[35120]],["สร้างมิ่ง",[35120]],["สวาท",[35120]],["สามัคคี",[35120]],["สามแยก",[35120]],["ห้องแซง",[35120]],["โคกสำราญ",[35120]]]],["ไทยเจริญ",[["คำเตย",[35120]],["คำไผ่",[35120]],["น้ำคำ",[35120]],["ส้มผ่อ",[35120]],["ไทยเจริญ",[35120]]]]]],["ระนอง",[["กระบุรี",[["จ.ป.ร.",[85110]],["น้ำจืด",[85110]],["น้ำจืดน้อย",[85110]],["บางใหญ่",[85110]],["ปากจั่น",[85110]],["มะมุ",[85110]],["ลำเลียง",[85110]]]],["กะเปอร์",[["กะเปอร์",[85120]],["บางหิน",[85120]],["บ้านนา",[85120]],["ม่วงกลวง",[85120]],["เชี่ยวเหลียง",[85120]]]],["ละอุ่น",[["บางพระเหนือ",[85130]],["บางพระใต้",[85130]],["บางแก้ว",[85130]],["ละอุ่นเหนือ",[85130]],["ละอุ่นใต้",[85130]],["ในวงเหนือ",[85130]],["ในวงใต้",[85130]]]],["สุขสำราญ",[["กำพวน",[85120]],["นาคา",[85120]]]],["เมืองระนอง",[["ทรายแดง",[85130]],["บางนอน",[85000]],["บางริ้น",[85000]],["ปากน้ำ",[85000]],["ราชกรูด",[85000]],["หงาว",[85000]],["หาดส้มแป้น",[85000]],["เกาะพยาม",[85000]],["เขานิเวศน์",[85000]]]]]],["ระยอง",[["นิคมพัฒนา",[["นิคมพัฒนา",[21180]],["พนานิคม",[21180]],["มะขามคู่",[21180]],["มาบข่า",[21180]]]],["บ้านค่าย",[["ชากบก",[21120]],["ตาขัน",[21120]],["บางบุตร",[21120]],["บ้านค่าย",[21120]],["หนองตะพาน",[21120]],["หนองบัว",[21120]],["หนองละลอก",[21120]]]],["บ้านฉาง",[["บ้านฉาง",[21130]],["พลา",[21130]],["สำนักท้อน",[21130]]]],["ปลวกแดง",[["ตาสิทธิ์",[21140]],["ปลวกแดง",[21140]],["มาบยางพร",[21140]],["ละหาร",[21140]],["หนองไร่",[21140]],["แม่น้ำคู้",[21140]]]],["วังจันทร์",[["ชุมแสง",[21210]],["ป่ายุบใน",[21210]],["พลงตาเอี่ยม",[21210]],["วังจันทร์",[21210]]]],["เขาชะเมา",[["ชำฆ้อ",[21110]],["น้ำเป็น",[21110]],["ห้วยทับมอญ",[21110]],["เขาน้อย",[21110]]]],["เมืองระยอง",[["กะเฉด",[21100]],["ตะพง",[21000]],["ทับมา",[21000]],["ท่าประดู่",[21000]],["นาตาขวัญ",[21000]],["น้ำคอก",[21000]],["บ้านแลง",[21000]],["ปากน้ำ",[21000]],["มาบตาพุด",[21150]],["สำนักทอง",[21100]],["ห้วยโป่ง",[21150]],["เชิงเนิน",[21000]],["เนินพระ",[21000]],["เพ",[21160]],["แกลง",[21160]]]],["แกลง",[["กระแสบน",[21110]],["กร่ำ",[21190]],["กองดิน",[22160]],["คลองปูน",[21170]],["ชากพง",[21190]],["ชากโดน",[21110]],["ทางเกวียน",[21110]],["ทุ่งควายกิน",[21110]],["บ้านนา",[21110]],["ปากน้ำกระแส",[21170]],["พังราด",[21170]],["วังหว้า",[21110]],["สองสลึง",[21110]],["ห้วยยาง",[21110]],["เนินฆ้อ",[21110]]]]]],["ราชบุรี",[["จอมบึง",[["จอมบึง",[70150]],["ด่านทับตะโก",[70150]],["ปากช่อง",[70150]],["รางบัว",[70150]],["เบิกไพร",[70150]],["แก้มอ้น",[70150]]]],["ดำเนินสะดวก",[["ขุนพิทักษ์",[70130]],["ดอนกรวย",[70130]],["ดอนคลัง",[70130]],["ดอนไผ่",[70130]],["ดำเนินสะดวก",[70130]],["ตาหลวง",[70130]],["ท่านัด",[70130]],["บัวงาม",[70210]],["บ้านไร่",[70130]],["ประสาทสิทธิ์",[70210]],["ศรีสุราษฎร์",[70130]],["สี่หมื่น",[70130]],["แพงพวย",[70130]]]],["บางแพ",[["ดอนคา",[70160]],["ดอนใหญ่",[70160]],["บางแพ",[70160]],["วังเย็น",[70160]],["วัดแก้ว",[70160]],["หัวโพ",[70160]],["โพหัก",[70160]]]],["บ้านคา",[["บ้านคา",[70180]],["บ้านบึง",[70180]],["หนองพันจันทร์",[70180]]]],["บ้านโป่ง",[["กรับใหญ่",[70190]],["คุ้งพยอม",[70110]],["ดอนกระเบื้อง",[70110]],["ท่าผา",[70110]],["นครชุมน์",[70110]],["บ้านม่วง",[70110]],["บ้านโป่ง",[70110]],["ปากแรต",[70110]],["ลาดบัวขาว",[70110]],["สวนกล้วย",[70110]],["หนองกบ",[70110]],["หนองปลาหมอ",[70110]],["หนองอ้อ",[70110]],["เขาขลุง",[70110]],["เบิกไพร",[70110]]]],["ปากท่อ",[["ดอนทราย",[70140]],["ทุ่งหลวง",[70140]],["บ่อกระดาน",[70140]],["ปากท่อ",[70140]],["ป่าไก่",[70140]],["ยางหัก",[70140]],["วังมะนาว",[70140]],["วัดยางงาม",[70140]],["วันดาว",[70140]],["หนองกระทุ่ม",[70140]],["ห้วยยางโทน",[70140]],["อ่างหิน",[70140]]]],["วัดเพลง",[["จอมประทัด",[70170]],["วัดเพลง",[70170]],["เกาะศาลพระ",[70170]]]],["สวนผึ้ง",[["ตะนาวศรี",[70180]],["ท่าเคย",[70180]],["ป่าหวาย",[70180]],["สวนผึ้ง",[70180]]]],["เมืองราชบุรี",[["คุ้งกระถิน",[70000]],["คุ้งน้ำวน",[70000]],["คูบัว",[70000]],["ดอนตะโก",[70000]],["ดอนแร่",[70000]],["ท่าราบ",[70000]],["น้ำพุ",[70000]],["บางป่า",[70000]],["บ้านไร่",[70000]],["พงสวาย",[70000]],["พิกุลทอง",[70000]],["สามเรือน",[70000]],["หนองกลางนา",[70000]],["หน้าเมือง",[70000]],["หลุมดิน",[70000]],["หินกอง",[70000]],["ห้วยไผ่",[70000]],["อ่างทอง",[70000]],["เกาะพลับพลา",[70000]],["เขาแร้ง",[70000]],["เจดีย์หัก",[70000]],["โคกหม้อ",[70000]]]],["โพธาราม",[["คลองข่อย",[70120]],["คลองตาคต",[70120]],["ชำแระ",[70120]],["ดอนกระเบื้อง",[70120]],["ดอนทราย",[70120]],["ท่าชุมพล",[70120]],["ธรรมเสน",[70120]],["นางแก้ว",[70120]],["บางโตนด",[70120]],["บ้านฆ้อง",[70120]],["บ้านสิงห์",[70120]],["บ้านเลือก",[70120]],["สร้อยฟ้า",[70120]],["หนองกวาง",[70120]],["หนองโพ",[70120]],["เขาชะงุ้ม",[70120]],["เจ็ดเสมียน",[70120]],["เตาปูน",[70120]],["โพธาราม",[70120]]]]]],["ร้อยเอ็ด",[["จตุรพักตร์พิมาน",[["ดงกลาง",[45180]],["ดงแดง",[45180]],["ดู่น้อย",[45180]],["น้ำใส",[45180]],["ป่าสังข์",[45180]],["ลิ้นฟ้า",[45180]],["ศรีโคตร",[45180]],["หนองผือ",[45180]],["หัวช้าง",[45180]],["อีง่อง",[45180]],["เมืองหงส์",[45180]],["โคกล่าม",[45180]]]],["จังหาร",[["จังหาร",[45000]],["ดงสิงห์",[45000]],["ดินดำ",[45000]],["ปาฝา",[45000]],["ผักแว่น",[45000]],["ม่วงลาด",[45000]],["ยางใหญ่",[45000]],["แสนชาติ",[45000]]]],["ทุ่งเขาหลวง",[["ทุ่งเขาหลวง",[45170]],["บึงงาม",[45170]],["มะบ้า",[45170]],["เทอดไทย",[45170]],["เหล่า",[45170]]]],["ธวัชบุรี",[["ธงธานี",[45170]],["ธวัชบุรี",[45170]],["นิเวศน์",[45170]],["บึงนคร",[45170]],["มะอึ",[45170]],["ราชธานี",[45170]],["หนองพอก",[45170]],["หนองไผ่",[45170]],["อุ่มเม้า",[45170]],["เขวาทุ่ง",[45170]],["เมืองน้อย",[45170]],["ไพศาล",[45170]]]],["ปทุมรัตต์",[["ขี้เหล็ก",[45190]],["ดอกล้ำ",[45190]],["บัวแดง",[45190]],["สระบัว",[45190]],["หนองแคน",[45190]],["โนนสง่า",[45190]],["โนนสวรรค์",[45190]],["โพนสูง",[45190]]]],["พนมไพร",[["กุดน้ำใส",[45140]],["คำไฮ",[45140]],["ค้อใหญ่",[45140]],["ชานุวรรณ",[45140]],["นานวล",[45140]],["พนมไพร",[45140]],["วารีสวัสดิ์",[45140]],["สระแก้ว",[45140]],["หนองทัพไทย",[45140]],["แสนสุข",[45140]],["โคกสว่าง",[45140]],["โพธิ์ชัย",[45140]],["โพธิ์ใหญ่",[45140]]]],["ศรีสมเด็จ",[["บ้านบาก",[45000]],["ศรีสมเด็จ",[45000]],["สวนจิก",[45280]],["หนองแวงควง",[45000]],["หนองใหญ่",[45000]],["เมืองเปลือย",[45000]],["โพธิ์ทอง",[45000]],["โพธิ์สัย",[45280]]]],["สุวรรณภูมิ",[["จำปาขัน",[45130]],["ช้างเผือก",[45130]],["ดอกไม้",[45130]],["ทุ่งกุลา",[45130]],["ทุ่งศรีเมือง",[45130]],["ทุ่งหลวง",[45130]],["นาใหญ่",[45130]],["น้ำคำ",[45130]],["บ่อพันขัน",[45130]],["สระคู",[45130]],["หัวช้าง",[45130]],["หัวโทน",[45130]],["หินกอง",[45130]],["ห้วยหินลาด",[45130]],["เมืองทุ่ง",[45130]]]],["หนองพอก",[["กกโพธิ์",[45210]],["ท่าสีดา",[45210]],["บึงงาม",[45210]],["ผาน้ำย้อย",[45210]],["ภูเขาทอง",[45210]],["รอบเมือง",[45210]],["หนองขุ่นใหญ่",[45210]],["หนองพอก",[45210]],["โคกสว่าง",[45210]]]],["หนองฮี",[["ดูกอึ่ง",[45140]],["สาวแห",[45140]],["หนองฮี",[45140]],["เด่นราษฎร์",[45140]]]],["อาจสามารถ",[["ขี้เหล็ก",[45160]],["บ้านดู่",[45160]],["บ้านแจ้ง",[45160]],["หนองขาม",[45160]],["หนองบัว",[45160]],["หนองหมื่นถ่าน",[45160]],["หน่อม",[45160]],["อาจสามารถ",[45160]],["โพนเมือง",[45160]],["โหรา",[45160]]]],["เกษตรวิสัย",[["กำแพง",[45150]],["กู่กาสิงห์",[45150]],["ดงครั่งน้อย",[45150]],["ดงครั่งใหญ่",[45150]],["ทุ่งทอง",[45150]],["น้ำอ้อม",[45150]],["บ้านฝาง",[45150]],["สิงห์โคก",[45150]],["หนองแวง",[45150]],["เกษตรวิสัย",[45150]],["เมืองบัว",[45150]],["เหล่าหลวง",[45150]],["โนนสว่าง",[45150]]]],["เชียงขวัญ",[["บ้านเขือง",[45000]],["พระธาตุ",[45000]],["พระเจ้า",[45000]],["พลับพลา",[45170]],["หมูม้น",[45170]],["เชียงขวัญ",[45000]]]],["เมยวดี",[["ชมสะอาด",[45250]],["ชุมพร",[45250]],["บุ่งเลิศ",[45250]],["เมยวดี",[45250]]]],["เมืองร้อยเอ็ด",[["ขอนแก่น",[45000]],["ดงลาน",[45000]],["นาโพธิ์",[45000]],["ปอภาร",[45000]],["รอบเมือง",[45000]],["สะอาดสมบูรณ์",[45000]],["สีแก้ว",[45000]],["หนองแก้ว",[45000]],["หนองแวง",[45000]],["เมืองทอง",[45000]],["เหนือเมือง",[45000]],["แคนใหญ่",[45000]],["โนนตาล",[45000]],["โนนรัง",[45000]],["ในเมือง",[45000]]]],["เมืองสรวง",[["กกกุง",[45220]],["คูเมือง",[45220]],["หนองผือ",[45220]],["หนองหิน",[45220]],["เมืองสรวง",[45220]]]],["เสลภูมิ",[["กลาง",[45120]],["ขวัญเมือง",[45120]],["ขวาว",[45120]],["ท่าม่วง",[45120]],["นางาม",[45120]],["นาเมือง",[45120]],["นาเลิง",[45120]],["นาแซง",[45120]],["บึงเกลือ",[45120]],["พรสวรรค์",[45120]],["ภูเงิน",[45120]],["วังหลวง",[45120]],["ศรีวิลัย",[45120]],["หนองหลวง",[45120]],["เกาะแก้ว",[45120]],["เมืองไพร",[45120]],["เหล่าน้อย",[45120]],["โพธิ์ทอง",[45120]]]],["โพธิ์ชัย",[["ขามเปี้ย",[45230]],["คำพอุง",[45230]],["ดอนโอง",[45230]],["บัวคำ",[45230]],["สะอาด",[45230]],["หนองตาไก้",[45230]],["อัคคะคำ",[45230]],["เชียงใหม่",[45230]],["โพธิ์ศรี",[45230]]]],["โพนทราย",[["ท่าหาดยาว",[45240]],["ยางคำ",[45240]],["ศรีสว่าง",[45240]],["สามขา",[45240]],["โพนทราย",[45240]]]],["โพนทอง",[["คำนาดี",[45110]],["นาอุดม",[45110]],["พรมสวรรค์",[45110]],["วังสามัคคี",[45110]],["สระนกแก้ว",[45110]],["สว่าง",[45110]],["หนองใหญ่",[45110]],["อุ่มเม่า",[45110]],["แวง",[45110]],["โคกกกม่วง",[45110]],["โคกสูง",[45110]],["โนนชัยศรี",[45110]],["โพธิ์ทอง",[45110]],["โพธิ์ศรีสว่าง",[45110]]]]]],["ลพบุรี",[["ชัยบาดาล",[["ชัยนารายณ์",[15130]],["ชัยบาดาล",[15230]],["ซับตะเคียน",[15130]],["ท่าดินดำ",[15130]],["ท่ามะนาว",[15130]],["นาโสม",[15190]],["นิคมลำนารายณ์",[15130]],["บัวชุม",[15130]],["บ้านใหม่สามัคคี",[15130]],["มะกอกหวาน",[15230]],["ม่วงค่อม",[15230]],["ลำนารายณ์",[15130]],["ศิลาทิพย์",[15130]],["หนองยายโต๊ะ",[15130]],["ห้วยหิน",[15130]],["เกาะรัง",[15130]],["เขาแหลม",[15130]]]],["ท่าวุ้ง",[["ท่าวุ้ง",[15150]],["บางคู้",[15150]],["บางงา",[15150]],["บางลี่",[15150]],["บ้านเบิก",[15150]],["มุจลินท์",[15150]],["ลาดสาลี่",[15150]],["หัวสำโรง",[15150]],["เขาสมอคอน",[15180]],["โคกสลุด",[15150]],["โพตลาดแก้ว",[15150]]]],["ท่าหลวง",[["ซับจำปา",[15230]],["ทะเลวังวัด",[15230]],["ท่าหลวง",[15230]],["หนองผักแว่น",[15230]],["หัวลำ",[15230]],["แก่งผักกูด",[15230]]]],["บ้านหมี่",[["ชอนม่วง",[15110]],["ดงพลับ",[15110]],["ดอนดึง",[15110]],["บางกะพี้",[15110]],["บางขาม",[15180]],["บางพึ่ง",[15110]],["บ้านกล้วย",[15110]],["บ้านชี",[15180]],["บ้านทราย",[15110]],["บ้านหมี่",[15110]],["พุคา",[15110]],["มหาสอน",[15110]],["สนามแจง",[15110]],["สายห้วยแก้ว",[15110]],["หนองกระเบียน",[15110]],["หนองทรายขาว",[15110]],["หนองเต่า",[15110]],["หนองเมือง",[15110]],["หินปัก",[15110]],["เชียงงา",[15110]],["โพนทอง",[15110]],["ไผ่ใหญ่",[15110]]]],["พัฒนานิคม",[["ชอนน้อย",[15140]],["ช่องสาริกา",[15220]],["ดีลัง",[15220]],["น้ำสุด",[15140]],["พัฒนานิคม",[15140]],["มะนาวหวาน",[15140]],["หนองบัว",[15140]],["ห้วยขุนราม",[18220]],["โคกสลุง",[15140]]]],["ลำสนธิ",[["กุดตาเพชร",[15190]],["ซับสมบูรณ์",[15190]],["ลำสนธิ",[15190]],["หนองรี",[15190]],["เขาน้อย",[15130]],["เขารวก",[15190]]]],["สระโบสถ์",[["ทุ่งท่าช้าง",[15240]],["นิยมชัย",[15240]],["มหาโพธิ",[15240]],["สระโบสถ์",[15240]],["ห้วยใหญ่",[15240]]]],["หนองม่วง",[["ชอนสมบูรณ์",[15170]],["ชอนสารเดช",[15170]],["ดงดินแดง",[15170]],["บ่อทอง",[15170]],["ยางโทน",[15170]],["หนองม่วง",[15170]]]],["เมืองลพบุรี",[["กกโก",[15000]],["งิ้วราย",[15000]],["ดอนโพธิ์",[15000]],["ตะลุง",[15000]],["ถนนใหญ่",[15000]],["ทะเลชุบศร",[15000]],["ท่าศาลา",[15000]],["ท่าหิน",[15000]],["ท่าแค",[15000]],["ท้ายตลาด",[15000]],["นิคมสร้างตนเอง",[15000]],["บางขันหมาก",[15000]],["บ้านข่อย",[15000]],["ป่าตาล",[15000]],["พรหมมาสตร์",[15000]],["สี่คลอง",[15000]],["เขาพระงาม",[15160]],["เขาสามยอด",[15000]],["โก่งธนู",[13240]],["โคกกะเทียม",[15160]],["โคกตูม",[15210]],["โคกลำพาน",[15000]],["โพธิ์ตรุ",[15000]],["โพธิ์เก้าต้น",[15000]]]],["โคกสำโรง",[["คลองเกตุ",[15120]],["ดงมะรุม",[15120]],["ถลุงเหล็ก",[15120]],["วังขอนขว้าง",[15120]],["วังจั่น",[15120]],["วังเพลิง",[15120]],["สะแกราบ",[15120]],["หนองแขม",[15120]],["หลุมข้าว",[15120]],["ห้วยโป่ง",[15120]],["เกาะแก้ว",[15120]],["เพนียด",[15120]],["โคกสำโรง",[15120]]]],["โคกเจริญ",[["ยางราก",[15250]],["วังทอง",[15250]],["หนองมะค่า",[15250]],["โคกเจริญ",[15250]],["โคกแสมสาร",[15250]]]]]],["ลำปาง",[["งาว",[["นาแก",[52110]],["บ้านร้อง",[52110]],["บ้านหวด",[52110]],["บ้านอ้อน",[52110]],["บ้านแหง",[52110]],["บ้านโป่ง",[52110]],["ปงเตา",[52110]],["หลวงเหนือ",[52110]],["หลวงใต้",[52110]],["แม่ตีบ",[52110]]]],["วังเหนือ",[["ทุ่งฮั้ว",[52140]],["ร่องเคาะ",[52140]],["วังซ้าย",[52140]],["วังทรายคำ",[52140]],["วังทอง",[52140]],["วังเหนือ",[52140]],["วังแก้ว",[52140]],["วังใต้",[52140]]]],["สบปราบ",[["นายาง",[52170]],["สบปราบ",[52170]],["สมัย",[52170]],["แม่กัวะ",[52170]]]],["ห้างฉัตร",[["ปงยางคก",[52190]],["วอแก้ว",[52190]],["หนองหล่ม",[52190]],["ห้างฉัตร",[52190]],["เมืองยาว",[52190]],["เวียงตาล",[52190]],["แม่สัน",[52190]]]],["เกาะคา",[["ท่าผา",[52130]],["นาแก้ว",[52130]],["นาแส่ง",[52130]],["ลำปางหลวง",[52130]],["วังพร้าว",[52130]],["ศาลา",[52130]],["เกาะคา",[52130]],["ใหม่พัฒนา",[52130]],["ไหล่หิน",[52130]]]],["เถิน",[["นาโป่ง",[52160]],["ล้อมแรด",[52160]],["เถินบุรี",[52160]],["เวียงมอก",[52160]],["แม่ถอด",[52160]],["แม่ปะ",[52160]],["แม่มอก",[52160]],["แม่วะ",[52230]]]],["เมืองปาน",[["ทุ่งกว๋าว",[52240]],["บ้านขอ",[52240]],["หัวเมือง",[52240]],["เมืองปาน",[52240]],["แจ้ซ้อน",[52240]]]],["เมืองลำปาง",[["กล้วยแพะ",[52000]],["ชมพู",[52100]],["ต้นธงชัย",[52000]],["ทุ่งฝาย",[52000]],["นิคมพัฒนา",[52000]],["บุญนาคพัฒนา",[52000]],["บ่อแฮ้ว",[52100]],["บ้านค่า",[52100]],["บ้านเป้า",[52100]],["บ้านเสด็จ",[52000]],["บ้านเอื้อม",[52100]],["บ้านแลง",[52000]],["ปงแสนทอง",[52100]],["พระบาท",[52000]],["พิชัย",[52000]],["สบตุ๋ย",[52100]],["สวนดอก",[52100]],["หัวเวียง",[52000]],["เวียงเหนือ",[52000]]]],["เสริมงาม",[["ทุ่งงาม",[52210]],["เสริมกลาง",[52210]],["เสริมขวา",[52210]],["เสริมซ้าย",[52210]]]],["แจ้ห่ม",[["ทุ่งผึ้ง",[52120]],["บ้านสา",[52120]],["ปงดอน",[52120]],["วิเชตนคร",[52120]],["เมืองมาย",[52120]],["แจ้ห่ม",[52120]],["แม่สุก",[52120]]]],["แม่ทะ",[["ดอนไฟ",[52150]],["นาครัว",[52150]],["น้ำโจ้",[52150]],["บ้านกิ่ว",[52150]],["บ้านบอม",[52150]],["ป่าตัน",[52150]],["วังเงิน",[52150]],["สันดอนแก้ว",[52150]],["หัวเสือ",[52150]],["แม่ทะ",[52150]]]],["แม่พริก",[["ผาปัง",[52180]],["พระบาทวังตวง",[52230]],["แม่ปุ",[52180]],["แม่พริก",[52180]]]],["แม่เมาะ",[["จางเหนือ",[52220]],["นาสัก",[52220]],["บ้านดง",[52220]],["สบป้าด",[52220]],["แม่เมาะ",[52220]]]]]],["ลำพูน",[["ทุ่งหัวช้าง",[["ตะเคียนปม",[51160]],["ทุ่งหัวช้าง",[51160]],["บ้านปวง",[51160]]]],["บ้านธิ",[["บ้านธิ",[51180]],["ห้วยยาบ",[51180]]]],["บ้านโฮ่ง",[["บ้านโฮ่ง",[51130]],["ป่าพลู",[51130]],["ศรีเตี้ย",[51130]],["หนองปลาสะวาย",[51130]],["เหล่ายาว",[51130]]]],["ป่าซาง",[["ท่าตุ้ม",[51120]],["นครเจดีย์",[51120]],["น้ำดิบ",[51120]],["บ้านเรือน",[51120]],["ปากบ่อง",[51120]],["ป่าซาง",[51120]],["มะกอก",[51120]],["ม่วงน้อย",[51120]],["แม่แรง",[51120]]]],["ลี้",[["ก้อ",[51110]],["ดงดำ",[51110]],["นาทราย",[51110]],["ป่าไผ่",[51110]],["ลี้",[51110]],["ศรีวิชัย",[51110]],["แม่ตืน",[51110]],["แม่ลาน",[51110]]]],["เมืองลำพูน",[["ต้นธง",[51000]],["บ้านกลาง",[51000]],["บ้านแป้น",[51000]],["ประตูป่า",[51000]],["ป่าสัก",[51000]],["มะเขือแจ้",[51000]],["ริมปิง",[51000]],["ศรีบัวบาน",[51000]],["หนองช้างคืน",[51150]],["หนองหนาม",[51000]],["อุโมงค์",[51150]],["เวียงยอง",[51000]],["เหมืองง่า",[51000]],["เหมืองจี้",[51000]],["ในเมือง",[51000]]]],["เวียงหนองล่อง",[["วังผาง",[51120]],["หนองยวง",[51120]],["หนองล่อง",[51120]]]],["แม่ทา",[["ทากาศ",[51170]],["ทาขุมเงิน",[51170]],["ทาทุ่งหลวง",[51170]],["ทาปลาดุก",[51140]],["ทาสบเส้า",[51140]],["ทาแม่ลอบ",[51170]]]]]],["ศรีสะเกษ",[["กันทรลักษ์",[["กระแชง",[33110]],["กุดเสลา",[33110]],["ขนุน",[33110]],["จานใหญ่",[33110]],["ชำ",[33110]],["ตระกาจ",[33110]],["ทุ่งใหญ่",[33110]],["น้ำอ้อม",[33110]],["บึงมะลู",[33110]],["ภูผาหมอก",[33110]],["ภูเงิน",[33110]],["รุง",[33110]],["ละลาย",[33110]],["สวนกล้วย",[33110]],["สังเม็ก",[33110]],["หนองหญ้าลาด",[33110]],["เมือง",[33110]],["เวียงเหนือ",[33110]],["เสาธงชัย",[33110]],["โนนสำราญ",[33110]]]],["กันทรารมย์",[["คำเนียม",[33130]],["จาน",[33130]],["ดูน",[33130]],["ดู่",[33130]],["ทาม",[33130]],["บัวน้อย",[33130]],["ผักแพว",[33130]],["ยาง",[33130]],["ละทาย",[33130]],["หนองบัว",[33130]],["หนองหัวช้าง",[33130]],["หนองแก้ว",[33130]],["หนองแวง",[33130]],["อีปาด",[33130]],["เมืองน้อย",[33130]],["โนนสัง",[33130]]]],["ขุขันธ์",[["กฤษณา",[33140]],["กันทรารมย์",[33140]],["จะกง",[33140]],["ดองกำเม็ด",[33140]],["ตะเคียน",[33140]],["ตาอุด",[33140]],["นิคมพัฒนา",[33140]],["ปราสาท",[33140]],["ปรือใหญ่",[33140]],["ลมศักดิ์",[33140]],["ศรีตระกูล",[33140]],["ศรีสะอาด",[33140]],["สะเดาใหญ่",[33140]],["สำโรงตาเจ็น",[33140]],["หนองฉลอง",[33140]],["หัวเสือ",[33140]],["ห้วยสำราญ",[33140]],["ห้วยเหนือ",[33140]],["ห้วยใต้",[33140]],["โคกเพชร",[33140]],["โสน",[33140]],["ใจดี",[33140]]]],["ขุนหาญ",[["กระหวัน",[33150]],["กันทรอม",[33150]],["ขุนหาญ",[33150]],["บักดอง",[33150]],["พราน",[33150]],["ภูฝ้าย",[33150]],["สิ",[33150]],["ห้วยจันทร์",[33150]],["โนนสูง",[33150]],["โพธิ์กระสังข์",[33150]],["โพธิ์วงศ์",[33150]],["ไพร",[33150]]]],["น้ำเกลี้ยง",[["คูบ",[33130]],["ตองปิด",[33130]],["น้ำเกลี้ยง",[33130]],["รุ่งระวี",[33130]],["ละเอาะ",[33130]],["เขิน",[33130]]]],["บึงบูรพ์",[["บึงบูรพ์",[33220]],["เป๊าะ",[33220]]]],["ปรางค์กู่",[["กู่",[33170]],["ดู่",[33170]],["ตูม",[33170]],["พิมาย",[33170]],["พิมายเหนือ",[33170]],["สมอ",[33170]],["สวาย",[33170]],["สำโรงปราสาท",[33170]],["หนองเชียงทูน",[33170]],["โพธิ์ศรี",[33170]]]],["พยุห์",[["ตำแย",[33230]],["พยุห์",[33230]],["พรหมสวัสดิ์",[33230]],["หนองค้า",[33230]],["โนนเพ็ก",[33230]]]],["ภูสิงห์",[["ดงรัก",[33140]],["ตะเคียนราม",[33140]],["ละลม",[33140]],["ห้วยตามอญ",[33140]],["ห้วยตึ๊กชู",[33140]],["โคกตาล",[33140]],["ไพรพัฒนา",[33140]]]],["ยางชุมน้อย",[["กุดเมืองฮาม",[33190]],["คอนกาม",[33190]],["บึงบอน",[33190]],["ยางชุมน้อย",[33190]],["ยางชุมใหญ่",[33190]],["ลิ้นฟ้า",[33190]],["โนนคูณ",[33190]]]],["ราษีไศล",[["จิกสังข์ทอง",[33160]],["ดู่",[33160]],["ด่าน",[33160]],["บัวหุ่ง",[33160]],["สร้างปี่",[33160]],["ส้มป่อย",[33160]],["หนองหมี",[33160]],["หนองอึ่ง",[33160]],["หนองแค",[33160]],["หว้านคำ",[33160]],["เมืองคง",[33160]],["เมืองแคน",[33160]],["ไผ่",[33160]]]],["วังหิน",[["ดวนใหญ่",[33270]],["ทุ่งสว่าง",[33270]],["ธาตุ",[33270]],["บุสูง",[33270]],["บ่อแก้ว",[33270]],["วังหิน",[33270]],["ศรีสำราญ",[33270]],["โพนยาง",[33270]]]],["ศรีรัตนะ",[["ตูม",[33240]],["พิงพวย",[33240]],["ศรีแก้ว",[33240]],["ศรีโนนงาม",[33240]],["สระเยาว์",[33240]],["สะพุง",[33240]],["เสื่องข้าว",[33240]]]],["ศิลาลาด",[["กุง",[33160]],["คลีกลิ้ง",[33160]],["หนองบัวดง",[33160]],["โจดม่วง",[33160]]]],["ห้วยทับทัน",[["กล้วยกว้าง",[33210]],["จานแสนไชย",[33210]],["ปราสาท",[33210]],["ผักไหม",[33210]],["ห้วยทับทัน",[33210]],["เมืองหลวง",[33210]]]],["อุทุมพรพิสัย",[["กำแพง",[33120]],["ก้านเหลือง",[33120]],["ขะยูง",[33120]],["ตาเกษ",[33120]],["ทุ่งไชย",[33120]],["ปะอาว",[33120]],["รังแร้ง",[33120]],["สระกำแพงใหญ่",[33120]],["สำโรง",[33120]],["หนองห้าง",[33120]],["หนองไฮ",[33120]],["หัวช้าง",[33120]],["อี่หล่ำ",[33120]],["แขม",[33120]],["แข้",[33120]],["แต้",[33120]],["โคกจาน",[33120]],["โคกหล่าม",[33120]],["โพธิ์ชัย",[33120]]]],["เบญจลักษ์",[["ท่าคล้อ",[33110]],["หนองงูเหลือม",[33110]],["หนองหว้า",[33110]],["หนองฮาง",[33110]],["เสียว",[33110]]]],["เมืองจันทร์",[["ตาโกน",[33120]],["หนองใหญ่",[33120]],["เมืองจันทร์",[33120]]]],["เมืองศรีสะเกษ",[["คูซอด",[33000]],["จาน",[33000]],["ซำ",[33000]],["ตะดอบ",[33000]],["ทุ่ม",[33000]],["น้ำคำ",[33000]],["หญ้าปล้อง",[33000]],["หนองครก",[33000]],["หนองแก้ว",[33000]],["หนองไผ่",[33000]],["หนองไฮ",[33000]],["หมากเขียบ",[33000]],["เมืองเหนือ",[33000]],["เมืองใต้",[33000]],["โพธิ์",[33000]],["โพนข่า",[33000]],["โพนค้อ",[33000]],["โพนเขวา",[33000]]]],["โนนคูณ",[["บก",[33250]],["หนองกุง",[33250]],["เหล่ากวาง",[33250]],["โนนค้อ",[33250]],["โพธิ์",[33250]]]],["โพธิ์ศรีสุวรรณ",[["ผือใหญ่",[33120]],["หนองม้า",[33120]],["อีเซ",[33120]],["เสียว",[33120]],["โดด",[33120]]]],["ไพรบึง",[["ดินแดง",[33180]],["ปราสาทเยอ",[33180]],["สำโรงพลัน",[33180]],["สุขสวัสดิ์",[33180]],["โนนปูน",[33180]],["ไพรบึง",[33180]]]]]],["สกลนคร",[["กุดบาก",[["กุดบาก",[47180]],["กุดไห",[47180]],["นาม่อง",[47180]]]],["กุสุมาลย์",[["กุสุมาลย์",[47210]],["นาเพียง",[47230]],["นาโพธิ์",[47210]],["อุ่มจาน",[47230]],["โพธิ์ไพศาล",[47210]]]],["คำตากล้า",[["คำตากล้า",[47250]],["นาแต้",[47250]],["หนองบัวสิม",[47250]],["แพด",[47250]]]],["นิคมน้ำอูน",[["นิคมน้ำอูน",[47270]],["สุวรรณคาม",[47270]],["หนองบัว",[47270]],["หนองปลิง",[47270]]]],["บ้านม่วง",[["ดงหม้อทอง",[47140]],["ดงหม้อทองใต้",[47140]],["ดงเหนือ",[47140]],["บ่อแก้ว",[47140]],["มาย",[47140]],["ม่วง",[47140]],["หนองกวั่ง",[47140]],["ห้วยหลัว",[47140]],["โนนสะอาด",[47140]]]],["พรรณานิคม",[["ช้างมิ่ง",[47130]],["นาหัวบ่อ",[47220]],["นาใน",[47130]],["บะฮี",[47130]],["พรรณา",[47130]],["พอกน้อย",[47220]],["วังยาง",[47130]],["สว่าง",[47130]],["เชิงชุม",[47130]],["ไร่",[47130]]]],["พังโคน",[["ต้นผึ้ง",[47160]],["พังโคน",[47160]],["ม่วงไข่",[47160]],["แร่",[47160]],["ไฮหย่อง",[47160]]]],["ภูพาน",[["กกปลาซิว",[47180]],["สร้างค้อ",[47180]],["หลุบเลา",[47180]],["โคกภู",[47180]]]],["วานรนิวาส",[["กุดเรือคำ",[47120]],["ขัวก่าย",[47120]],["คอนสวรรค์",[47120]],["คูสะคาม",[47120]],["ธาตุ",[47120]],["นาคำ",[47120]],["นาซอ",[47120]],["วานรนิวาส",[47120]],["ศรีวิชัย",[47120]],["หนองสนม",[47120]],["หนองแวง",[47120]],["หนองแวงใต้",[47120]],["อินทร์แปลง",[47120]],["เดื่อศรีคันไชย",[47120]]]],["วาริชภูมิ",[["คำบ่อ",[47150]],["ค้อเขียว",[47150]],["ปลาโหล",[47150]],["วาริชภูมิ",[47150]],["หนองลาด",[47150]]]],["สว่างแดนดิน",[["คำสะอาด",[47110]],["ค้อใต้",[47110]],["ตาลเนิ้ง",[47240]],["ตาลโกน",[47240]],["ทรายมูล",[47110]],["ธาตุทอง",[47240]],["บงเหนือ",[47110]],["บงใต้",[47110]],["บ้านต้าย",[47110]],["บ้านถ่อน",[47110]],["พันนา",[47240]],["สว่างแดนดิน",[47110]],["หนองหลวง",[47110]],["แวง",[47240]],["โคกสี",[47110]],["โพนสูง",[47110]]]],["ส่องดาว",[["ท่าศิลา",[47190]],["ปทุมวาปี",[47190]],["วัฒนา",[47190]],["ส่องดาว",[47190]]]],["อากาศอำนวย",[["ท่าก้อน",[47170]],["นาฮี",[47170]],["บะหว้า",[47170]],["วาใหญ่",[47170]],["สามัคคีพัฒนา",[47170]],["อากาศ",[47170]],["โพนงาม",[47170]],["โพนแพง",[47170]]]],["เจริญศิลป์",[["ทุ่งแก",[47290]],["บ้านเหล่า",[47290]],["หนองแปน",[47290]],["เจริญศิลป์",[47290]],["โคกศิลา",[47290]]]],["เต่างอย",[["จันทร์เพ็ญ",[47260]],["นาตาล",[47260]],["บึงทวาย",[47260]],["เต่างอย",[47260]]]],["เมืองสกลนคร",[["ขมิ้น",[47220]],["งิ้วด่อน",[47000]],["ดงชน",[47000]],["ดงมะไฟ",[47000]],["ท่าแร่",[47230]],["ธาตุนาเวง",[47000]],["ธาตุเชิงชุม",[47000]],["พังขว้าง",[47000]],["ม่วงลาย",[47000]],["หนองลาด",[47220]],["ห้วยยาง",[47000]],["ฮางโฮง",[47000]],["เชียงเครือ",[47000]],["เหล่าปอแดง",[47000]],["โคกก่อง",[47000]],["โนนหอม",[47000]]]],["โคกศรีสุพรรณ",[["ด่านม่วงคำ",[47280]],["ตองโขบ",[47280]],["เหล่าโพนค้อ",[47280]],["แมดนาท่ม",[47280]]]],["โพนนาแก้ว",[["นาตงวัฒนา",[47230]],["นาแก้ว",[47230]],["บ้านแป้น",[47230]],["บ้านโพน",[47230]],["เชียงสือ",[47230]]]]]],["สงขลา",[["กระแสสินธุ์",[["กระแสสินธุ์",[90270]],["เกาะใหญ่",[90270]],["เชิงแส",[90270]],["โรง",[90270]]]],["คลองหอยโข่ง",[["คลองหลา",[90115]],["คลองหอยโข่ง",[90230]],["ทุ่งลาน",[90230]],["โคกม่วง",[90230]]]],["ควนเนียง",[["ควนโส",[90220]],["บางเหรียง",[90220]],["รัตภูมิ",[90220]],["ห้วยลึก",[90220]]]],["จะนะ",[["ขุนตัดหวาย",[90130]],["คลองเปียะ",[90130]],["คู",[90130]],["จะโหนง",[90130]],["ตลิ่งชัน",[90130]],["ท่าหมอไทร",[90130]],["นาทับ",[90130]],["นาหว้า",[90130]],["น้ำขาว",[90130]],["บ้านนา",[90130]],["ป่าชิง",[90130]],["สะกอม",[90130]],["สะพานไม้แก่น",[90130]],["แค",[90130]]]],["นาทวี",[["คลองกวาง",[90160]],["คลองทราย",[90160]],["ฉาง",[90160]],["ทับช้าง",[90160]],["ท่าประดู่",[90160]],["นาทวี",[90160]],["นาหมอศรี",[90160]],["ประกอบ",[90160]],["ปลักหนู",[90160]],["สะท้อน",[90160]]]],["นาหม่อม",[["คลองหรัง",[90310]],["ทุ่งขมิ้น",[90310]],["นาหม่อม",[90310]],["พิจิตร",[90310]]]],["บางกล่ำ",[["ท่าช้าง",[90110]],["บางกล่ำ",[90110]],["บ้านหาร",[90110]],["แม่ทอม",[90110]]]],["ระโนด",[["คลองแดน",[90140]],["ตะเครียะ",[90140]],["ท่าบอน",[90140]],["บ่อตรุ",[90140]],["บ้านขาว",[90140]],["บ้านใหม่",[90140]],["ปากแตระ",[90140]],["พังยาง",[90140]],["ระวะ",[90140]],["ระโนด",[90140]],["วัดสน",[90140]],["แดนสงวน",[90140]]]],["รัตภูมิ",[["กำแพงเพชร",[90180]],["ควนรู",[90220]],["คูหาใต้",[90180]],["ท่าชะมวง",[90180]],["เขาพระ",[90180]]]],["สทิงพระ",[["กระดังงา",[90190]],["คลองรี",[90190]],["คูขุด",[90190]],["จะทิ้งพระ",[90190]],["ชุมพล",[90190]],["ดีหลวง",[90190]],["ท่าหิน",[90190]],["บ่อดาน",[90190]],["บ่อแดง",[90190]],["วัดจันทร์",[90190]],["สนามชัย",[90190]]]],["สะบ้าย้อย",[["คูหา",[90210]],["จะแหน",[90210]],["ทุ่งพอ",[90210]],["ธารคีรี",[90210]],["บาโหย",[90210]],["บ้านโหนด",[90210]],["สะบ้าย้อย",[90210]],["เขาแดง",[90210]],["เปียน",[90210]]]],["สะเดา",[["ทุ่งหมอ",[90240]],["ท่าโพธิ์",[90170]],["ปริก",[90120]],["ปาดังเบซาร์",[90240]],["พังลา",[90170]],["สะเดา",[90120]],["สำนักขาม",[90320]],["สำนักแต้ว",[90120]],["เขามีเกียรติ",[90170]]]],["สิงหนคร",[["ชะแล้",[90330]],["ชิงโค",[90280]],["ทำนบ",[90280]],["บางเขียด",[90330]],["ปากรอ",[90330]],["ป่าขาด",[90330]],["ม่วงงาม",[90330]],["รำแดง",[90330]],["วัดขนุน",[90330]],["สทิงหม้อ",[90280]],["หัวเขา",[90280]]]],["หาดใหญ่",[["คลองอู่ตะเภา",[90110]],["คลองแห",[90110]],["ควนลัง",[90110]],["คอหงส์",[90110]],["คูเต่า",[90110]],["ฉลุง",[90110]],["ทุ่งตำเสา",[90110]],["ทุ่งใหญ่",[90110]],["ท่าข้าม",[90110]],["น้ำน้อย",[90110]],["บ้านพรุ",[90250]],["พะตง",[90230]],["หาดใหญ่",[90110]]]],["เทพา",[["ท่าม่วง",[90150]],["ปากบาง",[90150]],["ลำไพล",[90260]],["วังใหญ่",[90260]],["สะกอม",[90150]],["เกาะสะบ้า",[90150]],["เทพา",[90150]]]],["เมืองสงขลา",[["ทุ่งหวัง",[90000]],["บ่อยาง",[90000]],["พะวง",[90100]],["เกาะยอ",[90100]],["เกาะแต้ว",[90000]],["เขารูปช้าง",[90000]]]]]],["สตูล",[["ควนกาหลง",[["ควนกาหลง",[91130]],["ทุ่งนุ้ย",[91130]],["อุไดเจริญ",[91130]]]],["ควนโดน",[["ควนสตอ",[91160]],["ควนโดน",[91160]],["ย่านซื่อ",[91160]],["วังประจัน",[91160]]]],["ทุ่งหว้า",[["ขอนคลาน",[91120]],["ทุ่งบุหลัง",[91120]],["ทุ่งหว้า",[91120]],["นาทอน",[91120]],["ป่าแก่บ่อหิน",[91120]]]],["ท่าแพ",[["ท่าเรือ",[91150]],["ท่าแพ",[91150]],["สาคร",[91150]],["แป-ระ",[91150]]]],["มะนัง",[["นิคมพัฒนา",[91130]],["ปาล์มพัฒนา",[91130]]]],["ละงู",[["กำแพง",[91110]],["น้ำผุด",[91110]],["ปากน้ำ",[91110]],["ละงู",[91110]],["เขาขาว",[91110]],["แหลมสน",[91110]]]],["เมืองสตูล",[["คลองขุด",[91000]],["ควนขัน",[91000]],["ควนโพธิ์",[91140]],["ฉลุง",[91140]],["ตันหยงโป",[91000]],["ตำมะลัง",[91000]],["บ้านควน",[91140]],["ปูยู",[91000]],["พิมาน",[91000]],["เกตรี",[91140]],["เกาะสาหร่าย",[91000]],["เจ๊ะบิลัง",[91000]]]]]],["สมุทรปราการ",[["บางบ่อ",[["คลองด่าน",[10550]],["คลองนิยมยาตรา",[10560]],["คลองสวน",[10560]],["บางบ่อ",[10560]],["บางพลีน้อย",[10560]],["บางเพรียง",[10560]],["บ้านระกาศ",[10560]],["เปร็ง",[10560]]]],["บางพลี",[["บางปลา",[10540]],["บางพลีใหญ่",[10540]],["บางแก้ว",[10540]],["บางโฉลง",[10540]],["ราชาเทวะ",[10540]],["หนองปรือ",[10540]]]],["บางเสาธง",[["บางเสาธง",[10540]],["ศีรษะจรเข้น้อย",[10540]],["ศีรษะจรเข้ใหญ่",[10540]]]],["พระประแดง",[["ตลาด",[10130]],["ทรงคนอง",[10130]],["บางกระสอบ",[10130]],["บางกอบัว",[10130]],["บางกะเจ้า",[10130]],["บางครุ",[10130]],["บางจาก",[10130]],["บางน้ำผึ้ง",[10130]],["บางพึ่ง",[10130]],["บางยอ",[10130]],["บางหญ้าแพรก",[10130]],["บางหัวเสือ",[10130]],["สำโรง",[10130]],["สำโรงกลาง",[10130]],["สำโรงใต้",[10130]]]],["พระสมุทรเจดีย์",[["นาเกลือ",[10290]],["บ้านคลองสวน",[10290]],["ปากคลองบางปลากด",[10290]],["แหลมฟ้าผ่า",[10290]],["ในคลองบางปลากด",[10290]]]],["เมืองสมุทรปราการ",[["ท้ายบ้าน",[10280]],["ท้ายบ้านใหม่",[10280]],["บางด้วน",[10270]],["บางปู",[10280]],["บางปูใหม่",[10280]],["บางเมือง",[10270]],["บางเมืองใหม่",[10270]],["บางโปรง",[10270]],["ปากน้ำ",[10270]],["สำโรงเหนือ",[10270]],["เทพารักษ์",[10270]],["แพรกษา",[10280]],["แพรกษาใหม่",[10280]]]]]],["สมุทรสงคราม",[["บางคนที",[["กระดังงา",[75120]],["จอมปลวก",[75120]],["ดอนมะโนรา",[75120]],["บางกระบือ",[75120]],["บางกุ้ง",[75120]],["บางคนที",[75120]],["บางนกแขวก",[75120]],["บางพรม",[75120]],["บางยี่รงค์",[75120]],["บางสะแก",[75120]],["บ้านปราโมทย์",[75120]],["ยายแพง",[75120]],["โรงหีบ",[75120]]]],["อัมพวา",[["ท่าคา",[75110]],["บางช้าง",[75110]],["บางนางลี่",[75110]],["บางแค",[75110]],["ปลายโพงพาง",[75110]],["ยี่สาร",[75110]],["วัดประดู่",[75110]],["สวนหลวง",[75110]],["อัมพวา",[75110]],["เหมืองใหม่",[75110]],["แควอ้อม",[75110]],["แพรกหนามแดง",[75110]]]],["เมืองสมุทรสงคราม",[["คลองเขิน",[75000]],["คลองโคน",[75000]],["ท้ายหาด",[75000]],["นางตะเคียน",[75000]],["บางขันแตก",[75000]],["บางจะเกร็ง",[75000]],["บางแก้ว",[75000]],["บ้านปรก",[75000]],["ลาดใหญ่",[75000]],["แม่กลอง",[75000]],["แหลมใหญ่",[75000]]]]]],["สมุทรสาคร",[["กระทุ่มแบน",[["คลองมะเดื่อ",[74110]],["ดอนไก่ดี",[74110]],["ตลาดกระทุ่มแบน",[74110]],["ท่าเสา",[74110]],["ท่าไม้",[74110]],["บางยาง",[74110]],["สวนหลวง",[74110]],["หนองนกไข่",[74110]],["อ้อมน้อย",[74130]],["แคราย",[74110]]]],["บ้านแพ้ว",[["คลองตัน",[74120]],["บ้านแพ้ว",[74120]],["ยกกระบัตร",[74120]],["สวนส้ม",[74120]],["หนองบัว",[74120]],["หนองสองห้อง",[74120]],["หลักสอง",[74120]],["หลักสาม",[74120]],["อำแพง",[74120]],["เกษตรพัฒนา",[74120]],["เจ็ดริ้ว",[74120]],["โรงเข้",[74120]]]],["เมืองสมุทรสาคร",[["กาหลง",[74000]],["คอกกระบือ",[74000]],["ชัยมงคล",[74000]],["ท่าจีน",[74000]],["ท่าฉลอม",[74000]],["ท่าทราย",[74000]],["นาดี",[74000]],["นาโคก",[74000]],["บางกระเจ้า",[74000]],["บางน้ำจืด",[74000]],["บางหญ้าแพรก",[74000]],["บางโทรัด",[74000]],["บ้านบ่อ",[74000]],["บ้านเกาะ",[74000]],["พันท้ายนรสิงห์",[74000]],["มหาชัย",[74000]],["โกรกกราก",[74000]],["โคกขาม",[74000]]]]]],["สระบุรี",[["ดอนพุด",[["ดงตะงาว",[18210]],["ดอนพุด",[18210]],["บ้านหลวง",[18210]],["ไผ่หลิ่ว",[18210]]]],["บ้านหมอ",[["ตลาดน้อย",[18130]],["บางโขมด",[18130]],["บ้านครัว",[18270]],["บ้านหมอ",[18130]],["สร่างโศก",[18130]],["หนองบัว",[18130]],["หรเทพ",[18130]],["โคกใหญ่",[18130]],["ไผ่ขวาง",[18130]]]],["พระพุทธบาท",[["ขุนโขลน",[18120]],["ธารเกษม",[18120]],["นายาว",[18120]],["พระพุทธบาท",[18120]],["พุกร่าง",[18120]],["พุคำจาน",[18120]],["หนองแก",[18120]],["ห้วยป่าหวาย",[18120]],["เขาวง",[18120]]]],["มวกเหล็ก",[["ซับสนุ่น",[18220]],["มวกเหล็ก",[18180]],["มิตรภาพ",[18180]],["ลำพญากลาง",[30130]],["ลำสมพุง",[30130]],["หนองย่างเสือ",[18180]]]],["วังม่วง",[["คำพราน",[18220]],["วังม่วง",[18220]],["แสลงพัน",[18220]]]],["วิหารแดง",[["คลองเรือ",[18150]],["บ้านลำ",[18150]],["วิหารแดง",[18150]],["หนองสรวง",[18150]],["หนองหมู",[18150]],["เจริญธรรม",[18150]]]],["หนองแค",[["กุ่มหัก",[18140]],["คชสิทธิ์",[18250]],["บัวลอย",[18230]],["หนองจรเข้",[18140]],["หนองจิก",[18230]],["หนองนาก",[18230]],["หนองปลาหมอ",[18140]],["หนองปลิง",[18140]],["หนองแขม",[18140]],["หนองแค",[18140]],["หนองโรง",[18140]],["หนองไข่น้ำ",[18140]],["ห้วยขมิ้น",[18230]],["ห้วยทราย",[18230]],["โคกตูม",[18250]],["โคกแย้",[18230]],["โพนทอง",[18250]],["ไผ่ต่ำ",[18140]]]],["หนองแซง",[["ม่วงหวาน",[18170]],["หนองกบ",[18170]],["หนองควายโซ",[18170]],["หนองสีดา",[18170]],["หนองหัวโพ",[18170]],["หนองแซง",[18170]],["เขาดิน",[18170]],["โคกสะอาด",[18170]],["ไก่เส่า",[18170]]]],["หนองโดน",[["ดอนทอง",[18190]],["บ้านกลับ",[18190]],["บ้านโปร่ง",[18190]],["หนองโดน",[18190]]]],["เฉลิมพระเกียรติ",[["บ้านแก้ง",[18000]],["ผึ้งรวง",[18000]],["พุแค",[18240]],["หน้าพระลาน",[18240]],["ห้วยบง",[18000]],["เขาดินพัฒนา",[18000]]]],["เมืองสระบุรี",[["กุดนกเปล้า",[18000]],["ดาวเรือง",[18000]],["ตลิ่งชัน",[18000]],["ตะกุด",[18000]],["นาโฉง",[18000]],["ปากข้าวสาร",[18000]],["ปากเพรียว",[18000]],["หนองปลาไหล",[18000]],["หนองยาว",[18000]],["หนองโน",[18000]],["โคกสว่าง",[18000]]]],["เสาไห้",[["งิ้วงาม",[18160]],["ต้นตาล",[18160]],["ท่าช้าง",[18160]],["บ้านยาง",[18160]],["พระยาทด",[18160]],["ม่วงงาม",[18160]],["ศาลารีไทย",[18160]],["สวนดอกไม้",[18160]],["หัวปลวก",[18160]],["เมืองเก่า",[18160]],["เริงราง",[18160]],["เสาไห้",[18160]]]],["แก่งคอย",[["ชะอม",[18110]],["ชำผักแพว",[18110]],["ตาลเดี่ยว",[18110]],["ทับกวาง",[18260]],["ท่าคล้อ",[18110]],["ท่าตูม",[18110]],["ท่ามะปราง",[18110]],["บ้านธาตุ",[18110]],["บ้านป่า",[18110]],["สองคอน",[18110]],["หินซ้อน",[18110]],["ห้วยแห้ง",[18110]],["เตาปูน",[18110]],["แก่งคอย",[18110]]]]]],["สระแก้ว",[["คลองหาด",[["คลองหาด",[27260]],["คลองไก่เถื่อน",[27260]],["ซับมะกรูด",[27260]],["เบญจขร",[27260]],["ไทยอุดม",[27260]],["ไทรทอง",[27260]],["ไทรเดี่ยว",[27260]]]],["ตาพระยา",[["ตาพระยา",[27180]],["ทัพราช",[27180]],["ทัพเสด็จ",[27180]],["ทัพไทย",[27180]],["โคคลาน",[27180]]]],["วังน้ำเย็น",[["คลองหินปูน",[27210]],["ตาหลังใน",[27210]],["ทุ่งมหาเจริญ",[27210]],["วังน้ำเย็น",[27210]]]],["วังสมบูรณ์",[["วังทอง",[27250]],["วังสมบูรณ์",[27250]],["วังใหม่",[27250]]]],["วัฒนานคร",[["ช่องกุ่ม",[27160]],["ท่าเกวียน",[27160]],["ผักขะ",[27160]],["วัฒนานคร",[27160]],["หนองตะเคียนบอน",[27160]],["หนองน้ำใส",[27160]],["หนองหมากฝ้าย",[27160]],["หนองแวง",[27160]],["ห้วยโจด",[27160]],["แซร์ออ",[27160]],["โนนหมากเค็ง",[27160]]]],["อรัญประเทศ",[["คลองทับจันทร์",[27120]],["คลองน้ำใส",[27120]],["ทับพริก",[27120]],["ท่าข้าม",[27120]],["บ้านด่าน",[27120]],["บ้านใหม่หนองไทร",[27120]],["ป่าไร่",[27120]],["ผ่านศึก",[27120]],["ฟากห้วย",[27120]],["หนองสังข์",[27120]],["หันทราย",[27120]],["อรัญประเทศ",[27120]],["เมืองไผ่",[27120]]]],["เขาฉกรรจ์",[["พระเพลิง",[27000]],["หนองหว้า",[27000]],["เขาฉกรรจ์",[27000]],["เขาสามสิบ",[27000]]]],["เมืองสระแก้ว",[["ท่าเกษม",[27000]],["ท่าแยก",[27000]],["บ้านแก้ง",[27000]],["ศาลาลำดวน",[27000]],["สระขวัญ",[27000]],["สระแก้ว",[27000]],["หนองบอน",[27000]],["โคกปี่ฆ้อง",[27000]]]],["โคกสูง",[["หนองม่วง",[27180]],["หนองแวง",[27180]],["โคกสูง",[27120]],["โนนหมากมุ่น",[27120]]]]]],["สิงห์บุรี",[["ค่ายบางระจัน",[["คอทราย",[16150]],["ท่าข้าม",[16150]],["บางระจัน",[16150]],["หนองกระทุ่ม",[16150]],["โพทะเล",[16150]],["โพสังโฆ",[16150]]]],["ท่าช้าง",[["ถอนสมอ",[16140]],["พิกุลทอง",[16140]],["วิหารขาว",[16140]],["โพประจักษ์",[16140]]]],["บางระจัน",[["บ้านจ่า",[16130]],["พักทัน",[16130]],["สระแจง",[16130]],["สิงห์",[16130]],["เชิงกลัด",[16130]],["แม่ลา",[16130]],["โพชนไก่",[16130]],["ไม้ดัด",[16130]]]],["พรหมบุรี",[["บางน้ำเชี่ยว",[16120]],["บ้านหม้อ",[16120]],["บ้านแป้ง",[16120]],["พรหมบุรี",[16160]],["พระงาม",[16120]],["หัวป่า",[16120]],["โรงช้าง",[16120]]]],["อินทร์บุรี",[["งิ้วราย",[16110]],["ชีน้ำร้าย",[16110]],["ทองเอน",[16110]],["ทับยา",[16110]],["ท่างาม",[16110]],["น้ำตาล",[16110]],["ประศุก",[16110]],["ห้วยชัน",[16110]],["อินทร์บุรี",[16110]],["โพธิ์ชัย",[16110]]]],["เมืองสิงห์บุรี",[["จักรสีห์",[16000]],["ต้นโพธิ์",[16000]],["บางกระบือ",[16000]],["บางพุทรา",[16000]],["บางมัญ",[16000]],["ม่วงหมู่",[16000]],["หัวไผ่",[16000]],["โพกรวม",[16000]]]]]],["สุพรรณบุรี",[["ดอนเจดีย์",[["ดอนเจดีย์",[72170]],["ทะเลบก",[72250]],["สระกระโจม",[72250]],["หนองสาหร่าย",[72170]],["ไร่รถ",[72170]]]],["ด่านช้าง",[["ด่านช้าง",[72180]],["นิคมกระเสียว",[72180]],["วังคัน",[72180]],["วังยาว",[72180]],["หนองมะค่าโมง",[72180]],["ห้วยขมิ้น",[72180]],["องค์พระ",[72180]]]],["บางปลาม้า",[["กฤษณา",[72150]],["จรเข้ใหญ่",[72150]],["ตะค่า",[72150]],["บางปลาม้า",[72150]],["บางใหญ่",[72150]],["บ้านแหลม",[72150]],["มะขามล้ม",[72150]],["วังน้ำเย็น",[72150]],["วัดดาว",[72150]],["วัดโบสถ์",[72150]],["สาลี",[72150]],["องครักษ์",[72150]],["โคกคราม",[72150]],["ไผ่กองดิน",[72150]]]],["ศรีประจันต์",[["ดอนปรู",[72140]],["บางงาม",[72140]],["บ้านกร่าง",[72140]],["ปลายนา",[72140]],["มดแดง",[72140]],["วังน้ำซับ",[72140]],["วังยาง",[72140]],["วังหว้า",[72140]],["ศรีประจันต์",[72140]]]],["สองพี่น้อง",[["ดอนมะนาว",[72110]],["ต้นตาล",[72110]],["ทุ่งคอก",[72110]],["บางตะเคียน",[72110]],["บางตาเถร",[72110]],["บางพลับ",[72110]],["บางเลน",[72110]],["บ่อสุพรรณ",[72190]],["บ้านกุ่ม",[72110]],["บ้านช้าง",[72110]],["ศรีสำราญ",[72110]],["สองพี่น้อง",[72110]],["หนองบ่อ",[72190]],["หัวโพธิ์",[72110]],["เนินพระปรางค์",[72110]]]],["สามชุก",[["กระเสียว",[72130]],["บ้านสระ",[72130]],["ย่านยาว",[72130]],["วังลึก",[72130]],["สามชุก",[72130]],["หนองผักนาก",[72130]],["หนองสะเดา",[72130]]]],["หนองหญ้าไซ",[["ทัพหลวง",[72240]],["หนองขาม",[72240]],["หนองราชวัตร",[72240]],["หนองหญ้าไซ",[72240]],["หนองโพธิ์",[72240]],["แจงงาม",[72240]]]],["อู่ทอง",[["กระจัน",[72160]],["จรเข้สามพัน",[71170]],["ดอนคา",[72160]],["ดอนมะเกลือ",[72220]],["บ้านดอน",[72160]],["บ้านโข้ง",[72160]],["พลับพลาไชย",[72160]],["ยุ้งทะลาย",[72160]],["สระพังลาน",[72220]],["สระยายโสม",[72220]],["หนองโอ่ง",[72160]],["อู่ทอง",[72160]],["เจดีย์",[72160]]]],["เดิมบางนางบวช",[["ทุ่งคลี",[72120]],["นางบวช",[72120]],["บ่อกรุ",[72120]],["ปากน้ำ",[72120]],["ป่าสะแก",[72120]],["ยางนอน",[72120]],["วังศรีราช",[72120]],["หนองกระทุ่ม",[72120]],["หัวนา",[72120]],["หัวเขา",[72120]],["เขาดิน",[72120]],["เขาพระ",[72120]],["เดิมบาง",[72120]],["โคกช้าง",[72120]]]],["เมืองสุพรรณบุรี",[["ดอนกำยาน",[72000]],["ดอนตาล",[72000]],["ดอนมะสังข์",[72000]],["ดอนโพธิ์ทอง",[72000]],["ตลิ่งชัน",[72230]],["ทับตีเหล็ก",[72000]],["ท่าพี่เลี้ยง",[72000]],["ท่าระหัด",[72000]],["บางกุ้ง",[72210]],["บ้านโพธิ์",[72000]],["พิหารแดง",[72000]],["รั้วใหญ่",[72000]],["ศาลาขาว",[72210]],["สนามคลี",[72230]],["สนามชัย",[72000]],["สระแก้ว",[72230]],["สวนแตง",[72210]],["โคกโคเฒ่า",[72000]],["โพธิ์พระยา",[72000]],["ไผ่ขวาง",[72000]]]]]],["สุราษฎร์ธานี",[["กาญจนดิษฐ์",[["กรูด",[84160]],["กะแดะ",[84160]],["คลองสระ",[84160]],["ช้างขวา",[84160]],["ช้างซ้าย",[84160]],["ตะเคียนทอง",[84160]],["ทุ่งกง",[84290]],["ทุ่งรัง",[84290]],["ท่าทอง",[84160]],["ท่าทองใหม่",[84290]],["ท่าอุแท",[84160]],["ป่าร่อน",[84160]],["พลายวาส",[84160]]]],["คีรีรัฐนิคม",[["กะเปา",[84180]],["ถ้ำสิงขร",[84180]],["ท่ากระดาน",[84180]],["ท่าขนอน",[84180]],["น้ำหัก",[84180]],["บ้านทำเนียบ",[84180]],["บ้านยาง",[84180]],["ย่านยาว",[84180]]]],["ชัยบุรี",[["คลองน้อย",[84350]],["ชัยบุรี",[84350]],["สองแพรก",[84350]],["ไทรทอง",[84350]]]],["ดอนสัก",[["ชลคราม",[84160]],["ดอนสัก",[84220]],["ปากแพรก",[84340]],["ไชยคราม",[84220]]]],["ท่าฉาง",[["คลองไทร",[84150]],["ท่าฉาง",[84150]],["ท่าเคย",[84150]],["ปากฉลุย",[84150]],["เขาถ่าน",[84150]],["เสวียด",[84150]]]],["ท่าชนะ",[["คลองพา",[84170]],["คันธุลี",[84170]],["ท่าชนะ",[84170]],["ประสงค์",[84170]],["วัง",[84170]],["สมอทอง",[84170]]]],["บ้านตาขุน",[["พรุไทย",[84230]],["พะแสง",[84230]],["เขาพัง",[84230]],["เขาวง",[84230]]]],["บ้านนาสาร",[["คลองปราบ",[84120]],["ควนศรี",[84270]],["ควนสุบรรณ",[84120]],["ทุ่งเตา",[84120]],["ทุ่งเตาใหม่",[84120]],["ท่าชี",[84120]],["นาสาร",[84120]],["น้ำพุ",[84120]],["พรุพี",[84270]],["ลำพูน",[84120]],["เพิ่มพูนทรัพย์",[84120]]]],["บ้านนาเดิม",[["ทรัพย์ทวี",[84240]],["ท่าเรือ",[84240]],["นาใต้",[84240]],["บ้านนา",[84240]]]],["พนม",[["คลองชะอุ่น",[84250]],["คลองศก",[84250]],["ต้นยวน",[84250]],["พนม",[84250]],["พลูเถื่อน",[84250]],["พังกาญจน์",[84250]]]],["พระแสง",[["บางสวรรค์",[84210]],["สาคู",[84210]],["สินปุน",[84210]],["สินเจริญ",[84210]],["อิปัน",[84210]],["ไทรขึง",[84210]],["ไทรโสภา",[84210]]]],["พุนพิน",[["กรูด",[84130]],["ตะปาน",[84130]],["ท่าข้าม",[84130]],["ท่าสะท้อน",[84130]],["ท่าโรงช้าง",[84130]],["น้ำรอบ",[84130]],["บางงอน",[84130]],["บางมะเดื่อ",[84130]],["บางเดือน",[84130]],["พุนพิน",[84130]],["มะลวน",[84130]],["ลีเล็ด",[84130]],["ศรีวิชัย",[84130]],["หนองไทร",[84130]],["หัวเตย",[84130]],["เขาหัวควาย",[84130]]]],["วิภาวดี",[["ตะกุกเหนือ",[84180]],["ตะกุกใต้",[84180]]]],["เกาะพะงัน",[["บ้านใต้",[84280]],["เกาะพะงัน",[84280]],["เกาะเต่า",[84280]]]],["เกาะสมุย",[["ตลิ่งงาม",[84140]],["บ่อผุด",[84320]],["มะเร็ต",[84310]],["ลิปะน้อย",[84140]],["หน้าเมือง",[84140]],["อ่างทอง",[84140]],["แม่น้ำ",[84330]]]],["เคียนซา",[["บ้านเสด็จ",[84260]],["พ่วงพรมคร",[84210]],["อรัญคามวารี",[84260]],["เขาตอก",[84260]],["เคียนซา",[84260]]]],["เมืองสุราษฎร์ธานี",[["ขุนทะเล",[84100]],["คลองฉนาก",[84000]],["คลองน้อย",[84000]],["ตลาด",[84000]],["บางกุ้ง",[84000]],["บางชนะ",[84000]],["บางโพธิ์",[84000]],["บางใบไม้",[84000]],["บางไทร",[84000]],["มะขามเตี้ย",[84000]],["วัดประดู่",[84000]]]],["เวียงสระ",[["คลองฉนวน",[84190]],["ทุ่งหลวง",[84190]],["บ้านส้อง",[84190]],["เขานิพันธ์",[84190]],["เวียงสระ",[84190]]]],["ไชยา",[["ตลาดไชยา",[84110]],["ตะกรบ",[84110]],["ทุ่ง",[84110]],["ปากหมาก",[84110]],["ป่าเว",[84110]],["พุมเรียง",[84110]],["เลม็ด",[84110]],["เวียง",[84110]],["โมถ่าย",[84110]]]]]],["สุรินทร์",[["กาบเชิง",[["กาบเชิง",[32210]],["คูตัน",[32210]],["ด่าน",[32210]],["ตะเคียน",[32210]],["แนงมุด",[32210]],["โคกตะเคียน",[32210]]]],["จอมพระ",[["กระหาด",[32180]],["จอมพระ",[32180]],["ชุมแสง",[32180]],["บุแกรง",[32180]],["บ้านผือ",[32180]],["ลุ่มระวี",[32180]],["หนองสนิท",[32180]],["เป็นสุข",[32180]],["เมืองลีง",[32180]]]],["ชุมพลบุรี",[["กระเบื้อง",[32190]],["ชุมพลบุรี",[32190]],["นาหนองไผ่",[32190]],["ยะวึก",[32190]],["ศรีณรงค์",[32190]],["สระขุด",[32190]],["หนองเรือ",[32190]],["เมืองบัว",[32190]],["ไพรขลา",[32190]]]],["ท่าตูม",[["กระโพ",[32120]],["ทุ่งกุลา",[32120]],["ท่าตูม",[32120]],["บะ",[32120]],["บัวโคก",[32120]],["พรมเทพ",[32120]],["หนองบัว",[32120]],["หนองเมธี",[32120]],["เมืองแก",[32120]],["โพนครก",[32120]]]],["บัวเชด",[["จรัส",[32230]],["ตาวัง",[32230]],["บัวเชด",[32230]],["สะเดา",[32230]],["สำเภาลูน",[32230]],["อาโพน",[32230]]]],["ปราสาท",[["กังแอน",[32140]],["กันตวจระมวล",[32140]],["ตานี",[32140]],["ตาเบา",[32140]],["ทมอ",[32140]],["ทุ่งมน",[32140]],["บ้านพลวง",[32140]],["บ้านไทร",[32140]],["ประทัดบุ",[32140]],["ปราสาททนง",[32140]],["ปรือ",[32140]],["สมุด",[32140]],["หนองใหญ่",[32140]],["เชื้อเพลิง",[32140]],["โคกยาง",[32140]],["โคกสะอาด",[32140]],["โชคนาสาม",[32140]],["ไพล",[32140]]]],["พนมดงรัก",[["จีกแดก",[32140]],["ตาเมียง",[32140]],["บักได",[32140]],["โคกกลาง",[32140]]]],["รัตนบุรี",[["กุดขาคีม",[32130]],["ดอนแรด",[32130]],["ทับใหญ่",[32130]],["ธาตุ",[32130]],["น้ำเขียว",[32130]],["ยางสว่าง",[32130]],["รัตนบุรี",[32130]],["หนองบัวทอง",[32130]],["หนองบัวบาน",[32130]],["เบิด",[32130]],["แก",[32130]],["ไผ่",[32130]]]],["ลำดวน",[["ตระเปียงเตีย",[32220]],["ตรำดม",[32220]],["ลำดวน",[32220]],["อู่โลก",[32220]],["โชคเหนือ",[32220]]]],["ศรีณรงค์",[["ณรงค์",[32150]],["ตรวจ",[32150]],["ศรีสุข",[32150]],["หนองแวง",[32150]],["แจนแวน",[32150]]]],["ศีขรภูมิ",[["กุดหวาย",[32110]],["ขวาวใหญ่",[32110]],["คาละแมะ",[32110]],["จารพัต",[32110]],["ช่างปี่",[32110]],["ตรมไพร",[32110]],["ตรึม",[32110]],["นารุ่ง",[32110]],["ผักไหม",[32110]],["ยาง",[32110]],["ระแงง",[32110]],["หนองขวาว",[32110]],["หนองบัว",[32110]],["หนองเหล็ก",[32110]],["แตล",[32110]]]],["สนม",[["นานวน",[32160]],["สนม",[32160]],["หนองระฆัง",[32160]],["หนองอียอ",[32160]],["หัวงัว",[32160]],["แคน",[32160]],["โพนโก",[32160]]]],["สังขะ",[["กระเทียม",[32150]],["ขอนแตก",[32150]],["ดม",[32150]],["ตาคง",[32150]],["ตาตุม",[32150]],["ทับทัน",[32150]],["บ้านจารย์",[32150]],["บ้านชบ",[32150]],["พระแก้ว",[32150]],["สะกาด",[32150]],["สังขะ",[32150]],["เทพรักษา",[32150]]]],["สำโรงทาบ",[["กระออม",[32170]],["ประดู่",[32170]],["ศรีสุข",[32170]],["สะโน",[32170]],["สำโรงทาบ",[32170]],["หนองฮะ",[32170]],["หนองไผ่ล้อม",[32170]],["หมื่นศรี",[32170]],["เกาะแก้ว",[32170]],["เสม็จ",[32170]]]],["เขวาสินรินทร์",[["ตากูก",[32000]],["บึง",[32000]],["บ้านแร่",[32000]],["ปราสาททอง",[32000]],["เขวาสินรินทร์",[32000]]]],["เมืองสุรินทร์",[["กาเกาะ",[32000]],["คอโค",[32000]],["ตระแสง",[32000]],["ตั้งใจ",[32000]],["ตาอ็อง",[32000]],["ท่าสว่าง",[32000]],["นอกเมือง",[32000]],["นาดี",[32000]],["นาบัว",[32000]],["บุฤาษี",[32000]],["ราม",[32000]],["สลักได",[32000]],["สวาย",[32000]],["สำโรง",[32000]],["เฉนียง",[32000]],["เทนมีย์",[32000]],["เพี้ยราม",[32000]],["เมืองที",[32000]],["แกใหญ่",[32000]],["แสลงพันธ์",[32000]],["ในเมือง",[32000]]]],["โนนนารายณ์",[["คำผง",[32130]],["ระเวียง",[32130]],["หนองหลวง",[32130]],["หนองเทพ",[32130]],["โนน",[32130]]]]]],["สุโขทัย",[["กงไกรลาศ",[["กกแรต",[64170]],["กง",[64170]],["ดงเดือย",[64170]],["ท่าฉนวน",[64170]],["บ้านกร่าง",[64170]],["บ้านใหม่สุขเกษม",[64170]],["ป่าแฝก",[64170]],["หนองตูม",[64170]],["ไกรกลาง",[64170]],["ไกรนอก",[64170]],["ไกรใน",[64170]]]],["คีรีมาศ",[["ทุ่งยางเมือง",[64160]],["ทุ่งหลวง",[64160]],["นาเชิงคีรี",[64160]],["บ้านน้ำพุ",[64160]],["บ้านป้อม",[64160]],["ศรีคีรีมาศ",[64160]],["สามพวง",[64160]],["หนองกระดิ่ง",[64160]],["หนองจิก",[64160]],["โตนด",[64160]]]],["ทุ่งเสลี่ยม",[["กลางดง",[64150]],["ทุ่งเสลี่ยม",[64150]],["บ้านใหม่ไชยมงคล",[64230]],["เขาแก้วศรีสมบูรณ์",[64230]],["ไทยชนะศึก",[64150]]]],["บ้านด่านลานหอย",[["ตลิ่งชัน",[64140]],["บ้านด่าน",[64140]],["ลานหอย",[64140]],["วังตะคร้อ",[64140]],["วังน้ำขาว",[64140]],["วังลึก",[64140]],["หนองหญ้าปล้อง",[64140]]]],["ศรีนคร",[["คลองมะพลับ",[64180]],["นครเดิฐ",[64180]],["น้ำขุม",[64180]],["ศรีนคร",[64180]],["หนองบัว",[64180]]]],["ศรีสัชนาลัย",[["ดงคู่",[64130]],["ท่าชัย",[64190]],["บ้านตึก",[64130]],["บ้านแก่ง",[64130]],["ป่างิ้ว",[64130]],["ศรีสัชนาลัย",[64190]],["สารจิตร",[64130]],["หนองอ้อ",[64130]],["หาดเสี้ยว",[64130]],["แม่สำ",[64130]],["แม่สิน",[64130]]]],["ศรีสำโรง",[["คลองตาล",[64120]],["ทับผึ้ง",[64120]],["นาขุนไกร",[64120]],["บ้านซ่าน",[64120]],["บ้านนา",[64120]],["บ้านไร่",[64120]],["ราวต้นจันทร์",[64120]],["วังทอง",[64120]],["วังลึก",[64120]],["วังใหญ่",[64120]],["วัดเกาะ",[64120]],["สามเรือน",[64120]],["เกาะตาเลี้ยง",[64120]]]],["สวรรคโลก",[["คลองกระจง",[64110]],["คลองยาง",[64110]],["ท่าทอง",[64110]],["นาทุ่ง",[64110]],["ปากน้ำ",[64110]],["ป่ากุมเกาะ",[64110]],["ย่านยาว",[64110]],["วังพิณพาทย์",[64110]],["วังไม้ขอน",[64110]],["หนองกลับ",[64110]],["เมืองบางขลัง",[64110]],["เมืองบางยม",[64110]],["เมืองสวรรคโลก",[64110]],["ในเมือง",[64110]]]],["เมืองสุโขทัย",[["ตาลเตี้ย",[64220]],["ธานี",[64000]],["บ้านกล้วย",[64000]],["บ้านสวน",[64220]],["บ้านหลุม",[64000]],["ปากพระ",[64000]],["ปากแคว",[64000]],["ยางซ้าย",[64000]],["วังทองแดง",[64210]],["เมืองเก่า",[64210]]]]]],["หนองคาย",[["ท่าบ่อ",[["กองนาง",[43110]],["ท่าบ่อ",[43110]],["นาข่า",[43110]],["น้ำโมง",[43110]],["บ้านถ่อน",[43110]],["บ้านว่าน",[43110]],["บ้านเดื่อ",[43110]],["หนองนาง",[43110]],["โคกคอน",[43110]],["โพนสา",[43110]]]],["รัตนวาปี",[["นาทับไฮ",[43120]],["บ้านต้อน",[43120]],["พระบาทนาสิงห์",[43120]],["รัตนวาปี",[43120]],["โพนแพง",[43120]]]],["ศรีเชียงใหม่",[["บ้านหม้อ",[43130]],["พระพุทธบาท",[43130]],["พานพร้าว",[43130]],["หนองปลาปาก",[43130]]]],["สระใคร",[["คอกช้าง",[43100]],["บ้านฝาง",[43100]],["สระใคร",[43100]]]],["สังคม",[["นางิ้ว",[43160]],["บ้านม่วง",[43160]],["ผาตั้ง",[43160]],["สังคม",[43160]],["แก้งไก่",[43160]]]],["เฝ้าไร่",[["นาดี",[43120]],["วังหลวง",[43120]],["หนองหลวง",[43120]],["อุดมพร",[43120]],["เฝ้าไร่",[43120]]]],["เมืองหนองคาย",[["กวนวัน",[43000]],["ค่ายบกหวาน",[43100]],["บ้านเดื่อ",[43000]],["ปะโค",[43000]],["พระธาตุบังพวน",[43100]],["มีชัย",[43000]],["วัดธาตุ",[43000]],["สองห้อง",[43100]],["สีกาย",[43000]],["หนองกอมเกาะ",[43000]],["หาดคำ",[43000]],["หินโงม",[43000]],["เมืองหมี",[43000]],["เวียงคุก",[43000]],["โพธิ์ชัย",[43000]],["ในเมือง",[43000]]]],["โพธิ์ตาก",[["ด่านศรีสุข",[43130]],["โพธิ์ตาก",[43130]],["โพนทอง",[43130]]]],["โพนพิสัย",[["กุดบง",[43120]],["จุมพล",[43120]],["ชุมช้าง",[43120]],["ทุ่งหลวง",[43120]],["นาหนัง",[43120]],["บ้านผือ",[43120]],["บ้านโพธิ์",[43120]],["วัดหลวง",[43120]],["สร้างนางขาว",[43120]],["เซิม",[43120]],["เหล่าต่างคำ",[43120]]]]]],["หนองบัวลำภู",[["นากลาง",[["กุดดินจี่",[39350]],["กุดแห่",[39170]],["ดงสวรรค์",[39350]],["ด่านช้าง",[39170]],["นากลาง",[39170]],["ฝั่งแดง",[39170]],["อุทัยสวรรค์",[39170]],["เก่ากลอย",[39350]],["โนนเมือง",[39170]]]],["นาวัง",[["นาเหล่า",[39170]],["นาแก",[39170]],["วังทอง",[39170]],["วังปลาป้อม",[39170]],["เทพคีรี",[39170]]]],["ศรีบุญเรือง",[["กุดสะเทียน",[39180]],["ทรายทอง",[39180]],["นากอก",[39180]],["ยางหล่อ",[39180]],["ศรีบุญเรือง",[39180]],["หนองกุงแก้ว",[39180]],["หนองบัวใต้",[39180]],["หนองแก",[39180]],["หันนางาม",[39180]],["เมืองใหม่",[39180]],["โนนม่วง",[39180]],["โนนสะอาด",[39180]]]],["สุวรรณคูหา",[["กุดผึ้ง",[39270]],["ดงมะไฟ",[39270]],["นาดี",[39270]],["นาด่าน",[39270]],["นาสี",[39270]],["บุญทัน",[39270]],["บ้านโคก",[39270]],["สุวรรณคูหา",[39270]]]],["เมืองหนองบัวลำภู",[["กุดจิก",[39000]],["นาคำไฮ",[39000]],["นามะเฟือง",[39000]],["บ้านขาม",[39000]],["บ้านพร้าว",[39000]],["ป่าไม้งาม",[39000]],["ลำภู",[39000]],["หนองบัว",[39000]],["หนองภัยศูนย์",[39000]],["หนองสวรรค์",[39000]],["หนองหว้า",[39000]],["หัวนา",[39000]],["โนนขมิ้น",[39000]],["โนนทัน",[39000]],["โพธิ์ชัย",[39000]]]],["โนนสัง",[["กุดดู่",[39140]],["นิคมพัฒนา",[39140]],["บ้านค้อ",[39140]],["บ้านถิ่น",[39140]],["ปางกู่",[39140]],["หนองเรือ",[39140]],["โคกม่วง",[39140]],["โคกใหญ่",[39140]],["โนนสัง",[39140]],["โนนเมือง",[39140]]]]]],["อำนาจเจริญ",[["ชานุมาน",[["คำเขื่อนแก้ว",[37210]],["ชานุมาน",[37210]],["ป่าก่อ",[37210]],["โคกก่ง",[37210]],["โคกสาร",[37210]]]],["ปทุมราชวงศา",[["คำโพน",[37110]],["นาป่าแซง",[37110]],["นาหว้า",[37110]],["ลือ",[37110]],["หนองข่า",[37110]],["ห้วย",[37110]],["โนนงาม",[37110]]]],["พนา",[["จานลาน",[37180]],["พนา",[37180]],["พระเหลา",[37180]],["ไม้กลอน",[37180]]]],["ลืออำนาจ",[["ดงบัง",[37120]],["ดงมะยาง",[37120]],["อำนาจ",[37120]],["เปือย",[37120]],["แมด",[37120]],["โคกกลาง",[37120]],["ไร่ขี",[37120]]]],["หัวตะพาน",[["คำพระ",[37240]],["จิกดู่",[37240]],["รัตนวารี",[37240]],["สร้างถ่อน้อย",[37240]],["หนองแก้ว",[37240]],["หัวตะพาน",[37240]],["เค็งใหญ่",[37240]],["โพนเมืองน้อย",[37240]]]],["เมืองอำนาจเจริญ",[["กุดปลาดุก",[37000]],["คึมใหญ่",[37000]],["ดอนเมย",[37000]],["นาจิก",[37000]],["นาผือ",[37000]],["นายม",[37000]],["นาวัง",[37000]],["นาหมอม้า",[37000]],["นาแต้",[37000]],["น้ำปลีก",[37000]],["บุ่ง",[37000]],["ปลาค้าว",[37000]],["สร้างนกทา",[37000]],["หนองมะแซว",[37000]],["ห้วยไร่",[37000]],["เหล่าพรวน",[37000]],["โนนหนามแท่ง",[37000]],["โนนโพธิ์",[37000]],["ไก่คำ",[37000]]]],["เสนางคนิคม",[["นาเวียง",[37290]],["หนองสามสี",[37290]],["หนองไฮ",[37290]],["เสนางคนิคม",[37290]],["โพนทอง",[37290]],["ไร่สีสุก",[37290]]]]]],["อุดรธานี",[["กุดจับ",[["กุดจับ",[41250]],["ขอนยูง",[41250]],["ตาลเลียน",[41250]],["ปะโค",[41250]],["สร้างก่อ",[41250]],["เชียงเพ็ง",[41250]],["เมืองเพีย",[41250]]]],["กุมภวาปี",[["กุมภวาปี",[41110]],["ตูมใต้",[41110]],["ท่าลี่",[41110]],["ปะโค",[41370]],["ผาสุก",[41370]],["พันดอน",[41370]],["สีออ",[41110]],["หนองหว้า",[41110]],["ห้วยเกิ้ง",[41110]],["เชียงแหว",[41110]],["เวียงคำ",[41110]],["เสอเพลอ",[41370]],["แชแล",[41110]]]],["กู่แก้ว",[["คอนสาย",[41130]],["ค้อใหญ่",[41130]],["บ้านจีต",[41130]],["โนนทองอินทร์",[41130]]]],["ทุ่งฝน",[["ทุ่งฝน",[41310]],["ทุ่งใหญ่",[41310]],["นาชุมแสง",[41310]],["นาทม",[41310]]]],["นายูง",[["นายูง",[41380]],["นาแค",[41380]],["บ้านก้อง",[41380]],["โนนทอง",[41380]]]],["น้ำโสม",[["นางัว",[41210]],["น้ำโสม",[41210]],["บ้านหยวก",[41210]],["ศรีสำราญ",[41210]],["สามัคคี",[41210]],["หนองแวง",[41210]],["โสมเยี่ยม",[41210]]]],["บ้านดุง",[["ดงเย็น",[41190]],["ถ่อนนาลับ",[41190]],["นาคำ",[41190]],["นาไหม",[41190]],["บ้านจันทร์",[41190]],["บ้านชัย",[41190]],["บ้านดุง",[41190]],["บ้านตาด",[41190]],["บ้านม่วง",[41190]],["วังทอง",[41190]],["ศรีสุทโธ",[41190]],["อ้อมกอ",[41190]],["โพนสูง",[41190]]]],["บ้านผือ",[["กลางใหญ่",[41160]],["ข้าวสาร",[41160]],["คำด้วง",[41160]],["คำบง",[41160]],["จำปาโมง",[41160]],["บ้านค้อ",[41160]],["บ้านผือ",[41160]],["หนองหัวคู",[41160]],["หนองแวง",[41160]],["หายโศก",[41160]],["เขือน้ำ",[41160]],["เมืองพาน",[41160]],["โนนทอง",[41160]]]],["ประจักษ์ศิลปาคม",[["นาม่วง",[41110]],["ห้วยสามพาด",[41110]],["อุ่มจาน",[41110]]]],["พิบูลย์รักษ์",[["ดอนกลอย",[41130]],["นาทราย",[41130]],["บ้านแดง",[41130]]]],["วังสามหมอ",[["คำโคกสูง",[41280]],["บะยาว",[41280]],["ผาสุก",[41280]],["วังสามหมอ",[41280]],["หนองกุงทับม้า",[41280]],["หนองหญ้าไซ",[41280]]]],["ศรีธาตุ",[["จำปี",[41230]],["ตาดทอง",[41230]],["นายูง",[41230]],["บ้านโปร่ง",[41230]],["ศรีธาตุ",[41230]],["หนองนกเขียน",[41230]],["หัวนาคำ",[41230]]]],["สร้างคอม",[["นาสะอาด",[41260]],["บ้านยวด",[41260]],["บ้านหินโงม",[41260]],["บ้านโคก",[41260]],["สร้างคอม",[41260]],["เชียงดา",[41260]]]],["หนองวัวซอ",[["กุดหมากไฟ",[41220]],["น้ำพ่น",[41360]],["หนองบัวบาน",[41360]],["หนองวัวซอ",[41360]],["หนองอ้อ",[41220]],["หมากหญ้า",[41360]],["อูบมุง",[41220]],["โนนหวาย",[41220]]]],["หนองหาน",[["ดอนหายโศก",[41130]],["บ้านยา",[41320]],["บ้านเชียง",[41320]],["ผักตบ",[41130]],["พังงู",[41130]],["สร้อยพร้าว",[41130]],["สะแบง",[41130]],["หนองสระปลา",[41320]],["หนองหาน",[41130]],["หนองเม็ก",[41130]],["หนองไผ่",[41130]],["โพนงาม",[41130]]]],["หนองแสง",[["ทับกุง",[41340]],["นาดี",[41340]],["หนองแสง",[41340]],["แสงสว่าง",[41340]]]],["เพ็ญ",[["จอมศรี",[41150]],["นาบัว",[41150]],["นาพู่",[41150]],["บ้านธาตุ",[41150]],["บ้านเหล่า",[41150]],["สร้างแป้น",[41150]],["สุมเส้า",[41150]],["เชียงหวาง",[41150]],["เตาไห",[41150]],["เพ็ญ",[41150]],["โคกกลาง",[41150]]]],["เมืองอุดรธานี",[["กุดสระ",[41000]],["นากว้าง",[41000]],["นาข่า",[41000]],["นาดี",[41000]],["นิคมสงเคราะห์",[41000]],["บ้านขาว",[41000]],["บ้านจั่น",[41000]],["บ้านตาด",[41000]],["บ้านเลื่อม",[41000]],["สามพร้าว",[41000]],["หนองขอนกว้าง",[41000]],["หนองนาคำ",[41000]],["หนองบัว",[41000]],["หนองไผ่",[41330]],["หนองไฮ",[41000]],["หมากแข้ง",[41000]],["หมูม่น",[41000]],["เชียงพิณ",[41000]],["เชียงยืน",[41000]],["โคกสะอาด",[41000]],["โนนสูง",[41330]]]],["โนนสะอาด",[["ทมนางาม",[41240]],["บุ่งแก้ว",[41240]],["หนองกุงศรี",[41240]],["โคกกลาง",[41240]],["โนนสะอาด",[41240]],["โพธิ์ศรีสำราญ",[41240]]]],["ไชยวาน",[["คำเลาะ",[41290]],["หนองหลัก",[41290]],["โพนสูง",[41290]],["ไชยวาน",[41290]]]]]],["อุตรดิตถ์",[["ตรอน",[["ข่อยสูง",[53140]],["น้ำอ่าง",[53140]],["บ้านแก่ง",[53140]],["วังแดง",[53140]],["หาดสองแคว",[53140]]]],["ทองแสนขัน",[["น้ำพี้",[53230]],["บ่อทอง",[53230]],["ป่าคาย",[53230]],["ผักขวง",[53230]]]],["ท่าปลา",[["จริม",[53150]],["ท่าปลา",[53150]],["ท่าแฝก",[53110]],["นางพญา",[53150]],["น้ำหมัน",[53150]],["ผาเลือด",[53190]],["ร่วมจิต",[53190]],["หาดล้า",[53190]]]],["น้ำปาด",[["น้ำไคร้",[53110]],["น้ำไผ่",[53110]],["บ้านฝาย",[53110]],["ห้วยมุ่น",[53110]],["เด่นเหล็ก",[53110]],["แสนตอ",[53110]]]],["บ้านโคก",[["นาขุม",[53180]],["บ่อเบี้ย",[53180]],["บ้านโคก",[53180]],["ม่วงเจ็ดต้น",[53180]]]],["พิชัย",[["คอรุม",[53120]],["ท่ามะเฟือง",[53120]],["ท่าสัก",[53220]],["นายาง",[53120]],["นาอิน",[53120]],["บ้านดารา",[53220]],["บ้านหม้อ",[53120]],["บ้านโคน",[53120]],["พญาแมน",[53120]],["ในเมือง",[53120]],["ไร่อ้อย",[53120]]]],["ฟากท่า",[["บ้านเสี้ยว",[53160]],["ฟากท่า",[53160]],["สองคอน",[53160]],["สองห้อง",[53160]]]],["ลับแล",[["ชัยจุมพล",[53130]],["ด่านแม่คำมัน",[53210]],["ทุ่งยั้ง",[53210]],["นานกกก",[53130]],["ฝายหลวง",[53130]],["ศรีพนมมาศ",[53130]],["แม่พูล",[53130]],["ไผ่ล้อม",[53210]]]],["เมืองอุตรดิตถ์",[["ขุนฝาง",[53000]],["คุ้งตะเภา",[53000]],["งิ้วงาม",[53000]],["ถ้ำฉลอง",[53000]],["ท่าอิฐ",[53000]],["ท่าเสา",[53000]],["น้ำริด",[53000]],["บ้านด่าน",[53000]],["บ้านด่านนาขาม",[53000]],["บ้านเกาะ",[53000]],["ป่าเซ่า",[53000]],["ผาจุก",[53000]],["วังกะพี้",[53170]],["วังดิน",[53000]],["หาดกรวด",[53000]],["หาดงิ้ว",[53000]],["แสนตอ",[53000]]]]]],["อุทัยธานี",[["ทัพทัน",[["ตลุกดู่",[61120]],["ทัพทัน",[61120]],["ทุ่งนาไทย",[61120]],["หนองกระทุ่ม",[61120]],["หนองกลางดง",[61120]],["หนองยายดา",[61120]],["หนองสระ",[61120]],["หนองหญ้าปล้อง",[61120]],["เขาขี้ฝอย",[61120]],["โคกหม้อ",[61120]]]],["บ้านไร่",[["คอกควาย",[61140]],["ทัพหลวง",[61140]],["บ้านบึง",[61140]],["บ้านใหม่คลองเคียน",[61180]],["บ้านไร่",[61140]],["วังหิน",[61180]],["หนองจอก",[61180]],["หนองบ่มกล้วย",[61180]],["หูช้าง",[61180]],["ห้วยแห้ง",[61140]],["เจ้าวัด",[61150]],["เมืองการุ้ง",[61180]],["แก่นมะกรูด",[61140]]]],["ลานสัก",[["ทุ่งนางาม",[61160]],["น้ำรอบ",[61160]],["ประดู่ยืน",[61160]],["ป่าอ้อ",[61160]],["ระบำ",[61160]],["ลานสัก",[61160]]]],["สว่างอารมณ์",[["บ่อยาง",[61150]],["พลวงสองนาง",[61150]],["สว่างอารมณ์",[61150]],["หนองหลวง",[61150]],["ไผ่เขียว",[61150]]]],["หนองขาหย่าง",[["ดงขวาง",[61130]],["ดอนกลอย",[61130]],["ทุ่งพึ่ง",[61130]],["ท่าโพ",[61130]],["หนองขาหย่าง",[61130]],["หนองไผ่",[61130]],["หมกแถว",[61130]],["หลุมเข้า",[61130]],["ห้วยรอบ",[61130]]]],["หนองฉาง",[["ทุ่งพง",[61110]],["ทุ่งโพ",[61110]],["บ้านเก่า",[61110]],["หนองฉาง",[61110]],["หนองนางนวล",[61110]],["หนองยาง",[61110]],["หนองสรวง",[61110]],["อุทัยเก่า",[61110]],["เขากวางทอง",[61110]],["เขาบางแกรก",[61170]]]],["ห้วยคต",[["ทองหลาง",[61170]],["สุขฤทัย",[61170]],["ห้วยคต",[61170]]]],["เมืองอุทัยธานี",[["ดอนขวาง",[61000]],["ทุ่งใหญ่",[61000]],["ท่าซุง",[61000]],["น้ำซึม",[61000]],["สะแกกรัง",[61000]],["หนองพังค่า",[61000]],["หนองเต่า",[61000]],["หนองแก",[61000]],["หนองไผ่แบน",[61000]],["หาดทนง",[61000]],["อุทัยใหม่",[61000]],["เกาะเทโพ",[61000]],["เนินแจง",[61000]],["โนนเหล็ก",[61000]]]]]],["อุบลราชธานี",[["กุดข้าวปุ้น",[["กาบิน",[34270]],["ข้าวปุ้น",[34270]],["หนองทันน้ำ",[34270]],["แก่งเค็ง",[34270]],["โนนสวาง",[34270]]]],["ดอนมดแดง",[["คำไฮใหญ่",[34000]],["ดอนมดแดง",[34000]],["ท่าเมือง",[34000]],["เหล่าแดง",[34000]]]],["ตระการพืชผล",[["กระเดียน",[34130]],["กุดยาลวน",[34130]],["กุศกร",[34130]],["ขามเปี้ย",[34130]],["ขุหลุ",[34130]],["คอนสาย",[34130]],["คำเจริญ",[34130]],["ตระการ",[34130]],["ตากแดด",[34130]],["ถ้ำแข้",[34130]],["ท่าหลวง",[34130]],["นาพิน",[34130]],["นาสะไม",[34130]],["บ้านแดง",[34130]],["สะพือ",[34130]],["หนองเต่า",[34130]],["ห้วยฝ้ายพัฒนา",[34130]],["เกษม",[34130]],["เซเป็ด",[34130]],["เป้า",[34130]],["โคกจาน",[34130]],["โนนกุง",[34130]],["ไหล่ทุ่ง",[34130]]]],["ตาลสุม",[["คำหว้า",[34330]],["จิกเทิง",[34330]],["ตาลสุม",[34330]],["นาคาย",[34330]],["สำโรง",[34330]],["หนองกุง",[34330]]]],["ทุ่งศรีอุดม",[["กุดเรือ",[34160]],["นาห่อม",[34160]],["นาเกษม",[34160]],["หนองอ้ม",[34160]],["โคกชำแระ",[34160]]]],["นาจะหลวย",[["นาจะหลวย",[34280]],["บ้านตูม",[34280]],["พรสวรรค์",[34280]],["โนนสมบูรณ์",[34280]],["โนนสวรรค์",[34280]],["โสกแสง",[34280]]]],["นาตาล",[["กองโพน",[34170]],["นาตาล",[34170]],["พะลาน",[34170]],["พังเคน",[34170]]]],["นาเยีย",[["นาดี",[34160]],["นาเยีย",[34160]],["นาเรือง",[34160]]]],["น้ำขุ่น",[["ขี้เหล็ก",[34260]],["ตาเกา",[34260]],["โคกสะอาด",[34260]],["ไพบูลย์",[34260]]]],["น้ำยืน",[["บุเปือย",[34260]],["ยาง",[34260]],["ยางใหญ่",[34260]],["สีวิเชียร",[34260]],["เก่าขาม",[34260]],["โซง",[34260]],["โดมประดิษฐ์",[34260]]]],["บุณฑริก",[["คอแลน",[34230]],["นาโพธิ์",[34230]],["บัวงาม",[34230]],["บ้านแมด",[34230]],["หนองสะโน",[34230]],["ห้วยข่า",[34230]],["โนนค้อ",[34230]],["โพนงาม",[34230]]]],["พิบูลมังสาหาร",[["กุดชมภู",[34110]],["ดอนจิก",[34110]],["ทรายมูล",[34110]],["นาโพธิ์",[34110]],["บ้านแขม",[34110]],["พิบูล",[34110]],["ระเว",[34110]],["หนองบัวฮี",[34110]],["อ่างศิลา",[34110]],["โนนกลาง",[34110]],["โนนกาหลง",[34110]],["โพธิ์ศรี",[34110]],["โพธิ์ไทร",[34110]],["ไร่ใต้",[34110]]]],["ม่วงสามสิบ",[["ดุมใหญ่",[34140]],["นาเลิง",[34140]],["ม่วงสามสิบ",[34140]],["ยางสักกระโพหลุ่ม",[34140]],["ยางโยภาพ",[34140]],["หนองช้างใหญ่",[34140]],["หนองฮาง",[34140]],["หนองเมือง",[34140]],["หนองเหล่า",[34140]],["หนองไข่นก",[34140]],["เตย",[34140]],["เหล่าบก",[34140]],["โพนแพง",[34140]],["ไผ่ใหญ่",[34140]]]],["วารินชำราบ",[["คำขวาง",[34190]],["คำน้ำแซบ",[34190]],["คูเมือง",[34190]],["ท่าลาด",[34310]],["ธาตุ",[34190]],["บุ่งหวาย",[34310]],["บุ่งไหม",[34190]],["วารินชำราบ",[34190]],["สระสมิง",[34190]],["หนองกินเพล",[34190]],["ห้วยขะยูง",[34310]],["เมืองศรีไค",[34190]],["แสนสุข",[34190]],["โนนผึ้ง",[34190]],["โนนโหนน",[34190]],["โพธิ์ใหญ่",[34190]]]],["ศรีเมืองใหม่",[["คำไหล",[34250]],["ดอนใหญ่",[34250]],["ตะบ่าย",[34250]],["นาคำ",[34250]],["นาเลิน",[34250]],["ลาดควาย",[34250]],["วาริน",[34250]],["สงยาง",[34250]],["หนามแท่ง",[34250]],["เอือดใหญ่",[34250]],["แก้งกอก",[34250]]]],["สว่างวีระวงศ์",[["ท่าช้าง",[34190]],["บุ่งมะแลง",[34190]],["สว่าง",[34190]],["แก่งโดม",[34190]]]],["สำโรง",[["ขามป้อม",[34360]],["ค้อน้อย",[34360]],["บอน",[34360]],["สำโรง",[34360]],["หนองไฮ",[34360]],["โคกก่อง",[34360]],["โคกสว่าง",[34360]],["โนนกลาง",[34360]],["โนนกาเล็น",[34360]]]],["สิรินธร",[["คันไร่",[34350]],["คำเขื่อนแก้ว",[34350]],["ช่องเม็ก",[34350]],["นิคมสร้างตนเองลำโดมน้อย",[34350]],["ฝางคำ",[34350]],["โนนก่อ",[34350]]]],["เขมราฐ",[["ขามป้อม",[34170]],["นาแวง",[34170]],["หนองนกทา",[34170]],["หนองผือ",[34170]],["หนองสิม",[34170]],["หัวนา",[34170]],["เขมราฐ",[34170]],["เจียด",[34170]],["แก้งเหนือ",[34170]]]],["เขื่องใน",[["กลางใหญ่",[34320]],["ก่อเอ้",[34150]],["ค้อทอง",[34150]],["ชีทวน",[34150]],["ท่าไห",[34150]],["ธาตุน้อย",[34150]],["นาคำใหญ่",[34150]],["บ้านกอก",[34320]],["บ้านไทย",[34320]],["ยางขี้นก",[34150]],["ศรีสุข",[34150]],["สร้างถ่อ",[34150]],["สหธาตุ",[34150]],["หนองเหล่า",[34150]],["หัวดอน",[34150]],["เขื่องใน",[34150]],["แดงหม้อ",[34150]],["โนนรัง",[34320]]]],["เดชอุดม",[["กลาง",[34160]],["กุดประทาย",[34160]],["คำครั่ง",[34160]],["ตบหู",[34160]],["ทุ่งเทิง",[34160]],["ท่าโพธิ์ศรี",[34160]],["นากระแซง",[34160]],["นาส่วง",[34160]],["นาเจริญ",[34160]],["บัวงาม",[34160]],["ป่าโมง",[34160]],["สมสะอาด",[34160]],["เมืองเดช",[34160]],["แก้ง",[34160]],["โนนสมบูรณ์",[34160]],["โพนงาม",[34160]]]],["เมืองอุบลราชธานี",[["กระโสบ",[34000]],["กุดลาด",[34000]],["ขามใหญ่",[34000]],["ขี้เหล็ก",[34000]],["ปทุม",[34000]],["ปะอาว",[34000]],["หนองขอน",[34000]],["หนองบ่อ",[34000]],["หัวเรือ",[34000]],["แจระแม",[34000]],["ในเมือง",[34000]],["ไร่น้อย",[34000]]]],["เหล่าเสือโก้ก",[["หนองบก",[34000]],["เหล่าเสือโก้ก",[34000]],["แพงใหญ่",[34000]],["โพนเมือง",[34000]]]],["โขงเจียม",[["นาโพธิ์กลาง",[34220]],["หนองแสงใหญ่",[34220]],["ห้วยยาง",[34220]],["ห้วยไผ่",[34220]],["โขงเจียม",[34220]]]],["โพธิ์ไทร",[["ม่วงใหญ่",[34340]],["สองคอน",[34340]],["สารภี",[34340]],["สำโรง",[34340]],["เหล่างาม",[34340]],["โพธิ์ไทร",[34340]]]]]],["อ่างทอง",[["ป่าโมก",[["นรสิงห์",[14130]],["บางปลากด",[14130]],["บางเสด็จ",[14130]],["ป่าโมก",[14130]],["สายทอง",[14130]],["เอกราช",[14130]],["โผงเผง",[14130]],["โรงช้าง",[14130]]]],["วิเศษชัยชาญ",[["คลองขนาก",[14110]],["ตลาดใหม่",[14110]],["ท่าช้าง",[14110]],["บางจัก",[14110]],["ม่วงเตี้ย",[14110]],["ยี่ล้น",[14110]],["ศาลเจ้าโรงทอง",[14110]],["สาวร้องไห้",[14110]],["สี่ร้อย",[14110]],["หลักแก้ว",[14110]],["หัวตะพาน",[14110]],["ห้วยคันแหลน",[14110]],["ไผ่จำศีล",[14110]],["ไผ่ดำพัฒนา",[14110]],["ไผ่วง",[14110]]]],["สามโก้",[["มงคลธรรมนิมิต",[14160]],["ราษฎรพัฒนา",[14160]],["สามโก้",[14160]],["อบทม",[14160]],["โพธิ์ม่วงพันธ์",[14160]]]],["เมืองอ่างทอง",[["คลองวัว",[14000]],["จำปาหล่อ",[14000]],["ตลาดกรวด",[14000]],["ตลาดหลวง",[14000]],["บางแก้ว",[14000]],["บ้านรี",[14000]],["บ้านอิฐ",[14000]],["บ้านแห",[14000]],["ป่างิ้ว",[14000]],["มหาดไทย",[14000]],["ย่านซื่อ",[14000]],["ศาลาแดง",[14000]],["หัวไผ่",[14000]],["โพสะ",[14000]]]],["แสวงหา",[["จำลอง",[14150]],["บ้านพราน",[14150]],["วังน้ำเย็น",[14150]],["ศรีพราน",[14150]],["สีบัวทอง",[14150]],["ห้วยไผ่",[14150]],["แสวงหา",[14150]]]],["โพธิ์ทอง",[["คำหยาด",[14120]],["ทางพระ",[14120]],["บางพลับ",[14120]],["บางระกำ",[14120]],["บางเจ้าฉ่า",[14120]],["บ่อแร่",[14120]],["ยางช้าย",[14120]],["รำมะสัก",[14120]],["สามง่าม",[14120]],["หนองแม่ไก่",[14120]],["องครักษ์",[14120]],["อินทประมูล",[14120]],["อ่างแก้ว",[14120]],["โคกพุทรา",[14120]],["โพธิ์รังนก",[14120]]]],["ไชโย",[["จรเข้ร้อง",[14140]],["ชะไว",[14140]],["ชัยฤทธิ์",[14140]],["ตรีณรงค์",[14140]],["ราชสถิตย์",[14140]],["หลักฟ้า",[14140]],["เทวราช",[14140]],["ไชยภูมิ",[14140]],["ไชโย",[14140]]]]]],["เชียงราย",[["ขุนตาล",[["ต้า",[57340]],["ป่าตาล",[57340]],["ยางฮอม",[57340]]]],["ดอยหลวง",[["ปงน้อย",[57110]],["หนองป่าก่อ",[57110]],["โชคชัย",[57110]]]],["ป่าแดด",[["ป่าแงะ",[57190]],["ป่าแดด",[57190]],["ศรีโพธิ์เงิน",[57190]],["สันมะค่า",[57190]],["โรงช้าง",[57190]]]],["พญาเม็งราย",[["ตาดควัน",[57290]],["เม็งราย",[57290]],["แม่ต๋ำ",[57290]],["แม่เปา",[57290]],["ไม้ยา",[57290]]]],["พาน",[["ดอยงาม",[57120]],["ทรายขาว",[57120]],["ทานตะวัน",[57280]],["ธารทอง",[57250]],["ป่าหุ่ง",[57120]],["ม่วงคำ",[57120]],["สันกลาง",[57120]],["สันติสุข",[57120]],["สันมะเค็ด",[57120]],["หัวง้ม",[57120]],["เจริญเมือง",[57120]],["เมืองพาน",[57120]],["เวียงห้าว",[57120]],["แม่อ้อ",[57120]],["แม่เย็น",[57280]]]],["เชียงของ",[["ครึ่ง",[57140]],["บุญเรือง",[57140]],["ริมโขง",[57140]],["ศรีดอนชัย",[57140]],["สถาน",[57140]],["ห้วยซ้อ",[57140]],["เวียง",[57140]]]],["เชียงแสน",[["บ้านแซว",[57150]],["ป่าสัก",[57150]],["ศรีดอนมูล",[57150]],["เวียง",[57150]],["แม่เงิน",[57150]],["โยนก",[57150]]]],["เทิง",[["งิ้ว",[57160]],["ตับเต่า",[57160]],["ปล้อง",[57230]],["ศรีดอนไชย",[57230]],["สันทรายงาม",[57160]],["หงาว",[57160]],["หนองแรด",[57230]],["เชียงเคี่ยน",[57230]],["เวียง",[57160]],["แม่ลอย",[57230]]]],["เมืองเชียงราย",[["ดอยลาน",[57000]],["ดอยฮาง",[57000]],["ท่าสาย",[57000]],["ท่าสุด",[57100]],["นางแล",[57100]],["บ้านดู่",[57100]],["ป่าอ้อดอนชัย",[57000]],["รอบเวียง",[57000]],["ริมกก",[57100]],["สันทราย",[57000]],["ห้วยชมภู",[57000]],["ห้วยสัก",[57000]],["เวียง",[57000]],["แม่กรณ์",[57000]],["แม่ข้าวต้ม",[57100]],["แม่ยาว",[57100]]]],["เวียงชัย",[["ดอนศิลา",[57210]],["ผางาม",[57210]],["เมืองชุม",[57210]],["เวียงชัย",[57210]],["เวียงเหนือ",[57210]]]],["เวียงป่าเป้า",[["บ้านโป่ง",[57170]],["ป่างิ้ว",[57170]],["สันสลี",[57170]],["เวียง",[57170]],["เวียงกาหลง",[57260]],["แม่เจดีย์",[57260]],["แม่เจดีย์ใหม่",[57260]]]],["เวียงเชียงรุ้ง",[["ดงมหาวัน",[57210]],["ทุ่งก่อ",[57210]],["ป่าซาง",[57210]]]],["เวียงแก่น",[["ท่าข้าม",[57310]],["ปอ",[57310]],["ม่วงยาย",[57310]],["หล่ายงาว",[57310]]]],["แม่จัน",[["จอมสวรรค์",[57110]],["จันจว้า",[57270]],["จันจว้าใต้",[57270]],["ท่าข้าวเปลือก",[57110]],["ป่าซาง",[57110]],["ป่าตึง",[57110]],["ศรีค้ำ",[57110]],["สันทราย",[57110]],["แม่คำ",[57240]],["แม่จัน",[57110]],["แม่ไร่",[57240]]]],["แม่ฟ้าหลวง",[["เทอดไทย",[57240]],["แม่ฟ้าหลวง",[57240]],["แม่สลองนอก",[57110]],["แม่สลองใน",[57110]]]],["แม่ลาว",[["จอมหมอกแก้ว",[57250]],["ดงมะดะ",[57250]],["บัวสลี",[57250]],["ป่าก่อดำ",[57250]],["โป่งแพร่",[57000]]]],["แม่สรวย",[["ท่าก๊อ",[57180]],["ป่าแดด",[57180]],["วาวี",[57180]],["ศรีถ้อย",[57180]],["เจดีย์หลวง",[57180]],["แม่พริก",[57180]],["แม่สรวย",[57180]]]],["แม่สาย",[["บ้านด้าย",[57220]],["ศรีเมืองชุม",[57130]],["ห้วยไคร้",[57220]],["เกาะช้าง",[57130]],["เวียงพางคำ",[57130]],["แม่สาย",[57130]],["โป่งงาม",[57130]],["โป่งผา",[57130]]]]]],["เชียงใหม่",[["กัลยาณิวัฒนา",[["บ้านจันทร์",[58130]],["แจ่มหลวง",[58130]],["แม่แดด",[58130]]]],["จอมทอง",[["ข่วงเปา",[50160]],["ดอยแก้ว",[50160]],["บ้านหลวง",[50160]],["บ้านแปะ",[50240]],["สบเตี๊ยะ",[50160]],["แม่สอย",[50240]]]],["ดอยสะเก็ด",[["ตลาดขวัญ",[50220]],["ตลาดใหญ่",[50220]],["ป่าป้อง",[50220]],["ป่าลาน",[50220]],["ป่าเมี่ยง",[50220]],["ลวงเหนือ",[50220]],["สง่าบ้าน",[50220]],["สันปูเลย",[50220]],["สำราญราษฎร์",[50220]],["เชิงดอย",[50220]],["เทพเสด็จ",[50220]],["แม่คือ",[50220]],["แม่ฮ้อยเงิน",[50220]],["แม่โป่ง",[50220]]]],["ดอยหล่อ",[["ดอยหล่อ",[50160]],["ยางคราม",[50160]],["สองแคว",[50160]],["สันติสุข",[50160]]]],["ดอยเต่า",[["ดอยเต่า",[50260]],["ท่าเดื่อ",[50260]],["บงตัน",[50260]],["บ้านแอ่น",[50260]],["มืดกา",[50260]],["โปงทุ่ง",[50260]]]],["ฝาง",[["ม่อนปิ่น",[50110]],["สันทราย",[50110]],["เวียง",[50110]],["แม่ข่า",[50320]],["แม่คะ",[50110]],["แม่งอน",[50320]],["แม่สูน",[50110]],["โป่งน้ำร้อน",[50110]]]],["พร้าว",[["ทุ่งหลวง",[50190]],["น้ำแพร่",[50190]],["บ้านโป่ง",[50190]],["ป่าตุ้ม",[50190]],["ป่าไหน่",[50190]],["สันทราย",[50190]],["เขื่อนผาก",[50190]],["เวียง",[50190]],["แม่ปั๋ง",[50190]],["แม่แวน",[50190]],["โหล่งขอด",[50190]]]],["สะเมิง",[["บ่อแก้ว",[50250]],["ยั้งเมิน",[50250]],["สะเมิงเหนือ",[50250]],["สะเมิงใต้",[50250]],["แม่สาบ",[50250]]]],["สันกำแพง",[["ต้นเปา",[50130]],["ทรายมูล",[50130]],["บวกค้าง",[50130]],["ร้องวัวแดง",[50130]],["สันกลาง",[50130]],["สันกำแพง",[50130]],["ห้วยทราย",[50130]],["ออนใต้",[50130]],["แช่ช้าง",[50130]],["แม่ปูคา",[50130]]]],["สันทราย",[["ป่าไผ่",[50210]],["สันทรายน้อย",[50210]],["สันทรายหลวง",[50210]],["สันนาเม็ง",[50210]],["สันป่าเปา",[50210]],["สันพระเนตร",[50210]],["หนองจ๊อม",[50210]],["หนองหาร",[50290]],["หนองแหย่ง",[50210]],["เมืองเล็น",[50210]],["แม่แฝก",[50290]],["แม่แฝกใหม่",[50290]]]],["สันป่าตอง",[["ทุ่งต้อม",[50120]],["ทุ่งสะโตก",[50120]],["ท่าวังพร้าว",[50120]],["น้ำบ่อหลวง",[50120]],["บ้านกลาง",[50120]],["บ้านแม",[50120]],["มะขามหลวง",[50120]],["มะขุนหวาน",[50120]],["ยุหว่า",[50120]],["สันกลาง",[50120]],["แม่ก๊า",[50120]]]],["สารภี",[["ขัวมุง",[50140]],["ชมภู",[50140]],["ดอนแก้ว",[50140]],["ท่ากว้าง",[50140]],["ท่าวังตาล",[50140]],["ป่าบง",[50140]],["ยางเนิ้ง",[50140]],["สันทราย",[50140]],["สารภี",[50140]],["หนองผึ้ง",[50140]],["หนองแฝก",[50140]],["ไชยสถาน",[50140]]]],["หางดง",[["ขุนคง",[50230]],["น้ำแพร่",[50230]],["บ้านปง",[50230]],["บ้านแหวน",[50230]],["สบแม่ข่า",[50230]],["สันผักหวาน",[50230]],["หนองควาย",[50230]],["หนองตอง",[50340]],["หนองแก๋ว",[50230]],["หางดง",[50230]],["หารแก้ว",[50230]]]],["อมก๋อย",[["นาเกียน",[50310]],["ม่อนจอง",[50310]],["ยางเปียง",[50310]],["สบโขง",[50310]],["อมก๋อย",[50310]],["แม่ตื่น",[50310]]]],["ฮอด",[["นาคอเรือ",[50240]],["บ่อสลี",[50240]],["บ่อหลวง",[50240]],["บ้านตาล",[50240]],["หางดง",[50240]],["ฮอด",[50240]]]],["เชียงดาว",[["ทุ่งข้าวพวง",[50170]],["ปิงโค้ง",[50170]],["เชียงดาว",[50170]],["เมืองคอง",[50170]],["เมืองงาย",[50170]],["เมืองนะ",[50170]],["แม่นะ",[50170]]]],["เมืองเชียงใหม่",[["ช้างคลาน",[50100]],["ช้างม่อย",[50300]],["ช้างเผือก",[50300]],["ท่าศาลา",[50000]],["ป่าตัน",[50300]],["ป่าแดด",[50100]],["พระสิงห์",[50200]],["ฟ้าฮ่าม",[50000]],["วัดเกต",[50000]],["ศรีภูมิ",[50200]],["สันผีเสื้อ",[50300]],["สุเทพ",[50200]],["หนองป่าครั่ง",[50000]],["หนองหอย",[50000]],["หายยา",[50100]],["แม่เหียะ",[50100]]]],["เวียงแหง",[["เปียงหลวง",[50350]],["เมืองแหง",[50350]],["แสนไห",[50350]]]],["แม่ริม",[["ขี้เหล็ก",[50180]],["ดอนแก้ว",[50180]],["ริมเหนือ",[50180]],["ริมใต้",[50180]],["สะลวง",[50330]],["สันโป่ง",[50180]],["ห้วยทราย",[50180]],["เหมืองแก้ว",[50180]],["แม่สา",[50180]],["แม่แรม",[50180]],["โป่งแยง",[50180]]]],["แม่วาง",[["ดอนเปา",[50360]],["ทุ่งปี้",[50360]],["ทุ่งรวงทอง",[50360]],["บ้านกาด",[50360]],["แม่วิน",[50360]]]],["แม่ออน",[["ทาเหนือ",[50130]],["บ้านสหกรณ์",[50130]],["ห้วยแก้ว",[50130]],["ออนกลาง",[50130]],["ออนเหนือ",[50130]],["แม่ทา",[50130]]]],["แม่อาย",[["ท่าตอน",[50280]],["บ้านหลวง",[50280]],["มะลิกา",[50280]],["สันต้นหมื้อ",[50280]],["แม่นาวาง",[50280]],["แม่สาว",[50280]],["แม่อาย",[50280]]]],["แม่แจ่ม",[["กองแขก",[50270]],["ช่างเคิ่ง",[50270]],["ท่าผา",[50270]],["บ้านทับ",[50270]],["ปางหินฝน",[50270]],["แม่นาจร",[50270]],["แม่ศึก",[50270]]]],["แม่แตง",[["กื้ดช้าง",[50150]],["ขี้เหล็ก",[50150]],["ช่อแล",[50150]],["บ้านช้าง",[50150]],["บ้านเป้า",[50150]],["ป่าแป๋",[50150]],["สบเปิง",[50150]],["สันป่ายาง",[50330]],["สันมหาพน",[50150]],["อินทขิล",[50150]],["เมืองก๋าย",[50150]],["แม่หอพระ",[50150]],["แม่แตง",[50150]]]],["ไชยปราการ",[["ปงตำ",[50320]],["ศรีดงเย็น",[50320]],["หนองบัว",[50320]],["แม่ทะลบ",[50320]]]]]],["เพชรบุรี",[["ชะอำ",[["ชะอำ",[76120]],["ดอนขุนห้วย",[76120]],["นายาง",[76120]],["บางเก่า",[76120]],["สามพระยา",[76120]],["หนองศาลา",[76120]],["ห้วยทรายเหนือ",[76120]],["เขาใหญ่",[76120]],["ไร่ใหม่พัฒนา",[76120]]]],["ท่ายาง",[["กลัดหลวง",[76130]],["ท่าคอย",[76130]],["ท่ายาง",[76130]],["ท่าแลง",[76130]],["ท่าไม้รวก",[76130]],["บ้านในดง",[76130]],["ปึกเตียน",[76130]],["มาบปลาเค้า",[76130]],["ยางหย่อง",[76130]],["วังไคร้",[76130]],["หนองจอก",[76130]],["เขากระปุก",[76130]]]],["บ้านลาด",[["ตำหรุ",[76150]],["ถ้ำรงค์",[76150]],["ท่าช้าง",[76150]],["ท่าเสน",[76150]],["บ้านทาน",[76150]],["บ้านลาด",[76150]],["บ้านหาด",[76150]],["ลาดโพธิ์",[76150]],["สมอพลือ",[76150]],["สะพานไกร",[76150]],["หนองกระเจ็ด",[76150]],["หนองกะปุ",[76150]],["ห้วยข้อง",[76150]],["ห้วยลึก",[76150]],["โรงเข้",[76150]],["ไร่มะขาม",[76150]],["ไร่สะท้อน",[76150]],["ไร่โคก",[76150]]]],["บ้านแหลม",[["ท่าแร้ง",[76110]],["ท่าแร้งออก",[76110]],["บางขุนไทร",[76110]],["บางครก",[76110]],["บางตะบูน",[76110]],["บางตะบูนออก",[76110]],["บางแก้ว",[76110]],["บ้านแหลม",[76110]],["ปากทะเล",[76110]],["แหลมผักเบี้ย",[76100]]]],["หนองหญ้าปล้อง",[["ท่าตะคร้อ",[76160]],["ยางน้ำกลัดเหนือ",[76160]],["ยางน้ำกลัดใต้",[76160]],["หนองหญ้าปล้อง",[76160]]]],["เขาย้อย",[["ทับคาง",[76140]],["บางเค็ม",[76140]],["สระพัง",[76140]],["หนองชุมพล",[76140]],["หนองชุมพลเหนือ",[76140]],["หนองปรง",[76140]],["หนองปลาไหล",[76140]],["ห้วยท่าช้าง",[76140]],["ห้วยโรง",[76140]],["เขาย้อย",[76140]]]],["เมืองเพชรบุรี",[["คลองกระแชง",[76000]],["ช่องสะแก",[76000]],["ดอนยาง",[76000]],["ต้นมะพร้าว",[76000]],["ต้นมะม่วง",[76000]],["ท่าราบ",[76000]],["ธงชัย",[76000]],["นาพันสาม",[76000]],["นาวุ้ง",[76000]],["บางจาก",[76000]],["บางจาน",[76000]],["บ้านกุ่ม",[76000]],["บ้านหม้อ",[76000]],["วังตะโก",[76000]],["สำมะโรง",[76000]],["หนองขนาน",[76000]],["หนองพลับ",[76000]],["หนองโสน",[76000]],["หัวสะพาน",[76000]],["หาดเจ้าสำราญ",[76100]],["เวียงคอย",[76000]],["โพพระ",[76000]],["โพไร่หวาน",[76000]],["ไร่ส้ม",[76000]]]],["แก่งกระจาน",[["ป่าเด็ง",[76170]],["พุสวรรค์",[76170]],["วังจันทร์",[76170]],["สองพี่น้อง",[76170]],["ห้วยแม่เพรียง",[76170]],["แก่งกระจาน",[76170]]]]]],["เพชรบูรณ์",[["ชนแดน",[["ชนแดน",[67150]],["ซับพุทรา",[67150]],["ดงขุย",[67190]],["ตะกุดไร",[67190]],["ท่าข้าม",[67150]],["บ้านกล้วย",[67190]],["พุทธบาท",[67150]],["ลาดแค",[67150]],["ศาลาลาย",[67150]]]],["น้ำหนาว",[["น้ำหนาว",[67260]],["วังกวาง",[67260]],["หลักด่าน",[67260]],["โคกมน",[67260]]]],["บึงสามพัน",[["กันจุ",[67160]],["ซับสมอทอด",[67160]],["ซับไม้แดง",[67160]],["บึงสามพัน",[67160]],["พญาวัง",[67160]],["วังพิกุล",[67230]],["ศรีมงคล",[67160]],["สระแก้ว",[67160]],["หนองแจง",[67160]]]],["วังโป่ง",[["ซับเปิบ",[67240]],["ท้ายดง",[67240]],["วังศาล",[67240]],["วังหิน",[67240]],["วังโป่ง",[67240]]]],["วิเชียรบุรี",[["ซับน้อย",[67180]],["ซับสมบูรณ์",[67180]],["ท่าโรง",[67130]],["น้ำร้อน",[67130]],["บึงกระจับ",[67130]],["บ่อรัง",[67130]],["พุขาม",[67180]],["พุเตย",[67180]],["ภูน้ำหยด",[67180]],["ยางสาว",[67130]],["วังใหญ่",[67180]],["สระประดู่",[67130]],["สามแยก",[67130]],["โคกปรง",[67130]]]],["ศรีเทพ",[["คลองกระจัง",[67170]],["นาสนุ่น",[67170]],["ประดู่งาม",[67170]],["ศรีเทพ",[67170]],["สระกรวด",[67170]],["หนองย่างทอย",[67170]],["โคกสะอาด",[67170]]]],["หนองไผ่",[["กองทูล",[67140]],["ท่าด้วง",[67140]],["ท่าแดง",[67140]],["นาเฉลียง",[67220]],["บัววัฒนา",[67140]],["บ่อไทย",[67140]],["บ้านโภชน์",[67140]],["ยางงาม",[67220]],["วังท่าดี",[67140]],["วังโบสถ์",[67140]],["หนองไผ่",[67140]],["ห้วยโป่ง",[67220]],["เพชรละคร",[67140]]]],["หล่มสัก",[["ช้างตะลูด",[67110]],["ตาลเดี่ยว",[67110]],["ท่าอิบุญ",[67110]],["น้ำก้อ",[67110]],["น้ำชุน",[67110]],["น้ำเฮี้ย",[67110]],["บุ่งคล้า",[67110]],["บุ่งน้ำเต้า",[67110]],["บ้านกลาง",[67110]],["บ้านติ้ว",[67110]],["บ้านหวาย",[67110]],["บ้านโสก",[67110]],["บ้านไร่",[67110]],["ปากช่อง",[67110]],["ปากดุก",[67110]],["ฝายนาแซง",[67110]],["ลานบ่า",[67110]],["วัดป่า",[67110]],["สักหลง",[67110]],["หนองสว่าง",[67110]],["หนองไขว่",[67110]],["หล่มสัก",[67110]],["ห้วยไร่",[67110]]]],["หล่มเก่า",[["ตาดกลอย",[67120]],["นาซำ",[67120]],["นาเกาะ",[67120]],["นาแซง",[67120]],["บ้านเนิน",[67120]],["วังบาล",[67120]],["ศิลา",[67120]],["หล่มเก่า",[67120]],["หินฮาว",[67120]]]],["เขาค้อ",[["ทุ่งสมอ",[67270]],["ริมสีม่วง",[67270]],["สะเดาะพง",[67270]],["หนองแม่นา",[67270]],["เขาค้อ",[67270]],["เข็กน้อย",[67280]],["แคมป์สน",[67280]]]],["เมืองเพชรบูรณ์",[["ชอนไพร",[67000]],["ดงมูลเหล็ก",[67000]],["ตะเบาะ",[67000]],["ท่าพล",[67250]],["นางั่ว",[67000]],["นาป่า",[67000]],["นายม",[67210]],["น้ำร้อน",[67000]],["บ้านโคก",[67000]],["บ้านโตก",[67000]],["ป่าเลา",[67000]],["ระวิง",[67210]],["วังชมภู",[67210]],["สะเดียง",[67000]],["ห้วยสะแก",[67210]],["ห้วยใหญ่",[67000]],["ในเมือง",[67000]]]]]],["เลย",[["ด่านซ้าย",[["กกสะทอน",[42120]],["ด่านซ้าย",[42120]],["นาดี",[42120]],["นาหอ",[42120]],["ปากหมัน",[42120]],["วังยาว",[42120]],["อิปุ่ม",[42120]],["โคกงาม",[42120]],["โป่ง",[42120]],["โพนสูง",[42120]]]],["ท่าลี่",[["ท่าลี่",[42140]],["น้ำทูน",[42140]],["น้ำแคม",[42140]],["หนองผือ",[42140]],["อาฮี",[42140]],["โคกใหญ่",[42140]]]],["นาด้วง",[["ท่าสวรรค์",[42210]],["ท่าสะอาด",[42210]],["นาดอกคำ",[42210]],["นาด้วง",[42210]]]],["นาแห้ว",[["นาพึง",[42170]],["นามาลา",[42170]],["นาแห้ว",[42170]],["เหล่ากอหก",[42170]],["แสงภา",[42170]]]],["ปากชม",[["ชมเจริญ",[42150]],["ปากชม",[42150]],["หาดคัมภีร์",[42150]],["ห้วยบ่อซืน",[42150]],["ห้วยพิชัย",[42150]],["เชียงกลม",[42150]]]],["ผาขาว",[["ท่าช้างคล้อง",[42240]],["บ้านเพิ่ม",[42240]],["ผาขาว",[42240]],["โนนปอแดง",[42240]],["โนนป่าซาง",[42240]]]],["ภูกระดึง",[["ผานกเค้า",[42180]],["ภูกระดึง",[42180]],["ศรีฐาน",[42180]],["ห้วยส้ม",[42180]]]],["ภูหลวง",[["ภูหอ",[42230]],["หนองคัน",[42230]],["ห้วยสีเสียด",[42230]],["เลยวังไสย์",[42230]],["แก่งศรีภูมิ",[42230]]]],["ภูเรือ",[["ท่าศาลา",[42160]],["ปลาบ่า",[42160]],["ร่องจิก",[42160]],["ลาดค่าง",[42160]],["สานตม",[42160]],["หนองบัว",[42160]]]],["วังสะพุง",[["ทรายขาว",[42130]],["ปากปวน",[42130]],["ผาน้อย",[42130]],["ผาบิ้ง",[42130]],["วังสะพุง",[42130]],["ศรีสงคราม",[42130]],["หนองงิ้ว",[42130]],["หนองหญ้าปล้อง",[42130]],["เขาหลวง",[42130]],["โคกขมิ้น",[42130]]]],["หนองหิน",[["ตาดข่า",[42190]],["ปวนพุ",[42190]],["หนองหิน",[42190]]]],["เชียงคาน",[["จอมศรี",[42110]],["ธาตุ",[42110]],["นาซ่าว",[42110]],["บุฮม",[42110]],["ปากตม",[42110]],["หาดทรายขาว",[42110]],["เขาแก้ว",[42110]],["เชียงคาน",[42110]]]],["เมืองเลย",[["กกดู่",[42000]],["กกทอง",[42000]],["กุดป่อง",[42000]],["ชัยพฤกษ์",[42000]],["นาดินดำ",[42000]],["นาอาน",[42000]],["นาอ้อ",[42100]],["นาแขม",[42000]],["นาโป่ง",[42000]],["น้ำสวย",[42000]],["น้ำหมาน",[42000]],["ศรีสองรัก",[42100]],["เมือง",[42000]],["เสี้ยว",[42000]]]],["เอราวัณ",[["ทรัพย์ไพวัลย์",[42220]],["ผาสามยอด",[42220]],["ผาอินทร์แปลง",[42220]],["เอราวัณ",[42220]]]]]],["แพร่",[["ร้องกวาง",[["ทุ่งศรี",[54140]],["น้ำเลา",[54140]],["บ้านเวียง",[54140]],["ร้องกวาง",[54140]],["ร้องเข็ม",[54140]],["ห้วยโรง",[54140]],["แม่ทราย",[54140]],["แม่ยางตาล",[54140]],["แม่ยางร้อง",[54140]],["แม่ยางฮ่อ",[54140]],["ไผ่โทน",[54140]]]],["ลอง",[["ต้าผามอก",[54150]],["ทุ่งแล้ง",[54150]],["บ่อเหล็กลอง",[54150]],["บ้านปิน",[54150]],["ปากกาง",[54150]],["หัวทุ่ง",[54150]],["ห้วยอ้อ",[54150]],["เวียงต้า",[54150]],["แม่ปาน",[54150]]]],["วังชิ้น",[["นาพูน",[54160]],["ป่าสัก",[54160]],["วังชิ้น",[54160]],["สรอย",[54160]],["แม่ป้าก",[54160]],["แม่พุง",[54160]],["แม่เกิ๋ง",[54160]]]],["สอง",[["ทุ่งน้าว",[54120]],["บ้านกลาง",[54120]],["บ้านหนุน",[54120]],["สะเอียบ",[54120]],["หัวเมือง",[54120]],["ห้วยหม้าย",[54120]],["เตาปูน",[54120]],["แดนชุมพล",[54120]]]],["สูงเม่น",[["ดอนมูล",[54130]],["น้ำชำ",[54130]],["บ้านกวาง",[54130]],["บ้านกาศ",[54130]],["บ้านปง",[54130]],["บ้านเหล่า",[54130]],["พระหลวง",[54130]],["ร่องกาศ",[54130]],["สบสาย",[54130]],["สูงเม่น",[54130]],["หัวฝาย",[54130]],["เวียงทอง",[54000]]]],["หนองม่วงไข่",[["ตำหนักธรรม",[54170]],["ทุ่งแค้ว",[54170]],["น้ำรัด",[54170]],["วังหลวง",[54170]],["หนองม่วงไข่",[54170]],["แม่คำมี",[54170]]]],["เด่นชัย",[["ปงป่าหวาย",[54110]],["ห้วยไร่",[54110]],["เด่นชัย",[54110]],["แม่จั๊วะ",[54110]],["ไทรย้อย",[54110]]]],["เมืองแพร่",[["กาญจนา",[54000]],["ช่อแฮ",[54000]],["ทุ่งกวาว",[54000]],["ทุ่งโฮ้ง",[54000]],["ท่าข้าม",[54000]],["นาจักร",[54000]],["น้ำชำ",[54000]],["บ้านถิ่น",[54000]],["ป่าแดง",[54000]],["ป่าแมต",[54000]],["ร่องฟอง",[54000]],["วังธง",[54000]],["วังหงษ์",[54000]],["สวนเขื่อน",[54000]],["ห้วยม้า",[54000]],["เหมืองหม้อ",[54000]],["แม่คำมี",[54000]],["แม่ยม",[54000]],["แม่หล่าย",[54000]],["ในเวียง",[54000]]]]]],["แม่ฮ่องสอน",[["ขุนยวม",[["ขุนยวม",[58140]],["เมืองปอน",[58140]],["แม่กิ๊",[58140]],["แม่ยวมน้อย",[58140]],["แม่อูคอ",[58140]],["แม่เงา",[58140]]]],["ปางมะผ้า",[["ถ้ำลอด",[58150]],["นาปู่ป้อม",[58150]],["ปางมะผ้า",[58150]],["สบป่อง",[58150]]]],["ปาย",[["ทุ่งยาว",[58130]],["เมืองแปง",[58130]],["เวียงเหนือ",[58130]],["เวียงใต้",[58130]],["แม่นาเติง",[58130]],["แม่ฮี้",[58130]],["โป่งสา",[58130]]]],["สบเมย",[["กองก๋อย",[58110]],["ป่าโปง",[58110]],["สบเมย",[58110]],["แม่คะตวน",[58110]],["แม่สวด",[58110]],["แม่สามแลบ",[58110]]]],["เมืองแม่ฮ่องสอน",[["จองคำ",[58000]],["ปางหมู",[58000]],["ผาบ่อง",[58000]],["หมอกจำแป่",[58000]],["ห้วยปูลิง",[58000]],["ห้วยผา",[58000]],["ห้วยโป่ง",[58000]]]],["แม่ลาน้อย",[["ขุนแม่ลาน้อย",[58120]],["ท่าผาปุ้ม",[58120]],["สันติคีรี",[58120]],["ห้วยห้อม",[58120]],["แม่นาจาง",[58120]],["แม่ลาน้อย",[58120]],["แม่ลาหลวง",[58120]],["แม่โถ",[58120]]]],["แม่สะเรียง",[["บ้านกาศ",[58110]],["ป่าแป๋",[58110]],["เสาหิน",[58110]],["แม่คง",[58110]],["แม่ยวม",[58110]],["แม่สะเรียง",[58110]],["แม่เหาะ",[58110]]]]]]]

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var key in obj) {
    for (var field in obj[key]) {
      this.options.push(field);
    }

    break;
  }

  this.fetch = function () {
    if (_typeof(this.options) === 'object') {
      var _obj = {};

      for (var i in this.buffer) {
        _obj[i] = {};

        for (var j in this.options) {
          var _field = this.options[j];

          if (this.buffer[i][_field]) {
            _obj[i][_field] = this.buffer[i][_field];
          }
        }
      }

      this.buffer = _obj;
    }

    if (this.size) {
      var temp = this.size.toString().split(',');
      var start = 0;
      var end = this.size;

      if (temp.length > 1 && temp[0] < temp[1]) {
        start = parseInt(temp[0], 10);
        end = start + parseInt(temp[1], 10);
      }

      var results = {};

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
  }; // sets of conditions


  this.contains = function (str, caseSensitive) {
    if (caseSensitive === undefined) {
      caseSensitive = false;
    }

    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
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
      var _obj2 = this.buffer;
      this.buffer = [];

      for (var i in _obj2) {
        regex.lastIndex = 0;

        if (regex.exec(_obj2[i][this.focused_field])) {
          this.buffer.push(_obj2[i]);
        }
      }
    }

    return this;
  };

  this.equalTo = function (val) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (obj[i][this.focused_field] === val) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  };

  this.in = function (vals) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (this.in_array(obj[i][this.focused_field], vals)) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  };

  this.moreThan = function (val) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (parseFloat(obj[i][this.focused_field]) > parseFloat(val)) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  };

  this.moreThanOrEqualTo = function (val) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (parseFloat(obj[i][this.focused_field]) >= parseFloat(val)) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  };

  this.lessThan = function (val) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (parseFloat(obj[i][this.focused_field]) < parseFloat(val)) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  };

  this.lessThanOrEqualTo = function (val) {
    var obj = this.buffer;
    this.buffer = [];

    for (var i in obj) {
      if (parseFloat(obj[i][this.focused_field]) <= parseFloat(val)) {
        this.buffer.push(obj[i]);
      }
    }

    return this;
  }; // end - set of conditions
  // order


  this.orderBy = function (field, mode) {
    var sequence = 'asc';
    var target = field.split(' ');
    var temp = target.pop();

    if (temp && temp.toLowerCase() === 'desc') {
      sequence = 'desc';
      field = target.join(' ');
    } // prepare object


    var obj = [];

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
      obj.sort(function (a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      });
    } else {
      obj.sort(function (a, b) {
        return a[1] - b[1];
      });
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
  }; // alias


  this.and = this.where;
  this.is = this.equalTo; // helper

  this.in_array = function (val, list) {
    for (var i in list) {
      if (val === list[i]) {
        return true;
      }
    }

    return false;
  };
}

if (( false ? "undefined" : _typeof(module)) === 'object' && module.exports) {
  module.exports = JQL;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);