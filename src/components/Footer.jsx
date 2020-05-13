import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="Footer mt-5 mb-5">
        <div className="container" align="center">
          <span className="text-muted">
            <strong>
              POWERED BY <a href="https://newsapi.org"> NEWSAPI.ORG</a>
            </strong>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
