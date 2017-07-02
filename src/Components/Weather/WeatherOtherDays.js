import React, { Component } from 'react';
import WeatherUtils from './WeatherUtils'

class WeatherOtherDays extends Component {
  render() {
    const weatherInfo = this.props.data;
    return (
      <div className="col-md-6 col-sm-12">
        {weatherInfo.map(dailyInfo => {
          return <OtherDay data={dailyInfo}/>
        })}
      </div>
    );
  }
}

function OtherDay(props) {
  return (
    <div id="weather-other-info" className="col-xs-12">
      <div className="col-xs-2">
        <i className={WeatherUtils.mapWeatherIdToIconCss(props.data.WEATHER_ID)} />
      </div>
      <div className="col-xs-6">
        <p id="weather-other-date">{`${WeatherUtils.formatDay(props.data.DATE)}, ${WeatherUtils.formatDate(props.data.DATE)}`}</p>
      </div>
      <div className="col-xs-2">
        <p id="weather-other-max">{Math.round(props.data.MAX)}°C</p>
      </div>
      <div className="col-xs-2">
        <p id="weather-other-min">{Math.round(props.data.MIN)}°C</p>
      </div>
    </div>
  )
}
export default WeatherOtherDays;

