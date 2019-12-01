import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feed from './components/Feed';
import FeedItemPage from './components/FeedItemPage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Feed} />
            <Route path="/post/:id" render={(props) => <FeedItemPage feedItem={this.state} />} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;