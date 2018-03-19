import React, { Component } from "react";
import NewsList from "./containers/NewsList";
import NewsDetail from "./components/NewsDetail";
import Settings from "./components/Settings";
import fetchIltalehti from "./tools/fetchIltalehti.js";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    selectedNews: null
  };

  componentDidMount() {
    this.handleFetching();
  }

  handleFetching = async () => {
    // Fetches RSS-feed data and sets it to state
    const feed = await fetchIltalehti();
    this.setState({ ...this.state, items: feed, selectedNews: feed.items[0] });
  };
  render() {
    return (
      <div className="wrapper">
        <Settings />
        <div className="App">
          <NewsList
            onNewsSelect={selectedNews => this.setState({ selectedNews })}
            items={this.state.items.items}
          />
          <NewsDetail active={this.state.selectedNews} />
        </div>
      </div>
    );
  }
}

export default App;
