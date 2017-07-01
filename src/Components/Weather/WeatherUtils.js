import axios from 'axios';
import _ from 'lodash';

const STEP = 22.5;
const NUM_AVAIL_DIRECTIONS = 16;
const AVAIL_DIRECTION_LIST = _.range(NUM_AVAIL_DIRECTIONS)
      .map(x => x * STEP + 11.25);
const WIND_CSS_LIST = _.range(NUM_AVAIL_DIRECTIONS)
  .map(x => Math.round(x * STEP))
  .map(x => `wi wi-wind towards-${x}-deg`)
    
const WeatherUtils = {
  /**
   * Downloads the weather from the operator rest server
   * returns a promise
   */
  downloadWeather() {
    return axios.get(encodeURI('http://localhost:8080/weather'));
  },
  /**
   * Given a weather id, return the correct css
   */
  mapWeatherIdToIconCss(weatherId) {

  },
  /**
   * Given a bearing, 
   * return the css that gives the correct wind direction
   */
  mapBearingToIconCss(bearingString) {
    const bearing = parseInt(bearingString);
    const index = AVAIL_DIRECTION_LIST
      .findIndex(x => x > bearing);
    return WIND_CSS_LIST[index];
  }
}

export default WeatherUtils;
