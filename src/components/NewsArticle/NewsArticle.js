import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  const addErrorImg = (e) => {
    e.target.src = require('../../icons/image-not-found.png')
  }

  return (
    <article className="article">
      <h3>{props.headline}</h3>
      <a 
        href={props.url}
        target="_blank"
        rel="noreferrer noopener">
        <img 
          src={props.img} 
          alt={props.headline + ' photo'}
          onError={addErrorImg}/>
      </a>
      <h4>{props.description}</h4>
    </article>
  )
};

export default NewsArticle;