import React, { Component } from 'react';
import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import Menu from '../Menu/Menu.js'
import Form from '../Form/Form.js'
import NewsContainer from '../NewsContainer/NewsContainer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      // local: null,
      // entertainment: null,
      // health: null,
      // science: null,
      // technology: null,
      selectedTopic: null
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => this.setState({ data, selectedTopic: data.local }))
      .catch(err => console.log(err.message));
  }

  filterTopic = (topic) => {
    if (this.state.data[topic]) {
      this.setState({selectedTopic: this.state.data[topic]})
    } else {
      const allArticles = Object.keys(this.state.data).reduce((list, topic) => {
        return [...list, ...this.state.data[topic]];
      }, [])
      const searchedArticles = allArticles.filter(article => {
        const headline = article.headline.toLowerCase();
        const description = article.description.toLowerCase();
        topic = topic.toLowerCase();
        return headline.includes(topic) || description.includes(topic)
      });
      this.setState({selectedTopic: searchedArticles});
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
