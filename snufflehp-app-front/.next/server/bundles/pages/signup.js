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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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
/* 13 */,
/* 14 */,
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderTextField; });
/* unused harmony export RenderTextAreaField */
/* unused harmony export RenderDropdownField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

 //import { Form,Input,TextArea,Dropdown,Label} from 'semantic-ui-react'


var RenderTextField = function RenderTextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      custom = _objectWithoutProperties(_ref, ["input", "label", "meta"]);

  //console.log('input',input)
  //custom.change(custom.name,'aaaa')
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormGroup"], {
    className: "mb-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["InputGroup"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["InputGroupAddon"], {
    addonType: "prepend"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["InputGroupText"], null, custom.icon)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Input"], _extends({
    invalid: touched && error !== undefined,
    type: "text",
    value: input.value
  }, input, custom, {
    placeholder: label,
    autoComplete: label
  }))), touched && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      marginTop: '0.25rem',
      fontSize: '80%',
      color: '#f86c6b'
    }
  }, error));
};
var RenderTextAreaField = function RenderTextAreaField(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      warning = _ref2$meta.warning,
      custom = _objectWithoutProperties(_ref2, ["input", "label", "meta"]);

  //console.log('placeholder',placeholder)
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormGroup"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Label"], {
    "for": custom.id
  }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Input"], _extends({
    invalid: touched && error !== undefined,
    type: "textarea",
    value: input.value
  }, input, custom)), touched && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormFeedback"], null, error));
};
var RenderDropdownField = function RenderDropdownField(_ref3) {
  var input = _ref3.input,
      label = _ref3.label,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      warning = _ref3$meta.warning,
      custom = _objectWithoutProperties(_ref3, ["input", "label", "meta"]);

  var option = custom.option; //console.log('option',option,'value->',input.value)

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormGroup"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Label"], {
    "for": custom.id
  }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Input"], _extends({
    type: "select",
    invalid: touched && error !== undefined
  }, input, custom, {
    value: input.value
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: ""
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01 ", label), option.map(function (i, k) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      key: k,
      value: i.value
    }, i.text);
  })), touched && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["FormFeedback"], null, error));
};

/***/ }),
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(2);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(9);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: external "redux-form"
var external__redux_form_ = __webpack_require__(12);
var external__redux_form__default = /*#__PURE__*/__webpack_require__.n(external__redux_form_);

// EXTERNAL MODULE: ./components/commons/forms/RenderGroupFields.js
var RenderGroupFields = __webpack_require__(28);

// EXTERNAL MODULE: ./redux/actions/authAction.js
var authAction = __webpack_require__(15);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(25);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// CONCATENATED MODULE: ./components/Signup/index.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var validate = function validate(values) {
  //console.log('validate',values);
  var errors = {};

  if (!values.username) {
    errors.username = "username ไม่ถูกต้อง";
  }

  if (!values.email) {
    errors.email = "email ไม่ถูกต้อง";
  }

  if (!values.password) {
    errors.password = "รหัสผ่านไม่ถูกต้อง";
  }

  if (!values.repassword) {
    errors.repassword = "ยืนยันรหัสผ่าน";
  } else if (values.password !== values.repassword) {
    errors.re_password = "รหัสผ่านไม่ตรง";
  }

  return errors;
};

