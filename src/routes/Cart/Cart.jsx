import React, { Component } from "react";
import Recom from "../../components/Cart/Recom/Recom";
import Shop from "../../components/Cart/Shop/Shop";
import Travel from "../../components/Cart/Travel/Travel";
export default class Cart extends Component {
  render() {
    return (
      <div style={{ background: "#f2f3f4" }}>
        <Shop />
        <Recom />
        <Travel />
      </div>
    );
  }
}
