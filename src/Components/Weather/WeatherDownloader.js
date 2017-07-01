import axios from 'axios';

function downloadWeather() {
  return axios.get(encodeURI('http://localhost:8080/weather'));
}

export default downloadWeather;
