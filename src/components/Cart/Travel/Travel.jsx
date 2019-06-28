import React, { Component } from "react";
import { connect } from "dva";
import "./Travel.scss";
import axios from "axios";
export default connect(state => {
  return state;
})(
  class Travel extends Component {
    async componentDidMount() {
      let { data } = await axios.get(
        "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/jingxuan",
        {
          params: {
            ID: 12345
          }
        }
      );
      console.log(data);
    }
    render() {
      return (
        <div className="travel">
          <div className="travel-b">
            <img
              src="https://img.alicdn.com/tps/i1/2200539097548/O1CN01bapHuD25d21RlwJUQ_!!2200539097548.jpg_400x400Q75.jpg"
              alt=""
            />
            <div className="like-text-area">
              <p className="like-type-text">秦皇岛 · 跟团游</p>
              <p className="like-type-title">
                北戴河网红打卡 阿那亚礼堂＋孤独图书馆+猫的天空之城
              </p>
              <div>
                <span className="like-price-prefix">￥</span>
                <span className="like-price-num">258</span>
                <span className="like-price-description">17人已买</span>
                <span className="like-similar-btn-text">相似</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
