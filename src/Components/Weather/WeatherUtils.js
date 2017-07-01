import axios from 'axios';

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
}

export default WeatherUtils;
