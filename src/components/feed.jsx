import React, { Component } from "react";

class Rss extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name1}</h2>
        <h1>{this.props.age1}</h1>
      </div>
    );
  }
}

export default Rss;
