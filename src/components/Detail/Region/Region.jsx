import React, { Component } from "react";
import { connect } from "dva";
import "./Region.css";
export default connect(state => {
  return state;
})(
  class Region extends Component {
    state = {
      reg_pice: [
        {
          date: "06/24",
          pice: "940"
        },
        {
          date: "06/25",
          pice: "940"
        },
        {
          date: "06/26",
          pice: "940"
        },
        {
          date: "06/27",
          pice: "940"
        },
        {
          date: "06/28",
          pice: "2260"
        }
      ]
    };
    render() {
      return (
        <div className={"region"}>
          <div className={"reg_top"}>
            <p className={"reg_p"}>
              <span
                className={"iconfont icon-location"}
                style={{ fontSize: "0.4rem" }}
              />
              <span>请选择出发地</span>
            </p>
            <span className={"wt-subtitle"}>已选成人</span>
            <div className={"reg_tuan"}>
              全部团购 <span />
            </div>
          </div>
          <ul className={"reg_u"}>
            {this.state.reg_pice.map((item, index) => {
              return (
                <li key={index}>
                  <i>{item.date}</i>
                  <span>￥{item.pice}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
);
