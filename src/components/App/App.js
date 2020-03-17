import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology
    }
  }

  render () {
    return (
      <div className="app">
        <h1>Da Newz</h1>
        <NewsContainer 
          articles={this.state.local}
        />
      </div>
    );
  }
}

export default App;
