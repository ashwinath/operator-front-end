import React, { Component } from 'react';
import NewsUtils from './NewsUtils';
import Loader from 'halogen/RingLoader';

class NewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: undefined
    }
  }

  componentDidMount() {
    NewsUtils.downloadNewsSources()
      .then(data => {
        this.setState(() => {
          return {
            loading: false,
            error: false,
            data: data.data.sources
          }
        });
      })
      .catch(err => {
        console.error(err);
        this.setState(() => {
          return {
            loading: false,
            error: true,
            data: undefined
          }
        });
      });
  }

  render() {
    if (this.state.data) {
      const newsSources = this.state.data;
      return (
        <div className="col-md-offset-3 col-md-6">
          {newsSources.map(source => {
            return (
            <div>
              <a id={source}
                onClick={this.props.clickFunc}>
                {source}
              </a>
            </div>
            )
          })}
        </div>
      )
    } else if (this.state.loading) {
      return (
        <Loader className="spinner" color="#337ab7" size="200px" margin="4px"/>
      );
    } else {
      return (
        <h1>Error</h1>
      )
    }
  }
}

export default NewsSection;
