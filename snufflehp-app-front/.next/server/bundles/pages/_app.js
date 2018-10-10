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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */,
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-redux");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(32);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(33);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(29);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(34);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(35);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// EXTERNAL MODULE: external "redux-form"
var external__redux_form_ = __webpack_require__(12);
var external__redux_form__default = /*#__PURE__*/__webpack_require__.n(external__redux_form_);

// EXTERNAL MODULE: external "react-responsive-redux"
var external__react_responsive_redux_ = __webpack_require__(18);
var external__react_responsive_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_redux_);

// EXTERNAL MODULE: ./redux/constants/index.js
var constants = __webpack_require__(6);

// CONCATENATED MODULE: ./redux/reducers/AuthReducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import _ from 'lodash'

var AuthReducer_AuthReducer = function AuthReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newStage = Object.assign({}, state);

  switch (action.type) {
    case constants["a" /* default */].UPDATE_ADDR:
      newStage.address = _objectSpread({}, action.payload);
      console.log('newStage', newStage);
      return newStage;

    case constants["a" /* default */].LOGIN_TOGGLE:
      //console.log('LOGIN_TOGGLE',action.payload)
      newStage.isLogin = action.payload;
      return newStage;

    case constants["a" /* default */].LOGIN_ADD:
      //console.log('LOGIN_ADD',action.payload)
      // newStage.isLogin = action.payload.isAuth
      // newStage.user = action.payload.user
      // newStage.token = action.payload.token
      //console.log('action.payload',action.payload)
      newStage = _objectSpread({}, action.payload);
      return newStage;

    case constants["a" /* default */].LOGIN_CLEAR:
      return {};

    default:
      return state;
  }
};

/* harmony default export */ var reducers_AuthReducer = (AuthReducer_AuthReducer);
// CONCATENATED MODULE: ./redux/reducers/ProductsReducer.js
function ProductsReducer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProductsReducer__defineProperty(target, key, source[key]); }); } return target; }

function ProductsReducer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

 //import _ from 'lodash'

var init = {
  productAll: [],
  productNewBook: [],
  productNewOther: [],
  detail: {},
  cartOrders: {
    amtTotal: 0,
    list: [],
    shipping: {
      typeSel: 0,
      priceBase: [40, 20, 60],
      plusPacking: {
        book: 10,
        other: 5
      },
      dicut: false,
      bubble: false,
      defaultWeight: 4000
    },
    summary: {
      showNormal: true,
      totalWeight: 0,
      priceNow: [0, 0, 0],
      sumPlusPack: 0.00,
      productPrice: 0.00,
      shippingPrice: 0.00,
      total: 0.00
    }
  }
};

var countItem = function countItem(list) {
  return list.reduce(function (sum, item) {
    //console.log(sum,item)
    var amtNow = item.status === 1 ? parseInt(item.amount, 10) : 0;
    return sum + amtNow;
  }, 0);
};

var calSummary = function calSummary(cartOrders) {
  var prodPrice = 0.00;
  var shippingPrice = 0.00;
  var sumBook = 0;
  var sumOther = 0;
  var sumPlusPack = 0.00;

  var priceNow = _toConsumableArray(cartOrders.shipping.priceBase);

  var totalWeight = 0;
  var showNormal = true;
  var typeSel = cartOrders.shipping.typeSel;
  cartOrders.list.forEach(function (item) {
    if (item.status === 1) {
      prodPrice += parseFloat(item.amount * item.product.price);

      if (item.product.category_id === 1) {
        sumBook += parseInt(item.amount, 10);
      } else {
        sumOther += parseInt(item.amount, 10);
      }

      if (item.product.weight !== undefined) {
        totalWeight += parseInt(item.product.weight, 10) * item.amount;
      }
    }
  }); //แสดง ประเภทการส่ง ตาม น้ำหนัก

  showNormal = totalWeight > cartOrders.shipping.defaultWeight ? true : false;

  if (typeSel !== 2) {
    typeSel = showNormal ? 1 : 0;
  } //--
  //คำรวณราคาส่งเพิ่มตาม จำนวนหนักสือ


  if (sumBook > 0) {
    sumPlusPack = (sumBook - 1) * cartOrders.shipping.plusPacking.book + sumOther * cartOrders.shipping.plusPacking.other;
  } else {
    sumPlusPack = (sumOther - 1) * cartOrders.shipping.plusPacking.other;
  } //--


  priceNow[0] += sumPlusPack;
  priceNow[1] += sumPlusPack;
  priceNow[2] += sumPlusPack;
  shippingPrice = priceNow[typeSel]; //--
  //console.log('cartOrders.shipping',cartOrders.shipping)
  //add shield package

  if (cartOrders.shipping.dicut) {
    shippingPrice = shippingPrice + 16;
  }

  if (cartOrders.shipping.bubble) {
    shippingPrice = shippingPrice + 10;
  }

  return ProductsReducer__objectSpread({}, cartOrders, {
    summary: {
      showNormal: showNormal,
      totalWeight: totalWeight,
      priceNow: priceNow,
      sumPlusPack: sumPlusPack,
      productPrice: prodPrice,
      shippingPrice: shippingPrice,
      total: prodPrice + shippingPrice
    },
    shipping: ProductsReducer__objectSpread({}, cartOrders.shipping, {
      typeSel: typeSel
    })
  });
};

var setPriceNow = function setPriceNow(cartOrders) {// const priceBase = cartOrders.shipping.priceBase
  // const 
  // return [
  //   (priceBase[0]+)
  // ]
};

