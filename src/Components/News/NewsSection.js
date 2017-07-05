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
  }

  componentWillReceiveProps(nextProps) {
    NewsUtils.downloadNews(nextProps.source)
      .then(data => {
        this.setState(() => {
          return {
            loading: false,
            error: false,
            data: data.data
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
    if (!this.props.source) {
      return (
        <h1>Select a news source</h1>
      )
    } else if (this.state.loading) {
      return (
        <Loader className="spinner" color="#337ab7" size="200px" margin="4px"/>
      );
    } else if (this.state.error) {
      return (
        <h1>Error</h1>
      );
    } else {
      const news = this.state.data;
      return (
        <div>
          <div className="col-md-offset-2 col-md-8 col-md-offset-2">
            {news.map(article => {
              return <Article article={article}/>
            })}
          </div>
        </div>
      );
    }
  }
}

function Article(props) {
  const article = props.article;
  return (
      <div className="well">
        <p id="news-title">{article.title}</p>
        <a href={article.url} className="thumbnail">
          <img src={article.urlToImage} alt="Missing"/>
        </a>
        <p>{article.description}</p>
        <i>{article.author !== 'null' ? article.author : ""} - {NewsUtils.formatDate(article.publishedAt)}</i>
      </div>
  )
}

export default NewsSection;
