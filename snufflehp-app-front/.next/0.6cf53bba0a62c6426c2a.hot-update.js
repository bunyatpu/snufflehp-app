webpackHotUpdate(0,{

/***/ "./node_modules/react-responsive-redux/es/components.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MediaQueryWrapper */
/* unused harmony export responsiveWrapper */
/* unused harmony export XsScreen */
/* unused harmony export SmScreen */
/* unused harmony export MdScreen */
/* unused harmony export LgScreen */
/* unused harmony export XsScreenHidden */
/* unused harmony export SmScreenHidden */
/* unused harmony export MdScreenHidden */
/* unused harmony export LgScreenHidden */
/* unused harmony export PhoneScreen */
/* unused harmony export TabletScreen */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MobileScreen; });
/* unused harmony export PhoneScreenHidden */
/* unused harmony export TabletScreenHidden */
/* unused harmony export DesktopScreenHidden */
/* unused harmony export MobileScreenHidden */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/react-responsive-redux/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_responsive__ = __webpack_require__("./node_modules/react-responsive-redux/node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaults__ = __webpack_require__("./node_modules/react-responsive-redux/es/defaults.js");








var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var dispatch = props.dispatch,
      fakeWidth = props.fakeWidth,
      children = props.children,
      other = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default()(props, ["dispatch", "fakeWidth", "children"]);

  var values = {
    deviceWidth: fakeWidth,
    width: fakeWidth
  };
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_responsive___default.a, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, other, {
    values: values
  }), children);
};
MediaQueryWrapper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  component: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string]),
  dispatch: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired,
  fakeWidth: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number.isRequired
};
MediaQueryWrapper.defaultProps = {
  children: null,
  component: 'div'
};
var responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(function (state) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
      fakeWidth: state.responsive.fakeWidth
    }, props);
  })(MediaQueryWrapper);
};
var XsScreen = responsiveWrapper({
  maxWidth: __WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].sm - 1
});
var SmScreen = responsiveWrapper({
  query: "(min-width: ".concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].sm, "px) and (max-width: ").concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md - 1, "px)")
});
var MdScreen = responsiveWrapper({
  query: "(min-width: ".concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md, "px) and (max-width: ").concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].lg - 1, "px)")
});
var LgScreen = responsiveWrapper({
  query: "(min-width: ".concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].lg, "px)")
});
var XsScreenHidden = responsiveWrapper({
  minWidth: __WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].sm
});
var SmScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].sm - 1, "px), (min-width: ").concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md, "px)")
});
var MdScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md - 1, "px), (min-width: ").concat(__WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].lg, "px)")
});
var LgScreenHidden = responsiveWrapper({
  maxWidth: __WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].lg - 1
});


var DesktopScreen = responsiveWrapper({
  minWidth: __WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md
});
var MobileScreen = responsiveWrapper({
  maxWidth: __WEBPACK_IMPORTED_MODULE_7__defaults__["a" /* breakPoints */].md - 1
});




