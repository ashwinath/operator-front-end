import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const topics = [
      "Weather",
      "News"
    ];

    return (
      <div className="text-center">
        <div className="brand">
          Operator
        </div>
        {topics.map(topic => {
          return (
          <a className="topic"
            id={topic}
            onClick={this.handleClick}>
            {topic}
          </a>
        )})}
      </div>
    );
  }
}

export default NavBar;
