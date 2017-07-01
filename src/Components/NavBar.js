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
<<<<<<< HEAD
        {topics.map(topic => {
          return (
            <Link className="topic"
              to={`/${topic}`}
              onClick={this.handleClick}>
              {topic}
            </Link>
          );
        })}
      </div>
=======
          {topics.map(topic => {
            return (
            <a className="topic"
              id={topic}
              onClick={this.handleClick}>
              {topic}
            </a>
          )})}
        </div>
>>>>>>> 0270eddb51c36e1e2a1e0ac3c0f62369b3ddf58c
    );
  }
}

export default NavBar;
