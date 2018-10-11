webpackHotUpdate(5,{

/***/ "./components/Home/SlidePreview.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__("./node_modules/react-slick/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spinners__ = __webpack_require__("./node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/app/components/Home/SlidePreview.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import ContentLoader from 'react-content-loader'




var SlidePreview =
/*#__PURE__*/
function (_Component) {
  _inherits(SlidePreview, _Component);

  function SlidePreview(props) {
    var _this;

    _classCallCheck(this, SlidePreview);

    _this = _possibleConstructorReturn(this, (SlidePreview.__proto__ || Object.getPrototypeOf(SlidePreview)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onImageLoaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        //console.log('onImageLoaded2')
        _this.setState({
          loading: false
        });
      }
    });
    _this.state = {
      items: [],
      loading: true
    };
    return _this;
  }

  _createClass(SlidePreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('componentDidMount')
      this.setState({
        items: [2, 3, 4, 5, 2]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          items = _state.items,
          loading = _state.loading; //console.log('render')

      var lists = items.map(function (i, k) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: k,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "/static/images/img_previews/banner_".concat(i, ".png"),
          style: {
            height: "300px"
          },
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }));
      }); // const settings = {
      //   dots: true,
      //   lazyLoad: true,
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   initialSlide: 2
      // };

      var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        appendDots: function appendDots(dots) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              bottom: "-5px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }, " ", dots, " "));
        },
        onInit: function onInit() {
          // console.log('onInit')
          _this2.onImageLoaded();
        },
        onLazyLoad: function onLazyLoad() {//console.log('onLazyLoad')
        }
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          height: '300px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["v" /* Row */], {
        className: "d-flex align-items-center",
        style: {
          background: '#fff',
          height: '100%',
          width: '100%',
          margin: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["g" /* Col */], {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_spinners__["SyncLoader"], {
        sizeUnit: "px",
        size: 25,
        color: '#00d5b2',
        loading: loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          color: '#b9b5b5',
          fontSize: '40px',
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Loading..."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          display: !loading ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_slick___default.a, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), lists)));
    }
  }]);

  return SlidePreview;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SlidePreview);

/***/ }),

/***/ "./components/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SlidePreview__ = __webpack_require__("./components/Home/SlidePreview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_CardProduct__ = __webpack_require__("./components/commons/CardProduct/index.js");
var _jsxFileName = "/app/components/Home/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          newBook = _props.newBook,
          newOther = _props.newOther,
          responsive = _props.responsive; //console.log('newOther',newOther);

      var bookLists = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      });
      var otherLists = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });

      if (newBook.length > 0) {
        bookLists = newBook.map(function (i, k) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__commons_CardProduct__["a" /* default */], {
            mode: "edit",
            width: 3,
            key: k,
            model: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          });
        });
      }

      if (newOther.length > 0) {
        otherLists = newOther.map(function (i, k) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__commons_CardProduct__["a" /* default */], {
            mode: "edit",
            width: 3,
            key: k,
            model: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          });
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          padding: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SlidePreview__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Container */], {
        fluid: responsive.mobile,
        style: {
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Card */], {
        style: {
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, bookLists))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2D\u0E37\u0E48\u0E19\u0E46\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, otherLists)))))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    newBook: state.products.productNewBook,
    newOther: state.products.productNewOther,
    responsive: state.responsive
  };
}; // (
//   <Container fluid style={{marginTop:'20px',padding:'0px'}}>
//           <Row>
//             <Col style={{border:'1px solid red'}}> 
//               <SlidePreview />
//             </Col>
//           </Row>
//         </Container>
// )


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Home));

/***/ }),

/***/ "./components/commons/CardProduct/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_productsAction__ = __webpack_require__("./redux/actions/productsAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions_statusTagActon__ = __webpack_require__("./redux/actions/statusTagActon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redux_actions_UtilityAction__ = __webpack_require__("./redux/actions/UtilityAction.js");

var _jsxFileName = "/app/components/commons/CardProduct/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import { FaEye ,FaCommentAlt } from 'react-icons/fa';








var CardProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(CardProduct, _Component);

  function CardProduct(props) {
    var _this;

    _classCallCheck(this, CardProduct);

    _this = _possibleConstructorReturn(this, (CardProduct.__proto__ || Object.getPrototypeOf(CardProduct)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(url);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOver", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, dir) {
        _this.setState({
          hover: dir
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAddCart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
          var _this$props, updateCart, id, list, toggleStatus, showDialogGotoSignin, currProd, modelNow, res;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  e.stopPropagation(); //ป้องกัน click parent
                  //console.log('handleAddCart')

                  _this$props = _this.props, updateCart = _this$props.updateCart, id = _this$props.model.id, list = _this$props.cart.list, toggleStatus = _this$props.toggleStatus, showDialogGotoSignin = _this$props.showDialogGotoSignin; //filter

                  currProd = list.filter(function (i) {
                    return i.product_id == id;
                  }); //console.log('currProd',currProd)

                  modelNow = currProd.length <= 0 ? {
                    amount: 0
                  } : currProd[0];
                  _context.next = 7;
                  return updateCart({
                    product_id: id,
                    amount: 1 + parseInt(modelNow.amount, 10)
                  });

                case 7:
                  res = _context.sent;

                  if (!res.status) {
                    showDialogGotoSignin();
                  } else {
                    toggleStatus();
                  } //this.showStatusTag()


                case 9:
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
    var routeUrl = props.mode === 'edit' ? '/edit_content/' : '/article/';
    _this.state = {
      mode: 'view',
      routeUrl: routeUrl,
      hover: false
    };
    return _this;
  }

  _createClass(CardProduct, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log('render Home')
      var _getConfig = __WEBPACK_IMPORTED_MODULE_5_next_config___default()(),
          API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST;

      var _props = this.props,
          model = _props.model,
          width = _props.width,
          responsive = _props.responsive;
      var hover = this.state.hover; //console.log('WritingItem model',model)
      //const fixUrl = 'http://192.168.1.123:3005'

      var pathImg = model.cover_path !== '' ? "".concat(API_URL_HOST, "/images/covers/").concat(model.cover_path) : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        xs: "12",
        sm: "6",
        lg: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Card */], {
        className: "productOnCard",
        onMouseEnter: function onMouseEnter(e) {
          return _this2.handleOver(e, true);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.handleOver(e, false);
        },
        onClick: function onClick() {
          return _this2.goto("/product/".concat(model.id));
        },
        style: {
          height: responsive.mobile ? '650px' : '380px',
          //'380px',
          marginBottom: '20px',
          border: hover ? '1px solid rgba(0, 0, 0, 0.27)' : '1px solid #fff',
          boxShadow: hover || responsive.mobile ? 'rgba(34, 36, 38, 0.2) 0px 0px 13px 4px' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["d" /* CardImg */], {
        top: true,
        style: {
          width: '100%',
          height: responsive.mobile ? '70%' : '60%' //'228px'

        },
        src: pathImg,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* CardBody */], {
        style: {
          padding: '20px 5px 0px 5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["f" /* CardTitle */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, model.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["e" /* CardSubtitle */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, model.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          fontWeight: '400',
          color: '#ef810a',
          fontSize: '20px',
          marginTop: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "\u0E3F ", model.price), (hover || responsive.mobile) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleAddCart(e);
        },
        className: "text-center",
        style: {
          background: 'rgb(7, 175, 147)',
          color: 'rgb(255, 255, 255)',
          borderRadius: '2px',
          padding: '8px',
          fontSize: responsive.mobile ? '30px' : '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E43\u0E19\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32"))));
    }
  }]);

  return CardProduct;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.products.cartOrders,
    responsive: state.responsive
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, {
  updateCart: __WEBPACK_IMPORTED_MODULE_6__redux_actions_productsAction__["g" /* updateCart */],
  toggleStatus: __WEBPACK_IMPORTED_MODULE_7__redux_actions_statusTagActon__["a" /* toggleStatus */],
  showDialogGotoSignin: __WEBPACK_IMPORTED_MODULE_8__redux_actions_UtilityAction__["d" /* showDialogGotoSignin */]
})(CardProduct));

/***/ }),

/***/ "./components/commons/GotoLoginPopup/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions_UtilityAction__ = __webpack_require__("./redux/actions/UtilityAction.js");
var _jsxFileName = "/app/components/commons/GotoLoginPopup/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var GotoLoginPopup =
/*#__PURE__*/
function (_Component) {
  _inherits(GotoLoginPopup, _Component);

  function GotoLoginPopup() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, GotoLoginPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = GotoLoginPopup.__proto__ || Object.getPrototypeOf(GotoLoginPopup)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        var closeDialogGotoSignin = _this.props.closeDialogGotoSignin;
        closeDialogGotoSignin();
        __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(url); //closeDialogGotoSignin()
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleDialogLogOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var closeDialogGotoSignin = _this.props.closeDialogGotoSignin;
        closeDialogGotoSignin();
      }
    }), _temp));
  }

  _createClass(GotoLoginPopup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log('render Home')
      var open = this.props.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["p" /* Modal */], {
        isOpen: open,
        toggle: this.toggleDialogLogOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["q" /* ModalBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["r" /* ModalFooter */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */], {
        color: "primary",
        onClick: function onClick() {
          return _this2.goto('/signin');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "login"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */], {
        olor: "inherit",
        onClick: this.toggleDialogLogOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Cancel")));
    }
  }]);

  return GotoLoginPopup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.UtilityReducer.dialogShowGotoLogin
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {
  showDialogGotoSignin: __WEBPACK_IMPORTED_MODULE_4__redux_actions_UtilityAction__["d" /* showDialogGotoSignin */],
  closeDialogGotoSignin: __WEBPACK_IMPORTED_MODULE_4__redux_actions_UtilityAction__["b" /* closeDialogGotoSignin */]
})(GotoLoginPopup));

/***/ }),

/***/ "./components/commons/Header/Account.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_authAction__ = __webpack_require__("./redux/actions/authAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_config__);
var _jsxFileName = "/app/components/commons/Header/Account.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 //import { FaSearch } from 'react-icons/fa';

