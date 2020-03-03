import React, { Component } from "react";
import Menu from "../components/menu/Menu.jsx";
import Footer from "../components/menu/Footer.jsx";
import API from "../API.js";
import Router from "next/router";
import "../style.css";
import "../profile.css";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinState: true,
      businessUser: false,
      loginEmail: "",
      loginPass: "",
      user: "",
      userMessage: "",
      email: "",
      pass: "",
      pass2: "",
      signinMessage: "",
      signinEmailMessage: "",
      emailMessage: "",
      passMessage: "",
      passMessage2: ""
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangePass2 = this.handleChangePass2.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginChangeEmail = this.handleLoginChangeEmail.bind(this);
    this.handleLoginChangePass = this.handleLoginChangePass.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.API = new API();
  }

  componentDidMount() {
    console.log("test", "profile");

    if (localStorage.getItem("jwt")) {
      let profile = this.API.getProfile();
      this.setState({ profile });
      if (profile.type === "0") Router.push("/user");
      else if (profile.type === "1") Router.push("/profile");
    }

    for (let x in this.refs) {
      this.refs[x].onkeypress = event => this._handleKeyPress(event, x);
    }
  }

  render() {
    return (
      <div>
        <Menu menuState={this.state.filter} handleChange={this.handleChange} />
        <div className="center">
          <div className="itemcard">
            {this.state.signinState ? (
              <div className="login">
                <h3 align="center">Log in to your account</h3>
                <div className="input-group">
                  <div className="input-group-title">Email</div>
                  <div className="input-group-area">
                    <input
                      type="text"
                      value={this.state.loginEmail}
                      onChange={this.handleLoginChangeEmail}
                      ref={"1"}
                      key={"email"}
                    />
                  </div>
                </div>
                <span className="input-group-alert">
                  {this.state.signinEmailMessage}
                </span>

                <div className="input-group">
                  <div className="input-group-title">Password</div>
                  <div className="input-group-area">
                    <input
                      type="password"
                      value={this.state.loginPass}
                      onChange={this.handleLoginChangePass}
                      ref={"2"}
                      key={"pass"}
                    />{" "}
                  </div>
                </div>
                <span className="input-group-alert">
                  {" "}
                  {this.state.signinMessage}
                </span>

                <button
                  onClick={this.handleSignin}
                  type="submit"
                  className="button"
                >
                  Sign in
                </button>
              </div>
            ) : (
              <div className="login">
                <h3 align="center">
                  {this.state.businessUser
                    ? "Create your bussiness account"
                    : "Create your account"}{" "}
                </h3>
                <div className="input-group">
                  <div className="input-group-title">Username</div>
                  <div className="input-group-area">
                    <input
                      type="text"
                      value={this.state.user}
                      onChange={this.handleChangeUser}
                      ref={"3"}
                    />{" "}
                  </div>
                </div>
                <span className="input-group-alert">
                  {" "}
                  {this.state.userMessage}
                </span>

                <div className="input-group">
                  <div className="input-group-title">Email</div>
                  <div className="input-group-area">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                      ref={"4"}
                    />{" "}
                  </div>
                </div>
                <span className="input-group-alert">
                  {" "}
                  {this.state.emailMessage}
                </span>

                <div className="input-group">
                  <div className="input-group-title">Password</div>
                  <div className="input-group-area">
                    <input
                      type="password"
                      value={this.state.pass}
                      onChange={this.handleChangePass}
                      ref={"5"}
                    />{" "}
                  </div>
                </div>
                <span className="input-group-alert">
                  {" "}
                  {this.state.passMessage}
                </span>

                <div className="input-group">
                  <div className="input-group-title">Password </div>
                  <div className="input-group-area">
                    <input
                      type="password"
                      value={this.state.pass2}
                      onChange={this.handleChangePass2}
                      placeholder="repeat password"
                      ref={"6"}
                    />{" "}
                  </div>
                </div>
                <span className="input-group-alert">
                  {" "}
                  {this.state.passMessage2}
                </span>

                <button
                  onClick={this.handleSignup}
                  type="button"
                  className="button"
                >
                  Sign up
                </button>
              </div>
            )}
            <hr />
            <div>
              <h5>Dont you have account?</h5>
              <button
                onClick={this.handleClick}
                type="button"
                className="button"
              >
                {this.state.signinState
                  ? "Register as Member"
                  : " Already Member"}
              </button>

              <button
                onClick={this.handleBussinessClick}
                type="button"
                className="button"
              >
                {this.state.businessUser
                  ? "Register as Member"
                  : "Register as Company"}
              </button>
            </div>
          </div>
        </div>
        <NotificationContainer />

        <Footer />
      </div>
    );
  }

  _handleKeyPress(e, field) {
    if (e.keyCode === 13) {
      if (field === "1") this.refs[2].focus();
      else if (field === "2") this.handleSignin();
      else if (field === "3") this.refs[4].focus();
      else if (field === "4") this.refs[5].focus();
      else if (field === "5") this.refs[6].focus();
      else if (field === "6") this.handleSignup();
    }
  }
  handleSignin = () => {
    if (localStorage.getItem("jwt")) {
      let profile = this.API.getProfile();
      if (profile.type === "0") Router.push("/user");
      else if (profile.type === "1") Router.push("/profile");
    }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(String(this.state.loginEmail).toLowerCase())) {
      if (this.state.loginEmail === "")
        this.setState({ signinEmailMessage: " Provide an email." });
      else this.setState({ signinEmailMessage: "It is not a valid email." });
    } else {
      this.setState({ signinEmailMessage: "" });

      if (this.state.loginPass.length < 6) {
        this.setState({ signinMessage: " Password is at least 6 character." });
      } else {
        this.setState({ signinMessage: "" });

        this.API.login(this.state.loginEmail, this.state.loginPass).then(
          res => {
            if (localStorage.getItem("jwt")) {
              let profile = this.API.getProfile();
              if (profile.type === "0") Router.push("/");
              else Router.push("/profile");
            } else {
              NotificationManager.info("Wrong email or password. Try again.");
              this.setState({ signinMessage: "wrong user or password." });
            }
          }
        );
      }
    }
  };

  handleSignup = () => {
    if (this.validateForm())
      this.API.register(
        this.state.user,
        this.state.email,
        this.state.pass,
        this.state.businessUser
      ).then(res => {
        console.log("res", res);
        if (res.data.message === "User exist")
          this.setState({
            emailMessage: "",
            userMessage: "The username already taken."
          });
        else if (res.data.message === "Email exist")
          this.setState({
            userMessage: "",
            emailMessage: "The email is already registered. "
          });
        else if (res.data.message === "User was created.") {
          NotificationManager.info(
            "Successfully register. Sign in to your account."
          );
          this.setState({
            signinState: true,
            loginEmail: this.state.email,
            loginPass: this.state.pass
          });
        } else {
          alert("Something goes wrong.");
        }
      });
    else NotificationManager.info("Fill all required fields.", null, 2000);
  };

  handleChangeUser(event) {
    this.setState({ user: event.target.value });
    if (event.target.value === "") {
      this.setState({ userMessage: "Provide an username." });
    }
    if (event.target.value.length < 4) {
      this.setState({ userMessage: "It should be minimum 4 characters." });
    } else this.setState({ userMessage: "" });
  }

  handleLoginChangePass(event) {
    this.setState({ loginPass: event.target.value });
    if (this.state.loginPass.length > 5) this.setState({ signinMessage: "" });
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value }, () => this.validateForm());
  }

  handleChangePass2(event) {
    this.setState({ pass2: event.target.value }, () => this.validateForm());
    if (this.state.pass === event.target.value) {
      this.setState({
        passMessage2: ""
      });
    }
  }

  handleLoginChangeEmail(event) {
    this.setState({ loginEmail: event.target.value });
    var re = /\S+@\S+\.\S+/;
    if (re.test(String(event.target.value).toLowerCase()))
      this.setState({
        signinEmailMessage: ""
      });
  }

  handleChangeEmail(event) {
    var re = /\S+@\S+\.\S+/;
    this.setState({ email: event.target.value });
    if (!re.test(String(event.target.value).toLowerCase())) {
      if (event.target.value === "") {
        this.setState({ emailMessage: "Provide an email." });
      } else {
        this.setState({
          emailMessage: "It is not valid email."
        });
      }
    } else
      this.setState({
        emailMessage: ""
      });
  }

  handleClick = () => {
    this.setState(
      {
        signinState: !this.state.signinState,
        user: "",
        email: "",
        pass: "",
        signinMessage: "",
        emailMessage: "",
        userMessage: "",
        pass2: "",
        loginPass: "",
        passMessage: "",
        passMessage2: "",
        businessUser: false
      },
      () => {
        for (let x in this.refs) {
          this.refs[x].onkeypress = event => this._handleKeyPress(event, x);
        }
      }
    );
  };

  handleBussinessClick = () => {
    this.setState({
      businessUser: !this.state.businessUser,
      signinState: false,
      user: "",
      email: "",
      pass: "",
      signinMessage: "",
      emailMessage: "",
      userMessage: "",
      passMessage: "",
      passMessage2: "",
      pass2: "",
      loginPass: ""
    });
  };

  validateForm() {
    var re = /\S+@\S+\.\S+/;
    if (this.state.user === "") {
      this.setState({ userMessage: " Provide an username" });
    } else if (!re.test(String(this.state.email).toLowerCase())) {
      if (this.state.email === "") {
        this.setState({ emailMessage: " Provide an email" });
      } else {
        this.setState({
          emailMessage: " Email is not valid email"
        });
      }
    } else if (this.state.pass === "") {
      this.setState({ emailMessage: "", passMessage: "Provide a password " });
    } else if (this.state.pass.length < 6) {
      this.setState({
        emailMessage: "",
        passMessage: "at least 6 characters"
      });
    } else if (this.state.pass !== this.state.pass2) {
      this.setState({
        passMessage: "",
        passMessage2: "Passwords doesnt Match"
      });
    } else return true;
    return false;
  }
}

export default welcome;
