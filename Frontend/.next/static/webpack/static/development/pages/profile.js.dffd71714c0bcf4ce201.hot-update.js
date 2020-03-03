webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/menu/Menu.jsx */ "./components/menu/Menu.jsx");
/* harmony import */ var _components_menu_Footer_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/menu/Footer.jsx */ "./components/menu/Footer.jsx");
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../API.js */ "./API.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/react-yandex-maps.umd.production.min.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../profile.css */ "./profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "/Users/kouros/Code/SSR/pages/profile.js";










var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile, _Component);

  function Profile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMasterChange", function (event) {
      _this.setState({
        newMaster: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddMaster", function () {
      var newList;

      if (_this.state.newMaster !== "") {
        if (_this.state.masters[0] === "") newList = [_this.state.newMaster];else newList = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.masters), [_this.state.newMaster]);

        _this.setState({
          masters: newList,
          newMaster: "",
          savedProfile: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDeleteMaster", function (index) {
      var newArray = _this.state.masters;
      newArray.splice(index, 1);

      _this.setState({
        masters: newArray,
        savedProfile: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleConditionChange", function (event) {
      _this.setState({
        newCondition: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddCondition", function () {
      var newList2;

      if (_this.state.newCondition !== "") {
        if (_this.state.conditions[0] === "") newList2 = [_this.state.newCondition];else newList2 = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.conditions), [_this.state.newCondition]);

        _this.setState({
          conditions: newList2,
          newCondition: "",
          savedProfile: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDeleteCondition", function (index) {
      var newArray = _this.state.conditions;
      newArray.splice(index, 1);

      _this.setState({
        conditions: newArray,
        savedProfile: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFeatureChange", function (event) {
      _this.setState({
        newFeature: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddFeature", function () {
      var newList3;

      if (_this.state.newFeature !== "") {
        if (_this.state.features[0] === "") newList3 = [_this.state.newFeature];else newList3 = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.features), [_this.state.newFeature]);

        _this.setState({
          features: newList3,
          newFeature: "",
          savedProfile: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDeleteFeature", function (index) {
      var newArray = _this.state.features;
      newArray.splice(index, 1);

      _this.setState({
        features: newArray,
        savedProfile: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChangeImageIploadChange", function (event) {
      var file, img;

      var _URL = window.URL || window.webkitURL;

      img = new Image();

      var __this = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this);

      var filee = event.target.files[0];

      img.onload = function () {
        var max_size = 420;
        var w = img.width;
        var h = img.height;

        if (this.width / this.height < 4 / 3) {
          react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Image is not horizontal or almost squre");
        } else if (this.width / this.height > 3.5 / 2) {
          react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Image is Panorama and can not be accepted");
        } else {
          if (this.width / this.height < 1.35) {
            h = max_size / 1.35;
            w = max_size;
          } else if (this.width / this.height > 1.45) {
            h = max_size / 1.45;
            w = max_size;
          } else {
            h *= max_size / w;
            w = max_size;
          }

          if (w > 0) {
            var canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            canvas.getContext("2d").drawImage(img, 0, 0, w, h);
            var dataURL = canvas.toDataURL(filee.type, 1.0);
            document.getElementById("inp_img").value = dataURL;

            __this.API.uploadImage(document.getElementById("inp_img").value, __this.state.id).then(function (res) {
              if (res.message === "File Uploaded.") {
                react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Image uploading, You should save profile after it");

                __this.setState({
                  savedProfile: false
                });

                var url = new URL(res.path, process.env.REACT_APP_API_URL).href;
                console.log("url", url);
                console.log("res.path", res.path);
                console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
                var myurl = process.env.REACT_APP_API_URL + res.path;
                console.log("myurl", myurl);
                if (__this.state.imagesurl[0] === "") __this.setState(function (prevState) {
                  return {
                    imagesurl: [url]
                  };
                });else __this.setState(function (prevState) {
                  return {
                    imagesurl: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.imagesurl), [url])
                  };
                });

                __this.setState(__this.state.imagesurl);
              } else {
                react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].error("Unable to Upload This Image");
              }
            });
          }
        }
      };

      if (file = event.target.files[0]) {
        img.src = _URL.createObjectURL(file);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUploadClicked", function () {
      document.getElementById("selectImage").click();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUpdateCompany", function () {
      _this.formValidation();

      if (_this.state.validated === false) {
        react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].error("You Should Fill the Required Fields");

        _this.setState({
          toUpdateAlert: "Fill all required fields correctly."
        });
      } else if (_this.state.savedProfile === true) {
        react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("There is no change to be saved!");
      } else {
        if (_this.state.instagram.match("^www.")) {
          var url = _this.state.instagram;
          url = url.replace("www.", "http://www.");

          _this.setState({
            instagram: url
          });
        }

        if (_this.state.fb.match("^www.")) {
          var _url = _this.state.fb;
          _url = _url.replace("www.", "http://www.");

          _this.setState({
            fb: _url
          });
        }

        if (_this.state.website.match("^www.")) {
          var _url2 = _this.state.website;
          _url2 = _url2.replace("www.", "http://www.");

          _this.setState({
            website: _url2
          });
        }

        if (_this.state.vk.match("^www.")) {
          var _url3 = _this.state.vk;
          _url3 = _url3.replace("www.", "http://www.");

          _this.setState({
            vk: _url3
          });
        }

        _this.API.updateCompany(_this.state).then(function (res) {
          react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Your profile is updated");

          _this.setState({
            savedProfile: true
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddCompany", function () {
      _this.formValidation();

      if (_this.state.validated === false) {
        react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].error("You Should Fill the Required Fields");

        _this.setState({
          toUpdateAlert: "You need to fill all required fields, but some are not filled correctly."
        });
      } else {
        _this.API.addCompany(_this.state).then(function (res) {
          react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("You profile is created");

          _this.setState({
            savedProfile: true,
            newUser: false
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "generateKey", function (pre) {
      return "".concat(pre, "_").concat(new Date().getTime());
    });

    _this.state = {
      id: null,
      type: "1",
      company: "",
      schedule: "Ежедневно: c 10:00 до 22:00",
      category: "Beauty and Spas",
      description: "",
      address: "",
      phone: "",
      website: "",
      instagram: "",
      fb: "",
      vk: "",
      map: ["43.235", "76.916", "12"],
      conditions: ["Перед тем, как записаться на услугу, нужно обязательно сообщить нашему партнеру о том, что Вы обратились по акции.", "Вы можете приобрести неограниченное количество сертификатов по данной акции как для себя, так и в подарок.", "Сертификат распечатывать необязательно, достаточно сообщить его номер. "],
      features: [],
      masters: [],
      imagesurl: [],
      newCondition: "",
      newFeature: "",
      newMaster: "",
      newUser: false,
      validated: false,
      addNewService: false,
      validatedAlert: false,
      companyAlert: null,
      scheduleAlert: null,
      categoryAlert: null,
      descriptionAlert: null,
      addressAlert: null,
      phoneAlert: null,
      websiteAlert: null,
      instagramAlert: null,
      fbAlert: null,
      vkAlert: null,
      mapAlert: null,
      toUpdateAlert: null,
      savedProfile: true,
      removeService: false,
      cordination: ["43.235", "76.916", "12"]
    };
    _this.handleSignout = _this.handleSignout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDeleteMaster = _this.handleDeleteMaster.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDeleteCondition = _this.handleDeleteCondition.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDeleteFeature = _this.handleDeleteFeature.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleMasterChange = _this.handleMasterChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleConditionChange = _this.handleConditionChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFeatureChange = _this.handleFeatureChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddMaster = _this.handleAddMaster.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddCondition = _this.handleAddCondition.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddFeature = _this.handleAddFeature.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleUpdateCompany = _this.handleUpdateCompany.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddCompany = _this.handleAddCompany.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeAddress = _this.handleChangeAddress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeCategory = _this.handleChangeCategory.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeCompany = _this.handleChangeCompany.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeDescription = _this.handleChangeDescription.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeFacebook = _this.handleChangeFacebook.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeInstagram = _this.handleChangeInstagram.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeMap = _this.handleChangeMap.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangePhone = _this.handleChangePhone.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeSchedule = _this.handleChangeSchedule.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeVk = _this.handleChangeVk.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeWebsite = _this.handleChangeWebsite.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleUploadClicked = _this.handleUploadClicked.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleMap = _this.handleMap.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChangeImageIploadChange = _this.handleChangeImageIploadChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.formValidation = _this.formValidation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._handleKeyPress = _this._handleKeyPress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.API = new _API_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.initialState = _this.state;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Profile, [{
    key: "_handleKeyPress",
    value: function _handleKeyPress(e, field) {
      if (e.keyCode === 13) {
        if (field === "14") this.handleAddFeature();else if (field === "15") this.handleAddCondition();else if (field === "16") this.handleAddMaster();else {
          e.preventDefault(); // Prevent form submission if button present

          this.refs[Number(field) + 1].focus();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem("jwt"); //should validate

      if (!token) {
        this.props.history.replace("/");
      } else {
        var profile = this.API.getProfile();

        if (profile.type === "0") {
          this.props.history.replace("/User");
        } else {
          this.setState({
            email: profile.email,
            username: profile.username,
            id: profile.id
          });
          this.API.getCompanyInfo(profile.id).then(function (res) {
            //console.log('test',);
            if (res.message === "Company is not registed") {
              _this2.setState({
                newUser: true,
                savedProfile: false
              });
            } else {
              _this2.setState(res.data, function () {
                _this2.formValidation();
              });
            }
          } //???
          );
        }
      }

      var _loop = function _loop(x) {
        _this2.refs[x].onkeypress = function (e) {
          return _this2._handleKeyPress(e, x);
        };
      };

      for (var x in this.refs) {
        _loop(x);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "\u043F\u043E\u043D\u043F\u043E\u043D")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Acount and Profile ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/Service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          if (_this3.state.savedProfile === false || _this3.state.newUser) {
            e.preventDefault();
            react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Save your profile first");

            _this3.refs[100].focus();
          }

          if (_this3.state.imagesurl[0] === "") {
            e.preventDefault();
            react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("You should have at least one image to add service");
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), " ", "Services and Discounts")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/report",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          if (_this3.state.savedProfile === false) {
            e.preventDefault();
            react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Save your profile first");

            _this3.refs[100].focus();
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Reports and Messages"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "#Signout",
        className: "topright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleSignout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "\u0432\u044B\u0439\u0442\u0438 ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-signout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pcard",
        id: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 : "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "\u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: this.state.username,
        ref: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "\u042D\u043B. \u0430\u0434\u0440\u0435\u0441*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: this.state.email,
        onChange: this.handleChangeEmail,
        ref: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "\u0414\u0435\u043B\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F : "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: this.state.company,
        onChange: this.handleChangeCompany,
        ref: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, this.state.companyAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        id: "soflow",
        value: this.state.category,
        onChange: this.handleChangeCategory,
        ref: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Beauty and Spas"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Health and Fitness"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Fun and Leisure"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Gift and Flowers"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Food and Drink")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, this.state.categoryAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "\u0422\u0435\u043A\u0441\u0442 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: this.state.description,
        onChange: this.handleChangeDescription,
        ref: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, this.state.descriptionAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "\u0410\u0434\u0440\u0435\u0441*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "add",
        value: this.state.address,
        onChange: this.handleChangeAddress,
        placeholder: "Almaty, st. Pushkina, 75",
        ref: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, this.state.addressAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "sch",
        value: this.state.schedule,
        onChange: this.handleChangeSchedule,
        ref: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, this.state.scheduleAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "phone",
        value: this.state.phone,
        onChange: this.handleChangePhone,
        placeholder: "+7 (707) 4891081 , +7 (708) 3637267",
        ref: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, this.state.phoneAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "\u0441\u0430\u0439\u0442 \u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "web",
        value: this.state.website,
        onChange: this.handleChangeWebsite,
        ref: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.websiteAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "insta",
        value: this.state.instagram,
        onChange: this.handleChangeInstagram,
        ref: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, this.state.instagramAlert), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u043A "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        key: "vk",
        type: "text",
        value: this.state.vk,
        onChange: this.handleChangeVk,
        ref: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, this.state.vkAlert, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0424\u044D\u0439\u0441\u0431\u0443\u043A\u0435"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        key: "Facebook",
        type: "text",
        value: this.state.fb,
        onChange: this.handleChangeFacebook,
        ref: "13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "input-group-alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, this.state.fbAlert, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "\u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "Features",
        value: this.state.newFeature,
        onChange: this.handleFeatureChange,
        placeholder: "The procedure takes 60 minutes.",
        ref: "14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-buttin",
        onClick: function onClick() {
          _this3.handleAddFeature();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        key: "f",
        className: "rounded-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, this.state.features.map(function (item, index) {
        var _this4 = this;

        if (item !== "") return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          key: this.generateKey(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, item, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "deletebutton",
          key: item,
          onClick: function onClick() {
            _this4.handleDeleteFeature(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }, "\u0443\u0434\u0430\u043B\u044F\u0442\u044C"));else return null;
      }, this)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "\u0421\u0440\u043E\u043A\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, "\u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "conditions",
        value: this.state.newCondition,
        onChange: this.handleConditionChange,
        ref: "15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-buttin",
        onClick: this.handleAddCondition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "rounded-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, this.state.conditions.map(function (item, index) {
        var _this5 = this;

        if (item !== "") return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, item, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "deletebutton",
          key: item,
          onClick: function onClick() {
            _this5.handleDeleteCondition(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, "\u0443\u0434\u0430\u043B\u044F\u0442\u044C"));else return null;
      }, this)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0438 \u041C\u0430\u0441\u0442\u0435\u0440\u0430 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "\u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        key: "masters",
        value: this.state.newMaster,
        onChange: this.handleMasterChange,
        placeholder: "Regan : 7 years of experiences.",
        ref: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-buttin",
        onClick: this.handleAddMaster,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "rounded-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, this.state.masters.map(function (item, index) {
        var _this6 = this;

        if (item !== "") return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          },
          __self: this
        }, item, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "deletebutton",
          key: item,
          onClick: function onClick() {
            _this6.handleDeleteMaster(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }, "\u0443\u0434\u0430\u043B\u044F\u0442\u044C"));else return "";
      }, this)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "inputfile",
        id: "selectImage",
        onChange: this.handleChangeImageIploadChange,
        type: "file",
        name: "pic",
        accept: "image/*",
        placeholder: "Click to Add Profile Image or Update It",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "inp_img",
        name: "img",
        type: "hidden",
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "imageHint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, "Horizontal Image (Ratio 4*3 to 3*2)", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }), "No Panorama and Squere Images")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-buttin",
        onClick: this.handleUploadClicked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, this.state.imagesurl.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "img-wrap",
          key: item.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 545
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546
          },
          __self: this
        }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          key: item.toString(),
          className: "profileImage",
          src: item,
          alt: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        }));
      }, this))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 :"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, "\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0448\u0442\u0438\u0444\u0442\u043E\u0432"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        key: "map",
        value: this.state.map,
        onChange: this.handleChangeMap,
        ref: "10",
        type: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "imageHint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, "Find Location of Business on map", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }), "You can move it to find location", " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-group-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__["YMaps"], {
        onClick: this.handleMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__["Map"], {
        defaultState: {
          center: this.state.map,
          zoom: this.state.map[2]
        },
        onChange: this.handleMap,
        onClick: this.handleMap,
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__["ZoomControl"], {
        options: {
          size: "small",
          zoomDuration: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_13__["Placemark"], {
        geometry: this.state.map,
        options: {
          preset: "islands#blueDotIcon",
          iconColor: "#bb1919"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C:"), this.state.newUser ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "button",
        ref: "100",
        onClick: function onClick() {
          _this3.handleAddCompany();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }, "\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "button",
        ref: "100",
        onClick: function onClick() {
          _this3.handleUpdateCompany();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        },
        __self: this
      }, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_menu_Footer_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      })));
    }
  }, {
    key: "handleSignout",
    value: function handleSignout() {
      localStorage.removeItem("jwt");
      this.props.history.replace("/");
    }
  }, {
    key: "handleChangeCompany",
    value: function handleChangeCompany(event) {
      var _this7 = this;

      if (event.target.value.length < 2) react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Provide a full name include company type");
      this.setState({
        company: event.target.value,
        savedProfile: false
      }, function () {
        return _this7.formValidation();
      });
    }
  }, {
    key: "handleChangeDescription",
    value: function handleChangeDescription(event) {
      var _this8 = this;

      if (event.target.value.length < 2) react_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationManager"].info("Describe company includeing type of services that it provides");
      this.setState({
        description: event.target.value,
        savedProfile: false
      }, function () {
        return _this8.formValidation();
      });
    }
  }, {
    key: "handleChangeCategory",
    value: function handleChangeCategory(event) {
      var _this9 = this;

      this.setState({
        category: event.target.value,
        savedProfile: false
      }, function () {
        return _this9.formValidation();
      });
    }
  }, {
    key: "handleChangeAddress",
    value: function handleChangeAddress(event) {
      var _this10 = this;

      this.setState({
        address: event.target.value,
        savedProfile: false
      }, function () {
        return _this10.formValidation();
      });
    }
  }, {
    key: "handleChangeSchedule",
    value: function handleChangeSchedule(event) {
      var _this11 = this;

      this.setState({
        schedule: event.target.value,
        savedProfile: false
      }, function () {
        return _this11.formValidation();
      });
    }
  }, {
    key: "handleChangePhone",
    value: function handleChangePhone(event) {
      var _this12 = this;

      this.setState({
        phone: event.target.value,
        savedProfile: false
      }, function () {
        return _this12.formValidation();
      });
    }
  }, {
    key: "handleChangeWebsite",
    value: function handleChangeWebsite(event) {
      var _this13 = this;

      this.setState({
        website: event.target.value,
        savedProfile: false
      }, function () {
        return _this13.formValidation();
      });
    }
  }, {
    key: "handleChangeInstagram",
    value: function handleChangeInstagram(event) {
      var _this14 = this;

      this.setState({
        instagram: event.target.value,
        savedProfile: false
      }, function () {
        return _this14.formValidation();
      });
    }
  }, {
    key: "handleChangeFacebook",
    value: function handleChangeFacebook(event) {
      var _this15 = this;

      this.setState({
        fb: event.target.value,
        savedProfile: false
      }, function () {
        return _this15.formValidation();
      });
    }
  }, {
    key: "handleChangeVk",
    value: function handleChangeVk(event) {
      var _this16 = this;

      this.setState({
        vk: event.target.value,
        savedProfile: false
      }, function () {
        return _this16.formValidation();
      });
    }
  }, {
    key: "handleChangeMap",
    value: function handleChangeMap(event) {// alert("a");
      // this.setState({ map: event.target.value, savedProfile: false }, () =>
      //   this.formValidation()
      // );
    }
  }, {
    key: "handleMap",
    value: function handleMap(e) {
      var coords = e.get("coords");
      var target = e.get("target");
      var c = [];
      c.push(coords[0].toString());
      c.push(coords[1].toString());
      c.push(target._zoom.toString());
      this.setState({
        cordination: c,
        map: c,
        savedProfile: false
      });
    }
  }, {
    key: "formValidation",
    value: function formValidation() {
      this.setState({
        validated: true,
        toUpdateAlert: null
      });

      if (this.state.company.length < 2) {
        this.setState({
          companyAlert: "Please Provide Full Name of Company",
          validated: false
        });
      } else if (this.state.company.length < 10) {
        this.setState({
          companyAlert: "The bussiness name is too short",
          validated: false
        });
      } else {
        this.setState({
          companyAlert: null
        });
      }

      if (this.state.schedule === "") {
        this.setState({
          scheduleAlert: "Provide Working Days and Hours",
          validated: false
        });
      } else if (this.state.description.schedule < 10) {
        this.setState({
          descriptionAlert: "Too short, for schedule",
          validated: false
        });
      } else {
        this.setState({
          scheduleAlert: ""
        });
      }

      if (this.state.category === "") {
        this.setState({
          categoryAlert: "Select the Category",
          validated: false
        });
      } else {
        this.setState({
          categoryAlert: null
        });
      }

      if (this.state.description === "") {
        this.setState({
          descriptionAlert: "Provide Description of Your Company",
          validated: false
        });
      } else if (this.state.description.length < 30) {
        this.setState({
          descriptionAlert: "Description is too short, describe more",
          validated: false
        });
      } else {
        this.setState({
          descriptionAlert: null
        });
      }

      if (this.state.address === "") {
        this.setState({
          addressAlert: "Provide The Company Address",
          validated: false
        });
      } else if (this.state.company.address < 8) {
        this.setState({
          companyAlert: "The address  is too short",
          validated: false
        });
      } else {
        this.setState({
          addressAlert: null
        });
      }

      if (this.state.phone.length < 7) {
        this.setState({
          phoneAlert: "Provide valid phone number",
          validated: false
        });
      } else {
        this.setState({
          phoneAlert: null
        });
      }

      var expression = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      var regex = new RegExp(expression);

      if (!regex.test(this.state.website) && this.state.website) {
        this.setState({
          websiteAlert: "This is not a valid WebSite Address",
          validated: false
        });
      } else this.setState({
        websiteAlert: null
      });

      if (!regex.test(this.state.vk) && this.state.vk) this.setState({
        vkAlert: "This is not a valid link to VK",
        validated: false
      });else this.setState({
        vkAlert: null
      });

      if (!regex.test(this.state.fb) && this.state.fb) {
        this.setState({
          fbAlert: "This is not a valid link to Facebook",
          validated: false
        });
      } else this.setState({
        fbAlert: null
      });

      if (!regex.test(this.state.instagram) && this.state.instagram) {
        this.setState({
          instagramAlert: "This is not a valid link to Instagram",
          validated: false
        });
      } else this.setState({
        instagramAlert: null
      });
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=profile.js.dffd71714c0bcf4ce201.hot-update.js.map