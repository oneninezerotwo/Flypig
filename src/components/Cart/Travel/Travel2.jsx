import React, { Component } from "react";
import { connect } from "dva";
import "./Travel.scss";
import axios from "axios";
import { withRouter } from "dva/router";

export default withRouter(
  connect(state => {
    return state;
  })(
    class Travel extends Component {
      constructor(props) {
        super(props);
        this.state = {
          travel: ""
        };
      }
      async componentDidMount() {
        let { data } = await axios.get(
          "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/chihe",
          {
            params: {
              ID: 12345
            }
          }
        );
        this.setState({
          travel: data
        });
      }
      render() {
        return this.state.travel ? (
          <div className="travel">
            {this.state.travel.data.data["90559"].data.result.map(
              (item, index) => {
                return (
                  <div
                    className="travel-b"
                    key={index}
                    onClick={
                      (this.sdaa = () => {
                        console.log(this.props);
                        this.props.history.push("/detail");
                      })
                    }
                  >
                    <img src={`https:${item.picUrl}`} alt="" />
                    <div className="like-text-area">
                      <p className="like-type-text">{item.subTags}</p>
                      <p className="like-type-title">{item.title}</p>
                      <div className="like-price-area">
                        <div className="like-price-area-left">
                          <span className="like-price-prefix">
                            {item.priceName}
                          </span>
                          <span className="like-price-num">{item.price}</span>
                          <span className="like-price-description">
                            {item.soldRecent}
                          </span>
                        </div>

                        <span className="like-similar-btn-text">
                          {item.sameTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          ""
        );
      }
    }
  )
);