var Account =
/*#__PURE__*/
function (_Component) {
  _inherits(Account, _Component);

  function Account() {
    var _this;

    _classCallCheck(this, Account);

    _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "goto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push(url);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleAccMenu", {
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
    Object.defineProperty(_assertThisInitialized(_this), "handleOutsideClick", {
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
    Object.defineProperty(_assertThisInitialized(_this), "openModalLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          modalLogout: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "isLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/signin');

        _this.setState({
          modalLogout: false
        });

        _this.props.logoutAction();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleDialogLogOut", {
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

  _createClass(Account, [{
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

      var _getConfig = __WEBPACK_IMPORTED_MODULE_6_next_config___default()(),
          API_URL_HOST = _getConfig.publicRuntimeConfig.API_URL_HOST; //console.log('userInfo',userInfo)


      var fixStyle = responsive !== undefined && responsive.mobile ? {
        color: '#fff'
      } : {};
      var content = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.goto('/signup');
        },
        style: {
          marginRight: '5px',
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E43\u0E2B\u0E21\u0E48"), "|", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.goto('/signin');
        },
        style: {
          marginLeft: '5px',
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"));
      var imgAvatar = userInfo.avatar_path === '' ? '/static/images/avatars/avatar-new.jpg' : "".concat(API_URL_HOST, "/images/avatars/").concat(userInfo.avatar_path); //

      if (userInfo.id !== undefined) {
        content = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.toggleAccMenu();
          },
          className: "d-flex align-items-center justify-content-end myacount",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, userInfo.username), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          style: {
            height: imgHeight !== undefined ? imgHeight : '35px',
            width: imgHeight !== undefined ? imgHeight : '35px'
          },
          src: imgAvatar,
          className: "img-avatar",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          fontSize: '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-939965620" + " " + "Account"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "939965620",
        css: ".img-avatar{margin:0 10px;max-width:100%;border-radius:50em;vertical-align:middle;border-style:none;border:1px solid #fff;}.img-avatar:hover{border-color:#5dd208;}.myacount:hover{cursor:pointer;}.accountList{position:relative;z-index:10;}.accountList a{color:#555 !important;}.accountList .list-group{position:absolute;top:10px;width:150px;left:30%;}.accountList .pointerConnerGroup{position:absolute;width:20px;height:20px;top:7px;background:#fff;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);left:75%;z-index:11;}.accountList .list-group-item{padding-top:16px;}.accountList a.list-group-item:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQWNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSDJCLEFBSzJCLEFBUU0sQUFHTixBQUdJLEFBSUcsQUFHSCxBQU1BLEFBVUQsQUFHSCxjQXZDQyxDQVdqQixBQTZCQSxFQUhBLENBdkJZLEFBT0YsQUFNRyxHQW5CYixDQVVBLEtBSWMsRUFyQk8sQUFjckIsQUFhYyxVQUxILEVBTUQsT0EzQmMsQUFzQnhCLENBTWtCLGdCQUNRLEtBNUJOLGtCQUNHLHNCQUN2Qix1Q0EyQlcsU0FDQyxXQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0sTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBsb2dvdXRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uXCI7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuLy9pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5BY2NNZW51OmZhbHNlLFxuICAgICAgbW9kYWxMb2dvdXQ6ZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgLy9sb2FkIHVzZXJpbmZvXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgfVxuXG4gIGdvdG8gPSAodXJsKSA9PntcblxuICAgIFJvdXRlci5wdXNoKHVybClcbiAgfVxuXG4gIHRvZ2dsZUFjY01lbnUgPSAoKSA9PiB7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUub3BlbkFjY01lbnUpIHtcbiAgICAgIC8vIGF0dGFjaC9yZW1vdmUgZXZlbnQgaGFuZGxlclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkFjY01lbnU6IXRoaXMuc3RhdGUub3BlbkFjY01lbnV9KVxuXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZSkgPT57XG5cbiAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy50b2dnbGVBY2NNZW51KCk7XG4gIH1cblxuXG4gIG9wZW5Nb2RhbExvZ291dCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsTG9nb3V0OiB0cnVlXG4gICAgfSk7XG5cdH1cblxuXHRpc0xvZ291dCA9ICgpID0+e1xuICAgIFxuXHRcdFJvdXRlci5wdXNoKCcvc2lnbmluJylcblx0XHR0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsTG9nb3V0OiBmYWxzZVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMucHJvcHMubG9nb3V0QWN0aW9uKClcblx0XHRcbiAgfVxuICBcbiAgdG9nZ2xlRGlhbG9nTG9nT3V0ID0gKCkgPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbExvZ291dDogIXRoaXMuc3RhdGUubW9kYWxMb2dvdXRcbiAgICB9KTtcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyB1c2VySW5mbyxpbWdIZWlnaHQsIHJlc3BvbnNpdmUgfSA9IHRoaXMucHJvcHMgXG4gICAgY29uc3QgeyBvcGVuQWNjTWVudSxtb2RhbExvZ291dCB9ID0gdGhpcy5zdGF0ZVxuICAgXG4gICAgY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOntBUElfVVJMX0hPU1R9IH0gPSBnZXRDb25maWcoKVxuXG4gICAgLy9jb25zb2xlLmxvZygndXNlckluZm8nLHVzZXJJbmZvKVxuICAgIGNvbnN0IGZpeFN0eWxlID0gKHJlc3BvbnNpdmUgIT09IHVuZGVmaW5lZCAmJiByZXNwb25zaXZlLm1vYmlsZSkgPyB7IGNvbG9yOicjZmZmJyB9Ont9XG5cbiAgICBsZXQgY29udGVudCA9ICg8ZGl2PlxuICAgICAgICA8YSBvbkNsaWNrPXsgKCkgPT4gdGhpcy5nb3RvKCcvc2lnbnVwJykgfSBzdHlsZT17e21hcmdpblJpZ2h0Oic1cHgnLGNvbG9yOicjZmZmJ319PuC4quC4oeC4seC4hOC4o+C5g+C4q+C4oeC5iDwvYT58IFxuICAgICAgICA8YSBvbkNsaWNrPXsgKCkgPT4gdGhpcy5nb3RvKCcvc2lnbmluJykgfSBzdHlsZT17e21hcmdpbkxlZnQ6JzVweCcsY29sb3I6JyNmZmYnfX0+4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4LiaPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgbGV0IGltZ0F2YXRhciA9ICh1c2VySW5mby5hdmF0YXJfcGF0aCA9PT0gJycgKSA/ICcvc3RhdGljL2ltYWdlcy9hdmF0YXJzL2F2YXRhci1uZXcuanBnJzpgJHtBUElfVVJMX0hPU1R9L2ltYWdlcy9hdmF0YXJzLyR7dXNlckluZm8uYXZhdGFyX3BhdGh9YCAvL1xuXG4gXG4gICAgaWYodXNlckluZm8uaWQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVBY2NNZW51KCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgbXlhY291bnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6JyNmZmYnfX0+e3VzZXJJbmZvLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDooaW1nSGVpZ2h0ICE9PSB1bmRlZmluZWQpP2ltZ0hlaWdodDonMzVweCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6KGltZ0hlaWdodCAhPT0gdW5kZWZpbmVkKT9pbWdIZWlnaHQ6JzM1cHgnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNyYz17aW1nQXZhdGFyfSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWF2YXRhclwiIFxuICAgICAgICAgICAgICBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cblx0XHRyZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFjY291bnRcIiBzdHlsZT17e2ZvbnRTaXplOicxNHB4J319ICA+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgXG4gICAgICAgICAgLmltZy1hdmF0YXJ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctYXZhdGFyOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiM1ZGQyMDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5teWFjb3VudDpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWNjb3VudExpc3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjY291bnRMaXN0IGF7XG4gICAgICAgICAgICBjb2xvcjojNTU1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY2NvdW50TGlzdCAubGlzdC1ncm91cHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDoxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWNjb3VudExpc3QgLnBvaW50ZXJDb25uZXJHcm91cHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgbGVmdDogNzUlO1xuICAgICAgICAgICAgei1pbmRleDoxMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjY291bnRMaXN0IC5saXN0LWdyb3VwLWl0ZW17XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjY291bnRMaXN0IGEubGlzdC1ncm91cC1pdGVtOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICB7IG9wZW5BY2NNZW51ICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50TGlzdFwiIHJlZj17bm9kZSA9PiB7IHRoaXMubm9kZSA9IG5vZGU7IH19ID5cbiAgICAgICAgXG4gICAgICAgICAgICA8TGlzdEdyb3VwPlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSB0YWc9XCJhXCIgb25DbGljaz17KCk9PiB0aGlzLmdvdG8oJy9teV9hY2NvdW50JykgfT7guIjguLHguJTguIHguLLguKPguJrguLHguI3guIrguLU8L0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIHRhZz1cImFcIiBvbkNsaWNrPXsoKT0+IHRoaXMub3Blbk1vZGFsTG9nb3V0KCl9PuC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mjwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXJDb25uZXJHcm91cFwiPjwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgfVxuXG4gICAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsTG9nb3V0fSB0b2dnbGU9e3RoaXMudG9nZ2xlRGlhbG9nTG9nT3V0fSA+XG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8aDM+4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lit4Lit4LiB4LiI4Liy4LiB4Lij4Liw4Lia4Lia4Lir4Lij4Li34Lit4LmE4Lih4LmIID88L2gzPlxuICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5pc0xvZ291dH0gPkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9sb3I9XCJpbmhlcml0XCIgb25DbGljaz17dGhpcy50b2dnbGVEaWFsb2dMb2dPdXR9ID5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuXHRcdCk7XG5cdH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VySW5mbzpzdGF0ZS5hdXRoXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7IGxvZ291dEFjdGlvbiB9KShBY2NvdW50KSJdfQ== */\n/*@ sourceURL=components/commons/Header/Account.js */"
      }), content, openAccMenu && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: function ref(node) {
          _this2.node = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: "jsx-939965620" + " " + "accountList"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["n" /* ListGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["o" /* ListGroupItem */], {
        tag: "a",
        onClick: function onClick() {
          return _this2.goto('/my_account');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["o" /* ListGroupItem */], {
        tag: "a",
        onClick: function onClick() {
          return _this2.openModalLogout();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        className: "jsx-939965620" + " " + "pointerConnerGroup"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["p" /* Modal */], {
        isOpen: modalLogout,
        toggle: this.toggleDialogLogOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["q" /* ModalBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-939965620"
      }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["r" /* ModalFooter */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["a" /* Button */], {
        color: "primary",
        onClick: this.isLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Logout"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["a" /* Button */], {
        olor: "inherit",
        onClick: this.toggleDialogLogOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "Cancel"))));
    }
  }]);

  return Account;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userInfo: state.auth
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, {
  logoutAction: __WEBPACK_IMPORTED_MODULE_5__redux_actions_authAction__["a" /* logoutAction */]
})(Account));

/***/ }),

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
      } //min-height: 30px;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          color: 'rgba(255,255,255,0.75)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1671015616",
        css: ".Cart{position:relative;float:left;margin-left:15px;top:".concat(phone ? '19px' : '7px', ";}.Cart:hover{cursor:pointer !important;top:9px;}.Badge{background:#f36e36;color:#fff;top:-4px;font-weight:400;right:-4px;text-align:center;border:3px solid #f36e36;font-size:13px;min-width:20px;line-height:14px;border-radius:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQ2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzJCLEFBRzZCLEFBTU8sQUFJTixrQkFUUixDQVVBLE9BSkosR0FMVSxDQVVSLElBSlgsS0FLa0IsT0FWZ0IsU0FXckIsV0FDTyxhQVhwQixLQVkyQix5QkFDVixlQUNBLGVBRUUsaUJBQ0Msa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vaW1wb3J0IHsgbG9hZENhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNBY3Rpb25cIjtcblxuY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgZ290byA9ICh1cmwpID0+e1xuICAgIFJvdXRlci5wdXNoKHVybClcbiAgfVxuXG5cblx0cmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBjYXJ0cyxjYXJ0U2l6ZSxyZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzXG4gICBcblxuICAgIC8vY29uc29sZS5sb2coJ2NhcnRzJyxjYXJ0cylcbiAgICBjb25zdCBwaG9uZSA9IChyZXNwb25zaXZlICE9PSB1bmRlZmluZWQgJiYgcmVzcG9uc2l2ZS5waG9uZSkgPyB0cnVlOmZhbHNlXG5cbiAgICBsZXQgY05vdyA9IDA7XG5cbiAgICBsZXQgc2l6ZSA9IChjYXJ0U2l6ZSA9PT0gdW5kZWZpbmVkKSA/ICcyNSc6Y2FydFNpemVcblxuICAgIGlmKHBob25lKXtcbiAgICAgIHNpemUgPSA2MDtcbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKENhcnRzLmxpc3RzKTtcbiAgICBpZihjYXJ0cy5hbXRUb3RhbCAhPT0gdW5kZWZpbmVkICl7XG4gICAgICBjTm93ID0gY2FydHMuYW10VG90YWxcbiAgICB9XG4gICAgLy9taW4taGVpZ2h0OiAzMHB4O1xuXG5cdFx0cmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOidyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJ319PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuQ2FydHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgdG9wOiR7cGhvbmUgPyAnMTlweCc6JzdweCd9O1xuICAgICAgICB9XG4gICAgICAgIC5DYXJ0OmhvdmVye1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdG9wOjlweDtcbiAgICAgICAgfVxuICAgICAgICAuQmFkZ2V7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YzNmUzNjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICByaWdodDogLTRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YzNmUzNjtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgIFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnRcIiBvbkNsaWNrPXsoKT0+dGhpcy5nb3RvKCcvb3JkZXJfbGlzdHMnKX0+XG4gICAgICAgICAgPEZhU2hvcHBpbmdDYXJ0IHNpemU9e3NpemV9IC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2xlZnQ6JzE1cHgnfX0gY2xhc3NOYW1lPVwiQmFkZ2VcIiA+e2NOb3d9PC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuXG5cdFx0KTtcblx0fVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnRzOnN0YXRlLnByb2R1Y3RzLmNhcnRPcmRlcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMgLHsgfSkoQ2FydCk7Il19 */\n/*@ sourceURL=components/commons/Header/Cart.js */"),
        dynamic: [phone ? '19px' : '7px']
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.goto('/order_lists');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]]) + " " + "Cart"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1671015616", [phone ? '19px' : '7px']]]) + " " + "Badge"
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

