webpackHotUpdate(5,{

/***/ "./components/commons/Header/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/app/components/commons/Header/Cart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 //import { loadCarts } from "../../../redux/actions/productsAction";

var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push(url);
      }
    }), _temp));
  }

  _createClass(Cart, [{
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
      } //line-height: 14px;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          color: 'rgba(255,255,255,0.75)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["335829373", [phone ? '19px' : '7px']]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "335829373",
        css: ".Cart{position:relative;float:left;margin-left:15px;top:".concat(phone ? '19px' : '7px', ";}.Cart:hover{cursor:pointer !important;top:9px;}.Badge{background:#f36e36;color:#fff;top:-4px;font-weight:400;right:-4px;text-align:center;border:3px solid #f36e36;font-size:13px;min-width:20px;min-height:30px;border-radius:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQ2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzJCLEFBRzZCLEFBTU8sQUFJTixrQkFUUixDQVVBLE9BSkosR0FMVSxDQVVSLElBSlgsS0FLa0IsT0FWZ0IsU0FXckIsV0FDTyxhQVhwQixLQVkyQix5QkFDVixlQUNBLGVBQ0MsZ0JBRUUsa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vaW1wb3J0IHsgbG9hZENhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNBY3Rpb25cIjtcblxuY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgZ290byA9ICh1cmwpID0+e1xuICAgIFJvdXRlci5wdXNoKHVybClcbiAgfVxuXG5cblx0cmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBjYXJ0cyxjYXJ0U2l6ZSxyZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzXG4gICBcblxuICAgIC8vY29uc29sZS5sb2coJ2NhcnRzJyxjYXJ0cylcbiAgICBjb25zdCBwaG9uZSA9IChyZXNwb25zaXZlICE9PSB1bmRlZmluZWQgJiYgcmVzcG9uc2l2ZS5waG9uZSkgPyB0cnVlOmZhbHNlXG5cbiAgICBsZXQgY05vdyA9IDA7XG5cbiAgICBsZXQgc2l6ZSA9IChjYXJ0U2l6ZSA9PT0gdW5kZWZpbmVkKSA/ICcyNSc6Y2FydFNpemVcblxuICAgIGlmKHBob25lKXtcbiAgICAgIHNpemUgPSA2MDtcbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKENhcnRzLmxpc3RzKTtcbiAgICBpZihjYXJ0cy5hbXRUb3RhbCAhPT0gdW5kZWZpbmVkICl7XG4gICAgICBjTm93ID0gY2FydHMuYW10VG90YWxcbiAgICB9XG4gICAgLy9saW5lLWhlaWdodDogMTRweDtcblxuXHRcdHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjoncmdiYSgyNTUsMjU1LDI1NSwwLjc1KSd9fT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkNhcnR7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIHRvcDoke3Bob25lID8gJzE5cHgnOic3cHgnfTtcbiAgICAgICAgfVxuICAgICAgICAuQ2FydDpob3ZlcntcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgIHRvcDo5cHg7XG4gICAgICAgIH1cbiAgICAgICAgLkJhZGdle1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMzZlMzY7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMzZlMzY7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnRcIiBvbkNsaWNrPXsoKT0+dGhpcy5nb3RvKCcvb3JkZXJfbGlzdHMnKX0+XG4gICAgICAgICAgPEZhU2hvcHBpbmdDYXJ0IHNpemU9e3NpemV9IC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2xlZnQ6JzE1cHgnfX0gY2xhc3NOYW1lPVwiQmFkZ2VcIiA+e2NOb3d9PC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuXG5cdFx0KTtcblx0fVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnRzOnN0YXRlLnByb2R1Y3RzLmNhcnRPcmRlcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMgLHsgfSkoQ2FydCk7Il19 */\n/*@ sourceURL=components/commons/Header/Cart.js */"),
        dynamic: [phone ? '19px' : '7px']
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.goto('/order_lists');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["335829373", [phone ? '19px' : '7px']]]) + " " + "Cart"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa__["FaShoppingCart"], {
        size: size,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          left: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["335829373", [phone ? '19px' : '7px']]]) + " " + "Badge"
      }, cNow)));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    carts: state.products.cartOrders
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {})(Cart));

/***/ })

})
//# sourceMappingURL=5.4aa3a9884f5925e27513.hot-update.js.map