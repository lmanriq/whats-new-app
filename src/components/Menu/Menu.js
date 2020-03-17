import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isCool: true
    }
  }

  render() {
    const labels = Object.keys(this.props).map(prop => (
      <button key={this.props[prop].key}>{prop}</button>
    ))

    return (
      <nav>
        {labels}
      </nav>
    )
  }

  filterTopics() {

  }
}

export default Menu;