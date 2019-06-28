import React from "react";
import { connect } from "dva";

import "./HomeHeadBoard.scss";

export default connect()(
  class HomeHeadBoard extends React.Component {
    render() {
      return (
        <div className="headBoardBox">
          <img
            src="https://gw.alicdn.com/tfs/TB1ZPa0EzTpK1RjSZKPXXa3UpXa-750-420.png_790x10000.jpg_.webp"
            alt=""
          />
        </div>
      );
    }
  }
);
