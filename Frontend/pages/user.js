import React, { Component } from "react";
import Menu from "../components/menu/Menu.jsx";
import Footer from "../components/menu/Footer.jsx";
import API from "../API.js";
import Router from "next/router";
import "../style.css";
import "../profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coupons: [],
      messages: [],
      menuState: "coupons"
    };

    this.handleSignout = this.handleSignout.bind(this);
    this.couponNumber = this.couponNumber.bind(this);
    this.API = new API();
  }

  componentDidMount() {
    let token = localStorage.getItem("jwt");
    //should validate
    if (!token) {
      this.props.history.replace("/");
    } else {
      let profile = this.API.getProfile();
      this.API.getUserCoupons(profile.id).then(res => {
        //            console.log('coupons', res);

        if (res.data.message === "Successful Responce.")
          this.setState({ coupons: res.data.items }, () => {
            //                  console.log('coupons', this.state)
          });
      });
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <a className="active" href="/">
            понпон
          </a>
          <a
            href="#p"
            onClick={() => {
              this.setState({ menuState: "coupons" });
            }}
          >
            Coupons{" "}
          </a>
          <a
            href="#d"
            onClick={() => {
              this.setState({ menuState: "messages" });
            }}
          >
            Messages{" "}
          </a>
          <a onClick={this.handleSignout} href="#Update">
            Sign Out
          </a>
        </div>

        <div className="content">
          {this.state.menuState === "coupons" ? (
            <div className="pcard">
              <div className="card-header">Your Certificates</div>

              <div className="container" id="guide">
                <div className="grouplist">
                  <ul>
                    {this.state.coupons.map(function(item, index) {
                      return (
                        <li key={index}>
                          <h3>
                            Certificate No. :{" "}
                            {this.couponNumber(
                              item.userid,
                              item.itemid,
                              item.expiry
                            )}
                          </h3>
                          <p>
                            <span>
                              {" "}
                              <strong>Company Provided: </strong>
                            </span>
                            <span> {item.company} </span>
                          </p>
                          <p>
                            <span>
                              {" "}
                              <strong>Service Description: </strong>
                            </span>
                            <span> {item.description} </span>
                          </p>
                          <p>
                            <span>
                              {" "}
                              <strong>Original Price: </strong>
                            </span>
                            <span> {item.price} &nbsp;&nbsp;</span>
                            <span>
                              {" "}
                              <strong>Discount Price: </strong>
                            </span>
                            <span> {item.dprice} </span>
                          </p>
                          <p>
                            <span>
                              {" "}
                              <strong> Bought at: </strong>
                            </span>
                            <span> {item.datecreated} &nbsp;&nbsp;</span>
                            <span>
                              {" "}
                              <strong> Expire at: </strong>
                            </span>
                            <span> {item.expiry} </span>
                          </p>
                        </li>
                      );
                    }, this)}
                  </ul>
                  {this.state.coupons.length
                    ? null
                    : "You dont have any cerificate"}
                </div>
              </div>
            </div>
          ) : (
            <div className="pcard">
              <div className="card-header">You Messages </div>
              <div className="container" id="guide">
                <ul />
                {this.state.messages.length
                  ? null
                  : "You dont have any messages"}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  handleSignout() {
    localStorage.removeItem("jwt");
    this.props.history.replace("/");
  }

  couponNumber(itemId, profileId, couponDate) {
    let coupon = new Date(couponDate).valueOf() + itemId + profileId;
    return coupon;
  }
}

export default Profile;
