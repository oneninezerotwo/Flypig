import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";

import "./HomePart4Guess.scss";

export default withRouter(
  connect(state => {
    return state;
  })(
    class HomePart4Guess extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        let newList = [];
        let oldList = this.props.store.getTripInfo;
        let cut = 2;
        for (var i = 0, j = oldList.length; i < j; i += cut) {
          newList.push(oldList.slice(i, i + cut));
        }
        return (
          <div>
            <div className="tripLike">
              <div>
                <span>猜你喜欢</span>
                <span>你想要的旅行好货</span>
              </div>
            </div>
            <div className="tripList">
              {newList.map((item, mainIndex1) => {
                return (
                  <div
                    key={mainIndex1}
                    className="tripSmallBox"
                    onClick={
                      (this.safdas = () => {
                        document.documentElement.scrollTop = document.body.scrollTop = 0;
                        this.props.history.push("/detail");
                      })
                    }
                  >
                    <div className="innerBox">
                      {item.map((sub, subIndex) => {
                        return (
                          <div key={subIndex}>
                            <a>
                              <div
                                className="tripPhoto"
                                style={{
                                  backgroundImage: `url(${sub.image})`
                                }}
                              />
                              <div
                                className="tripInfo"
                                style={{ color: sub.typeColor }}
                              >
                                <span> {sub.type}</span>
                                <div className="tripSubject">
                                  <span>{sub.title}</span>
                                </div>
                                <div className="tripPrice">
                                  <div>
                                    <span>{sub.pricePrefix}</span>
                                    <span>{sub.price}</span>
                                    <span>{sub.description}</span>
                                  </div>
                                  <div>
                                    <img
                                      alt=""
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAIBAMAAAAYZIIqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURc7OzszMzNDQ0N/f3////0dwTMzMzNch8N8AAAAGdFJOUy/iOQgCAHtOoNwAAABGSURBVAjXYwh1YAkNhRBGyqEMAWKJrKFgIkgsUZXBMS1NJBRMGKalCTOwpaUlhIIJtbS0JAY4C8KFq4MohpsCMQpuB5gAABdzHmvIUZBpAAAAAElFTkSuQmCC"
                                    />
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
  )
);
