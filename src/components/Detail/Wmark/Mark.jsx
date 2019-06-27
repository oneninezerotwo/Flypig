import React, { Component } from "react";
import { connect } from "dva";
import "./Mark.css";
export default connect(state => {
  return state;
})(
  class mark extends Component {
    render() {
      return (
        <div
          className={"pop_mark"}
          style={{
            display: this.props.detail.mark_ok ? "block" : "none"
          }}
          onClick={
            (this.is_ok = () => {
              this.props.dispatch({
                type: "detail/mark",
                isok: false,
                isok2: false
              });
            })
          }
        />
      );
    }
  }
);
