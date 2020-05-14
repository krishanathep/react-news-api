import React, { Component } from "react";
import Moment from 'react-moment'

export class NewsFeeds extends Component {
  render() {
    return (
      <div className="News Feed container">
        <h1 align="center" className='mt-3'>NEWS FEED</h1>
        <div className="row">
        {this.props.news.map(feed => (
          <div className="col-md-4">
              <div className="card mt-3" key={feed.id}>
                  <div className="card-body">
                     <h4 className="card-title">
                         {feed.source.name}
                     </h4>
                     <Moment fromNow>
                     <p className="card-text">
                         {feed.publishedAt}
                     </p>
                     </Moment>
                     <p className="card-text  text-muted mt-3">
                         {feed.title}
                     </p>
                  </div>
                  <div className="card-footer">
                      <a href={feed.url} className='btn btn-outline-primary float-right'>GO TO LINK</a>
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
