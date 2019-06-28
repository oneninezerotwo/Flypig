import React, { Component } from "react";
import Wslideshow from "../../components/Detail/Wslideshow/Slideshow";
import Minute from "../../components/Detail/Wminute/Minute";
import Mark from "../../components/Detail/Wmark/Mark";
import Promotion from "../../components/Detail/Promotion/Promotion";
import Region from "../../components/Detail/Region/Region";
import Wcommen from "../../components/Detail/Wcommen/Wcommen";
import Quiz from "../../components/Detail/Quiz/Quiz";
import Shops from "../../components/Detail/Shops/Shops";
import Footer from "../../components/Detail/Footer/Footer";
import { connect } from "dva";
export default connect(state => {
  return state;
})(
  class Detail extends Component {
    async componentDidMount() {
      if (sessionStorage.getItem("minute_box")) {
        this.props.dispatch({
          type: "detail/getSessionStorage",
          data: JSON.parse(sessionStorage.getItem("minute_box"))
        });
      } else {
        await this.props.dispatch({
          type: "detail/getDetailData",
          payload:
            "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/detail"
        });
        sessionStorage.setItem(
          "minute_box",
          JSON.stringify(this.props.detail.detail)
        );
      }
    }
    render() {
      return this.props.detail.detail ? (
        <div className={"slideshow"} style={{ background: "#f2f3f4" }}>
          <div style={{ paddingBottom: "48px" }}>
            <Wslideshow />
            <Minute />
            <Mark />
            <Promotion />
            <Region />
            <Wcommen />
            <Quiz />
            <Shops />
          </div>
          <Footer />
        </div>
      ) : (
        ""
      );
    }
  }
);
