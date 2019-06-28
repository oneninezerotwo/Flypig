import React from "react";
import { connect } from "dva";

import "../assets/HomePage.scss";

import axios from "axios";

import HomeHeadBoard from "../components/Home-Head-Board/HomeHeadBoard";
import HomeHead from "../components/Home-Head/HomeHead";
import HomeMain from "../components/Home-Main/HomeMain";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barLine: 0,
      searchStyle: [10.96875, 0],
      onOff: true,
      getTripList: []
    };
  }

  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener("scroll", this.scrollChange);
  }
  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener("scroll", this.scrollChange);
  }

  scrollChange = async () => {
    if (window.scrollY > 0) {
      this.setState({
        barLine: 1,
        searchStyle: [9.6875, -1.1875]
      });
    } else {
      this.setState({
        barLine: 0,
        searchStyle: [10.96875, 0]
      });
    }
    if (this.state.onOff && window.scrollY > document.body.scrollHeight / 2) {
      this.setState({
        onOff: false
      });
      const url =
        "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/flypig/proxy_flyPigHomePage_triplist";
      let { data } = await axios.get(url);
      this.props.dispatch({
        type: "store/getTripInfo",
        tripList: data.data.sections[1].items
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="homeBox">
        <HomeHeadBoard />
        <HomeHead
          css3={{
            barLine: this.state.barLine,
            searchStyle: this.state.searchStyle
          }}
        />
        <HomeMain />
      </div>
    );
  }
}

export default connect()(HomePage);
