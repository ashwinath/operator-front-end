import React, { Component } from 'react';
import NewsUtils from './NewsUtils';
import Loader from 'halogen/RingLoader';
import NewsSection from './NewsSection';
import NewsSources from './NewsSources';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: undefined
    }

    this.newsOnClick = this.newsOnClick.bind(this);
  }

  newsOnClick(event) {
    event.preventDefault();
    const newSource = event.target.id;
    this.setState(() => {
      return {
        source: newSource
      }
    });
  }

  render() {
    // TODO: add side panel and remove bbc-news hard coding
    // TODO: add functionality to add to list
    // TODO: post functionality should trigger a news download on server
    return (
      <div id="news">
        <div className='col-md-3'>
          <NewsSources clickFunc={this.newsOnClick}/>
        </div>
        <div className='col-md-9'>
          <NewsSection source={this.state.source}/>
        </div>
      </div>
    )
  }

}

export default News;
