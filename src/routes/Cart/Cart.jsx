import React, { Component } from "react";
import Recom from "../../components/Cart/Recom/Recom";
import Shop from "../../components/Cart/Shop/Shop";
export default class Cart extends Component {
  render() {
    return (
      <div style={{ background: "#f2f3f4" }}>
        <Shop />
        <Recom />
      </div>
    );
  }
}
