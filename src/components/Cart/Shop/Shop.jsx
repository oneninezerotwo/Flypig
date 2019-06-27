import React, { Component } from "react";
import "./Shop.scss";
export default class Shop extends Component {
  render() {
    return 0 ? (
      ""
    ) : (
      <div className={"emptyCart"}>
        <div className={"img"} />
        <div className={"discription"}>
          <span>购物车</span>
          <span>还没有商品快去挑选一下吧!</span>
        </div>
      </div>
    );
  }
}
