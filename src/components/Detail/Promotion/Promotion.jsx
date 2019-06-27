import React, { Component } from "react";
import { connect } from "dva";
import "./Promotion.scss";
export default connect(state => {
  return state;
})(
  class Promotion extends Component {
    render() {
      return (
        <div className={"sp_box"}>
          <div
            className={"promotion"}
            onClick={
              (this.pro_click = () => {
                this.props.dispatch({
                  type: "detail/mark",
                  isok2: true
                });
              })
            }
          >
            <div className={"promotions"}>
              <span>促销</span>
              <img
                src="https://gw.alicdn.com/tfs/TB1MDmJh3MPMeJjy1XdXXasrXXa-135-36.png"
                alt=""
              />
              <div className={"sp_p"}>最多可送1370飞猪里程</div>
              <span
                className={"iconfont icon-jiantou"}
                style={{
                  color: "#666",
                  float: "right",
                  width: "19px",
                  marginRight: "0.25667rem"
                }}
              />
            </div>
          </div>
          <div
            className={"pro_mark"}
            style={{ bottom: this.props.detail.promotion_ok ? "0" : "-100%" }}
          >
            <div className={"pro_title"}>
              <h3>飞猪里程</h3>
              <p>
                最多可送1370飞猪里程，交易成功15天后发放，累积里程可抵现金、兑好礼！
              </p>
            </div>
            <div
              className={"pop-action-wrapper"}
              onClick={
                (this.pro_clear = () => {
                  this.props.dispatch({
                    type: "detail/mark",
                    isok2: false
                  });
                })
              }
            >
              <div className={"pop-action pop-action-orange"}>完成</div>
            </div>
          </div>
          <div className={"serve"}>
            <div className={"serve_title"}>服务</div>
            <div className={"serve_r"}>
              <img
                src="https://gw.alicdn.com/tfs/TB1puGXRXXXXXcjaXXXXXXXXXXX-152-36.png"
                alt=""
              />
              <p>
                该商品在支付成功后需等待卖家确认，平均确认时长5分钟，通过率99%
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
);
