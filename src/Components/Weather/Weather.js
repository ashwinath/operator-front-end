import React, { Component } from 'react';
import WeatherToday from './WeatherToday';
import WeatherOtherDays from './WeatherOtherDays';
import WeatherUtils from './WeatherUtils';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      data: undefined,
      loading: true
    }
  }

  componentDidMount() {
    WeatherUtils.downloadWeather()
      .then(data => {
        this.setState(() => {
          return {
            error: false,
            data: data.data,
            loading: false
          }
        })
      })
      .catch(err => {
        console.error(err);
        this.setState(() => {
          return {
            error: true,
            data: undefined,
            loading: false
          }
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="weather text-center">
          <h1>Loading</h1>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="weather text-center">
          <h1>Hit an error</h1>
        </div>
      );
    } else {
      const todayData = this.state.data[0];
      const remainingData = this.state.data.splice(1, 7);
      return (
        <div className="weather">
          <WeatherToday data={todayData}/>
          <WeatherOtherDays data={remainingData}/>
        </div>
      );
    }
  }
}

export default Weather;
