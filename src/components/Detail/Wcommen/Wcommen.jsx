import React, { Component } from "react";
import { connect } from "dva";
import "./Wcommen.css";
export default connect(state => {
  return state;
})(
  class Wcommen extends Component {
    render() {
      return (
        <div className={"mod-rate"}>
          <div className={"mod-t"}>
            <span className={"w-title"}>宝贝评价(96)</span>
            <p className={"w-text"}>
              查看全部
              <span />
            </p>
          </div>
          <div className={"tag-list-wrap"}>
            <ul>
              {this.props.detail.detail.rate.data.rateTagList.map(
                (item, index) => {
                  return (
                    <li key={index}>
                      {item.tagTip}({item.count})
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className={"leave"}>
            <div className={"leave-t"}>
              <img
                src="https://wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vFkSPFHuXH*evF8LPmHSXH8WP8kWPFI4OHQWMkRhv8gyMF80MF7HvG7HvkxYMmQy&width=40&height=40&type=sns"
                alt=""
              />
              <h3>{this.props.detail.detail.rate.data.rateCell.userNick}</h3>
            </div>
            <div className={"leave-p"}>
              {this.props.detail.detail.rate.data.rateCell.rateContent}
            </div>
            <span className={"leave-s"}>
              {this.props.detail.detail.rate.data.rateCell.rateDate}
            </span>
          </div>
        </div>
      );
    }
  }
);
