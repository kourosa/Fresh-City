import React, { Component } from "react";
import API from "../../Service/API";
import { Link } from "react-router-dom";
import Footer from "../Menu/Footer";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
//import "react-notifications/lib/notifications.css";

//import "../../profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      conditions: [
        "Перед тем, как записаться на услугу, нужно обязательно сообщить нашему партнеру о том, что Вы обратились по акции.",
        "Вы можете приобрести неограниченное количество сертификатов по данной акции как для себя, так и в подарок.",
        "Сертификат распечатывать необязательно, достаточно сообщить его номер. "
      ],
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

    this.handleSignout = this.handleSignout.bind(this);
    this.handleDeleteMaster = this.handleDeleteMaster.bind(this);
    this.handleDeleteCondition = this.handleDeleteCondition.bind(this);
    this.handleDeleteFeature = this.handleDeleteFeature.bind(this);
    this.handleMasterChange = this.handleMasterChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleFeatureChange = this.handleFeatureChange.bind(this);
    this.handleAddMaster = this.handleAddMaster.bind(this);
    this.handleAddCondition = this.handleAddCondition.bind(this);
    this.handleAddFeature = this.handleAddFeature.bind(this);
    this.handleUpdateCompany = this.handleUpdateCompany.bind(this);
    this.handleAddCompany = this.handleAddCompany.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeFacebook = this.handleChangeFacebook.bind(this);
    this.handleChangeInstagram = this.handleChangeInstagram.bind(this);
    this.handleChangeMap = this.handleChangeMap.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeSchedule = this.handleChangeSchedule.bind(this);
    this.handleChangeVk = this.handleChangeVk.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
    this.handleUploadClicked = this.handleUploadClicked.bind(this);
    this.handleMap = this.handleMap.bind(this);

    this.handleChangeImageIploadChange = this.handleChangeImageIploadChange.bind(
      this
    );

    this.formValidation = this.formValidation.bind(this);

    this._handleKeyPress = this._handleKeyPress.bind(this);

    this.API = new API();
    this.initialState = this.state;
    this.formData = new FormData();
  }

  _handleKeyPress(e, field) {
    if (e.keyCode === 13) {
      if (field === "14") this.handleAddFeature();
      else if (field === "15") this.handleAddCondition();
      else if (field === "16") this.handleAddMaster();
      else {
        e.preventDefault(); // Prevent form submission if button present
        this.refs[Number(field) + 1].focus();
      }
    }
  }

  componentDidMount() {
    let token = localStorage.getItem("jwt");
    //should validate
    if (!token) {
      this.props.history.replace("/");
    } else {
      let profile = this.API.getProfile();
      if (profile.type === "0") {
        this.props.history.replace("/User");
      } else {
        this.setState({
          email: profile.email,
          username: profile.username,
          id: profile.id
        });
        this.API.getCompanyInfo(profile.id).then(
          res => {
            //console.log('test',);
            if (res.message === "Company is not registed") {
              this.setState({ newUser: true, savedProfile: false });
            } else {
              this.setState(res.data, () => {
                this.formValidation();
              });
            }
          }
          //???
        );
      }
    }

    for (let x in this.refs) {
      this.refs[x].onkeypress = e => this._handleKeyPress(e, x);
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <Link to="/" className="active">
            понпон
          </Link>
          <Link to="/profile">Acount and Profile </Link>
          <Link
            to="/Service"
            onClick={e => {
              if (this.state.savedProfile === false || this.state.newUser) {
                e.preventDefault();
                NotificationManager.info("Save your profile first");
                this.refs[100].focus();
              }
              if (this.state.imagesurl[0] === "") {
                e.preventDefault();
                NotificationManager.info(
                  "You should have at least one image to add service"
                );
              }
            }}
          >
            Services and Discounts
          </Link>
          <Link
            to="/report"
            onClick={e => {
              if (this.state.savedProfile === false) {
                e.preventDefault();
                NotificationManager.info("Save your profile first");
                this.refs[100].focus();
              }
            }}
          >
            Reports and Messages
          </Link>
          <Link to="#Signout" className="topright" onClick={this.handleSignout}>
            выйти <i className="icon-signout" />
          </Link>
        </div>

        <div className="content">
          <div className="pcard" id="profile">
            <div className="container">
              <h3>Информация об учетной записи : </h3>
              <div className="input-group">
                <div className="input-group-title">имя пользователя*</div>
                <div className="input-group-area">
                  <input type="text" value={this.state.username} ref={"1"} />
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-title">Эл. адрес*</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    ref={"2"}
                  />
                </div>
              </div>

              <h3>Деловая информация : </h3>
              <div className="input-group">
                <div className="input-group-title">Название компании*</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    value={this.state.company}
                    onChange={this.handleChangeCompany}
                    ref={"3"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.companyAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">категория*</div>
                <div>
                  <select
                    id="soflow"
                    value={this.state.category}
                    onChange={this.handleChangeCategory}
                    ref={"4"}
                  >
                    <option>Beauty and Spas</option>
                    <option disabled>Health and Fitness</option>
                    <option disabled>Fun and Leisure</option>
                    <option disabled>Gift and Flowers</option>
                    <option disabled>Food and Drink</option>
                  </select>
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.categoryAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">Текст о компании</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                    ref={"5"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.descriptionAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">Адрес*</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key={"add"}
                    value={this.state.address}
                    onChange={this.handleChangeAddress}
                    placeholder="Almaty, st. Pushkina, 75"
                    ref={"6"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.addressAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">График работы*</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key={"sch"}
                    value={this.state.schedule}
                    onChange={this.handleChangeSchedule}
                    ref={"7"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.scheduleAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">Телефоны*</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key={"phone"}
                    value={this.state.phone}
                    onChange={this.handleChangePhone}
                    placeholder="+7 (707) 4891081 , +7 (708) 3637267"
                    ref={"8"}
                  />
                </div>
              </div>
              <span className="input-group-alert">{this.state.phoneAlert}</span>

              <h3>сайт и социальных сетях :</h3>
              <div className="input-group">
                <div className="input-group-title">Ссылка на сайт</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key={"web"}
                    value={this.state.website}
                    onChange={this.handleChangeWebsite}
                    ref={"9"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.websiteAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">Ссылка на Инстаграм</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key={"insta"}
                    value={this.state.instagram}
                    onChange={this.handleChangeInstagram}
                    ref={"11"}
                  />
                </div>
              </div>
              <span className="input-group-alert">
                {this.state.instagramAlert}
              </span>

              <div className="input-group">
                <div className="input-group-title">Ссылка на вк </div>
                <div className="input-group-area">
                  <input
                    key={"vk"}
                    type="text"
                    value={this.state.vk}
                    onChange={this.handleChangeVk}
                    ref={"12"}
                  />
                </div>
              </div>
              <span className="input-group-alert">{this.state.vkAlert} </span>

              <div className="input-group">
                <div className="input-group-title">Ссылка на Фэйсбуке</div>
                <div className="input-group-area">
                  <input
                    key={"Facebook"}
                    type="text"
                    value={this.state.fb}
                    onChange={this.handleChangeFacebook}
                    ref={"13"}
                  />
                </div>
              </div>
              <span className="input-group-alert">{this.state.fbAlert} </span>
            </div>

            <div className="container">
              <h3>Описание и Особенности :</h3>
              <div className="input-group">
                <div className="input-group-title">новый предмет :</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key="Features"
                    value={this.state.newFeature}
                    onChange={this.handleFeatureChange}
                    placeholder="The procedure takes 60 minutes."
                    ref={"14"}
                  />
                </div>
                <div
                  className="input-group-buttin"
                  onClick={() => {
                    this.handleAddFeature();
                  }}
                >
                  добавить
                </div>
              </div>
              <div key="f" className="rounded-list">
                {this.state.features.map(function(item, index) {
                  if (item !== "")
                    return (
                      <span key={this.generateKey(index)}>
                        {item}
                        <button
                          className="deletebutton"
                          key={item}
                          onClick={() => {
                            this.handleDeleteFeature(index);
                          }}
                        >
                          удалять
                        </button>
                      </span>
                    );
                  else return null;
                }, this)}
              </div>
              <h3>Сроки и условия :</h3>
              <div className="input-group">
                <div className="input-group-title">новый предмет :</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key="conditions"
                    value={this.state.newCondition}
                    onChange={this.handleConditionChange}
                    ref={"15"}
                  />
                </div>
                <div
                  className="input-group-buttin"
                  onClick={this.handleAddCondition}
                >
                  добавить
                </div>
              </div>
              <div className="rounded-list">
                {this.state.conditions.map(function(item, index) {
                  if (item !== "")
                    return (
                      <span key={index}>
                        {item}
                        <button
                          className="deletebutton"
                          key={item}
                          onClick={() => {
                            this.handleDeleteCondition(index);
                          }}
                        >
                          удалять
                        </button>
                      </span>
                    );
                  else return null;
                }, this)}
              </div>
              <h3>Персонал и Мастера :</h3>
              <div className="input-group">
                <div className="input-group-title">новый предмет :</div>
                <div className="input-group-area">
                  <input
                    type="text"
                    key="masters"
                    value={this.state.newMaster}
                    onChange={this.handleMasterChange}
                    placeholder="Regan : 7 years of experiences."
                    ref={"16"}
                  />
                </div>
                <div
                  className="input-group-buttin"
                  onClick={this.handleAddMaster}
                >
                  добавить
                </div>
              </div>
              <div className="rounded-list">
                {this.state.masters.map(function(item, index) {
                  if (item !== "")
                    return (
                      <span key={index}>
                        {item}
                        <button
                          className="deletebutton"
                          key={item}
                          onClick={() => {
                            this.handleDeleteMaster(index);
                          }}
                        >
                          удалять
                        </button>
                      </span>
                    );
                  else return "";
                }, this)}
              </div>

              <h3>Изображения профиля :</h3>
              <div className="input-group">
                <div className="input-group-title">Загрузить изображения</div>
                <div className="input-group-area">
                  <input
                    className="inputfile"
                    id="selectImage"
                    onChange={this.handleChangeImageIploadChange}
                    type="file"
                    name="pic"
                    accept="image/*"
                    placeholder="Click to Add Profile Image or Update It"
                  />
                  <input id="inp_img" name="img" type="hidden" value="" />

                  <p className="imageHint">
                    Horizontal Image (Ratio 4*3 to 3*2)
                    <br />
                    No Panorama and Squere Images
                  </p>
                </div>
                <div
                  className="input-group-buttin"
                  onClick={this.handleUploadClicked}
                >
                  добавить
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-area">
                  {this.state.imagesurl.map((item, index) => {
                    return (
                      <span className="img-wrap" key={item.toString()}>
                        <span className="delete">&times;</span>
                        <img
                          key={item.toString()}
                          className="profileImage"
                          src={item}
                          alt={item}
                        />
                      </span>
                    );
                  }, this)}
                </div>
              </div>

              <h3>Расположение компании на карте :</h3>

              <div className="input-group">
                <div className="input-group-title">расположение штифтов</div>
                <div className="input-group-area">
                  <input
                    key={"map"}
                    value={this.state.map}
                    onChange={this.handleChangeMap}
                    ref={"10"}
                    type="hidden"
                  />
                  <p className="imageHint">
                    Find Location of Business on map
                    <br />
                    You can move it to find location{" "}
                  </p>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-area">
                  <YMaps onClick={this.handleMap}>
                    <Map
                      defaultState={{
                        center: this.state.map,
                        zoom: this.state.map[2]
                      }}
                      onChange={this.handleMap}
                      onClick={this.handleMap}
                      width="100%"
                    >
                      <ZoomControl
                        options={{
                          size: "small",
                          zoomDuration: 1000
                        }}
                      />
                      <Placemark
                        geometry={this.state.map}
                        options={{
                          preset: "islands#blueDotIcon",
                          iconColor: "#bb1919"
                        }}
                      />
                    </Map>
                  </YMaps>
                </div>
              </div>

              <h3>Сохранить и обновить профиль:</h3>
              {this.state.newUser ? (
                <button
                  type="button"
                  className="button"
                  ref={"100"}
                  onClick={() => {
                    this.handleAddCompany();
                  }}
                >
                  создать профиль
                </button>
              ) : (
                <button
                  type="button"
                  className="button"
                  ref={"100"}
                  onClick={() => {
                    this.handleUpdateCompany();
                  }}
                >
                  сохранить профиль
                </button>
              )}
            </div>
          </div>
          <NotificationContainer />

          <Footer />
        </div>
      </div>
    );
  }

  handleMasterChange = event => {
    this.setState({ newMaster: event.target.value });
  };
  handleAddMaster = () => {
    var newList;
    if (this.state.newMaster !== "") {
      if (this.state.masters[0] === "") newList = [this.state.newMaster];
      else newList = [...this.state.masters, this.state.newMaster];
      this.setState({ masters: newList, newMaster: "", savedProfile: false });
    }
  };
  handleDeleteMaster = index => {
    let newArray = this.state.masters;
    newArray.splice(index, 1);
    this.setState({ masters: newArray, savedProfile: false });
  };

  handleConditionChange = event => {
    this.setState({ newCondition: event.target.value });
  };
  handleAddCondition = () => {
    var newList2;
    if (this.state.newCondition !== "") {
      if (this.state.conditions[0] === "") newList2 = [this.state.newCondition];
      else newList2 = [...this.state.conditions, this.state.newCondition];
      this.setState({
        conditions: newList2,
        newCondition: "",
        savedProfile: false
      });
    }
  };
  handleDeleteCondition = index => {
    let newArray = this.state.conditions;
    newArray.splice(index, 1);
    this.setState({ conditions: newArray, savedProfile: false });
  };

  handleFeatureChange = event => {
    this.setState({ newFeature: event.target.value });
  };
  handleAddFeature = () => {
    var newList3;
    if (this.state.newFeature !== "") {
      if (this.state.features[0] === "") newList3 = [this.state.newFeature];
      else newList3 = [...this.state.features, this.state.newFeature];
      this.setState({
        features: newList3,
        newFeature: "",
        savedProfile: false
      });
    }
  };
  handleDeleteFeature = index => {
    let newArray = this.state.features;
    newArray.splice(index, 1);
    this.setState({ features: newArray, savedProfile: false });
  };

  handleSignout() {
    localStorage.removeItem("jwt");
    this.props.history.replace("/");
  }

  handleChangeCompany(event) {
    if (event.target.value.length < 2)
      NotificationManager.info("Provide a full name include company type");
    this.setState({ company: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeDescription(event) {
    if (event.target.value.length < 2)
      NotificationManager.info(
        "Describe company includeing type of services that it provides"
      );
    this.setState(
      { description: event.target.value, savedProfile: false },
      () => this.formValidation()
    );
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeSchedule(event) {
    this.setState({ schedule: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeWebsite(event) {
    this.setState({ website: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeInstagram(event) {
    this.setState({ instagram: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeFacebook(event) {
    this.setState({ fb: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeVk(event) {
    this.setState({ vk: event.target.value, savedProfile: false }, () =>
      this.formValidation()
    );
  }

  handleChangeMap(event) {
    // alert("a");
    // this.setState({ map: event.target.value, savedProfile: false }, () =>
    //   this.formValidation()
    // );
  }

  handleChangeImageIploadChange = event => {
    var file, img;
    var _URL = window.URL || window.webkitURL;
    img = new Image();
    let __this = this;
    let filee = event.target.files[0];
    img.onload = function() {
      var max_size = 420;
      var w = img.width;
      var h = img.height;

      if (this.width / this.height < 4 / 3) {
        NotificationManager.info("Image is not horizontal or almost squre");
      } else if (this.width / this.height > 3.5 / 2) {
        NotificationManager.info("Image is Panorama and can not be accepted");
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
          __this.API.uploadImage(
            document.getElementById("inp_img").value,
            __this.state.id
          ).then(res => {
            if (res.message === "File Uploaded.") {
              NotificationManager.info(
                "Image uploading, You should save profile after it"
              );
              __this.setState({
                savedProfile: false
              });

              let url = new URL(res.path, process.env.REACT_APP_API_URL).href;
              console.log("url", url);
              console.log("res.path", res.path);
              console.log(
                "process.env.REACT_APP_API_URL",
                process.env.REACT_APP_API_URL
              );
              let myurl = process.env.REACT_APP_API_URL + res.path;
              console.log("myurl", myurl);

              if (__this.state.imagesurl[0] === "")
                __this.setState(prevState => ({
                  imagesurl: [url]
                }));
              else
                __this.setState(prevState => ({
                  imagesurl: [...prevState.imagesurl, url]
                }));
              __this.setState(__this.state.imagesurl);
            } else {
              NotificationManager.error("Unable to Upload This Image");
            }
          });
        }
      }
    };
    if ((file = event.target.files[0])) {
      img.src = _URL.createObjectURL(file);
    }
  };

  handleUploadClicked = () => {
    document.getElementById("selectImage").click();
  };

  handleMap(e) {
    var coords = e.get("coords");
    var target = e.get("target");
    let c = [];
    c.push(coords[0].toString());
    c.push(coords[1].toString());
    c.push(target._zoom.toString());
    this.setState({ cordination: c, map: c, savedProfile: false });
  }

  handleUpdateCompany = () => {
    this.formValidation();
    if (this.state.validated === false) {
      NotificationManager.error("You Should Fill the Required Fields");
      this.setState({
        toUpdateAlert: "Fill all required fields correctly."
      });
    } else if (this.state.savedProfile === true) {
      NotificationManager.info("There is no change to be saved!");
    } else {
      if (this.state.instagram.match("^www.")) {
        let url = this.state.instagram;
        url = url.replace("www.", "http://www.");
        this.setState({ instagram: url });
      }
      if (this.state.fb.match("^www.")) {
        let url = this.state.fb;
        url = url.replace("www.", "http://www.");
        this.setState({ fb: url });
      }
      if (this.state.website.match("^www.")) {
        let url = this.state.website;
        url = url.replace("www.", "http://www.");
        this.setState({ website: url });
      }
      if (this.state.vk.match("^www.")) {
        let url = this.state.vk;
        url = url.replace("www.", "http://www.");
        this.setState({ vk: url });
      }

      this.API.updateCompany(this.state).then(res => {
        NotificationManager.info("Your profile is updated");
        this.setState({ savedProfile: true });
      });
    }
  };

  handleAddCompany = () => {
    this.formValidation();
    if (this.state.validated === false) {
      NotificationManager.error("You Should Fill the Required Fields");
      this.setState({
        toUpdateAlert:
          "You need to fill all required fields, but some are not filled correctly."
      });
    } else {
      this.API.addCompany(this.state).then(res => {
        NotificationManager.info("You profile is created");
        this.setState({ savedProfile: true, newUser: false });
      });
    }
  };

  formValidation() {
    this.setState({ validated: true, toUpdateAlert: null });

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
      this.setState({ companyAlert: null });
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
      this.setState({ scheduleAlert: "" });
    }
    if (this.state.category === "") {
      this.setState({ categoryAlert: "Select the Category", validated: false });
    } else {
      this.setState({ categoryAlert: null });
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
      this.setState({ descriptionAlert: null });
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
      this.setState({ addressAlert: null });
    }
    if (this.state.phone.length < 7) {
      this.setState({
        phoneAlert: "Provide valid phone number",
        validated: false
      });
    } else {
      this.setState({ phoneAlert: null });
    }
    var expression = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    var regex = new RegExp(expression);

    if (!regex.test(this.state.website) && this.state.website) {
      this.setState({
        websiteAlert: "This is not a valid WebSite Address",
        validated: false
      });
    } else this.setState({ websiteAlert: null });

    if (!regex.test(this.state.vk) && this.state.vk)
      this.setState({
        vkAlert: "This is not a valid link to VK",
        validated: false
      });
    else this.setState({ vkAlert: null });

    if (!regex.test(this.state.fb) && this.state.fb) {
      this.setState({
        fbAlert: "This is not a valid link to Facebook",
        validated: false
      });
    } else this.setState({ fbAlert: null });

    if (!regex.test(this.state.instagram) && this.state.instagram) {
      this.setState({
        instagramAlert: "This is not a valid link to Instagram",
        validated: false
      });
    } else this.setState({ instagramAlert: null });
  }

  generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };
}

export default Profile;
