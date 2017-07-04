import React, { Component } from 'react';
import NewsUtils from './NewsUtils';
import Loader from 'halogen/RingLoader';
import NewsSection from './NewsSection';

class News extends Component {
  render() {
    // TODO: add side panel and remove bbc-news hard coding
    // TODO: add functionality to add to list
    // TODO: post functionality should trigger a news download on server
    return (
      <div id="news">
        <div className='col-md-3'>
          Side panel
        </div>
        <div className='col-md-9'>
          <NewsSection source="bbc-news"/>
        </div>
      </div>
    )
  }

}

export default News;
