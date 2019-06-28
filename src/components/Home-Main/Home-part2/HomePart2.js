import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";

import "./HomePart2.scss";

export default withRouter(
  connect()(
    class HomePart2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
        // console.log(this);
      }

      render() {
        return (
          <div>
            <div className="entry">
              <div>
                {this.props.List2.entryList.map((item, index) => {
                  return (
                    <a key={index} className="icons">
                      <img alt="" src={item.image} />
                      <span>{item.title}</span>
                      {item.corner ? (
                        <div className="offerBox">
                          <span>{item.corner}</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="subentry">
              <div>
                {this.props.List2.subEntryList.map((item, index) => {
                  return (
                    <a key={index}>
                      <span>{item.title}</span>
                      <div>
                        <span>{item.subTitle}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="benefit">
              <div>
                {this.props.List2.benefitList.map((item, index) => {
                  return (
                    <a key={index} className={"a" + index}>
                      <img alt="" src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="right">
              <a>
                <img alt="" src={this.props.List2.rightsList1.image} />
                <div>
                  <span>{this.props.List2.rightsList1.title}</span>
                  <span>{this.props.List2.rightsList1["subTitle"]}</span>
                </div>
                <span>{this.props.List2.rightsList1.buttonText}</span>
              </a>
              <div>
                <div className="rightSmallBox">
                  {this.props.List2.rightsList2.map((item, index) => {
                    return (
                      <a key={index}>
                        <span className="span1">{item.title}</span>
                        <span className="span2">{item.subTitle}</span>
                        <span className="span2" />
                        <img alt="" src={item.image} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="photo">
              <div>
                <div className="leftPhoto" />
                <div>
                  <div className="rightP1">
                    <a>
                      <img
                        alt=""
                        src="https://gw.alicdn.com/tfs/TB1f5o4wDqWBKNjSZFxXXcpLpXa-107-35.png_110x10000.jpg_.webp"
                      />
                      <div>
                        <span>广州</span>
                        <img
                          alt=""
                          src="https://gw.alicdn.com/tfs/TB1bPqkwCMmBKNjSZTEXXasKpXa-27-26.png_110x10000.jpg_.webp"
                        />
                        <span>北京</span>
                        <span>单程</span>
                      </div>
                      <div className="price">
                        <div>
                          <span>¥</span>
                          <span>740起</span>
                          <span>3.5折</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="rightP2">
                    <a>
                      <span>北京福地凰城酒店</span>
                      <div className="price">
                        <div>
                          <span>¥</span>
                          <span>475起</span>
                          <span>精选</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  )
);
