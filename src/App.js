import React, { Component } from 'react';
import './public/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './public/weather-icons-2.0.10/css/weather-icons.min.css';
import './public/weather-icons-2.0.10/css/weather-icons-wind.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Weather from './Components/Weather/Weather';
import News from './Components/News';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Weather}/>
          <Route exact path="/Weather" component={Weather}/>
          <Route exact path="/News" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;
