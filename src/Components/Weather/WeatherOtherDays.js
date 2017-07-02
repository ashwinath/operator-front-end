import React, { Component } from 'react';
import WeatherUtils from './WeatherUtils'

class WeatherOtherDays extends Component {
  render() {
    const weatherInfo = this.props.data;
    console.log(weatherInfo)
    return (
      <div className="col-md-6 col-sm-12">
        {weatherInfo.map(dailyInfo => {
          return (
            <div id="weather-other-info" className="col-sm-12">
              <div className="col-sm-2">
                <i className={WeatherUtils.mapWeatherIdToIconCss(dailyInfo.WEATHER_ID)} />
              </div>
              <div className="col-sm-6">
                <p id="weather-other-date">{`${WeatherUtils.formatDay(dailyInfo.DATE)}, ${WeatherUtils.formatDate(dailyInfo.DATE)}`}</p>
              </div>
              <div className="col-sm-2">
                <p id="weather-other-max">{Math.round(dailyInfo.MAX)}°C</p>
              </div>
              <div className="col-sm-2">
                <p id="weather-other-min">{Math.round(dailyInfo.MIN)}°C</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default WeatherOtherDays;

