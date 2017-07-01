import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: "Weather"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target.id)
    // TODO: add router and link to the weather page
  }

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
