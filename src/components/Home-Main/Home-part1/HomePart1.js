import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";

import { Carousel, WingBlank } from "antd-mobile";
import axios from "axios";

import "./HomePart1.scss";

export default withRouter(
  connect()(
    class HomePart1 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          hotPoint: []
        };
      }
      async componentDidMount() {
        await this.getHotShades();
      }
      async getHotShades() {
        const url =
          "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/flypig/proxy_flyPigHomePage_hot";
        let { data } = await axios.get(url);
        this.setState({
          hotPoint: data.data.hotShades.shades.slice(0, 4)
        });
      }

      render() {
        return (
          <div>
            <div className="topBox" />
            <div className="hotShades">
              <div>
                <span> 热搜 </span>
                {this.state.hotPoint.map((item, index) => {
                  return (
                    <a className="items" key={index}>
                      <span> {item.hint} </span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="swiper">
              <div className="carouselBox">
                <WingBlank>
                  <Carousel autoplay={true} autoplayInterval={1800} infinite>
                    {this.props.List1.banner.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "inline-block"
                        }}
                      >
                        <img src={item.image} alt="" />
                      </div>
                    ))}
                  </Carousel>
                </WingBlank>
              </div>
            </div>
          </div>
        );
      }
    }
  )
);
