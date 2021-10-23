import React, { Component } from "react";

import SkeletonArticle from "../skeletons/skeletonArticle";
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

class CardDesign extends React.Component {
  state = {
    flag: false,
  };
  async componentDidMount() {
    const res = await timeout(1500);
    //res.then(() => );
    this.setState({ flag: true });
  }
  render() {
    return (
      <div>
        {!this.state.flag ? (
          <SkeletonArticle />
        ) : (
          <div className="card-container">
            <img className="logo" src={this.props.source} alt="source info" />
            <div className="text">
              <h1>{this.props.title}</h1>
              <a className="description" href={this.props.fullLink}>
                {this.props.description}
              </a>
              <h6>
                {this.props.date} . {this.props.timeToRead}m to read
              </h6>
            </div>
            <div className="image-wrapper">
              <img className="image" src={this.props.image} alt="image" />
              <h6>Published by {this.props.creator}</h6>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardDesign;
