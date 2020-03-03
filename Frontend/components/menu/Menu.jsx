import React, { Component } from "react";
import Link from "next/link";
import Submenu from "./Submenu";
import API from "../../API.js";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuState: "All Deals",
      subMenuState: "Deal of Day",
      mobileMenu: "true",
      profile: { type: "0" }
    };
  }
  componentDidMount() {
    if (document.documentElement.clientWidth < 500) {
      this.setState({ mobileMenu: "false" });
    }
    this.API = new API();
    if (localStorage.getItem("jwt")) {
      let profile = this.API.getProfile();
      this.setState({ profile });
    }
  }

  render() {
    return (
      <div>
        <div className="toplogo">
          <Link href="/">
            <a>
              <h1>понпон</h1>
            </a>
          </Link>
          <input type="text" placeholder="поисковый ку пон" />
          <button className="searchButton">
            <i className="icon-search" />
          </button>

          <ul>
            <li
              key="iconitem"
              className="icon"
              onClick={() => {
                this.handleMenuClicked();
              }}
            >
              <i className="icon-bars" />
            </li>
            <li>
              {this.state.profile ? (
                <div>
                  <Link href="/welcome" key="signout">
                    <a>
                      <span onClick={this.handleSignout}>
                        выйти <i className="icon-signout" />
                      </span>
                    </a>
                  </Link>
                  {this.state.profile.type === "1" ? (
                    <Link href="/profile" key="profile">
                      <a>профиль</a>
                    </Link>
                  ) : (
                    <Link href="/user" key="user">
                      <a>профиль</a>
                    </Link>
                  )}
                </div>
              ) : (
                <Link href="/welcome">
                  <a>
                    <span>
                      Вход
                      <i className="icon-signin" />
                    </span>
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div
          className="topnav"
          style={{ display: this.state.mobileMenu ? "block" : "none" }}
        >
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span
                    onClick={() => {
                      this.props.handleChange("All Deals");
                    }}
                    onMouseEnter={() => {
                      this.setState({ menuState: "All Deals" });
                    }}
                  >
                    Все
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Category/Beauty and Spas">
                <a>
                  <span
                    onClick={() => {
                      this.props.handleChange("Beauty and Spas");
                    }}
                    onMouseEnter={() => {
                      this.setState({ menuState: "Beauty & Spas" });
                    }}
                  >
                    красоты и спа
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Category/Health and Fitness">
                <a>
                  <span
                    onClick={() => {
                      this.props.handleChange("Health and Fitness");
                    }}
                    onMouseEnter={() => {
                      this.setState({ menuState: "Health & Fitness" });
                    }}
                  >
                    Здоровье и фитнес
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {this.state.mobileMenu ? (
          <Submenu
            item={this.state.menuState}
            subCategory={this.state.subMenuState}
            onSubMenuClick={subcategory => {
              this.handleSubMenuClicked(subcategory);
            }}
          />
        ) : null}
      </div>
    );
  }

  handleSignout() {
    localStorage.removeItem("jwt");
  }
  handleMenuClicked() {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  }

  handleLink() {
    this.props.history.push("/welcome");
  }
  handleSubMenuClicked(subcategory) {
    this.setState({ subMenuState: subcategory });
    console.log("subcategory", subcategory);
    this.props.handleChange(subcategory);
  }
}

export default Menu;
