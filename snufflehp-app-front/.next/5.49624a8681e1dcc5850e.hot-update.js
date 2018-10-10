webpackHotUpdate(5,{

/***/ "./components/commons/Layouts/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__ = __webpack_require__("./node_modules/react-responsive-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sticky__ = __webpack_require__("./node_modules/react-sticky/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./components/commons/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__("./components/commons/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StatusTag__ = __webpack_require__("./components/commons/StatusTag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HeaderMobile__ = __webpack_require__("./components/commons/HeaderMobile/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MenuMobile__ = __webpack_require__("./components/commons/MenuMobile/index.js");
var _jsxFileName = "/app/components/commons/Layouts/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import Responsive from 'react-responsive';







 // const Desktop = props => <Responsive {...props} minWidth={992}  />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;

var MainLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(MainLayout, _Component);

  function MainLayout() {
    var _this;

    _classCallCheck(this, MainLayout);

    _this = _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call(this));
    _this.state = {
      sideMenuOpen: false
    };
    return _this;
  }

  _createClass(MainLayout, [{
    key: "render",
    value: function render() {
      //console.log('render Home')
      var children = this.props.children;
      var sideMenuOpen = this.state.sideMenuOpen;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2985978305"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2985978305",
        css: ".bgHeader{color:rgba(255,255,255,0.75);background-color:#313340;}.mainFooter{border-top:1px solid #c6c8ca;background:#525d69;height:200px;}.bm-burger-button{width:76px !important;height:75px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9MYXlvdXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCdUIsQUFHb0MsQUFJQSxBQU1QLHNCQUNDLE9BVkUsQUFJTixnQkFPcEIsR0FOYyxNQUpkLE9BS0EiLCJmaWxlIjoiY29tcG9uZW50cy9jb21tb25zL0xheW91dHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVzcG9uc2l2ZSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcbmltcG9ydCB7IE1vYmlsZVNjcmVlbiwgRGVza3RvcFNjcmVlbiB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtcmVkdXgnXG5pbXBvcnQgeyBTdGlja3lDb250YWluZXIsIFN0aWNreSB9IGZyb20gJ3JlYWN0LXN0aWNreSc7XG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgTWVudUhlYWRlciBmcm9tIFwiLi4vbWVudVwiO1xuaW1wb3J0IFN0YXR1c1RhZyBmcm9tIFwiLi4vU3RhdHVzVGFnXCI7XG5pbXBvcnQgSGVhZGVyTW9iaWxlIGZyb20gXCIuLi9IZWFkZXJNb2JpbGVcIjtcbmltcG9ydCBNZW51TW9iaWxlIGZyb20gXCIuLi9NZW51TW9iaWxlXCI7XG4vLyBjb25zdCBEZXNrdG9wID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17OTkyfSAgLz47XG4vLyBjb25zdCBUYWJsZXQgPSBwcm9wcyA9PiA8UmVzcG9uc2l2ZSB7Li4ucHJvcHN9IG1pbldpZHRoPXs3Njh9IG1heFdpZHRoPXs5OTF9IC8+O1xuXG5cbmNsYXNzIE1haW5MYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNpZGVNZW51T3BlbjpmYWxzZVxuXHRcdH1cblx0XHRcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHQvL2NvbnNvbGUubG9nKCdyZW5kZXIgSG9tZScpXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXHRcdGNvbnN0IHsgc2lkZU1lbnVPcGVuIH0gPSB0aGlzLnN0YXRlXG5cdFx0cmV0dXJuIChcblxuICAgICAgPGRpdj5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuYmdIZWFkZXJ7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjc1KTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMTMzNDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5tYWluRm9vdGVye1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNmM4Y2E7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNTI1ZDY5O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYm0tYnVyZ2VyLWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNzZweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuICAgICAgICBgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcblx0XHRcdFx0PERlc2t0b3BTY3JlZW4gPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxoMz5EZXNrdG9wPC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5IZWFkZXIgYmdIZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxNYWluSGVhZGVyIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFN0aWNreUNvbnRhaW5lciA+XG5cdFx0XHRcdFx0XHQ8U3RpY2t5ICA+XG5cdFx0XHRcdFx0XHRcdHsoeyBzdHlsZSwgZGlzdGFuY2VGcm9tVG9wLCBpc1N0aWNreSB9KSA9PiAoXG5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudUhlYWRlciBzdHlsZT17c3R5bGV9IGlzU3RpY2t5PXtpc1N0aWNreX0gLz5cblxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9TdGlja3k+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbkNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluRm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMT5mb290ZXI8L2gxPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L1N0aWNreUNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8L0Rlc2t0b3BTY3JlZW4+XG5cblx0XHRcdFx0PE1vYmlsZVNjcmVlbiBpZD1cIm91dGVyLWNvbnRhaW5lclwiID5cblxuXHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjonZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDonMTAwJScsXG5cdFx0XHRcdFx0XHRcdHpJbmRleDonMScsXG5cdFx0XHRcdFx0XHRcdHRvcDonMXB4J1xuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8SGVhZGVyTW9iaWxlIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8TWVudU1vYmlsZSBjbGFzc05hbWU9XCJNb2JpbGVTaWRlTWVudVwiIHNpZGVNZW51T3Blbj17IHNpZGVNZW51T3BlbiB9IC8+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5Db250ZW50XCIgaWQ9XCJwYWdlLXdyYXBcIiBzdHlsZT17e21hcmdpblRvcDonNTlweCd9fSA+XG5cdFx0XHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbkZvb3RlclwiPlxuXHRcdFx0XHRcdFx0PGgxPmZvb3RlcjwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvTW9iaWxlU2NyZWVuPlxuXHRcdFx0XHRcblxuXHRcdFx0XHRcblx0XHRcdFx0XG4gICAgICAgXG5cdFx0XHRcdDxTdGF0dXNUYWcgbXNnPVwi4LmA4Lie4Li04LmI4Lih4Lil4LiH4Lij4LiW4LmA4LiC4LmH4LiZ4Liq4Liz4LmA4Lij4LmH4LiIXCIgc3R5bGU9e3tyaWdodDonNDMlJ319IC8+XG5cdFx0XHQgIFxuICAgICAgPC9kaXY+XG4gICAgICBcblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dFxuIl19 */\n/*@ sourceURL=components/commons/Layouts/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__["a" /* DesktopScreen */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2985978305"
      }, "Desktop"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2985978305" + " " + "mainHeader bgHeader"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sticky__["StickyContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sticky__["Sticky"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, function (_ref) {
        var style = _ref.style,
            distanceFromTop = _ref.distanceFromTop,
            isSticky = _ref.isSticky;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* default */], {
          style: style,
          isSticky: isSticky,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-2985978305" + " " + "mainContent"
      }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-2985978305" + " " + "mainFooter"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-2985978305"
      }, "footer")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__["b" /* MobileScreen */], {
        id: "outer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          position: 'fixed',
          width: '100%',
          zIndex: '1',
          top: '1px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-2985978305"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__HeaderMobile__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__MenuMobile__["a" /* default */], {
        className: "MobileSideMenu",
        sideMenuOpen: sideMenuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page-wrap",
        style: {
          marginTop: '59px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2985978305" + " " + "mainContent"
      }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-2985978305" + " " + "mainFooter"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: "jsx-2985978305"
      }, "footer"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__StatusTag__["a" /* default */], {
        msg: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
        style: {
          right: '43%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }));
    }
  }]);

  return MainLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MainLayout);

/***/ })

})
//# sourceMappingURL=5.49624a8681e1dcc5850e.hot-update.js.map