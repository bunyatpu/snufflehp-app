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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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
      }), external__react__default.a.createElement(external__react_responsive_redux_["DesktopScreen"], null, external__react__default.a.createElement("h3", {
        className: style__default.a.dynamic([["2006523510", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "Desktop"), external__react__default.a.createElement("div", {
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
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(6);



var toggleStatus = function toggleStatus() {
  return function (dispatch) {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_STATUS_TAG,
      payload: true
    });
    setTimeout(function () {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].TOGGLE_STATUS_TAG,
        payload: false
      });
    }, 1000);
  };
};



/***/ }),
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
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),
/* 58 */
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

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

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(11);
var config__default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "react-content-loader"
var external__react_content_loader_ = __webpack_require__(59);
var external__react_content_loader__default = /*#__PURE__*/__webpack_require__.n(external__react_content_loader_);

// EXTERNAL MODULE: ./redux/actions/productsAction.js
var productsAction = __webpack_require__(13);

// EXTERNAL MODULE: ./redux/actions/statusTagActon.js
var statusTagActon = __webpack_require__(26);

// EXTERNAL MODULE: ./redux/actions/UtilityAction.js
var UtilityAction = __webpack_require__(14);

// CONCATENATED MODULE: ./components/ProductDetail/index.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









 //import CardProduct from "../commons/CardProduct";

var ProductDetail_ProductDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductDetail, _Component);

  function ProductDetail() {
    var _this;

    _classCallCheck(this, ProductDetail);

    _this = _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "onLoadProductDetail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(id) {
          var loadProductDetail;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  loadProductDetail = _this.props.loadProductDetail; //this.setState({loading:true})

                  _context.next = 3;
                  return loadProductDetail(id);

                case 3:
                  _this.setState({
                    loading: false
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(path) {
        router__default.a.push(path);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.target.value.match(/[1-9]/g)) {
          _this.setState({
            amt: e.target.value
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onUpQty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prev) {
          return {
            amt: prev.amt + 1
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onDownQty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prev) {
          return {
            amt: prev.amt <= 1 ? 1 : prev.amt - 1
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAddToCart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee2() {
          var _this$props, updateCart, id, list, toggleStatus, showDialogGotoSignin, currProd, modelNow, res;

          return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  //console.log('onAddToCart')
                  _this$props = _this.props, updateCart = _this$props.updateCart, id = _this$props.id, list = _this$props.cart.list, toggleStatus = _this$props.toggleStatus, showDialogGotoSignin = _this$props.showDialogGotoSignin; //filter

                  currProd = list.filter(function (i) {
                    return i.product_id == id;
                  });
                  modelNow = currProd.length <= 0 ? {
                    amount: 0
                  } : currProd[0];
                  _context2.next = 5;
                  return updateCart({
                    product_id: id,
                    amount: parseInt(_this.state.amt, 10) + parseInt(modelNow.amount, 10)
                  });

                case 5:
                  res = _context2.sent;

                  //console.log('res->',res)
                  if (!res.status) {
                    console.log('showDialogGotoSignin()');
                    showDialogGotoSignin();
                  } else {
                    toggleStatus();
                  }

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "showStatusTag", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {//this.setState({statusShow:true})
        //setTimeout(()=>this.setState({statusShow:false}) ,1500)
      }
    });
    _this.state = {
      amt: 1,
      loading: true,
      statusShow: false
    };
    return _this;
  }

  _createClass(ProductDetail, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      //console.log('props',props,this.props)
      var id = this.props.id;
      this.onLoadProductDetail(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var detail = this.props.detail;
      var _state = this.state,
          amt = _state.amt,
          loading = _state.loading,
          statusShow = _state.statusShow;

      var _getConfig = config__default()(),
          API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST; //console.log('cart',cart)


      var prodDetail = detail.product !== null && detail.product !== undefined ? detail.product : {}; //console.log('detail',detail)

      var coverPath = prodDetail.cover_path !== undefined ? "".concat(API_URL_HOST, "/images/covers/").concat(prodDetail.cover_path) : '';
      return external__react__default.a.createElement("div", {
        className: "jsx-1514921676"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "1514921676",
        css: [".product_detail .btn-outline-secondary{border-color:#c9cacc;}", ".product_detail .btn-warning{background-color:#f2711c;color:#fff;}", ".product_detail .btn-warning:hover,.product_detail .btn-warning:focus,.product_detail .btn-warning:active,.product_detail .btn-warning.active,.product_detail .open>.dropdown-toggle.btn-warning{background:#d06a28;color:#fff;}", ".product_detail .card{min-height:360px;}"]
      }), external__react__default.a.createElement(external__reactstrap_["Container"], {
        className: "product_detail"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement(external__reactstrap_["Breadcrumb"], null, external__react__default.a.createElement(external__reactstrap_["BreadcrumbItem"], {
        onClick: function onClick() {
          return _this2.goto('/');
        }
      }, external__react__default.a.createElement("a", {
        className: "jsx-1514921676"
      }, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")), external__react__default.a.createElement(external__reactstrap_["BreadcrumbItem"], {
        onClick: function onClick() {
          return _this2.goto('/all_products');
        }
      }, external__react__default.a.createElement("a", {
        className: "jsx-1514921676"
      }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")), external__react__default.a.createElement(external__reactstrap_["BreadcrumbItem"], {
        active: true
      }, prodDetail.name)))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "4",
        className: "pr-1"
      }, external__react__default.a.createElement(external__reactstrap_["Card"], null, external__react__default.a.createElement(external__reactstrap_["CardBody"], null, loading && external__react__default.a.createElement(external__react_content_loader__default.a, {
        uniquekey: "1",
        height: 350
      }), !loading && external__react__default.a.createElement("img", {
        style: {
          height: '300px'
        },
        src: coverPath,
        alt: "",
        className: "jsx-1514921676"
      })))), external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "8",
        className: "pl-1"
      }, external__react__default.a.createElement(external__reactstrap_["Card"], null, external__react__default.a.createElement(external__reactstrap_["CardBody"], null, loading && external__react__default.a.createElement(external__react_content_loader_["List"], {
        uniquekey: "2"
      }), !loading && external__react__default.a.createElement("div", {
        className: "jsx-1514921676"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement("h2", {
        className: "jsx-1514921676"
      }, prodDetail.name))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement("p", {
        className: "jsx-1514921676"
      }, prodDetail.description), external__react__default.a.createElement("hr", {
        className: "jsx-1514921676"
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement("span", {
        className: "jsx-1514921676"
      }, "\u0E23\u0E32\u0E04\u0E32"), external__react__default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          color: '#ef810a',
          fontSize: '30px'
        },
        className: "jsx-1514921676" + " " + "mr-3 ml-4"
      }, prodDetail.price), external__react__default.a.createElement("span", {
        className: "jsx-1514921676"
      }, "\u0E1A\u0E32\u0E17"), external__react__default.a.createElement("hr", {
        className: "jsx-1514921676"
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement("div", {
        className: "jsx-1514921676" + " " + "d-flex align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1514921676" + " " + "mr-3"
      }, "\u0E08\u0E33\u0E19\u0E27\u0E19"), external__react__default.a.createElement(external__reactstrap_["InputGroup"], {
        size: "sm",
        style: {
          width: '180px'
        }
      }, external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "prepend"
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        outline: true,
        onClick: this.onDownQty,
        style: {
          width: '50px'
        }
      }, "-")), external__react__default.a.createElement(external__reactstrap_["Input"], {
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        className: "text-center",
        value: amt
      }), external__react__default.a.createElement(external__reactstrap_["InputGroupAddon"], {
        addonType: "append"
      }, external__react__default.a.createElement(external__reactstrap_["Button"], {
        outline: true,
        onClick: this.onUpQty,
        style: {
          width: '50px'
        }
      }, "+")))), external__react__default.a.createElement("hr", {
        className: "jsx-1514921676"
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement(external__reactstrap_["Button"], {
        onClick: function onClick() {
          return _this2.onAddToCart();
        },
        style: {
          width: '150px',
          padding: '8px'
        },
        className: "mr-3",
        color: "info"
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19"), external__react__default.a.createElement(external__reactstrap_["Button"], {
        style: {
          width: '150px',
          padding: '8px'
        },
        color: "warning"
      }, "\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D")))))))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement(external__reactstrap_["Card"], {
        className: "mt-4"
      }, external__react__default.a.createElement(external__reactstrap_["CardBody"], null, external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, external__react__default.a.createElement("h4", {
        className: "jsx-1514921676"
      }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), external__react__default.a.createElement("hr", {
        className: "jsx-1514921676"
      }))), external__react__default.a.createElement(external__reactstrap_["Row"], null, external__react__default.a.createElement(external__reactstrap_["Col"], null, loading ? external__react__default.a.createElement(external__react_content_loader_["List"], {
        uniquekey: "3"
      }) : external__react__default.a.createElement("p", {
        className: "jsx-1514921676"
      }, detail.detail)))))))));
    }
  }]);

  return ProductDetail;
}(external__react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.products.detail,
    cart: state.products.cartOrders
  };
};