/***/ }),

/***/ "./components/commons/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./components/commons/Header/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Search__ = __webpack_require__("./components/commons/Header/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Cart__ = __webpack_require__("./components/commons/Header/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Account__ = __webpack_require__("./components/commons/Header/Account.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_actions_productsAction__ = __webpack_require__("./redux/actions/productsAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_utility_cookie__ = __webpack_require__("./components/commons/utility/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__GotoLoginPopup__ = __webpack_require__("./components/commons/GotoLoginPopup/index.js");
var _jsxFileName = "/app/components/commons/Header/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














__WEBPACK_IMPORTED_MODULE_8_next_router___default.a.onRouteChangeStart = function (url) {
  //console.log(`Loading: ${url}`)
  __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_8_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_8_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
};

var MainHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(MainHeader, _Component);

  function MainHeader() {
    _classCallCheck(this, MainHeader);

    return _possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).apply(this, arguments));
  }

  _createClass(MainHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log('componentDidMount')
      var token = Object(__WEBPACK_IMPORTED_MODULE_10__commons_utility_cookie__["a" /* getCookie */])('token');

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__GotoLoginPopup__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        style: {
          paddingTop: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center",
        style: {
          width: '85%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Search__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-flex align-items-center justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          marginRight: '25px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Cart__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Account__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })))));
    }
  }]);

  return MainHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, {
  loadCarts: __WEBPACK_IMPORTED_MODULE_9__redux_actions_productsAction__["b" /* loadCarts */]
})(MainHeader)); // (
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

/***/ }),

/***/ "./components/commons/HeaderMobile/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_Logo__ = __webpack_require__("./components/commons/Header/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_Cart__ = __webpack_require__("./components/commons/Header/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_Account__ = __webpack_require__("./components/commons/Header/Account.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);
var _jsxFileName = "/app/components/commons/HeaderMobile/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import { slide as Menu } from 'react-burger-menu'







var HeaderMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderMobile, _Component);

  function HeaderMobile(props) {
    var _this;

    _classCallCheck(this, HeaderMobile);

    _this = _possibleConstructorReturn(this, (HeaderMobile.__proto__ || Object.getPrototypeOf(HeaderMobile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleNavbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          collapsed: !_this.state.collapsed
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push(obj.link);
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

  _createClass(HeaderMobile, [{
    key: "render",
    value: function render() {
      var responsive = this.props.responsive;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2636891243"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2636891243",
        css: ".mobileHead .navbar-brand{color:#fff;}.mobileHead .navbar-toggler{color:rgba(210,209,209,0.63);border-color:rgba(236,236,236,0.34);}.mobileHead .navbar-toggler{padding:0.25rem 0.75rem;font-size:1.25rem;line-height:1;background-color:#72737c;border:1px solid transparent;border-radius:0.25rem;}.mobileHead .navbar-toggler-icon{width:4em;height:2.5em;}.mobileHead .xxxnavbar-collapse{width:300px;height:1000px;z-index:100;top:75px;position:absolute;background:#313341;left:0px;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXJNb2JpbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0QyQixBQUd3QixBQUdxQixBQUtSLEFBU2QsQUFLRSxVQUpDLENBakJmLENBc0JnQixXQUpoQixDQVZvQixFQWdCTixHQXJCMkIsU0FzQjlCLElBaEJLLEtBaUJJLFNBaEJPLFNBTjNCLEFBdUJxQixnQkFoQlUsR0FpQnBCLFNBQ0UsV0FDYixNQWxCd0Isc0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9IZWFkZXJNb2JpbGUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXG4gIFJvdyxcbiAgQ29sXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbi8vaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51J1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vSGVhZGVyL0xvZ29cIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9IZWFkZXIvQ2FydFwiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uL0hlYWRlci9BY2NvdW50XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jbGFzcyBIZWFkZXJNb2JpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7bmFtZTogXCLguKvguJnguYnguLLguKvguKXguLHguIFcIiwgbGluazogXCIvXCJ9LFxuICAgICAgICB7bmFtZTogXCLguKrguLTguJnguITguYnguLLguJfguLHguYnguIfguKvguKHguJRcIiwgbGluazogXCIvYWxsX3Byb2R1Y3RzXCJ9LFxuICAgICAgICB7bmFtZTogXCLguYDguJvguLTguJTguIjguK3guIcg4LmB4LiU4LmILi7guKPguLHguIFcIiwgbGluazogXCIvcHJvZHVjdC8xXCJ9LFxuICAgICAgICB7bmFtZTogXCLguIrguLPguKPguLDguYDguIfguLTguJlcIiwgbGluazogXCIvb3JkZXJfbGlzdHNcIn0sXG4gICAgICAgIHtuYW1lOiBcIuC5geC4iOC5ieC4h+C5guC4reC4meC5gOC4h+C4tOC4mVwiLCBsaW5rOiBcIi90cmFuX3N0YXR1c1wifVxuICAgICAgICAvL3tuYW1lOlwi4LiK4Liz4Lij4Liw4LmA4LiH4Li04LiZXCIsbGluazpcIi9wYXltZW50XCJ9LFxuICAgICAgXSxcbiAgICAgIHNlbDogXCIvXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gb2JqID0+IHtcbiAgICBSb3V0ZXIucHVzaChvYmoubGluayk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtyZXNwb25zaXZlfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubW9iaWxlSGVhZCAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlSGVhZCAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjEwLCAyMDksIDIwOSwgMC42Myk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC4zNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZUhlYWQgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzM3YztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlSGVhZCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlSGVhZCAueHh4bmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzEzMzQxO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGVIZWFkXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMTMzNDBcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDBcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiN3B4XCJcbiAgICAgICAgICB9fSA+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiM1wiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjVcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxMb2dvIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6JzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMjVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0IGNhcnRTaXplPXtcIjQwXCJ9IHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxBY2NvdW50IHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9ICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICBcblxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlc3BvbnNpdmU6IHN0YXRlLnJlc3BvbnNpdmVcbiAgfTtcbn07XG4vLyF0aGlzLnN0YXRlLmNvbGxhcHNlZFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7fVxuKShIZWFkZXJNb2JpbGUpO1xuXG4vLyAoXG4vLyAgIDxDb2xsYXBzZSBpc09wZW49eyF0aGlzLnN0YXRlLmNvbGxhcHNlZH0gIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVhYmxlLW1kXCIgbmF2YmFyID5cblxuLy8gICAgICAgICAgICAgICA8TmF2ICBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyID5cbi8vICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbi8vICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9cIj5Db21wb25lbnRzPC9OYXZMaW5rPlxuLy8gICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbi8vICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbi8vICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVhY3RzdHJhcC9yZWFjdHN0cmFwXCI+R2l0SHViPC9OYXZMaW5rPlxuLy8gICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbi8vICAgICAgICAgICAgICAgPC9OYXY+XG5cbi8vICAgICAgICAgICA8L0NvbGxhcHNlPlxuLy8gKVxuIl19 */\n/*@ sourceURL=components/commons/HeaderMobile/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: "#313340",
          zIndex: "100",
          fontSize: "20px",
          paddingTop: "7px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-2636891243" + " " + "mobileHead"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2636891243"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: "5",
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header_Logo__["a" /* default */], {
        responsive: responsive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          paddingRight: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2636891243" + " " + "d-flex align-items-center justify-content-end"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginRight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-2636891243"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header_Cart__["a" /* default */], {
        cartSize: "40",
        responsive: responsive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Header_Account__["a" /* default */], {
        responsive: responsive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })))))));
    }
  }]);

  return HeaderMobile;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
}; //!this.state.collapsed


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, {})(HeaderMobile)); // (
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

/***/ }),

/***/ "./components/commons/MenuMobile/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_burger_menu__ = __webpack_require__("./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_burger_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_burger_menu__);
var _jsxFileName = "/app/components/commons/MenuMobile/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MenuMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuMobile, _Component);

  function MenuMobile(props) {
    var _this;

    _classCallCheck(this, MenuMobile);

    _this = _possibleConstructorReturn(this, (MenuMobile.__proto__ || Object.getPrototypeOf(MenuMobile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(obj.link);
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

  _createClass(MenuMobile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      var sideMenuOpen = this.props.sideMenuOpen; //let pathNow = '/';

      var lists = items.map(function (item, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          key: key,
          className: "menu-item",
          href: "#",
          onClick: function onClick() {
            return _this2.handleClick(item);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, item.name);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_burger_menu__["slide"], {
        isOpen: sideMenuOpen,
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container",
        style: {
          background: '#555'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, lists);
    }
  }]);

  return MenuMobile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {})(MenuMobile));

/***/ }),

/***/ "./components/commons/StatusTag/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa__);
var _jsxFileName = "/app/components/commons/StatusTag/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StatusTag =
/*#__PURE__*/
function (_Component) {
  _inherits(StatusTag, _Component);

  function StatusTag() {
    _classCallCheck(this, StatusTag);

    return _possibleConstructorReturn(this, (StatusTag.__proto__ || Object.getPrototypeOf(StatusTag)).apply(this, arguments));
  }

  _createClass(StatusTag, [{
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Fade */], {
        "in": show,
        tag: "div",
        style: _objectSpread({
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
        }, style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa__["FaCheckCircle"], {
        size: 60,
        color: "rgb(81, 197, 13)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, msg));
    }
  }]);

  return StatusTag;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    show: state.StatusTagReducer.show
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(StatusTag));

/***/ }),

