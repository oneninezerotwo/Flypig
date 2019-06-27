import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import "./Slideshow.css";
import { connect } from "dva";
export default connect(state => {
  return state;
})(
  class slideshow extends Component {
    state = {
      data: [
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i5/TB15yyDbSWD3KVjSZSg.rMCxVXa_094716.jpg_640x640q30.jpg_.webp",
          img_top: false,
          img_mark: false
        },
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i5/TB15yyDbSWD3KVjSZSg.rMCxVXa_094716.jpg_640x640q30.jpg_.webp",
          img_top: false,
          img_mark: false
        },
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i3/3021674616/O1CN01dzMq491jyAm5O0sOV_!!3021674616.jpg_640x640q30.jpg_.webp",
          img_top: true,
          img_mark: false
        },
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i2/3021674616/O1CN01afjeA21jyAm4D03xo_!!3021674616.jpg_640x640q30.jpg_.webp",
          img_top: true,
          img_mark: false
        },
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i1/3021674616/O1CN01YXg5Ts1jyAm5hLA5M_!!3021674616.jpg_640x640q30.jpg_.webp",
          img_top: true,
          img_mark: false
        },
        {
          imgList:
            "https://img.alicdn.com/bao/uploaded/i5/TB15yyDbSWD3KVjSZSg.rMCxVXa_094716.jpg_640x640q30.jpg_.webp",
          img_top: false,
          img_mark: true //图片遮罩判断
        }
      ],
      imgHeight: 375,
      num: 1, //图片下标
      itemNumOk: true,
      dese_title: ""
    };

    render() {
      return (
        <div className={"mod-banner"}>
          <WingBlank>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) =>
                console.log(`slide from ${from} to ${to}`)
              }
              ref={el => {
                this.chooseIndex = el;
              }}
              afterChange={index => {
                console.log(index);
                index++;
                // console.log(this.state.data.length);
                if (index > this.state.data.length - 1) {
                  this.setState({
                    itemNumOk: false
                  });
                } else {
                  this.setState({
                    num: index,
                    itemNumOk: true
                  });
                }
              }}
            >
              {this.state.data.map((item, val) => (
                <div key={val} className={"reactid-b"}>
                  <a
                    href="#/detail"
                    style={{
                      display: "inline-block",
                      width: "100%",
                      height: this.state.imgHeight,
                      marginTop: item.img_top ? "52px" : ""
                    }}
                  >
                    <img
                      src={item.imgList}
                      alt=""
                      style={{
                        width: "100%"
                      }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event("resize"));
                        this.setState({
                          imgHeight: "auto"
                        });
                      }}
                    />
                  </a>
                  {item.img_mark ? (
                    <div className={"img_mark_b"}>
                      <div
                        className={"back-image"}
                        style={{
                          backgroundImage:
                            "url(https://img.alicdn.com/bao/uploaded/i2/TB1Js1AbUKF3KVjSZFEiiFExFXa_094445.jpg)"
                        }}
                      />
                      <div className={"title-b"}>
                        <img src={item.imgList} />
                        <p
                          style={{
                            fontSize: ".48rem",
                            color: "#fff",
                            marginBottom: ".24rem"
                          }}
                        >
                          秦皇岛-秦皇岛 自由行
                        </p>
                        <span
                          style={{
                            color: "#fff",
                            fontSisze: ".32rem"
                          }}
                        >
                          其他|情侣
                        </span>
                      </div>
                      <div className={"desc"}>
                        {this.props.detail.detail.banner.data.jounery.elements.map(
                          (items, index) => {
                            return (
                              <div className={"j-cell"} key={index}>
                                <div className={"label"}>
                                  <img
                                    className={"icon"}
                                    src={items.icon}
                                    alt=""
                                  />
                                  <span>{items.title}</span>
                                  <span>:</span>
                                </div>
                                <div>{items.desc}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </Carousel>
          </WingBlank>
          <div data-spm="cart" data-reactid=".0.0.$15">
            <div
              className={"mod-cart"}
              data-udata-uhjlj="true"
              data-spm-click="gostr=/tbtrip;locaid=d0;"
              data-reactid=".0.0.$15.0"
            />
          </div>
          <div className={"bottom"} data-reactid=".0.0.$0.0.1">
            <div className={"left"} data-reactid=".0.0.$0.0.1.0">
              自由行
            </div>
            <div className={"mid"} data-reactid=".0.0.$0.0.1.1">
              <div
                className={
                  this.state.itemNumOk ? "mid-item active" : "mid-item"
                }
                onClick={
                  (this.click_img = () => {
                    console.log(this.chooseIndex);
                    // this.chooseIndex.goTo(1);
                  })
                }
              >
                图片
              </div>
              <div
                className={
                  !this.state.itemNumOk ? "mid-item active" : "mid-item"
                }
                data-reactid=".0.0.$0.0.1.1.3"
              >
                行程
              </div>
            </div>
            <div
              className={"decorator"}
              data-reactid=".0.0.$0.0.1.2"
              style={{ display: this.state.itemNumOk ? "block" : "none" }}
            >
              {this.state.num}/{this.state.data.length - 1}
            </div>
          </div>
        </div>
      );
    }
  }
);
