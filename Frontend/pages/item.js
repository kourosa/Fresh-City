import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "../components/menu/Menu.jsx";
import Comment from "../components/Itempage/Comment.jsx";
import Footer from "../components/menu/Footer.jsx";
import axios from "axios";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import API from "../API.js";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        conditions: [],
        features: [],
        masters: [],
        imagesurl: "",
        map: ["43.235", "76.916", "12"]
      },
      items: []
    };
    this.handleBuyClick = this.handleBuyClick.bind(this);
    this.API = new API();
  }

  static async getInitialProps({ query }) {
    let body = JSON.stringify({
      id: query.company
    });
    const res = await axios.post(
      "http://localhost/Backend/API/getcompanyinfo.php",
      body
    );
    body = JSON.stringify({
      companyid: query.company
    });
    const res2 = await axios.post(
      "http://localhost/Backend/API/getcompanyitems.php",
      body
    );
    return { itemData: res.data, services: res2.data.items };
  }

  componentDidMount() {
    let profile = this.API.getProfile();
    this.setState({ profile });
  }

  render() {
    var ItemData = this.props.itemData;
    var ServicesData = this.props.services;

    return (
      <div>
        <Head>
          <title>{ItemData.company}</title>
        </Head>
        <Menu />
        <div className="itemcontainer">
          <div className="col-12 col-s-12">
            <div className="itemcard">
              <h1> {ItemData.company} </h1>
              <h2>
                <i className="descrip icon-tags"> </i>
                {ItemData.description}
              </h2>
              <div className="simplep">
                <p> {ItemData.address}</p>
              </div>
            </div>
          </div>
          {ItemData.imagesurl !== "" ? (
            <div className="col-7 col-s-7">
              <div className="carouselCard">
                <Carousel showIndicators={false}>
                  {ItemData.imagesurl.map(function(item) {
                    return (
                      <div key={item}>
                        <img src={item} alt={item} key={item} />
                      </div>
                    );
                  }, this)}
                </Carousel>
              </div>
            </div>
          ) : null}

          <div className="col-5-sticky">
            <div className="discountcard">
              <h3>Сертификаты на скидку</h3>
              <p className="icon-clock"> Осталось немного времени!</p>
              <div className="grouplist">
                <ul key={"discount"}>
                  {ServicesData.map(function(item, index) {
                    return (
                      <li key={this.generateKey(index)}>
                        <p className="discountP">{item.description}</p>
                        <div>
                          <span className="discount">
                            {Math.floor(
                              ((item.price - item.dprice) / item.price) * 100
                            )}
                            %
                          </span>
                          <span className="price">
                            {item.price} <span className="icon-tenge " />
                          </span>
                          <span className="dprice">
                            {item.dprice}
                            <i className="icon-tenge" />
                          </span>
                        </div>
                        <button
                          type="button"
                          className="discountbutton"
                          onClick={() => {
                            this.handleBuyClick(item);
                          }}
                        >
                          Купить
                        </button>
                      </li>
                    );
                  }, this)}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-7 col-s-7">
            {ItemData.features[0] !== "" ? (
              <div className="itemcard">
                <h3>Описание и Особенности</h3>
                <div className="rounded-list">
                  {ItemData.features.map(i => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ) : null}

            {ItemData.conditions[0] !== "" ? (
              <div className="itemcard">
                <h3>Сроки и условия</h3>
                <div className="rounded-list-conditions">
                  {ItemData.conditions.map(i => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ) : null}

            {ItemData.masters[0] !== "" ? (
              <div className="itemcard">
                <h3>Наши Персонал и Мастера</h3>
                <div className="rounded-list-staff">
                  {ItemData.masters.map(i => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="itemcard">
              <h3>Больше о {ItemData.company}</h3>
              <div className="grouplist">
                <ul>
                  <li>
                    <i className="icon-address"> </i>
                    Адрес : {ItemData.address}
                  </li>
                  <li>
                    <i className="icon-phone" />
                    Телефоны : {ItemData.phone}
                  </li>
                  <li>
                    <i className="icon-clock"> </i>
                    График работы : {ItemData.schedule}
                  </li>

                  {ItemData.instagram ? (
                    <li>
                      <i className="icon-instagram" />
                      <a href={ItemData.instagram}>
                        {ItemData.company} Instagram Page
                      </a>
                    </li>
                  ) : null}
                  {ItemData.vk ? (
                    <li>
                      <i className="icon-vk" />
                      <a href={ItemData.vk}> {ItemData.company} VK Page</a>
                    </li>
                  ) : null}
                  {ItemData.fb ? (
                    <li>
                      <i className="icon-facebook" />
                      <a href={ItemData.fb}>{ItemData.company} Facebook Page</a>
                    </li>
                  ) : null}
                  {ItemData.website ? (
                    <li>
                      <i className="icon-code" />
                      <a href={ItemData.website}>{ItemData.company} Website</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>

            <div className="itemcard">
              <YMaps>
                <Map
                  defaultState={{
                    center: ItemData.map,
                    zoom: ItemData.map[2]
                  }}
                  width="100%"
                >
                  <ZoomControl
                    options={{
                      size: "small",
                      zoomDuration: 1000
                    }}
                  />
                  <Placemark
                    geometry={ItemData.map}
                    options={{
                      preset: "islands#blueDotIcon",
                      iconColor: "#bb1919"
                    }}
                  />
                </Map>
              </YMaps>
            </div>

            <div className="itemcard">
              <h3>Отзывы</h3>
              <Comment
                companyid={ItemData.id}
                userprofile={this.state.profile}
              />
            </div>
          </div>
          <div className="forsticky" />
        </div>
        <NotificationContainer />

        <Footer />
      </div>
    );
  }

  handleBuyClick = item => {
    let token = localStorage.getItem("jwt");
    //should validate
    if (!token) {
      NotificationManager.info("Login to your acount to buy!");
    } else {
      if (this.state.profile.type === "0") {
        let couponData = {};
        couponData.companyid = this.props.itemData.id;
        couponData.itemid = item.itemid;
        couponData.userid = this.state.profile.id;
        this.API.addCoupon(couponData).then(res => {
          if (res.message === "coupon saved") {
            NotificationManager.info(
              "You got the coupon, Check you account for detail! couponNumber"
            );
          } else console.log("add item api responce:", res);
        });
      } else {
        NotificationManager.info("Sign in with a client account");
      }
    }
  };

  generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };
}

export default Item;