//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/react-responsive-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux__ = __webpack_require__("./node_modules/react-responsive-redux/es/redux.js");
/* unused harmony reexport defaultSize */
/* unused harmony reexport initialState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__redux__["a"]; });
/* unused harmony reexport SET_MOBILE_DETECT */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__redux__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./node_modules/react-responsive-redux/es/components.js");
/* unused harmony reexport MediaQueryWrapper */
/* unused harmony reexport responsiveWrapper */
/* unused harmony reexport PhoneScreen */
/* unused harmony reexport TabletScreen */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* unused harmony reexport PhoneScreenHidden */
/* unused harmony reexport TabletScreenHidden */
/* unused harmony reexport DesktopScreenHidden */
/* unused harmony reexport MobileScreenHidden */
/* unused harmony reexport XsScreen */
/* unused harmony reexport SmScreen */
/* unused harmony reexport MdScreen */
/* unused harmony reexport LgScreen */
/* unused harmony reexport XsScreenHidden */
/* unused harmony reexport SmScreenHidden */
/* unused harmony reexport MdScreenHidden */
/* unused harmony reexport LgScreenHidden */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults__ = __webpack_require__("./node_modules/react-responsive-redux/es/defaults.js");
/* unused harmony reexport breakPoints */
/* unused harmony reexport defaultSizes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser__ = __webpack_require__("./node_modules/react-responsive-redux/es/parser.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__parser__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/redux-form/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export arrayInsert */
/* unused harmony export arrayMove */
/* unused harmony export arrayPop */
/* unused harmony export arrayPush */
/* unused harmony export arrayRemove */
/* unused harmony export arrayRemoveAll */
/* unused harmony export arrayShift */
/* unused harmony export arraySplice */
/* unused harmony export arraySwap */
/* unused harmony export arrayUnshift */
/* unused harmony export autofill */
/* unused harmony export blur */
/* unused harmony export change */
/* unused harmony export clearAsyncError */
/* unused harmony export clearFields */
/* unused harmony export clearSubmitErrors */
/* unused harmony export destroy */
/* unused harmony export focus */
/* unused harmony export initialize */
/* unused harmony export registerField */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reset; });
/* unused harmony export resetSection */
/* unused harmony export setSubmitFailed */
/* unused harmony export setSubmitSucceeded */
/* unused harmony export startAsyncValidation */
/* unused harmony export startSubmit */
/* unused harmony export stopAsyncValidation */
/* unused harmony export stopSubmit */
/* unused harmony export submit */
/* unused harmony export touch */
/* unused harmony export unregisterField */
/* unused harmony export untouch */
/* unused harmony export updateSyncWarnings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./node_modules/redux-form/es/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__("./node_modules/redux-form/es/actionTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultShouldAsyncValidate__ = __webpack_require__("./node_modules/redux-form/es/defaultShouldAsyncValidate.js");
/* unused harmony reexport defaultShouldAsyncValidate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultShouldValidate__ = __webpack_require__("./node_modules/redux-form/es/defaultShouldValidate.js");
/* unused harmony reexport defaultShouldValidate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultShouldError__ = __webpack_require__("./node_modules/redux-form/es/defaultShouldError.js");
/* unused harmony reexport defaultShouldError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultShouldWarn__ = __webpack_require__("./node_modules/redux-form/es/defaultShouldWarn.js");
/* unused harmony reexport defaultShouldWarn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form__ = __webpack_require__("./node_modules/redux-form/es/Form.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormName__ = __webpack_require__("./node_modules/redux-form/es/FormName.js");
/* unused harmony reexport FormName */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormSection__ = __webpack_require__("./node_modules/redux-form/es/FormSection.js");
/* unused harmony reexport FormSection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SubmissionError__ = __webpack_require__("./node_modules/redux-form/es/SubmissionError.js");
/* unused harmony reexport SubmissionError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propTypes__ = __webpack_require__("./node_modules/redux-form/es/propTypes.js");
/* unused harmony reexport propTypes */
/* unused harmony reexport fieldInputPropTypes */
/* unused harmony reexport fieldMetaPropTypes */
/* unused harmony reexport fieldPropTypes */
/* unused harmony reexport fieldArrayFieldsPropTypes */
/* unused harmony reexport fieldArrayMetaPropTypes */
/* unused harmony reexport fieldArrayPropTypes */
/* unused harmony reexport formPropTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Field__ = __webpack_require__("./node_modules/redux-form/es/Field.js");
/* unused harmony reexport Field */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Fields__ = __webpack_require__("./node_modules/redux-form/es/Fields.js");
/* unused harmony reexport Fields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FieldArray__ = __webpack_require__("./node_modules/redux-form/es/FieldArray.js");
/* unused harmony reexport FieldArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__formValueSelector__ = __webpack_require__("./node_modules/redux-form/es/formValueSelector.js");
/* unused harmony reexport formValueSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__formValues__ = __webpack_require__("./node_modules/redux-form/es/formValues.js");
/* unused harmony reexport formValues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__getFormError__ = __webpack_require__("./node_modules/redux-form/es/getFormError.js");
/* unused harmony reexport getFormError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__getFormNames__ = __webpack_require__("./node_modules/redux-form/es/getFormNames.js");
/* unused harmony reexport getFormNames */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getFormValues__ = __webpack_require__("./node_modules/redux-form/es/getFormValues.js");
/* unused harmony reexport getFormValues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__getFormInitialValues__ = __webpack_require__("./node_modules/redux-form/es/getFormInitialValues.js");
/* unused harmony reexport getFormInitialValues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__getFormSyncErrors__ = __webpack_require__("./node_modules/redux-form/es/getFormSyncErrors.js");
/* unused harmony reexport getFormSyncErrors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__getFormMeta__ = __webpack_require__("./node_modules/redux-form/es/getFormMeta.js");
/* unused harmony reexport getFormMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__getFormAsyncErrors__ = __webpack_require__("./node_modules/redux-form/es/getFormAsyncErrors.js");
/* unused harmony reexport getFormAsyncErrors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__getFormSyncWarnings__ = __webpack_require__("./node_modules/redux-form/es/getFormSyncWarnings.js");
/* unused harmony reexport getFormSyncWarnings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__getFormSubmitErrors__ = __webpack_require__("./node_modules/redux-form/es/getFormSubmitErrors.js");
/* unused harmony reexport getFormSubmitErrors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__isAsyncValidating__ = __webpack_require__("./node_modules/redux-form/es/isAsyncValidating.js");
/* unused harmony reexport isAsyncValidating */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__isDirty__ = __webpack_require__("./node_modules/redux-form/es/isDirty.js");
/* unused harmony reexport isDirty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__isInvalid__ = __webpack_require__("./node_modules/redux-form/es/isInvalid.js");
/* unused harmony reexport isInvalid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__isPristine__ = __webpack_require__("./node_modules/redux-form/es/isPristine.js");
/* unused harmony reexport isPristine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__isValid__ = __webpack_require__("./node_modules/redux-form/es/isValid.js");
/* unused harmony reexport isValid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__isSubmitting__ = __webpack_require__("./node_modules/redux-form/es/isSubmitting.js");
/* unused harmony reexport isSubmitting */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__hasSubmitSucceeded__ = __webpack_require__("./node_modules/redux-form/es/hasSubmitSucceeded.js");
/* unused harmony reexport hasSubmitSucceeded */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__hasSubmitFailed__ = __webpack_require__("./node_modules/redux-form/es/hasSubmitFailed.js");
/* unused harmony reexport hasSubmitFailed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__reduxForm__ = __webpack_require__("./node_modules/redux-form/es/reduxForm.js");
/* unused harmony reexport reduxForm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__reducer__ = __webpack_require__("./node_modules/redux-form/es/reducer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_34__reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__values__ = __webpack_require__("./node_modules/redux-form/es/values.js");
/* unused harmony reexport values */