var ProductsReducer_ProductsReducer = function ProductsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var jsonStr = JSON.stringify(Object.assign({}, state));
  var newStage = JSON.parse(jsonStr);

  switch (action.type) {
    case constants["a" /* default */].TOGGLE_SHIELD_PACKAGE:
      newStage.cartOrders.shipping[action.payload.type] = !newStage.cartOrders.shipping[action.payload.type];
      newStage.cartOrders = calSummary(newStage.cartOrders);
      return newStage;

    case constants["a" /* default */].UPDATE_SHIPPING_TYPE:
      //console.log('=>UPDATE_SHIPPING_TYPE',action.payload)
      newStage.cartOrders.shipping.typeSel = action.payload;
      newStage.cartOrders = calSummary(newStage.cartOrders);
      return newStage;

    case constants["a" /* default */].DELETE_ORDER_PRODUCT:
      //find in dex 
      var index = state.cartOrders.list.findIndex(function (i) {
        return i.id === action.payload.id;
      }); //console.log('index2',index)

      newStage.cartOrders.list.splice(index, 1);
      newStage.cartOrders.amtTotal = countItem(newStage.cartOrders.list);
      newStage.cartOrders = calSummary(newStage.cartOrders);
      return newStage;

    case constants["a" /* default */].CART_LOAD:
      newStage.cartOrders.amtTotal = countItem(action.payload);
      newStage.cartOrders.list = action.payload;
      newStage.cartOrders = calSummary(newStage.cartOrders);
      return newStage;

    case constants["a" /* default */].CART_UPDATE:
      //newStage.detail = action.payload
      //console.log('payload',action.payload)
      var _action$payload = action.payload,
          product_id = _action$payload.product_id,
          user_id = _action$payload.user_id;
      var newItem = true; //update 

      newStage.cartOrders.list = state.cartOrders.list.map(function (item) {
        if (parseInt(item.product_id, 10) === parseInt(product_id, 10) && parseInt(item.user_id, 10) === parseInt(user_id, 10)) {
          newItem = false;
          return ProductsReducer__objectSpread({}, item, action.payload);
        }

        return item;
      });

      if (newItem) {
        newStage.cartOrders.list.push(action.payload);
      }

      newStage.cartOrders.amtTotal = countItem(newStage.cartOrders.list);
      newStage.cartOrders = calSummary(newStage.cartOrders); //console.log('update newStage',newStage)

      return newStage;

    case constants["a" /* default */].PRODUCT_LOAD_DETAIL:
      newStage.detail = action.payload;
      return newStage;

    case constants["a" /* default */].PRODUCT_LOAD_ALL:
      newStage.productAll = action.payload;
      return newStage;

    case constants["a" /* default */].PRODUCT_LOAD_NEW_BOOK:
      newStage.productNewBook = action.payload;
      return newStage;

    case constants["a" /* default */].PRODUCT_LOAD_NEW_OTHER:
      newStage.productNewOther = action.payload;
      return newStage;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_ProductsReducer = (ProductsReducer_ProductsReducer);
// CONCATENATED MODULE: ./redux/reducers/StatusTagReducer.js
 //import _ from 'lodash'

var StatusTagReducer_StatusTagReducer = function StatusTagReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    show: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newStage = Object.assign({}, state);

  switch (action.type) {
    case constants["a" /* default */].TOGGLE_STATUS_TAG:
      newStage.show = action.payload;
      return newStage;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_StatusTagReducer = (StatusTagReducer_StatusTagReducer);
// CONCATENATED MODULE: ./redux/reducers/UtilityReducer.js
 //import _ from 'lodash'

var UtilityReducer_init = {
  dialogShowGotoLogin: false,
  confirmDelete: false,
  itemPrepareDel: {}
};

var UtilityReducer_UtilityReducer = function UtilityReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : UtilityReducer_init;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newStage = Object.assign({}, state); //console.log('action',action)

  switch (action.type) {
    case constants["a" /* default */].TOGGLE_DIALOG_GOTO_SIGIN:
      newStage.dialogShowGotoLogin = action.payload;
      return newStage;

    case constants["a" /* default */].TOGGLE_SHOW_CONFIRM_DELETE:
      //console.log('action.payload',action.payload)
      newStage.confirmDelete = action.payload.show;
      newStage.itemPrepareDel = action.payload.item;
      return newStage;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_UtilityReducer = (UtilityReducer_UtilityReducer);
// CONCATENATED MODULE: ./redux/reducers/index.js







var reducer = Object(external__redux_["combineReducers"])({
  products: reducers_ProductsReducer,
  StatusTagReducer: reducers_StatusTagReducer,
  auth: reducers_AuthReducer,
  UtilityReducer: reducers_UtilityReducer,
  form: external__redux_form_["reducer"],
  responsive: external__react_responsive_redux_["reducer"]
});
/* harmony default export */ var reducers = (reducer);
// CONCATENATED MODULE: ./redux/store.js




var store_initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(external__redux_["createStore"])(reducers, initialState, Object(external__redux_devtools_extension_["composeWithDevTools"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a)));
};
// CONCATENATED MODULE: ./pages/_app.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: store
      }, external__react__default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var Component, ctx, mobileDetect;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                //console.log('ctx.req',ctx.req)
                if (ctx.req !== undefined) {
                  mobileDetect = Object(external__react_responsive_redux_["mobileParser"])(ctx.req);
                  ctx.store.dispatch(Object(external__react_responsive_redux_["setMobileDetect"])(mobileDetect));
                } // do our mobile detection


                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 11:
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

  return MyApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external__next_redux_wrapper__default()(store_initStore)(_app_MyApp));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);