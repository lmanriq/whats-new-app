import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {
      topic: null
    }
  }

  render() {
    const buttons = Object.keys(this.props.topics).map(topic => (
      <button key={this.props.topics[topic].key}
              onClick={() => this.props.filterTopic(topic)}>
              {topic}</button>
    ))

    return (
      <nav>
        {buttons}
      </nav>
    )
  }
}

export default Menu;