import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";

import "./HomeMain.scss";

import HomePart1 from "./Home-part1/HomePart1";
import HomePart2 from "./Home-part2/HomePart2";
import HomePart3 from "./Home-part3/HomePart3";
import HomePart4Guess from "./Home-part4-Guess/HomePart4Guess";

export default withRouter(
  connect(state => {
    return state;
  })(
    class HomeMain extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          totalList: [],
          bannerList: [],
          entryList: [],
          subEntryList: [],
          benefitList: [],
          rightsList1: [],
          rightsList2: [],
          inspirationList: [],
          productList: [],
          liveList: []
        };
      }

      componentDidMount() {
        if (sessionStorage.getItem("main")) {
          let data = JSON.parse(sessionStorage.getItem("main"));
          this.setState({
            totalList: data,
            bannerList: data[1].items,
            entryList: data[2].items,
            subEntryList: data[3].items,
            benefitList: data[4].items,
            rightsList1: data[5].items[0].mainItem,
            rightsList2: data[5].items[0].itemList,
            inspirationList: data[8].items,
            productList: data[10].items,
            liveList: data[12].items
          });
        } else {
          this.totalData();
        }
      }

      //调用仓库的axios
      async totalData() {
        await this.props.dispatch({
          type: "store/getHomeData",
          payload:
            "https://www.easy-mock.com/mock/5cfba291e5e7b850d846cdbe/flypig/proxy_flyPigHomePage"
        });
        let data = this.props.store.homeData.sections;
        sessionStorage.setItem("main", JSON.stringify(data));
        this.setState({
          totalList: data,
          bannerList: data[1].items,
          entryList: data[2].items,
          subEntryList: data[3].items,
          benefitList: data[4].items,
          rightsList1: data[5].items[0].mainItem,
          rightsList2: data[5].items[0].itemList,
          inspirationList: data[8].items,
          productList: data[10].items,
          liveList: data[12].items
        });
      }

      render() {
        return (
          <div className="mainBox">
            <div>
              <HomePart1
                List1={{
                  banner: this.state.bannerList
                }}
              />
              <HomePart2
                List2={{
                  entryList: this.state.entryList,
                  subEntryList: this.state.subEntryList,
                  benefitList: this.state.benefitList,
                  rightsList1: this.state.rightsList1,
                  rightsList2: this.state.rightsList2
                }}
              />
              <HomePart3
                List3={{
                  inspiration: this.state.inspirationList,
                  product: this.state.productList,
                  live: this.state.liveList
                }}
              />
              <HomePart4Guess />
            </div>
          </div>
        );
      }
    }
  )
);
