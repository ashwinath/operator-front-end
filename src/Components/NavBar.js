import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const topics = [
      "Weather",
      "News"
    ];

    return (
      <div className="text-center">
        <h1 className="brand">
          Operator
        </h1>
        {topics.map(topic => {
          return (
          <NavLink className="topic"
            activeClassName="selected"
            to={`/${topic}`}>
            {topic}
          </NavLink>
        )})}
      </div>
    );
  }
}

export default NavBar;
