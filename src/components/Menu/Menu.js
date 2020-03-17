import React, { Component } from 'react';
import './Menu.css'

const Menu = (props) => {
    const buttons = Object.keys(props.topics).map(topic => {
      const imgUrl = require(`../../icons/${topic}.svg`);
      return (
        <button key={props.topics[topic].key}
                onClick={() => props.filterTopic(topic)}>
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

export default Menu;