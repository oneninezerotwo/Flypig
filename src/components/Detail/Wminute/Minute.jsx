import React, { Component } from "react";
import "./Minute.css";
import { connect } from "dva";
export default connect(state => {
  return state;
})(
  class Minute extends Component {
    state = {
      pop_item1: [
        {
          title: "更改则赔付",
          content: "订单生效后，商家原因更改订单，商家需向买家支付违约金。"
        },
        {
          title: "承诺不加价",
          content:
            "订单付款后，商家不得因自身及第三方原因要求加价，如商家违规，按《飞猪规则》每次扣4分处理。"
        },
        {
          title: "取消则赔付",
          content:
            "订单生效后，因商家原因取消订单的，商家应按商品详情页面“退改规则”/“取消政策”模块的规定向买家支付违约金。"
        },
        {
          title: "注意事项",
          content:
            "以上保障内容如与《飞猪规则》或《度假商品服务保障标准》有冲突的，以《飞猪规则》或《度假商品服务保障标准》 为准。"
        }
      ]
    };

    render() {
      return (
        <div className={"deta_head"}>
          <div className={"mod-price"} data-reactid=".0.0.$1">
            <div
              className={"main-wrapper"}
              style={{ backgroundImage: "url(undefined)" }}
              data-reactid=".0.0.$1.0"
            >
              <div className={"price-wrapper"} data-reactid=".0.0.$1.0.0">
                <div
                  className={"price-area main-price-area"}
                  data-reactid=".0.0.$1.0.0.0"
                >
                  <span className={"price-str"} data-reactid=".0.0.$1.0.0.0.1">
                    <em
                      className={"price-unit"}
                      data-reactid=".0.0.$1.0.0.0.1.0"
                    >
                      ￥
                    </em>
                    <span data-reactid=".0.0.$1.0.0.0.1.1">940-2740</span>
                  </span>
                  <div
                    className={"extra inline"}
                    data-reactid=".0.0.$1.0.0.0.2:$0"
                  >
                    <span className={"orange-tag"}>优惠促销</span>
                  </div>
                </div>
                <div
                  className={"price-area line-through"}
                  data-reactid=".0.0.$1.0.0.2"
                >
                  <span
                    className={"pre-price-text"}
                    data-reactid=".0.0.$1.0.0.2.0"
                  >
                    价格
                  </span>
                  <span className={"price-str"} data-reactid=".0.0.$1.0.0.2.1">
                    <em
                      className={"price-unit"}
                      data-reactid=".0.0.$1.0.0.2.1.0"
                    >
                      ￥
                    </em>
                    <span data-reactid=".0.0.$1.0.0.2.1.1">950-2750</span>
                  </span>
                </div>
              </div>
              <span data-reactid=".0.0.$1.0.2" />
            </div>
          </div>
          <p className={"detail_title"}>
            北戴河阿那亚网红打卡圣地安澜酒店亲子度假孤独图书馆海上礼堂
          </p>
          <ul className={"mod-sold"}>
            <li>{this.props.detail.detail.sold.data.comment}</li>
            <li>{this.props.detail.detail.sold.data.score}</li>
            <li>{this.props.detail.detail.sold.data.sold}</li>
          </ul>
          <div
            className={"mod-brand"}
            onClick={
              (this.mod_ok = () => {
                this.props.dispatch({
                  type: "detail/mark",
                  isok: !this.props.detail.pop_ok
                });
              })
            }
          >
            <img
              src="https://gw.alicdn.com/tps/TB1_81_PXXXXXayXFXXXXXXXXXX-246-82.png"
              alt=""
              style={{
                height: ".37333rem",
                display: "block",
                marginRight: ".26667rem"
              }}
            />
            <div className={"services-wrap"}>
              {this.props.detail.detail.brand.data.cells.map((item, index) => {
                return (
                  <div className={"service-wrap"} key={index}>
                    <img src={item.icon} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <span
              className={"iconfont icon-jiantou"}
              style={{ marginRight: ".25667rem", color: "#666" }}
            />
          </div>

          <div
            className={"pop"}
            style={{ bottom: this.props.detail.pop_ok ? "0" : "-100%" }}
          >
            <div className={"pop-title"}>
              <img
                src="https://gw.alicdn.com/tps/TB1_81_PXXXXXayXFXXXXXXXXXX-246-82.png"
                alt=""
              />
              <div className={"split"} data-reactid=".0.0.$4.1.0.0.0.0.0.0.1" />
              <span>服务说明</span>
            </div>
            <div className={"mark_content"}>
              <ul className={"mark_item"} style={{ padding: ".32rem" }}>
                {this.state.pop_item1.map((item, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        padding: ".32rem 0",
                        fontSize: ".34667rem"
                      }}
                    >
                      <p
                        style={{
                          display: "flex",
                          fontSize: ".4rem",
                          color: "#333",
                          lineHeight: ".48rem",
                          marginBottom: ".24rem"
                        }}
                      >
                        <img
                          style={{
                            width: ".32rem",
                            height: ".32rem",
                            marginRight: ".32rem"
                          }}
                          src="http://gw.alicdn.com/tps/TB1DCgkNVXXXXXlapXXXXXXXXXX-24-24.png"
                          alt=""
                        />
                        <span>{item.title}</span>
                      </p>
                      <p
                        style={{
                          lineHeight: ".48rem",
                          paddingLeft: ".64rem",
                          color: "#666"
                        }}
                      >
                        {item.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={"pop-action"}
              onClick={
                (this.is_ok = () => {
                  this.props.dispatch({
                    type: "detail/mark",
                    isok: !this.props.detail.pop_ok
                  });
                })
              }
            >
              完成
            </div>
          </div>
        </div>
      );
    }
  }
);
