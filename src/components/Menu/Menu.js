import React, { Component } from 'react';
import './Menu.css'


class Menu extends Component {
    constructor(props) {
      super();
      this.state = {
        activeTopic: 'local'
      }
    }

    changeActiveTopic(topic) {
      this.props.filterTopic(topic);
      this.setState({activeTopic: topic});
    }

    render() {
      const buttons = Object.keys(this.props.topics).map(topic => {
        const imgUrl = require(`../../icons/${topic}.svg`);
        return (
          <button key={this.props.topics[topic].key}
                  onClick={() => this.changeActiveTopic(topic)}
                  className={this.state.activeTopic === topic ? 'active' : ''}>
                  <img src={imgUrl} alt={topic + ' icon'}/>
                  {topic}</button>
        )
      })
      return (
        <nav>
          {buttons}
        </nav>
      )
    }
}

// const Menu = (props) => {
//     const buttons = Object.keys(props.topics).map(topic => {
//       const imgUrl = require(`../../icons/${topic}.svg`);
//       return (
//         <button key={props.topics[topic].key}
//                 onClick={() => props.filterTopic(topic)}>
//                 <img src={imgUrl} alt={topic + ' icon'}/>
//                 {topic}</button>
//       )
//     })

//     return (
//       <nav>
//         {buttons}
//       </nav>
//     )
// }

export default Menu;