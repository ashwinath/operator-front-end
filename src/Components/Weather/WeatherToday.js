import React, { Component } from 'react';
import WeatherUtils from './WeatherUtils';

class WeatherToday extends Component {
  render() {
    const weatherInfo = this.props.data;
    const todayDate = new Date(weatherInfo.DATE);
    const todayDateFormatted = `${todayDate.getDate()} ${WeatherUtils.mapMonthToMonthName(todayDate.getMonth())} ${todayDate.getFullYear()}`;
    console.log(weatherInfo);
    return (
      <div className="col-md-6 col-sm-12">
        <p id="weather-today-date">{`Today, ${todayDateFormatted}`}</p>

        <div className="col-sm-6">
          <i id="weather-today-icon" className={WeatherUtils.mapWeatherIdToIconCss(weatherInfo.WEATHER_ID)} />
        </div>
        <div className="col-sm-6">
          <p id="weather-today-max">{weatherInfo.MAX}°C</p>
          <p id="weather-today-min">{weatherInfo.MIN}°C</p>
        </div>

        <div id="today-weather-misc" className="col-sm-12">
          <p>Humidity: {weatherInfo.HUMIDITY}%</p>
          <p>Pressure: {weatherInfo.PRESSURE} hPa</p>
          <p>Wind Speed: <i className={WeatherUtils.mapBearingToIconCss(weatherInfo.WIND_DIRECTION)}/> {weatherInfo.WIND_SPEED} km/h</p>
        </div>
      </div>
    );
  }
}

export default WeatherToday;
