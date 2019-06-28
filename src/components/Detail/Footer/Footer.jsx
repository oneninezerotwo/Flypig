import React, { Component } from "react";
import { connect } from "dva";
import "./Footer.scss";
import "../../../assets/iconfont/iconfont.css";
import "../../../assets/iconfont/demo.css";

export default connect(state => {
  return state;
})(
  class Footer extends Component {
    state = {
      footer_b: [
        {
          title: "客服",
          icon: "icon-kefu"
        },
        {
          title: "店铺",
          icon: "icon-shoucang"
        },
        {
          title: "收藏",
          icon: "icon-dianpu"
        }
      ]
    };
    render() {
      return (
        <div className={"detail_ter"}>
          <ul className={"ter-b"}>
            {this.state.footer_b.map((item, index) => {
              return (
                <li key={index}>
                  <i className={`iconfont ${item.icon}`} />
                  <span>{item.title}</span>
                </li>
              );
            })}
            <li className={"shop-add shop-a"}>加入购物车</li>
            <li className={"shop-m shop-a"}>立即购买</li>
          </ul>
        </div>
      );
    }
  }
);
