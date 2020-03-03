webpackHotUpdate("static/development/pages/user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/menu/Menu.jsx */ "./components/menu/Menu.jsx");
/* harmony import */ var _components_menu_Footer_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/menu/Footer.jsx */ "./components/menu/Footer.jsx");
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../API.js */ "./API.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../profile.css */ "./profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/kouros/Code/SSR/pages/user.js";








var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, _Component);

  function Profile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile).call(this, props));
    _this.state = {
      coupons: [],
      messages: [],
      menuState: "coupons"
    };
    _this.handleSignout = _this.handleSignout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.couponNumber = _this.couponNumber.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.API = new _API_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem("jwt"); //should validate

      if (!token) {
        this.props.history.replace("/");
      } else {
        var profile = this.API.getProfile();
        this.API.getUserCoupons(profile.id).then(function (res) {
          //            console.log('coupons', res);
          if (res.data.message === "Successful Responce.") _this2.setState({
            coupons: res.data.items
          }, function () {//                  console.log('coupons', this.state)
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u043F\u043E\u043D\u043F\u043E\u043D"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#p",
        onClick: function onClick() {
          _this3.setState({
            menuState: "coupons"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Coupons", " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#d",
        onClick: function onClick() {
          _this3.setState({
            menuState: "messages"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Messages", " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: this.handleSignout,
        href: "#Update",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Sign Out")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, this.state.menuState === "coupons" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pcard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Your Certificates"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        id: "guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grouplist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.state.coupons.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Certificate No. :", " ", this.couponNumber(item.userid, item.itemid, item.expiry)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "Company Provided: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, " ", item.company, " ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "Service Description: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, " ", item.description, " ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Original Price: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, " ", item.price, " \xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Discount Price: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, " ", item.dprice, " ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, " Bought at: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, " ", item.datecreated, " \xA0\xA0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, " Expire at: ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, " ", item.expiry, " ")));
      }, this)), this.state.coupons.length ? null : "You dont have any cerificate"))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pcard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "You Messages "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        id: "guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), this.state.messages.length ? null : "You dont have any messages"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_menu_Footer_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }));
    }
  }, {
    key: "handleSignout",
    value: function handleSignout() {
      localStorage.removeItem("jwt");
      this.props.history.replace("/");
    }
  }, {
    key: "couponNumber",
    value: function couponNumber(itemId, profileId, couponDate) {
      var coupon = new Date(couponDate).valueOf() + itemId + profileId;
      return coupon;
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=user.js.503232cbd9a9081101c6.hot-update.js.map