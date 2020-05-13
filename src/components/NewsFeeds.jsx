import React, { Component } from "react";

export class NewsFeeds extends Component {
  render() {
    return (
      <div className="News Feed container">
        <h1 align="center" className='mt-3'>NEWS FEED</h1>
        <div className="row">
        {this.props.news.map(feed => (
          <div className="col-md-4">
              <div className="card mt-3" key={feed.id}>
                  <div className="card-header">
                  <img className='card-img' src={feed.urlToImage} alt=""/> 
                  </div>
                  <div className="card-body">
                     <h4 className="card-title">
                         {feed.title}
                     </h4>
                     <p className="card-text text-muted">
                         {feed.description}
                     </p>
                  </div>
                  <div className="card-footer">
                      <a href={feed.url} className='btn btn-primary'>GO TO LINK</a>
                  </div>
              </div>
          </div>
           ))}
        </div>
      </div>
    );
  }
}

export default NewsFeeds;
