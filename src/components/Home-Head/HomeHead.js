import React from "react";
import { connect } from "dva";
import { Link, withRouter } from "dva/router";

import "./HomeHead.scss";

class HomeHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headBox">
        <div className="headSubBox">
          <div
            className="colorBox"
            style={{ opacity: this.props.css3.barLine }}
          />
          <div className="titleBox">
            <div>
              <img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAoCAMAAABAd72AAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTDMzMzU1NTQ0NDQ0NDY2NjQ0NDMzMzQ0NDMzMzMzMzQ0NDQ0ND09PTk5OTQ0NDMzMzMzMzQ0NDMzM192AfkAAAATdFJOUwCuLG6RHmPZv/bnOoAGEFakzUmkBQa7AAACxElEQVRIx5VX2YKDIAysAkK4BPz/f10tCIRrd+elSumQhMnRz9EhsM8KzOYn94WOb3A9gGa3v3psqwMoiCOeQOPuEM+KL77dPaC/pJ3Ti8dGehvAor0uLodkWbPbyhG/m9PH/aDNFh9YDKlL9G+IyQN1GyFG5k/Z7buFxw/CrinkN8j7SSJ0vgiY02NrhFFz+tD8ds+mLe5WCWQfmbLTTnRZO/XirhLeC9fZyTu4mn+RFqpnbj4z63U21ZWr93n/llZIcakyK54Oe+f3+TKdKdBb5SvP2aB4F0JS4kGyYy2y1/HkXXYyeFbdQF8pfY580Dm4tfeH8A0DG7Cbs1YOTrYbqjqnh0fCqSPjWe/PLV9CE9K6S8fIuNoUF6iFUwt6syjE2Qp5reDNQjjFeCAoxJKmjcIu2dvbRcIxMCig4oLtNK8dVP2HHQvndWWr9auDqewgJy/IcYqvnrKlcB4K2MhurGU3RnZU5hmSnJVqWk2QcB6KHJ+SxrWmypmBNxoYwCDhOBRIlOGW47Kaixw/F6UQC8dP24uSqPHtWWIiJAybKa44MCoIiM3hV9RIwi8VBzWh7DOqCXc2qO2vraTk0Vc44UI8kVyjLD2VX2RsR89r4ZCevVxOEo5bJdVaOHlA4aq9HHgnpmI86J1FBNFV05Fw3tKnTXM5/rCQnISLi7ZtfYwfzxpYOPybtIfBWc31nm99Y1t4nTTdYCbWrUqTs2uWJ6v7alVWgWaotESXwlmBNE424yNvwzUQzgq0OGlawRzvUlfZ4BpPocMhNsV779jfJTYbHsVv9FCkkeTgYtwJy0sw1SWoNftZWZHkYDuF+Onoe0dfLOAH/biKRJpe3GRw/zNUdQ3bbiN2ImdzDv0Xu+xGIVRx+qZl+T/Y0wUdk69HQ9rwf8rE9oAKTAs9braBegkAa7ulf0ad3AJ8u527Uk1+ALbVjTqToBHYAAAAAElFTkSuQmCC"
              />
            </div>
          </div>
          {/* <div></div> */}
          <div className="dotBox">
            <div>
              <img
                alt=""
                src="https://gw.alicdn.com/tfs/TB1X1iBahnaK1RjSZFtXXbC2VXa-90-90.png"
              />
            </div>
          </div>
          {/* <div></div> */}
          <div className="meBtn">
            <div>
              <img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTDQ0NDMzMzQ0NDMzMzQ0NDMzMzw8PDMzMzMzMzY2NjQ0NDMzMzMzMzMzMwhYo1AAAAAOdFJOUwDA/HXpPbALmdIhW56MA3IOiwAAAV1JREFUOMu1lL1KA1EQha8ka2JsDErEJsUSBQuHCGqhsEhExGYJGrATo02qEEHBMlVsVawlYC8Be5/BJxAcY0CF8wxu9sfdezNgo9PscL+ds3NnDqvUf8R+J+/Hs36cWYENP6Z0UEMUOkjZjN2h0IwBHPTX/WRMBxbhUkngjN6UCBy0ZeCWWiKwECkZIIVPGWRpUwbjdPUrmOAjWSrNbfnjDyjL7TqoihfMVPpKHEk2rtWH6PCOksZ+Aa4qYVH3rqEUrvYWZJdN84Rm2B5x1dA+NrZaouEaq8Kx9dipFxobRk8qt0yekqfF013t9SJHPqTXRFGuSSCUrucqYPAgrqkR908Ohtn5mkv80/KkzXG9VSS7F+Z7+EjoWneYD9MbzCY7OcVitNeBdt9MM9xuGvoKvOUE1jiEMdEU3v3nC3eNedKS/zzmvBG0EACMRACeyDznr+DidVOq0PvTP8s3+V20chwLWVgAAAAASUVORK5CYII="
              />
            </div>
          </div>
          <Link
            to="/searchpage"
            className="homeSearchBar"
            style={{
              width: `${this.props.css3.searchStyle[0]}rem`,
              transform: `translateY(${this.props.css3.searchStyle[1]}rem)`
            }}
          >
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGlpaWdnZ2dnZ2ZmZmZmZmZmZnBwcGhoaGdnZ2dnZ2ZmZmxsbGdnZ2dnZ2ZmZgmtyTYAAAAPdFJOUwAiUXvR3vMGN2an6hCPubZYcwsAAAD3SURBVBjTY2BgYGDXdf3tpcMAA+yz/wPBNxsYX+T/t7W2q///boBwOfK/qAOpvv8/IXyx/wZgWu2/Alh3/CeYukQQxQyVZmDQ/wUij32Bmcv1H2Si/icYnxGscn063CH+DiDiAZxv/wFI7L8A58//CCTy0fjxCxDq/wCJ9w5w/voNIMGPcH/mg5TK/4XxOcEe4PsP9SfD6a8FYFfFQJW/h7jU/osAmD73H2IT7/+dIHVM8f99oNb+j2082Oz/Px6qkMkfFJ7/d/L+D4QoYHoG5HoWMNz/KgA1umlSDzioAhlQgP1vARQ+8/8dqArmf0Hlc2ah8hkKAIzOXNKx9n7VAAAAAElFTkSuQmCC"
            />
            <span>香港迪士尼</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(HomeHead));
