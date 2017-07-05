import axios from 'axios';

const NewsUtils = {
  /**
   * Downloads the news from selected sources
   * returns a promise
   */
  downloadNews(source) {
    return axios.get(encodeURI(`http://localhost:8080/news/${source}`));
  },
  /**
   * Formats a date into dd/MM/yy, hh:mm
   */
  formatDate(dateString) {
    if (dateString !== 'null') {
      const date = new Date(dateString);
      const yearShort = ("" + date.getFullYear()).substr(2)
      return `${stringPad(date.getDate())}/${stringPad(date.getMonth())}/${yearShort}, ${stringPad(date.getHours())}${stringPad(date.getMinutes())} hrs`;
    } else {
      return "";
    }
  },
  /**
   * Downloads the available news souces
   */
  downloadNewsSources() {
    return axios.get(encodeURI('http://localhost:8080/news/sources'));
  }
}

function stringPad(n) {
    return String("0" + n).slice(-2);
}

export default NewsUtils;
