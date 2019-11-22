import React from 'react';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Flickr public feed</h1>
      </header>
      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;
