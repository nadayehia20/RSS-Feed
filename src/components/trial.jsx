import React, { Component } from "react";
import Rss from "./feed";
import * as data from "../utils/api.json";

class CardGrid extends React.Component {
  state = {
    allData: data.allData2,
  };
  render() {
    return (
      <div>
        {this.state.allData.map((item) => (
          <Rss name1={item.name} age1={item.age} />
        ))}
      </div>
    );
  }
}

export default CardGrid;
