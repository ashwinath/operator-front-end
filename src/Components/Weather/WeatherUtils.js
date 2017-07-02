import axios from 'axios';
import _ from 'lodash';

const STEP = 22.5;
const NUM_AVAIL_DIRECTIONS = 16;
const AVAIL_DIRECTION_LIST = _.range(NUM_AVAIL_DIRECTIONS)
      .map(x => x * STEP + 11.25);
const WIND_CSS_LIST = _.range(NUM_AVAIL_DIRECTIONS)
  .map(x => Math.round(x * STEP))
  .map(x => `wi wi-wind towards-${x}-deg`);
    
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
  mapWeatherIdToIconCss(weatherIdString) {
    const weatherId = parseInt(weatherIdString, 10);
    const hourNow = new Date().getHours();
    const dayOrNight = (7 <= hourNow && hourNow <= 19)
      ? 'day'
      : 'night';
    let weatherType;
    if (200 <= weatherId && weatherId < 300) {
      weatherType = 'thunderstorm';
    } else if ((300 <= weatherId && weatherId < 400)
      || (500 <= weatherId && weatherId < 600)) {
      weatherType = 'rain';
    } else if (600 <= weatherId && weatherId < 700) {
      weatherType = 'snow';
    } else if (weatherId === 701 || weatherId === 741) {
      return 'wi wi-fog';
    } else if (weatherId === 711) {
      return 'wi wi-smoke';
    } else if (weatherId === 721 || weatherId === 731
      || weatherId === 751 || weatherId === 761) {
      return 'wi wi-dust';
    } else if (weatherId === 762) {
      return 'wi wi-volcano';
    } else if (weatherId === 771) {
      weatherType = 'rain-wind';
    } else if (weatherId === 781 || weatherId === 900
      | weatherId === 901) {
      return 'wi wi-tornado';
    } else if (weatherId === 800) {
      return dayOrNight === 'day'
        ? 'wi wi-day-sunny'
        : 'wi wi-night-clear';
    } else if (weatherId === 801) {
      weatherType = 'cloudy';
    } else if (weatherId === 802) {
      return 'wi wi-cloud';
    } else if (weatherId === 803 || weatherId === 804) {
      weatherType = 'rain';
    } else if (weatherId === 902 || weatherId === 962) {
      return 'wi wi-hurricane';
    } else if (weatherId === 905
      || (951 <= weatherId && weatherId <= 956)) {
      return 'wi wi-windy'
    } else if (weatherId === 906) {
      weatherType = 'hail';
    } else if (957 <= weatherId  && weatherId <= 959) {
      return 'wi wi-gale-warning';
    } else if (960 <= weatherId  && weatherId <= 961) {
      weatherType = 'storm-showers';
    } else {
      return 'wi wi-na';
    }

    return `wi wi-${dayOrNight}-${weatherType}`;
  },
  /**
   * Given a bearing, 
   * return the css that gives the correct wind direction
   */
  mapBearingToIconCss(bearingString) {
    const bearing = parseInt(bearingString, 10);
    const index = AVAIL_DIRECTION_LIST
      .findIndex(x => x > bearing);
    return WIND_CSS_LIST[index];
  },
  /**
   * Get the month name given the number
   */
  mapMonthToMonthName(number) {
    var monthNames = [
      "January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October",
      "November", "December"
    ];
    return monthNames[number];
  },
  /**
   * Formats date into human friendly format.
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()} ${WeatherUtils.mapMonthToMonthName(date.getMonth())} ${date.getFullYear()}`;
  },
  /**
   * Maps numerical day to 3 character name of the day.
   */
  formatDay(dateString) {
    const dayNumber = new Date(dateString).getDay();
    switch (dayNumber) {
        case 0: return 'Sun';
        case 1: return 'Mon';
        case 2: return 'Tue';
        case 3: return 'Wed';
        case 4: return 'Thu';
        case 5: return 'Fri';
        case 6: return 'Sat';
    }
  }

}

export default WeatherUtils;
