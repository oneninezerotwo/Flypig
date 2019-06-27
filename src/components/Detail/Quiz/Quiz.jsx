import React, { Component } from "react";
import { connect } from "dva";
import "./Quiz.css";
export default connect(state => {
  return state;
})(
  class Quiz extends Component {
    render() {
      return (
        <div className={"quiz"}>
          <div className={"quiz-top"}>
            <span className={"quiz-t"}>问大家（11）</span>
            <div className={"quiz-r"}>
              <span>查看全部</span>
              <i />
            </div>
          </div>
          <div className={"question"}>
            {this.props.detail.detail.askAll.data.questions.map(
              (item, index) => {
                return (
                  <div className={"question-t"} key={index}>
                    <span className={"icon"} />
                    <p className={"question-c"}>{item.question}</p>
                    <span className={"ans"}>{item.count}个回答</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      );
    }
  }
);
