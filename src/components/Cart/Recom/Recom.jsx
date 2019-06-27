import React, { Component } from "react";
import "./Recom.scss";
import axios from "axios";
export default class Recom extends Component {
  state = {
    recom: "",
    active: 0,
    we: [19, 106, 185, 260]
  };
  async componentDidMount() {
    let { data } = await axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/shop",
      {
        params: {
          ID: 12345
        }
      }
    );
    this.setState({
      recom: data.data.data["90559"].data.result
    });
  }
  curNum(index) {
    this.setState({
      active: index
    });
  }
  render() {
    return this.state.recom ? (
      <div className={"recommend"}>
        <div className={"recommend-tab"}>
          {this.state.recom.map((item, index) => {
            return (
              <div
                className={"tab-list"}
                key={index}
                style={{
                  color: this.state.active === index ? "" : "#3d3d3d"
                }}
                onClick={this.curNum.bind(this, index)}
              >
                {item.title}
              </div>
            );
          })}
          <div
            className={"tabview-indicator tabview-selected"}
            style={{
              transition:
                "transform 0.2s ease-in-out 0s, width 0.1s ease-out 0s",
              transformOrigin: "center center",
              transform: `translate3d(${
                this.state.we[this.state.active]
              }px, 0px, 0px)`,
              width: "68px"
            }}
          />
        </div>
      </div>
    ) : (
      ""
    );
  }
}
