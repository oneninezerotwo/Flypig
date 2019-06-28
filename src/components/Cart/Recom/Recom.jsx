import React, { Component, Fragment } from "react";
import "./Recom.scss";
import axios from "axios";
import { Link, Route, Switch, BrowserRouter as Router } from "dva/router";
import Travel1 from "../Travel/Travel1";
import Travel2 from "../Travel/Travel2";
import Travel3 from "../Travel/Travel3";
import Travel4 from "../Travel/Travel4";
export default class Recom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travel: ["", "travel2", "travel3", "travel4"],
      recom: "",
      active: 0,
      we: [19, 106, 185, 260]
    };
  }

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
      <Fragment>
        <div className={"recommend"}>
          <div className={"recommend-tab"}>
            {this.state.recom.map((item, index) => {
              return (
                <Link
                  to={`/cart/${this.state.travel[index]}`}
                  className={"tab-list"}
                  key={index}
                  style={{
                    color: this.state.active === index ? "black" : ""
                  }}
                  onClick={this.curNum.bind(this, index)}
                >
                  {item.title}
                </Link>
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
        <Route exact path="/cart/" component={Travel1} />
        <Route path="/cart/travel2" component={Travel2} />
        <Route path="/cart/travel3" component={Travel3} />
        <Route path="/cart/travel4" component={Travel4} />
      </Fragment>
    ) : (
      ""
    );
  }
}