var Signup_Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(_value) {
          var signupAction, resSign;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  //console.log(value)
                  signupAction = _this.props.signupAction;

                  _this.setState({
                    loading: true
                  });

                  _context.next = 4;
                  return signupAction(_value);

                case 4:
                  resSign = _context.sent;

                  if (resSign.status) {
                    //console.log('signup succes')
                    //Router.push('/')
                    _this.setState({
                      alertOpen: false,
                      showSecc: true
                    });

                    setTimeout(function () {
                      router__default.a.push('/');
                    }, 1500);
                  } else {
                    //console.log('error->',resSign)
                    _this.setState({
                      alertOpen: true,
                      alertMsg: resSign.msg
                    });
                  }

                  _this.setState({
                    loading: false
                  });

                case 7:
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
      alertOpen: false,
      alertMsg: '',
      loading: false,
      showSecc: false
    };
    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var handleSubmit = this.props.handleSubmit;
      var _state = this.state,
          alertOpen = _state.alertOpen,
          alertMsg = _state.alertMsg,
          loading = _state.loading,
          showSecc = _state.showSecc;
      return external__react__default.a.createElement("div", {
        style: {
          marginTop: '150px'
        },
        className: "jsx-3426078442" + " " + "app flex-row align-items-center"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "3426078442",
        css: ["input{font-weight:100;}"]
      }), external__react__default.a.createElement(external__reactstrap_["Container"], null, external__react__default.a.createElement(external__reactstrap_["Row"], {
        className: "justify-content-center"
      }, external__react__default.a.createElement(external__reactstrap_["Col"], {
        md: "6"
      }, external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        "in": !showSecc,
        enter: false,
        exit: false
      }, !showSecc && external__react__default.a.createElement(external__reactstrap_["Card"], {
        className: "mx-4",
        style: {
          minHeight: '540px'
        }
      }, external__react__default.a.createElement(external__reactstrap_["CardBody"], {
        className: "p-4"
      }, external__react__default.a.createElement(external__reactstrap_["Form"], null, external__react__default.a.createElement("h1", {
        className: "jsx-3426078442" + " " + "text-center"
      }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), external__react__default.a.createElement("p", {
        className: "jsx-3426078442" + " " + "text-muted text-center"
      }, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"), external__react__default.a.createElement(external__redux_form_["Field"], {
        id: "username",
        name: "username",
        component: RenderGroupFields["a" /* RenderTextField */],
        label: "Username",
        icon: external__react__default.a.createElement(fa_["FaUser"], null)
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        id: "email",
        name: "email",
        component: RenderGroupFields["a" /* RenderTextField */],
        label: "Email",
        icon: '@'
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        type: "password",
        id: "password",
        name: "password",
        component: RenderGroupFields["a" /* RenderTextField */],
        label: "Password",
        icon: external__react__default.a.createElement(fa_["FaLock"], null)
      }), external__react__default.a.createElement(external__redux_form_["Field"], {
        type: "password",
        id: "repassword",
        name: "repassword",
        component: RenderGroupFields["a" /* RenderTextField */],
        label: "Repeat password",
        icon: external__react__default.a.createElement(fa_["FaLock"], null)
      }), external__react__default.a.createElement(external__reactstrap_["Alert"], {
        isOpen: alertOpen,
        color: "danger"
      }, alertMsg), external__react__default.a.createElement(external__reactstrap_["Button"], {
        color: "success",
        block: true,
        onClick: handleSubmit(this.onSubmit),
        disabled: loading
      }, external__react__default.a.createElement(external__react_spinners_["ClipLoader"], {
        sizeUnit: "px",
        size: 25,
        color: '#fff',
        loading: loading
      }), !loading && 'Create Account'))))), external__react__default.a.createElement(external__reactstrap_["Fade"], {
        tag: "div",
        "in": showSecc,
        enter: false,
        exit: false
      }, showSecc && external__react__default.a.createElement(external__reactstrap_["Card"], {
        className: "mx-4",
        style: {
          minHeight: '540px',
          paddingTop: '120px'
        }
      }, external__react__default.a.createElement(external__reactstrap_["CardBody"], {
        className: "p-4 d-flex flex-column align-items-center"
      }, external__react__default.a.createElement(fa_["FaCheckCircle"], {
        size: 70,
        color: "green"
      }), external__react__default.a.createElement("h4", {
        style: {
          marginTop: '10px'
        },
        className: "jsx-3426078442"
      }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"), external__react__default.a.createElement("p", {
        className: "jsx-3426078442" + " " + "text-muted text-center"
      }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01..."))))))));
    }
  }]);

  return Signup;
}(external__react_["Component"]);

/* harmony default export */ var components_Signup = (Object(external__react_redux_["connect"])(null, {
  signupAction: authAction["c" /* signupAction */]
})(Object(external__redux_form_["reduxForm"])({
  form: 'formSignup',
  validate: validate
})(Signup_Signup)));
// CONCATENATED MODULE: ./pages/signup.js


function signup__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { signup__typeof = function _typeof(obj) { return typeof obj; }; } else { signup__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return signup__typeof(obj); }

function signup__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function signup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function signup__createClass(Constructor, protoProps, staticProps) { if (protoProps) signup__defineProperties(Constructor.prototype, protoProps); if (staticProps) signup__defineProperties(Constructor, staticProps); return Constructor; }

function signup__possibleConstructorReturn(self, call) { if (call && (signup__typeof(call) === "object" || typeof call === "function")) { return call; } return signup__assertThisInitialized(self); }

function signup__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function signup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var signup_SignupPage =
/*#__PURE__*/
function (_Component) {
  signup__inherits(SignupPage, _Component);

  function SignupPage() {
    signup__classCallCheck(this, SignupPage);

    return signup__possibleConstructorReturn(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).apply(this, arguments));
  }

  signup__createClass(SignupPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(components_Signup, null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = signup__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(ctx) {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {});

              case 1:
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

  return SignupPage;
}(external__react_["Component"]);

/* harmony default export */ var signup = __webpack_exports__["default"] = (signup_SignupPage);

/***/ })
/******/ ]);