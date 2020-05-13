import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import NewsFeeds from "./components/NewsFeeds";

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b9f39cc5d37482ea06c1e406abd1e76"
    )
      .then((res) => res.json())
      .then((res) => this.setState({ news: res.articles }));
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <NewsFeeds {...props} news={this.state.news} />
              )}
            />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
