import React, { Component } from 'react';
import NewsUtils from './NewsUtils';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: undefined
    }
  }

  componentDidMount() {
    NewsUtils.downloadNews()
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

      })
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading</h1>
      );
    } else if (this.state.error) {
      return (
        <h1>Error</h1>
      );
    } else {
      const news = this.state.data;
      return (
        <div id="news" className="container">
          <div className="row">
            {news.map(article => {
              return (
                  <div className="col-md-4">
                    <div className="well" >
                      <p id="news-title">{article.title}</p>
                      <a href={article.url} className="thumbnail">
                        <img src={article.urlToImage} alt="Picture Missing"/>
                      </a>
                      <p>{article.description}</p>
                      <i>{article.author !== 'null' ? article.author : ""} - {NewsUtils.formatDate(article.publishedAt)}</i>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }
}

export default News;