/***/ "./components/commons/menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_Logo__ = __webpack_require__("./components/commons/Header/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_Cart__ = __webpack_require__("./components/commons/Header/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_Account__ = __webpack_require__("./components/commons/Header/Account.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);
var _jsxFileName = "/app/components/commons/menu/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var MenuHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuHeader, _Component);

  function MenuHeader(props) {
    var _this;

    _classCallCheck(this, MenuHeader);

    _this = _possibleConstructorReturn(this, (MenuHeader.__proto__ || Object.getPrototypeOf(MenuHeader)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        //console.log(obj);
        // this.setState({
        //   sel:obj.item.link
        // })
        __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push(obj.link);
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

  _createClass(MenuHeader, [{
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["t" /* NavItem */], {
          active: item.link === pathNow ? true : false,
          key: key,
          onClick: function onClick() {
            return _this2.handleClick(item);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["u" /* NavLink */], {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, item.name));
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: Object.assign({
          //top:'60px',
          backgroundColor: '#313340',
          //backgroundColor:'red',
          zIndex: '100',
          paddingTop: '7px'
        }, menuStyle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3520042608" + " " + "mainMenu bgHeader"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3520042608",
        css: ".mainMenu .nav-item a{color:rgba(255,255,255,.5);font-size:14px;}.mainMenu .nav-item a:hover{color:rgba(255,255,255,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFMkIsQUFHd0MsQUFJQSwyQkFIYixBQUloQixlQUhBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9tZW51L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIE5hdiwgTmF2SXRlbSwgTmF2TGluayxcbiAgRmFkZVxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL0hlYWRlci9Mb2dvJztcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9IZWFkZXIvQ2FydFwiXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vSGVhZGVyL0FjY291bnRcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY2xhc3MgTWVudUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcIml0ZW1zXCI6W1xuICAgICAgICB7bmFtZTpcIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiLGxpbms6XCIvXCJ9LFxuICAgICAgICB7bmFtZTpcIuC4quC4tOC4meC4hOC5ieC4suC4l+C4seC5ieC4h+C4q+C4oeC4lFwiLGxpbms6XCIvYWxsX3Byb2R1Y3RzXCJ9LFxuICAgICAgICB7bmFtZTpcIuC5gOC4m+C4tOC4lOC4iOC4reC4hyDguYHguJTguYguLuC4o+C4seC4gVwiLGxpbms6XCIvcHJvZHVjdC8xXCJ9LFxuICAgICAgICB7bmFtZTpcIuC4iuC4s+C4o+C4sOC5gOC4h+C4tOC4mVwiLGxpbms6XCIvb3JkZXJfbGlzdHNcIn0sXG4gICAgICAgIHtuYW1lOlwi4LmB4LiI4LmJ4LiH4LmC4Lit4LiZ4LmA4LiH4Li04LiZXCIsbGluazpcIi90cmFuX3N0YXR1c1wifSxcbiAgICAgICAgLy97bmFtZTpcIuC4iuC4s+C4o+C4sOC5gOC4h+C4tOC4mVwiLGxpbms6XCIvcGF5bWVudFwifSxcblxuICAgICAgXSxcbiAgICAgIHNlbDpcIi9cIlxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKG9iaikgPT57XG4gICAgLy9jb25zb2xlLmxvZyhvYmopO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgc2VsOm9iai5pdGVtLmxpbmtcbiAgICAvLyB9KVxuXG4gICAgUm91dGVyLnB1c2gob2JqLmxpbmspXG5cbiAgfVxuXG5cdHJlbmRlcigpIHtcblxuICAgIGxldCB7aXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzdHlsZSxpc1N0aWNreSB9ID0gdGhpcy5wcm9wc1xuICAgIC8vY29uc3QgdHJhbnNUaW1lID0gNTAwXG5cbiAgICBsZXQgbWVudVN0eWxlID0gey4uLnN0eWxlfVxuXG4gICAgLy9jb25zb2xlLmxvZygnaXNTdGlja3knLGlzU3RpY2t5KVxuICBcblxuICAgIC8vbGV0IHBhdGhOb3cgPSAobWF0Y2ggIT09IHVuZGVmaW5lZCkgPyBtYXRjaC5wYXRoOicvJztcbiAgICBsZXQgcGF0aE5vdyA9ICcvJztcbiAgICBcbiAgICBsZXQgbGlzdHMgID0gaXRlbXMubWFwKCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAvL2xldCBzZWxOb3cgPSAoaXRlbS5saW5rID09PSBwYXRoTm93KSA/IHRydWU6ZmFsc2VcbiAgICAgIHJldHVybiA8TmF2SXRlbVxuICAgICAgICAgICAgYWN0aXZlPXsoaXRlbS5saW5rID09PSBwYXRoTm93KSA/IHRydWU6ZmFsc2V9IFxuICAgICAgICAgICAga2V5PXtrZXl9IFxuICAgICAgICAgICAgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2soaXRlbSl9ID5cbiAgICAgICAgICA8TmF2TGluayBocmVmPVwiI1wiPntpdGVtLm5hbWV9PC9OYXZMaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgfSk7XG5cblx0XHRyZXR1cm4gKFxuICAgICAgPGRpdiAgXG4gICAgICAgIGNsYXNzTmFtZT1cIm1haW5NZW51IGJnSGVhZGVyXCJcbiAgICAgICAgc3R5bGU9e1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAvL3RvcDonNjBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjonIzMxMzM0MCcsXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOidyZWQnLFxuICAgICAgICAgICAgICB6SW5kZXg6JzEwMCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6JzdweCdcbiAgICAgICAgICAgIH0sbWVudVN0eWxlXG4gICAgICAgICAgICApfSAgID5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5tYWluTWVudSAubmF2LWl0ZW0gYXtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbk1lbnUgLm5hdi1pdGVtIGE6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbk1lbnVcIj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBtZD17KGlzU3RpY2t5KT8xOjJ9PlxuICAgICAgICAgICAgICA8RmFkZSB0YWc9XCJkaXZcIiAgaW49e2lzU3RpY2t5fSAgZW50ZXI9e2ZhbHNlfSBleGl0PXtmYWxzZX0gPiBcbiAgICAgICAgICAgICAgICA8TG9nbyAvPiBcbiAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sICBtZD17KGlzU3RpY2t5KT84Ojd9ID5cbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPntsaXN0c30gPC9OYXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9eyhpc1N0aWNreSk/MzozfSA+XG4gICAgICAgICAgICAgIDxGYWRlIHRhZz1cImRpdlwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiICBpbj17aXNTdGlja3l9ICBlbnRlcj17ZmFsc2V9IGV4aXQ9e2ZhbHNlfSA+IFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonOTBweCd9fSA+XG4gICAgICAgICAgICAgICAgICA8Q2FydCBjYXJ0U2l6ZT17MjV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICA8QWNjb3VudCBmaXhTaXplPVwic21hbGxcIiBpbWdIZWlnaHQ9XCIzMHB4XCIgLz4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cblx0XHRcdFxuXHRcdCk7XG5cdH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7fSkoTWVudUhlYWRlcik7Il19 */\n/*@ sourceURL=components/commons/menu/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["h" /* Container */], {
        className: "mainMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["v" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: isSticky ? 1 : 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["i" /* Fade */], {
        tag: "div",
        "in": isSticky,
        enter: false,
        exit: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header_Logo__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: isSticky ? 8 : 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* Nav */], {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, lists, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["g" /* Col */], {
        md: isSticky ? 3 : 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["i" /* Fade */], {
        tag: "div",
        className: "d-flex align-items-center justify-content-center",
        "in": isSticky,
        enter: false,
        exit: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          width: '90px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3520042608"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header_Cart__["a" /* default */], {
        cartSize: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-3520042608"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Header_Account__["a" /* default */], {
        fixSize: "small",
        imgHeight: "30px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })))))));
    }
  }]);

  return MenuHeader;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, {})(MenuHeader));

/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/reactstrap/dist/reactstrap.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Col; });
/* unused harmony export Navbar */
/* unused harmony export NavbarBrand */
/* unused harmony export NavbarToggler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return NavItem; });
/* unused harmony export NavDropdown */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return NavLink; });
/* unused harmony export Breadcrumb */
/* unused harmony export BreadcrumbItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* unused harmony export ButtonDropdown */
/* unused harmony export ButtonGroup */
/* unused harmony export ButtonToolbar */
/* unused harmony export Dropdown */
/* unused harmony export DropdownItem */
/* unused harmony export DropdownMenu */
/* unused harmony export DropdownToggle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Fade; });
/* unused harmony export Badge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Card; });
/* unused harmony export CardLink */
/* unused harmony export CardGroup */
/* unused harmony export CardDeck */
/* unused harmony export CardColumns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CardBody; });
/* unused harmony export CardBlock */
/* unused harmony export CardFooter */
/* unused harmony export CardHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CardImg; });
/* unused harmony export CardImgOverlay */
/* unused harmony export Carousel */
/* unused harmony export UncontrolledCarousel */
/* unused harmony export CarouselControl */
/* unused harmony export CarouselItem */
/* unused harmony export CarouselIndicators */
/* unused harmony export CarouselCaption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CardSubtitle; });
/* unused harmony export CardText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CardTitle; });
/* unused harmony export Popover */
/* unused harmony export PopoverContent */
/* unused harmony export PopoverBody */
/* unused harmony export PopoverTitle */
/* unused harmony export PopoverHeader */
/* unused harmony export Progress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Modal; });
/* unused harmony export ModalHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ModalFooter; });
/* unused harmony export PopperContent */
/* unused harmony export PopperTargetHelper */
/* unused harmony export Tooltip */
/* unused harmony export Table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ListGroup; });
/* unused harmony export Form */
/* unused harmony export FormFeedback */
/* unused harmony export FormGroup */
/* unused harmony export FormText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return InputGroupAddon; });
/* unused harmony export InputGroupButton */
/* unused harmony export InputGroupButtonDropdown */
/* unused harmony export InputGroupText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Label; });
/* unused harmony export CustomInput */
/* unused harmony export Media */
/* unused harmony export Pagination */
/* unused harmony export PaginationItem */
/* unused harmony export PaginationLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TabPane; });
/* unused harmony export Jumbotron */
/* unused harmony export Collapse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ListGroupItem; });
/* unused harmony export ListGroupItemText */
/* unused harmony export ListGroupItemHeading */
/* unused harmony export UncontrolledAlert */
/* unused harmony export UncontrolledButtonDropdown */
/* unused harmony export UncontrolledCollapse */
/* unused harmony export UncontrolledDropdown */
/* unused harmony export UncontrolledNavDropdown */
/* unused harmony export UncontrolledTooltip */
/* unused harmony export Util */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isfunction__ = __webpack_require__("./node_modules/lodash.isfunction/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isfunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isfunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isobject__ = __webpack_require__("./node_modules/lodash.isobject/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isobject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_popper__ = __webpack_require__("./node_modules/react-popper/lib/react-popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__ = __webpack_require__("./node_modules/lodash.tonumber/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");










// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);

  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

var globalCssModule = void 0;

function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

var warned = {};

function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(undefined, [props, propName, componentName].concat(rest));
  };
}

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
var TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];

var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};

var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};

var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function findDOMElements(target) {
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isfunction___default()(target)) {
    return target();
  }
  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll('#' + target);
    }
    if (!selection.length) {
      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
    }
    return selection;
  }
  return target;
}

