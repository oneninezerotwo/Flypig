import React, { Component } from "react";
import { connect } from "dva";
import "./Shops.scss";
export default connect(state => {
  return state;
})(
  class Shop extends Component {
    render() {
      return (
        <div className={"shop"}>
          <div className={"shop-l"}>
            <img
              className={"shop-logo"}
              src="https://img.alicdn.com/bao/uploaded//57/ec/TB1cDtFOXXXXXX_XFXXSutbFXXX.jpg_100x100.jpg"
              alt=""
            />
            <div className={"shop-text"}>
              <p className={"shop-t"}>秦皇岛海滨假日旅游专营店</p>
              <img
                src="https://gw.alicdn.com/tps/TB1vSE_OVXXXXXNXXXXXXXXXXXX-123-42.png"
                alt=""
              />
            </div>
          </div>
          <div className={"shop-r"}>
            {this.props.detail.detail.shop.data.shopEvaluation.map(
              (item, index) => {
                return (
                  <div className={"shop-b"} key={index}>
                    <span className={"describe"}>{item.title}</span>
                    <span className={"grade"}>{item.score}</span>
                    <span className={"shop-img"} />
                  </div>
                );
              }
            )}
          </div>
        </div>
      );
    }
  }
);
