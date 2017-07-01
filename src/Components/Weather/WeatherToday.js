import React, { Component } from 'react';
import WeatherUtils from './WeatherUtils';

class WeatherToday extends Component {
  render() {
    const weatherInfo = this.props.data;
    return (
      <div className="col-md-6 col-sm-12">
        <h1>Weather Today</h1>
      </div>
    );
  }
}

export default WeatherToday;
