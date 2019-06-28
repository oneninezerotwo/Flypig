import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";

import "./HomePart3.scss";

export default withRouter(
  connect()(
    class HomePart3 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }
      render() {
        return (
          <div>
            <div className="titleBar">
              <div>
                <span>当季旅行地</span>
                <a>
                  <span>探索更多目的地</span>
                  <img
                    alt=""
                    src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png"
                  />
                </a>
              </div>
            </div>
            <div className="inspiration">
              <div>
                <div>
                  {this.props.List3.inspiration.map((item, index) => {
                    return (
                      <a key={index} className="place">
                        <div style={{ backgroundImage: `url(${item.image})` }}>
                          <div>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="travelBar">
              <div>
                <span>旅行主题</span>
                <span>最适合你的旅行方式</span>
              </div>
            </div>
            <div className="arbitrary">
              <div>
                {this.props.List3.product.slice(0, 2).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="travelSmallBox"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <a>
                        <span>{item.title}</span>
                        <span>{item.subTitle}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div>
                {this.props.List3.product.slice(2).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="travelSmallBox"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <a>
                        <span>{item.title}</span>
                        <span>{item.subTitle}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="liveBar">
              <div>
                <span>旅行直播</span>
                <a>
                  <span>达人带你看世界</span>
                </a>
              </div>
            </div>
            <div className="live">
              <div>
                {this.props.List3.live.slice(0, 2).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="liveBox"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <a>
                        <span>{item.title}</span>
                        <div>
                          <div>
                            <img alt="" src={item.statusImg} />
                            {item.statusGif ? (
                              <img alt="" src={item.statusGif} />
                            ) : (
                              ""
                            )}
                            <span>{item.viewCount}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }
  )
);