function isArrayOrNodeList(els) {
  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}

function getTarget(target) {
  var els = findDOMElements(target);
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}

var defaultToggleEvents = ['touchstart', 'click'];

function addMultipleEventListeners(_els, handler, _events) {
  var els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;
  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
  }
  events.forEach(function (event) {
    els.forEach(function (el) {
      el.addEventListener(event, handler);
    });
  });
  return function removeEvents() {
    events.forEach(function (event) {
      els.forEach(function (el) {
        el.removeEventListener(event, handler);
      });
    });
  };
}

var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = Object.freeze({
	getScrollbarWidth: getScrollbarWidth,
	setScrollbarWidth: setScrollbarWidth,
	isBodyOverflowing: isBodyOverflowing,
	getOriginalBodyPadding: getOriginalBodyPadding,
	conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
	setGlobalCssModule: setGlobalCssModule,
	mapToCssModules: mapToCssModules,
	omit: omit,
	pick: pick,
	warnOnce: warnOnce,
	deprecated: deprecated,
	DOMElement: DOMElement,
	TransitionTimeouts: TransitionTimeouts,
	TransitionPropTypeKeys: TransitionPropTypeKeys,
	TransitionStatuses: TransitionStatuses,
	keyCodes: keyCodes,
	PopperPlacements: PopperPlacements,
	canUseDOM: canUseDOM,
	findDOMElements: findDOMElements,
	isArrayOrNodeList: isArrayOrNodeList,
	getTarget: getTarget,
	defaultToggleEvents: defaultToggleEvents,
	addMultipleEventListeners: addMultipleEventListeners,
	focusableElements: focusableElements
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var propTypes = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  fluid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, fluid ? 'container-fluid' : 'container'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

var propTypes$1 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  noGutters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$1 = {
  tag: 'div'
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);

var columnProps = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes$2 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  widths: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};

var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);

  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (__WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, colClasses), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;

var propTypes$3 = {
  light: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  dark: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inverse: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, 'Please use the prop "dark"'),
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  sticky: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  toggleable: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]), 'Please use the prop "expand"'),
  expand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + expand;
};

// To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
var toggleableToExpand = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl'
};

var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === undefined || toggleable === 'xl') {
    return false;
  } else if (toggleable === false) {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
};

var Navbar = function Navbar(props) {
  var _classNames;

  var toggleable = props.toggleable,
      expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      inverse = props.inverse,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
    'navbar-light': light,
    'navbar-dark': inverse || dark
  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$4 = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-brand'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;

var propTypes$5 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};

var defaultProps$5 = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-toggler'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
  );
};

NavbarToggler.propTypes = propTypes$5;
NavbarToggler.defaultProps = defaultProps$5;

var propTypes$6 = {
  tabs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  pills: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  vertical: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  horizontal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  justified: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  navbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  card: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$6 = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return 'flex-' + vertical + '-column';
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Nav.propTypes = propTypes$6;
Nav.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$7 = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-item', active ? 'active' : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavItem.propTypes = propTypes$7;
NavItem.defaultProps = defaultProps$7;

/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var propTypes$8 = {
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  dropup: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, 'Please use the prop "direction" with the value "up".'),
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up', 'down', 'left', 'right']),
  group: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  nav: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  addonType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend', 'append'])]),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  inNavbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  setActiveFromChild: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var defaultProps$8 = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};

var childContextTypes = {
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

var Dropdown = function (_React$Component) {
  inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      return __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (keyCodes.tab === e.which || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;

      var container = this.getContainer();

      if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
      var disabledClass = mapToCssModules('disabled', this.props.cssModule);

      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
      if (!items.length) return;

      var index = -1;

      var charPressed = String.fromCharCode(e.which).toLowerCase();

      for (var i = 0; i < items.length; i += 1) {
        var firstLetter = items[i].textContent && items[i].textContent[0].toLowerCase();
        if (firstLetter === charPressed || items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);

      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;

      attrs.tag = attrs.tag || (nav ? 'li' : 'div');

      var subItemIsActive = false;
      if (setActiveFromChild) {
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["b" /* Manager */], _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
    }
  }]);
  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Dropdown.propTypes = propTypes$8;
Dropdown.defaultProps = defaultProps$8;
Dropdown.childContextTypes = childContextTypes;

function NavDropdown(props) {
  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, _extends({ nav: true }, props));
}

var propTypes$9 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var defaultProps$9 = {
  tag: 'a'
};

var NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);

  function NavLink(props) {
    classCallCheck(this, NavLink);

    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(NavLink, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);


      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
    }
  }]);
  return NavLink;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NavLink.propTypes = propTypes$9;
NavLink.defaultProps = defaultProps$9;

var propTypes$10 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  listTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  listClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps$10 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className), cssModule);

  var listClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('breadcrumb', listClassName), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes, 'aria-label': label }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      ListTag,
      { className: listClasses },
      children
    )
  );
};

Breadcrumb.propTypes = propTypes$10;
Breadcrumb.defaultProps = defaultProps$10;

var propTypes$11 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$11 = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes, 'aria-current': active ? 'page' : undefined }));
};

BreadcrumbItem.propTypes = propTypes$11;
BreadcrumbItem.defaultProps = defaultProps$11;

var propTypes$12 = {
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$12 = {
  color: 'secondary',
  tag: 'button'
};

var Button = function (_React$Component) {
  inherits(Button, _React$Component);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          block = _props.block,
          className = _props.className,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);


      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick
      }));
    }
  }]);
  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Button.propTypes = propTypes$12;
Button.defaultProps = defaultProps$12;

var propTypes$13 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, _extends({ group: true }, props));
};

ButtonDropdown.propTypes = propTypes$13;

var propTypes$14 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  vertical: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;

var propTypes$15 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps$14 = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'btn-toolbar'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonToolbar.propTypes = propTypes$15;
ButtonToolbar.defaultProps = defaultProps$14;

var propTypes$16 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  divider: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  header: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var contextTypes = {
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var defaultProps$15 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    classCallCheck(this, DropdownItem);

    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.getTabIndex = _this.getTabIndex.bind(_this);
    return _this;
  }

  createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);

      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);
  return DropdownItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DropdownItem.propTypes = propTypes$16;
DropdownItem.defaultProps = defaultProps$15;
DropdownItem.contextTypes = contextTypes;

var propTypes$17 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  flip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  modifiers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  persist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var defaultProps$16 = {
  tag: 'div',
  flip: true
};

var contextTypes$1 = {
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

var noFlipModifier = { flip: { enabled: false } };

var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      modifiers = props.modifiers,
      persist = props.persist,
      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);

  var Tag = tag;

  if (persist || context.isOpen && !context.inNavbar) {
    Tag = __WEBPACK_IMPORTED_MODULE_6_react_popper__["c" /* Popper */];

    var position1 = directionPositionMap[context.direction] || 'bottom';
    var position2 = right ? 'end' : 'start';
    attrs.placement = position1 + '-' + position2;
    attrs.component = tag;
    attrs.modifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
    tabIndex: '-1',
    role: 'menu'
  }, attrs, {
    'aria-hidden': !context.isOpen,
    className: classes,
    'x-placement': attrs.placement
  }));
};

DropdownMenu.propTypes = propTypes$17;
DropdownMenu.defaultProps = defaultProps$16;
DropdownMenu.contextTypes = contextTypes$1;

var propTypes$18 = {
  caret: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  'aria-haspopup': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  split: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  nav: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var defaultProps$17 = {
  'aria-haspopup': true,
  color: 'secondary'
};

var contextTypes$2 = {
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  inNavbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

var DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    classCallCheck(this, DropdownToggle);

    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(DropdownToggle, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );

      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          'aria-expanded': this.context.isOpen,
          children: children
        }));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["d" /* Target */], _extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        'aria-expanded': this.context.isOpen,
        children: children
      }));
    }
  }]);
  return DropdownToggle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DropdownToggle.propTypes = propTypes$18;
DropdownToggle.defaultProps = defaultProps$17;
DropdownToggle.contextTypes = contextTypes$2;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var PropTypes$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes2 = _interopRequireDefault(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
});

unwrapExports(PropTypes$1);

var Transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

  var PropTypes$$1 = _interopRequireWildcard(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a);

  var _react2 = _interopRequireDefault(__WEBPACK_IMPORTED_MODULE_0_react___default.a);

  var _reactDom2 = _interopRequireDefault(__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
  var EXITED = exports.EXITED = 'exited';
  var ENTERING = exports.ENTERING = 'entering';
  var ENTERED = exports.ENTERED = 'entered';
  var EXITING = exports.EXITING = 'exiting';

  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      var parentGroup = context.transitionGroup;
      // In the context of a TransitionGroup all enters are really appears
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = { status: initialStatus };

      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return { transitionGroup: null }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _ref = this.pendingState || this.state,
          status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({ status: EXITED });
        }
        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;

      var exit = void 0,
          enter = void 0,
          appear = void 0;

      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }
      return { exit: exit, enter: enter, appear: appear };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null;
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({ status: UNMOUNTED });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;

      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

      var timeouts = this.getTimeouts();

      // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
      if (!mounting && !enter) {
        this.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node, appearing);

        // FIXME: appear timeout?
        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;

      var timeouts = this.getTimeouts();

      // no exit animation skip right to EXITED
      if (!exit) {
        this.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
      var _this4 = this;

      // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition
      this.pendingState = nextState;

      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, function () {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          childProps = _objectWithoutProperties(_props, ['children']);
      // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };

  Transition.propTypes =  true ? {
    /**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$$1.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$$1.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$$1.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$$1.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$$1.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$$1.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var pt = PropTypes$1.timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;
      return pt.apply(undefined, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$$1.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$$1.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$$1.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$$1.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$$1.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$$1.func
  } : {};

  // Name the function so it is clearer in the documentation
  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop
  };

  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  exports.default = Transition;
});

var Transition = unwrapExports(Transition_1);

var propTypes$19 = _extends({}, Transition.propTypes, {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  baseClass: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  baseClassActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
});

var defaultProps$18 = _extends({}, Transition.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']);

  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
  // empty object "{}". This is the result of the `react-transition-group` babel
  // configuration settings. Therefore, to ensure that production builds work without
  // error, we can either explicitly define keys or use the Transition.defaultProps.
  // Using the Transition.defaultProps excludes any required props. Thus, the best
  // solution is to explicitly define required props in our utilities and reference these.
  // This also gives us more flexibility in the future to remove the prop-types
  // dependency in distribution builds (Similar to how `react-transition-group` does).
  // Note: Without omitting the `react-transition-group` props, the resulting child
  // Tag component would inherit the Transition properties as attributes for the HTML
  // element which results in errors/warnings for non-valid attributes.

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Transition,
    transitionProps,
    function (status) {
      var isActive = status === 'entered';
      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, baseClass, isActive && baseClassActive), cssModule);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Tag,
        _extends({ className: classes }, childProps, { ref: innerRef }),
        children
      );
    }
  );
}

Fade.propTypes = propTypes$19;
Fade.defaultProps = defaultProps$18;

var propTypes$20 = {
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  pill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$19 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Badge.propTypes = propTypes$20;
Badge.defaultProps = defaultProps$19;

var propTypes$21 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  inverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  block: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, 'Please use the props "body"'),
  body: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

var defaultProps$20 = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes, ref: innerRef }));
};

Card.propTypes = propTypes$21;
Card.defaultProps = defaultProps$20;

var propTypes$22 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$21 = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-group'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardGroup.propTypes = propTypes$22;
CardGroup.defaultProps = defaultProps$21;

var propTypes$23 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$22 = {
  tag: 'div'
};

var CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-deck'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardDeck.propTypes = propTypes$23;
CardDeck.defaultProps = defaultProps$22;

var propTypes$24 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$23 = {
  tag: 'div'
};

var CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-columns'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardColumns.propTypes = propTypes$24;
CardColumns.defaultProps = defaultProps$23;

var propTypes$25 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$24 = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-body'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardBody.propTypes = propTypes$25;
CardBody.defaultProps = defaultProps$24;

function CardBlock(props) {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardBody, props);
}

var propTypes$26 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$25 = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-link'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
};

CardLink.propTypes = propTypes$26;
CardLink.defaultProps = defaultProps$25;

var propTypes$27 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$26 = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-footer'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardFooter.propTypes = propTypes$27;
CardFooter.defaultProps = defaultProps$26;

var propTypes$28 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$27 = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-header'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardHeader.propTypes = propTypes$28;
CardHeader.defaultProps = defaultProps$27;

var propTypes$29 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$28 = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);


  var cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, cardImgClassName), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImg.propTypes = propTypes$29;
CardImg.defaultProps = defaultProps$28;

var propTypes$30 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$29 = {
  tag: 'div'
};

var CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-img-overlay'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImgOverlay.propTypes = propTypes$30;
CardImgOverlay.defaultProps = defaultProps$29;

var CarouselItem = function (_React$Component) {
  inherits(CarouselItem, _React$Component);

  function CarouselItem(props) {
    classCallCheck(this, CarouselItem);

    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

    _this.state = {
      startAnimation: false
    };

    _this.onEnter = _this.onEnter.bind(_this);
    _this.onEntering = _this.onEntering.bind(_this);
    _this.onExit = _this.onExit.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(CarouselItem, [{
    key: 'onEnter',
    value: function onEnter(node, isAppearing) {
      this.setState({ startAnimation: false });
      this.props.onEnter(node, isAppearing);
    }
  }, {
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = node.offsetHeight;
      this.setState({ startAnimation: true });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ startAnimation: false });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      this.setState({ startAnimation: true });
      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isIn = _props.in,
          children = _props.children,
          cssModule = _props.cssModule,
          slide = _props.slide,
          Tag = _props.tag,
          className = _props.className,
          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          enter: slide,
          exit: slide,
          'in': isIn,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var direction = _this2.context.direction;

          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          var itemClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Tag,
            { className: itemClasses },
            children
          );
        }
      );
    }
  }]);
  return CarouselItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CarouselItem.propTypes = _extends({}, Transition.propTypes, {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  in: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  slide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
});

CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});

CarouselItem.contextTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var Carousel = function (_React$Component) {
  inherits(Carousel, _React$Component);

  function Carousel(props) {
    classCallCheck(this, Carousel);

    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);
    _this.hoverStart = _this.hoverStart.bind(_this);
    _this.hoverEnd = _this.hoverEnd.bind(_this);
    _this.state = {
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  createClass(Carousel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { direction: this.state.direction };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      }

      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setInterval(nextProps);
      // Calculate the direction to turn
      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
        this.setState({ direction: 'right' });
      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
        this.setState({ direction: 'left' });
      } else if (this.props.activeIndex > nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
      } else if (this.props.activeIndex !== nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
      }
      this.setState({ indicatorClicked: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'setInterval',
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      // make sure not to have multiple intervals going...
      this.clearInterval();
      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    })
  }, {
    key: 'clearInterval',
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    })
  }, {
    key: 'hoverStart',
    value: function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }
      if (this.props.mouseEnter) {
        var _props;

        (_props = this.props).mouseEnter.apply(_props, arguments);
      }
    }
  }, {
    key: 'hoverEnd',
    value: function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }
      if (this.props.mouseLeave) {
        var _props2;

        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { role: 'listbox', className: className },
        carouselItems.map(function (item, index) {
          var isIn = index === _this2.props.activeIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(item, {
            in: isIn,
            slide: slide
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          cssModule = _props3.cssModule,
          slide = _props3.slide,
          className = _props3.className;

      var outerClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel', slide && 'slide'), cssModule);

      var innerClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('carousel-inner'), cssModule);

      // filter out booleans, null, or undefined
      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });

      var slidesOnly = children.every(function (child) {
        return child.type === CarouselItem;
      });

      // Rendering only slides
      if (slidesOnly) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(children, innerClasses)
        );
      }

      // Rendering slides and controls
      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(_carouselItems, innerClasses),
          _controlLeft,
          _controlRight
        );
      }

      // Rendering indicators, slides and controls
      var indicators = children[0];
      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({ indicatorClicked: true }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };
      var wrappedIndicators = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(indicators, { onClickHandler: wrappedOnClick });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
        wrappedIndicators,
        this.renderItems(carouselItems, innerClasses),
        controlLeft,
        controlRight
      );
    }
  }]);
  return Carousel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true
};

Carousel.childContextTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;


  var anchorClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel-control-' + direction), cssModule);

  var iconClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('carousel-control-' + direction + '-icon'), cssModule);

  var screenReaderClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('sr-only'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'a',
    {
      className: anchorClasses,
      role: 'button',
      tabIndex: '0',
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: screenReaderClasses },
      directionText || direction
    )
  );
};

CarouselControl.propTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  directionText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;


  var listClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()({ active: activeIndex === idx }), cssModule);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', {
      key: '' + (item.key || item.src) + item.caption + item.altText,
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ol',
    { className: listClasses },
    indicators
  );
};

CarouselIndicators.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onClickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      captionHeader
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      captionText
    )
  );
};

CarouselCaption.propTypes = {
  captionHeader: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  captionText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var propTypes$31 = {
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  indicators: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  controls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autoPlay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  previous: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  goToIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var UncontrolledCarousel = function (_Component) {
  inherits(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    classCallCheck(this, UncontrolledCarousel);

    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));

    _this.animating = false;
    _this.state = { activeIndex: 0 };
    _this.next = _this.next.bind(_this);
    _this.previous = _this.previous.bind(_this);
    _this.goToIndex = _this.goToIndex.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(UncontrolledCarousel, [{
    key: 'onExiting',
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: 'onExited',
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'goToIndex',
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoPlay = _props.autoPlay,
          indicators = _props.indicators,
          controls = _props.controls,
          items = _props.items,
          goToIndex = _props.goToIndex,
          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
      var activeIndex = this.state.activeIndex;


      var slides = items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          CarouselItem,
          {
            onExiting: _this2.onExiting,
            onExited: _this2.onExited,
            key: item.src
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'd-block w-100', src: item.src, alt: item.altText }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.header || item.caption })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Carousel,
        _extends({
          activeIndex: activeIndex,
          next: this.next,
          previous: this.previous,
          ride: autoPlay ? 'carousel' : undefined
        }, props),
        indicators && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselIndicators, {
          items: items,
          activeIndex: props.activeIndex || activeIndex,
          onClickHandler: goToIndex || this.goToIndex
        }),
        slides,
        controls && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselControl, {
          direction: 'prev',
          directionText: 'Previous',
          onClickHandler: props.previous || this.previous
        }),
        controls && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselControl, {
          direction: 'next',
          directionText: 'Next',
          onClickHandler: props.next || this.next
        })
      );
    }
  }]);
  return UncontrolledCarousel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

UncontrolledCarousel.propTypes = propTypes$31;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};

var propTypes$32 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$30 = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-subtitle'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardSubtitle.propTypes = propTypes$32;
CardSubtitle.defaultProps = defaultProps$30;

var propTypes$33 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$31 = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-text'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardText.propTypes = propTypes$33;
CardText.defaultProps = defaultProps$31;

var propTypes$34 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$32 = {
  tag: 'h5'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-title'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardTitle.propTypes = propTypes$34;
CardTitle.defaultProps = defaultProps$32;

var propTypes$35 = {
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]).isRequired,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  valid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  invalid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  bsSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

function CustomInput(props) {
  var className = props.className,
      label = props.label,
      inline = props.inline,
      valid = props.valid,
      invalid = props.invalid,
      cssModule = props.cssModule,
      children = props.children,
      bsSize = props.bsSize,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize', 'innerRef']);


  var type = attributes.type;

  var customClass = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);

  var validationClassNames = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(invalid && 'is-invalid', valid && 'is-valid'), cssModule);

  if (type === 'select') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'select',
      _extends({}, attributes, { ref: innerRef, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames, customClass) }),
      children
    );
  }

  if (type === 'file') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: customClass },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames, mapToCssModules('custom-file-input', cssModule)) })),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        { className: mapToCssModules('custom-file-label', cssModule), htmlFor: attributes.id },
        label || 'Choose file'
      )
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames, customClass) }));
  }

  var wrapperClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(customClass, mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('custom-control', { 'custom-control-inline': inline }), cssModule));

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: wrapperClasses },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({}, attributes, {
      ref: innerRef,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames, mapToCssModules('custom-control-input', cssModule))
    })),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { className: mapToCssModules('custom-control-label', cssModule), htmlFor: attributes.id },
      label
    ),
    children
  );
}

CustomInput.propTypes = propTypes$35;

var propTypes$36 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  placementPrefix: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  arrowClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  hideArrow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  offset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  fallbackPlacement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
  flip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]),
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]).isRequired,
  modifiers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  boundariesElement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps$33 = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {}
};

var childContextTypes$1 = {
  popperManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var PopperContent = function (_React$Component) {
  inherits(PopperContent, _React$Component);

  function PopperContent(props) {
    classCallCheck(this, PopperContent);

    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.setTargetNode = _this.setTargetNode.bind(_this);
    _this.getTargetNode = _this.getTargetNode.bind(_this);
    _this.state = {};
    return _this;
  }

  createClass(PopperContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this.setTargetNode,
          getTargetNode: this.getTargetNode
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      } else if (this._element) {
        // rerender
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'setTargetNode',
    value: function setTargetNode(node) {
      this.targetNode = node;
    }
  }, {
    key: 'getTargetNode',
    value: function getTargetNode() {
      return this.targetNode;
    }
  }, {
    key: 'getContainerNode',
    value: function getContainerNode() {
      return getTarget(this.props.container);
    }
  }, {
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({ placement: data.placement });
      }
      return data;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.container !== 'inline') {
        if (this.props.isOpen) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this._element) {
        this.getContainerNode().removeChild(this._element);
        __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unmountComponentAtNode(this._element);
        this._element = null;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._element = document.createElement('div');
      this.getContainerNode().appendChild(this._element);
      this.renderIntoSubtree();
      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          flip = _props.flip,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          _arrowClassName = _props.arrowClassName,
          hideArrow = _props.hideArrow,
          className = _props.className,
          tag = _props.tag,
          container = _props.container,
          modifiers = _props.modifiers,
          boundariesElement = _props.boundariesElement,
          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'arrowClassName', 'hideArrow', 'className', 'tag', 'container', 'modifiers', 'boundariesElement']);

      var arrowClassName = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('arrow', _arrowClassName), cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var popperClassName = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var extendedModifiers = _extends({
        offset: { offset: offset },
        flip: { enabled: flip, behavior: fallbackPlacement },
        preventOverflow: { boundariesElement: boundariesElement },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      }, modifiers);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_popper__["c" /* Popper */],
        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName, 'x-placement': this.state.placement || attrs.placement }),
        children,
        !hideArrow && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["a" /* Arrow */], { className: arrowClassName })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      this.setTargetNode(getTarget(this.props.target));

      if (this.props.container === 'inline') {
        return this.props.isOpen ? this.renderChildren() : null;
      }

      return null;
    }
  }]);
  return PopperContent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PopperContent.propTypes = propTypes$36;
