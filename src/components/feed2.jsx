import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

class CardDesign extends React.Component {
  render() {
    return (
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
    );
  }
}

export default CardDesign;
