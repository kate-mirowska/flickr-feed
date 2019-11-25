import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feed from './components/Feed';
import FeedItemPage from './components/FeedItemPage';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Feed} />
            <Route path="/post/:id" render={(props) => <FeedItemPage feedItem={this.state} />} />
          </div>
        </Router>
    );
  }
}

export default App;