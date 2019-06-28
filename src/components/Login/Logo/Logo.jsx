import React, { Component } from "react";
import { connect } from "dva";
import "./Logo.css";
export default connect(state => {
  return state;
})(
  class Logo extends Component {
    render() {
      return <div className={"logo tb-logo"} />;
    }
  }
);