PopperContent.defaultProps = defaultProps$33;
PopperContent.childContextTypes = childContextTypes$1;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

PopperTargetHelper.propTypes = {
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]).isRequired
};

var propTypes$37 = {
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(PopperPlacements),
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]).isRequired,
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]),
  boundariesElement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hideArrow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  innerClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  placementPrefix: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({ show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, hide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  modifiers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  offset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])
};

var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

var defaultProps$34 = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {}
};

var Popover = function (_React$Component) {
  inherits(Popover, _React$Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this._popover = ref;
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.props.isOpen) {
          this.toggle(e);
        }
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$37));
      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('popover-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('popover', 'show', this.props.className), this.props.cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          boundariesElement: this.props.boundariesElement
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
      );
    }
  }]);
  return Popover;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Popover.propTypes = propTypes$37;
Popover.defaultProps = defaultProps$34;

var propTypes$38 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$35 = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-header'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverHeader.propTypes = propTypes$38;
PopoverHeader.defaultProps = defaultProps$35;

function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverHeader, props);
}

var propTypes$39 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$36 = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-body'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverBody.propTypes = propTypes$39;
PopoverBody.defaultProps = defaultProps$36;

function PopoverContent(props) {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverBody, props);
}

var propTypes$40 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  bar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  multi: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  max: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  animated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  striped: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  barClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$37 = {
  tag: 'div',
  value: 0,
  max: 100
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);


  var percent = __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(value) / __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(max) * 100;

  var progressClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'progress'), cssModule);

  var progressBarClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);

  var ProgressBar = multi ? children : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
    className: progressBarClasses,
    style: { width: percent + '%' },
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max,
    children: children
  });

  if (bar) {
    return ProgressBar;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
};

Progress.propTypes = propTypes$40;
Progress.defaultProps = defaultProps$37;

var propTypes$42 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var Portal = function (_React$Component) {
  inherits(Portal, _React$Component);

  function Portal() {
    classCallCheck(this, Portal);
    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Portal.propTypes = propTypes$42;

function noop() {}

var FadePropTypes = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(Fade.propTypes);

var propTypes$41 = {
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autoFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  centered: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  keyboard: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  labelledBy: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  backdrop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['static'])]),
  onEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onExit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onOpened: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onClosed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  wrapClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  modalClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  backdropClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  contentClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  external: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  fade: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  zIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

var propsToOmit = Object.keys(propTypes$41);

var defaultProps$38 = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition
  }
};

var Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_this);
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.onOpened = _this.onOpened.bind(_this);
    _this.onClosed = _this.onClosed.bind(_this);

    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }
    return _this;
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this.state.isOpen) {
        this.destroy();
      }

      this._isMounted = false;
    }
  }, {
    key: 'onOpened',
    value: function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
    }
  }, {
    key: 'onClosed',
    value: function onClosed(node) {
      // so all methods get called before it is unmounted
      this.props.onClosed();
      (this.props.modalTransition.onExited || noop)(node);
      this.destroy();

      if (this._isMounted) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'getFocusableChildren',
    value: function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    }
  }, {
    key: 'getFocusedChild',
    value: function getFocusedChild() {
      var currentFocus = void 0;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }
      return currentFocus;
    }

    // not mouseUp because scrollbar fires it, shouldn't close when user scrolls

  }, {
    key: 'handleBackdropClick',
    value: function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        if (!this.props.isOpen || this.props.backdrop !== true) return;

        var container = this._dialog;

        if (e.target && !container.contains(e.target) && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (e.which !== 9) return;

      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      var currentFocus = this.getFocusedChild();

      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    }
  }, {
    key: 'handleBackdropMouseDown',
    value: function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._originalBodyPadding = getOriginalBodyPadding();

      conditionallyUpdateScrollbar();

      document.body.appendChild(this._element);
      if (!this.bodyClassAdded) {
        document.body.className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
        this.bodyClassAdded = true;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._element) {
        document.body.removeChild(this._element);
        this._element = null;
      }

      if (this._triggeringElement) {
        this._triggeringElement.focus();
        this._triggeringElement = null;
      }

      if (this.bodyClassAdded) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
        // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
        this.bodyClassAdded = false;
      }

      setScrollbarWidth(this._originalBodyPadding);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _classNames,
          _this2 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, attributes, {
          className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
          role: 'document',
          ref: function ref(c) {
            _this2._dialog = c;
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-content', this.props.contentClassName), this.props.cssModule)
          },
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            wrapClassName = _props.wrapClassName,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy,
            external = _props.external,
            innerRef = _props.innerRef;


        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: { display: 'block' },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };

        var hasTransition = this.props.fade;
        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = hasTransition ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade, _extends({}, backdropTransition, {
          'in': isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-backdrop', backdropClassName), cssModule)
        })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-backdrop', 'show', backdropClassName), cssModule) });

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Portal,
          { node: this._element },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: mapToCssModules(wrapClassName) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              Fade,
              _extends({}, modalAttributes, modalTransition, {
                'in': isOpen,
                onEntered: this.onOpened,
                onExited: this.onClosed,
                cssModule: cssModule,
                className: mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal', modalClassName), cssModule),
                innerRef: innerRef
              }),
              external,
              this.renderModalDialog()
            ),
            Backdrop
          )
        );
      }

      return null;
    }
  }]);
  return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Modal.propTypes = propTypes$41;
Modal.defaultProps = defaultProps$38;

var propTypes$43 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  wrapTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  closeAriaLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  charCode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])
};

var defaultProps$39 = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel', 'charCode']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-header'), cssModule);

  if (toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        closeIcon
      )
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      { className: mapToCssModules('modal-title', cssModule) },
      children
    ),
    closeButton
  );
};

ModalHeader.propTypes = propTypes$43;
ModalHeader.defaultProps = defaultProps$39;

var propTypes$44 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$40 = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-body'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalBody.propTypes = propTypes$44;
ModalBody.defaultProps = defaultProps$40;

var propTypes$45 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$41 = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-footer'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalFooter.propTypes = propTypes$45;
ModalFooter.defaultProps = defaultProps$41;

var propTypes$46 = {
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(PopperPlacements),
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]).isRequired,
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, DOMElement]),
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hideArrow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  boundariesElement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  innerClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  arrowClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  autohide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  placementPrefix: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({ show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, hide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  modifiers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  offset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]),
  trigger: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var DEFAULT_DELAYS$1 = {
  show: 0,
  hide: 250
};

var defaultProps$42 = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS$1,
  autohide: true,
  toggle: function toggle() {}
};

var Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
    return _this;
  }

  createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.addTargetEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeTargetEvents();
    }
  }, {
    key: 'onMouseOverTooltip',
    value: function onMouseOverTooltip(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    }
  }, {
    key: 'onMouseLeaveTooltip',
    value: function onMouseLeaveTooltip(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onMouseOverTooltipContent',
    value: function onMouseOverTooltipContent() {
      if (this.props.autohide) {
        return;
      }
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }, {
    key: 'onMouseLeaveTooltipContent',
    value: function onMouseLeaveTooltipContent(e) {
      if (this.props.autohide) {
        return;
      }
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onEscKeyDown',
    value: function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'show',
    value: function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'hide',
    value: function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e.target === this._target || this._target.contains(e.target)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.toggle(e);
        }
      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');
        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1) {
            ['click', 'touchstart'].forEach(function (event) {
              return document.addEventListener(event, _this2.handleDocumentClick, true);
            });
          }
          if (triggers.indexOf('hover') > -1) {
            this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
            this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
          }
          if (triggers.indexOf('focus') > -1) {
            this._target.addEventListener('focusin', this.show, true);
            this._target.addEventListener('focusout', this.hide, true);
          }
          this._target.addEventListener('keydown', this.onEscKeyDown, true);
        }
      } else {
        this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
        this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
        this._target.addEventListener('keydown', this.onEscKeyDown, true);
        this._target.addEventListener('focusin', this.show, true);
        this._target.addEventListener('focusout', this.hide, true);
        ['click', 'touchstart'].forEach(function (event) {
          return document.addEventListener(event, _this2.handleDocumentClick, true);
        });
      }
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
      this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
      this._target.addEventListener('keydown', this.onEscKeyDown, true);
      this._target.addEventListener('focusin', this.show, true);
      this._target.addEventListener('focusout', this.hide, true);

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$46));
      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tooltip-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tooltip', 'show', this.props.className), this.props.cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          boundariesElement: this.props.boundariesElement,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          arrowClassName: this.props.arrowClassName,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          cssModule: this.props.cssModule
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({}, attributes, {
          ref: this.props.innerRef,
          className: classes,
          role: 'tooltip',
          'aria-hidden': this.props.isOpen,
          onMouseOver: this.onMouseOverTooltipContent,
          onMouseLeave: this.onMouseLeaveTooltipContent,
          onKeyDown: this.onEscKeyDown
        }))
      );
    }
  }]);
  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Tooltip.propTypes = propTypes$46;
Tooltip.defaultProps = defaultProps$42;

var propTypes$47 = {
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  bordered: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  borderless: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  striped: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inverse: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, 'Please use the prop "dark"'),
  dark: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  responsive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  responsiveTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps$43 = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      inverse = props.inverse,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);

  var table = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));

  if (responsive) {
    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      ResponsiveTag,
      { className: responsiveClassName },
      table
    );
  }

  return table;
};

Table.propTypes = propTypes$47;
Table.defaultProps = defaultProps$43;

var propTypes$48 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  flush: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$44 = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroup.propTypes = propTypes$48;
ListGroup.defaultProps = defaultProps$44;

var propTypes$49 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$45 = {
  tag: 'form'
};

var Form = function (_Component) {
  inherits(Form, _Component);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  createClass(Form, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'submit',
    value: function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);


      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, inline ? 'form-inline' : false), cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Form.propTypes = propTypes$49;
Form.defaultProps = defaultProps$45;

var propTypes$50 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  valid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tooltip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var defaultProps$46 = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);


  var validMode = tooltip ? 'tooltip' : 'feedback';

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormFeedback.propTypes = propTypes$50;
FormFeedback.defaultProps = defaultProps$46;

var propTypes$51 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  check: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$47 = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormGroup.propTypes = propTypes$51;
FormGroup.defaultProps = defaultProps$47;

var propTypes$52 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$48 = {
  tag: 'small',
  color: 'muted'
};

var FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormText.propTypes = propTypes$52;
FormText.defaultProps = defaultProps$48;

/* eslint react/prefer-stateless-function: 0 */

var propTypes$53 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  bsSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  state: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  invalid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  static: deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, 'Please use the prop "plaintext"'),
  plaintext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  addon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$49 = {
  type: 'text'
};

var Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          type = _props.type,
          bsSize = _props.bsSize,
          state = _props.state,
          valid = _props.valid,
          invalid = _props.invalid,
          tag = _props.tag,
          addon = _props.addon,
          staticInput = _props.static,
          plaintext = _props.plaintext,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);


      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');

      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');

      var formControlClass = 'form-control';

      if (plaintext || staticInput) {
        formControlClass = formControlClass + '-plaintext';
        Tag = tag || 'p';
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
        if (state === 'danger') {
          invalid = true;
        } else if (state === 'success') {
          valid = true;
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
        delete attributes.children;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Input.propTypes = propTypes$53;
Input.defaultProps = defaultProps$49;

var propTypes$54 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$50 = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroup.propTypes = propTypes$54;
InputGroup.defaultProps = defaultProps$50;

var propTypes$56 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$52 = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group-text'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroupText.propTypes = propTypes$56;
InputGroupText.defaultProps = defaultProps$52;

var propTypes$55 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  addonType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend', 'append']).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$51 = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group-' + addonType), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputGroupText, { children: children })
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
};

InputGroupAddon.propTypes = propTypes$55;
InputGroupAddon.defaultProps = defaultProps$51;

var propTypes$57 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  addonType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend', 'append']).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  groupClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  groupAttributes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var InputGroupButton = function InputGroupButton(props) {
  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');

  var children = props.children,
      groupClassName = props.groupClassName,
      groupAttributes = props.groupAttributes,
      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);


  if (typeof children === 'string') {
    var cssModule = propsWithoutGroup.cssModule,
        tag = propsWithoutGroup.tag,
        addonType = propsWithoutGroup.addonType,
        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);


    var allGroupAttributes = _extends({}, groupAttributes, {
      cssModule: cssModule,
      tag: tag,
      addonType: addonType
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      InputGroupAddon,
      _extends({}, allGroupAttributes, { className: groupClassName }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button, _extends({}, attributes, { children: children }))
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputGroupAddon, _extends({}, props, { children: children }));
};

InputGroupButton.propTypes = propTypes$57;

var propTypes$58 = {
  addonType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend', 'append']).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};

var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, props);
};

InputGroupButtonDropdown.propTypes = propTypes$58;

var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp$1 = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);

var columnProps$1 = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
  size: stringOrNumberProp$1,
  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);

var propTypes$59 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  hidden: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  check: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  for: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};

var defaultProps$53 = {
  tag: 'label',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);


  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass = void 0;

    if (__WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};

Label.propTypes = propTypes$59;
Label.defaultProps = defaultProps$53;

var propTypes$60 = {
  body: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  heading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  list: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  middle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);


  var defaultTag = void 0;
  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  var Tag = tag || defaultTag;

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Media.propTypes = propTypes$60;

var propTypes$61 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  listClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  listTag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps$54 = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className), cssModule);

  var listClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Tag,
    { className: classes, 'aria-label': label },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListTag, _extends({}, attributes, { className: listClasses }))
  );
};

Pagination.propTypes = propTypes$61;
Pagination.defaultProps = defaultProps$54;

var propTypes$62 = {
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps$55 = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PaginationItem.propTypes = propTypes$62;
PaginationItem.defaultProps = defaultProps$55;

var propTypes$63 = {
  'aria-label': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  previous: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps$56 = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-link'), cssModule);

  var defaultAriaLabel = void 0;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }
  var ariaLabel = props['aria-label'] || defaultAriaLabel;

  var defaultCaret = void 0;
  if (previous) {
    defaultCaret = '\xAB';
  } else if (next) {
    defaultCaret = '\xBB';
  }

  var children = props.children;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next) {
    children = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      {
        'aria-hidden': 'true',
        key: 'caret'
      },
      children || defaultCaret
    ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      {
        className: 'sr-only',
        key: 'sr'
      },
      ariaLabel
    )];
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Tag,
    _extends({}, attributes, {
      className: classes,
      'aria-label': ariaLabel
    }),
    children
  );
};

PaginationLink.propTypes = propTypes$63;
PaginationLink.defaultProps = defaultProps$56;

var propTypes$64 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  activeTab: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$57 = {
  tag: 'div'
};

var childContextTypes$2 = {
  activeTabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var TabContent = function (_Component) {
  inherits(TabContent, _Component);
  createClass(TabContent, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }
      return null;
    }
  }]);

  function TabContent(props) {
    classCallCheck(this, TabContent);

    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));

    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  createClass(TabContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        activeTabId: this.state.activeTab
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;


      var attributes = omit(this.props, Object.keys(propTypes$64));

      var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-content', className), cssModule);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return TabContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object(__WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__["polyfill"])(TabContent);
TabContent.propTypes = propTypes$64;
TabContent.defaultProps = defaultProps$57;
TabContent.childContextTypes = childContextTypes$2;

var propTypes$65 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  tabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var defaultProps$58 = {
  tag: 'div'
};

var contextTypes$3 = {
  activeTabId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

function TabPane(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
}
TabPane.propTypes = propTypes$65;
TabPane.defaultProps = defaultProps$58;
TabPane.contextTypes = contextTypes$3;

var propTypes$66 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  fluid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$59 = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Jumbotron.propTypes = propTypes$66;
Jumbotron.defaultProps = defaultProps$59;

var propTypes$67 = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  closeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  closeAriaLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fade: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  toggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  transition: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(Fade.propTypes),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

var defaultProps$60 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _extends({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);


  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);

  var closeClasses = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('close', closeClassName), cssModule);

  var alertTransition = _extends({}, Fade.defaultProps, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Fade,
    _extends({}, attributes, alertTransition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert', innerRef: innerRef }),
    toggle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    ) : null,
    children
  );
}

Alert.propTypes = propTypes$67;
Alert.defaultProps = defaultProps$60;

var _transitionStatusToCl;

var propTypes$68 = _extends({}, Transition.propTypes, {
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  navbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])
});

var defaultProps$61 = _extends({}, Transition.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse = function (_Component) {
  inherits(Collapse, _Component);

  function Collapse(props) {
    classCallCheck(this, Collapse);

    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      height: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_this);
    });
    return _this;
  }

  createClass(Collapse, [{
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      this.setState({ height: getHeight(node) });
      this.props.onEntering(node, isAppearing);
    }
  }, {
    key: 'onEntered',
    value: function onEntered(node, isAppearing) {
      this.setState({ height: null });
      this.props.onEntered(node, isAppearing);
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ height: getHeight(node) });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
      this.setState({ height: 0 });
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      this.setState({ height: null });
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Tag = _props.tag,
          isOpen = _props.isOpen,
          className = _props.className,
          navbar = _props.navbar,
          cssModule = _props.cssModule,
          children = _props.children,
          innerRef = _props.innerRef,
          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
      var height = this.state.height;

      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
      // empty object "{}". This is the result of the `react-transition-group` babel
      // configuration settings. Therefore, to ensure that production builds work without
      // error, we can either explicitly define keys or use the Transition.defaultProps.
      // Using the Transition.defaultProps excludes any required props. Thus, the best
      // solution is to explicitly define required props in our utilities and reference these.
      // This also gives us more flexibility in the future to remove the prop-types
      // dependency in distribution builds (Similar to how `react-transition-group` does).
      // Note: Without omitting the `react-transition-group` props, the resulting child
      // Tag component would inherit the Transition properties as attributes for the HTML
      // element which results in errors/warnings for non-valid attributes.

      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          'in': isOpen,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var collapseClass = getTransitionClass(status);
          var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
          var style = height === null ? null : { height: height };
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Tag,
            _extends({}, childProps, {
              style: _extends({}, childProps.style, style),
              className: classes,
              ref: _this2.props.innerRef
            }),
            children
          );
        }
      );
    }
  }]);
  return Collapse;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Collapse.propTypes = propTypes$68;
Collapse.defaultProps = defaultProps$61;

var propTypes$69 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$62 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItem.propTypes = propTypes$69;
ListGroupItem.defaultProps = defaultProps$62;

var propTypes$70 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$63 = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-heading'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemHeading.propTypes = propTypes$70;
ListGroupItemHeading.defaultProps = defaultProps$63;

var propTypes$71 = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  cssModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var defaultProps$64 = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-text'), cssModule);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemText.propTypes = propTypes$71;
ListGroupItemText.defaultProps = defaultProps$64;

var UncontrolledAlert = function (_Component) {
  inherits(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    classCallCheck(this, UncontrolledAlert);

    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));

    _this.state = { isOpen: true };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledAlert, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledAlert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var UncontrolledButtonDropdown = function (_Component) {
  inherits(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    classCallCheck(this, UncontrolledButtonDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledButtonDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledButtonDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var propTypes$72 = {
  toggler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  toggleEvents: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)
};

var defaultProps$65 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = function (_Component) {
  inherits(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    classCallCheck(this, UncontrolledCollapse);

    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));

    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  createClass(UncontrolledCollapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);
      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return { isOpen: !isOpen };
      });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          toggleEvents = _props.toggleEvents,
          rest = objectWithoutProperties(_props, ['toggleEvents']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Collapse, _extends({ isOpen: this.state.isOpen }, rest));
    }
  }]);
  return UncontrolledCollapse;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

UncontrolledCollapse.propTypes = propTypes$72;
UncontrolledCollapse.defaultProps = defaultProps$65;

var UncontrolledDropdown = function (_Component) {
  inherits(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    classCallCheck(this, UncontrolledDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
};

var UncontrolledTooltip = function (_Component) {
  inherits(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    classCallCheck(this, UncontrolledTooltip);

    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledTooltip, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


//# sourceMappingURL=reactstrap.es.js.map


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_cookies__ = __webpack_require__("./node_modules/next-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_Layouts__ = __webpack_require__("./components/commons/Layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions_userAction__ = __webpack_require__("./redux/actions/userAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_productsAction__ = __webpack_require__("./redux/actions/productsAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Home__ = __webpack_require__("./components/Home/index.js");

var _jsxFileName = "/app/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_commons_Layouts__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Home__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _cookies, token;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _cookies = __WEBPACK_IMPORTED_MODULE_2_next_cookies___default()(ctx), token = _cookies.token; //console.log('token',token)

                if (!(token !== undefined)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__redux_actions_userAction__["a" /* loadUserInfo */])(token)(ctx.store.dispatch);

              case 4:
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_5__redux_actions_productsAction__["d" /* loadNewProducts */])()(ctx.store.dispatch);

              case 6:
                _context.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_5__redux_actions_productsAction__["c" /* loadNewOther */])()(ctx.store.dispatch);

              case 8:
                return _context.abrupt("return", {});

              case 9:
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

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/actions/UtilityAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showDialogGotoSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closeDialogGotoSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showConfirmDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeConfirmDelete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./redux/constants/index.js");



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

/***/ "./redux/actions/productsAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadAllProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadNewProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadNewOther; });
/* unused harmony export loadProductDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadCarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteOrderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selShippingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toggleShieldPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_utility_getApi__ = __webpack_require__("./components/commons/utility/getApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_utility_cookie__ = __webpack_require__("./components/commons/utility/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./redux/constants/index.js");


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



/***/ })

})
//# sourceMappingURL=5.1a353fbdcc692f29d607.hot-update.js.map