/* harmony default export */ var components_ProductDetail = (Object(external__react_redux_["connect"])(mapStateToProps, {
  loadProductDetail: productsAction["f" /* loadProductDetail */],
  updateCart: productsAction["i" /* updateCart */],
  toggleStatus: statusTagActon["a" /* toggleStatus */],
  showDialogGotoSignin: UtilityAction["d" /* showDialogGotoSignin */]
})(ProductDetail_ProductDetail));
// CONCATENATED MODULE: ./pages/product.js


function product__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { product__typeof = function _typeof(obj) { return typeof obj; }; } else { product__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return product__typeof(obj); }

function product__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function product__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function product__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function product__createClass(Constructor, protoProps, staticProps) { if (protoProps) product__defineProperties(Constructor.prototype, protoProps); if (staticProps) product__defineProperties(Constructor, staticProps); return Constructor; }

function product__possibleConstructorReturn(self, call) { if (call && (product__typeof(call) === "object" || typeof call === "function")) { return call; } return product__assertThisInitialized(self); }

function product__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function product__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





 //import { loadProductDetail } from "../redux/actions/productsAction";



var product_ProductPage =
/*#__PURE__*/
function (_Component) {
  product__inherits(ProductPage, _Component);

  function ProductPage() {
    product__classCallCheck(this, ProductPage);

    return product__possibleConstructorReturn(this, (ProductPage.__proto__ || Object.getPrototypeOf(ProductPage)).apply(this, arguments));
  }

  product__createClass(ProductPage, [{
    key: "render",
    value: function render() {
      var query = this.props.router.query; //console.log('product id',query)

      return external__react__default.a.createElement(Layouts["a" /* default */], null, external__react__default.a.createElement(components_ProductDetail, {
        id: query.id
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = product__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(ctx) {
        var query, _cookies, token;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = ctx.query;
                _cookies = external__next_cookies__default()(ctx), token = _cookies.token; //console.log('ctx',ctx)

                if (!(token !== undefined)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return Object(userAction["a" /* loadUserInfo */])(token)(ctx.store.dispatch);

              case 5:
                return _context.abrupt("return", {});

              case 6:
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

  return ProductPage;
}(external__react_["Component"]);

/* harmony default export */ var product = __webpack_exports__["default"] = (Object(router_["withRouter"])(product_ProductPage));

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ })
/******/ ]);