// alias for propTypes


























var actionTypes = __WEBPACK_IMPORTED_MODULE_1__actionTypes__;
var arrayInsert = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayInsert;
var arrayMove = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayMove;
var arrayPop = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayPop;
var arrayPush = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayPush;
var arrayRemove = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayRemove;
var arrayRemoveAll = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayRemoveAll;
var arrayShift = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayShift;
var arraySplice = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arraySplice;
var arraySwap = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arraySwap;
var arrayUnshift = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].arrayUnshift;
var autofill = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].autofill;
var blur = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].blur;
var change = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].change;
var clearAsyncError = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].clearAsyncError;
var clearFields = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].clearFields;
var clearSubmitErrors = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].clearSubmitErrors;
var destroy = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].destroy;
var focus = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].focus;
var initialize = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].initialize;
var registerField = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].registerField;
var reset = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].reset;
var resetSection = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].resetSection;
var setSubmitFailed = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].setSubmitFailed;
var setSubmitSucceeded = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].setSubmitSucceeded;
var startAsyncValidation = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].startAsyncValidation;
var startSubmit = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].startSubmit;
var stopAsyncValidation = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].stopAsyncValidation;
var stopSubmit = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].stopSubmit;
var submit = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].submit;
var touch = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].touch;
var unregisterField = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].unregisterField;
var untouch = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].untouch;
var updateSyncWarnings = __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */].updateSyncWarnings;

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__("./redux/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_responsive_redux__ = __webpack_require__("./node_modules/react-responsive-redux/es/index.js");

var _jsxFileName = "/app/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyApp =
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, mobileDetect;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                //console.log('ctx.req',ctx.req)
                if (ctx.req !== undefined) {
                  mobileDetect = Object(__WEBPACK_IMPORTED_MODULE_6_react_responsive_redux__["c" /* mobileParser */])(ctx.req);
                  ctx.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6_react_responsive_redux__["e" /* setMobileDetect */])(mobileDetect));
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
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__redux_store__["a" /* initStore */])(MyApp));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("./node_modules/redux-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__ = __webpack_require__("./node_modules/react-responsive-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AuthReducer__ = __webpack_require__("./redux/reducers/AuthReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProductsReducer__ = __webpack_require__("./redux/reducers/ProductsReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StatusTagReducer__ = __webpack_require__("./redux/reducers/StatusTagReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UtilityReducer__ = __webpack_require__("./redux/reducers/UtilityReducer.js");







var reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  products: __WEBPACK_IMPORTED_MODULE_4__ProductsReducer__["a" /* default */],
  StatusTagReducer: __WEBPACK_IMPORTED_MODULE_5__StatusTagReducer__["a" /* default */],
  auth: __WEBPACK_IMPORTED_MODULE_3__AuthReducer__["a" /* default */],
  UtilityReducer: __WEBPACK_IMPORTED_MODULE_6__UtilityReducer__["a" /* default */],
  form: __WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* reducer */],
  responsive: __WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__["d" /* reducer */]
});
/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ })

})
//# sourceMappingURL=0.6cf53bba0a62c6426c2a.hot-update.js.map