import React, { Component } from "react";
import "./LoginUser.scss";
export default class LoginUser extends Component {
  state = {
    name: "",
    pas: ""
  };
  render() {
    return (
      <form className={"LoginUser"} id={"loginForm"} name="TPL_username">
        <div className={"login-t"}>
          <div className={"am-list-item"}>
            <input
              type="text"
              className={"am-input-required"}
              name="TPL_username"
              placeholder="手机号/邮箱/会员名"
              value={this.state.name}
              id="username"
              onKeyDown={
                (this.focus_inp = () => {
                  this.state.name
                    ? (this.action1.style.display = "block")
                    : (this.action1.style.display = "none");
                })
              }
              onBlur={
                (this.blur_inp = () => {
                  this.action1.style.display = "none";
                })
              }
              onChange={
                (this.handelName = e => {
                  this.setState({
                    name: e.target.value
                  });
                })
              }
            />
            <i
              className={"am-list-action iconfont icon-x"}
              style={{ display: this.state.name ? "block" : "none" }}
              onClick={
                (this.clear_x = () => {
                  this.setState({
                    name: ""
                  });
                })
              }
              ref={el => {
                this.action1 = el;
              }}
            />
          </div>
          <div className={"am-list-item"}>
            <input
              type="password"
              className={"am-input-required am-input-required-password"}
              name="TPL_password"
              placeholder="请输入密码"
              value={this.state.pas}
              id="password"
              onChange={
                (this.handelName = e => {
                  this.setState({
                    pas: e.target.value
                  });
                })
              }
              onKeyDown={
                (this.focus_inp = () => {
                  this.state.pas
                    ? (this.action2.style.display = "block")
                    : (this.action2.style.display = "none");
                })
              }
              onBlur={
                (this.blur_inp = () => {
                  this.action2.style.display = "none";
                })
              }
            />
            <i
              className={"am-icon-clear iconfont icon-x"}
              style={{ display: this.state.pas ? "block" : "none" }}
              onClick={
                (this.clear_x = () => {
                  this.setState({
                    pas: ""
                  });
                })
              }
              ref={el => {
                this.action2 = el;
              }}
            />
          </div>
        </div>
        <div className={"am-field am-footer"}>
          <a href="###" className={"f-left"}>
            短信验证码登录
          </a>
          <a href="###" className={"f-right"}>
            免费注册
          </a>
        </div>
        <div className={"am-field am-fieldBottom"}>
          <button
            type="submit"
            className={"am-button am-button-submit"}
            id="btn-submit"
          >
            登 录
          </button>
        </div>
      </form>
    );
  }
}
