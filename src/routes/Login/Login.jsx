import React, { Component, Fragment } from "react";
import Logo from "../../components/Login/Logo/Logo";
import LoginUser from "../../components/Login/LoginUser/LoginUser";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <LoginUser />
      </Fragment>
    );
  }
}
