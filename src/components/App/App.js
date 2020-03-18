import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import Menu from '../Menu/Menu.js'
import Form from '../Form/Form.js'
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
      technology,
      all: [...local, ...entertainment, ...health, ...science, ...technology],
      selectedTopic: local
    }
  }

  filterTopic = (topic) => {
    if (this.state[topic]) {
      this.setState({selectedTopic: this.state[topic]})
    } else {
      const searchedArtciles = this.state.all.filter(article => {
        return article.headline.includes(topic) || article.description.includes(topic)
      });
      this.setState({selectedTopic: searchedArtciles});
    }
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1>Da Newz</h1>
          <Menu 
            topics = {
              {
                local: {
                  contents: this.state.local,
                  key: 1
                },
                entertainment: {
                  contents: this.state.entertainment,
                  key: 2
                },
                health: {
                  contents: this.state.health,
                  key: 3
                },
                science: {
                  contents: this.state.science,
                  key: 4
                },
                technology: {
                  contents: this.state.technology,
                  key: 5
                }
              }
            }
            filterTopic = {this.filterTopic}
          />
          <Form 
            filterTopic={this.filterTopic}
          />
        </header>
        <NewsContainer 
          articles={this.state.selectedTopic}
        />
      </div>
    );
  }
}

export default App;
