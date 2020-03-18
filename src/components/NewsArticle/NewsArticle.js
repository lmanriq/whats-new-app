import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className="article">
      <h3>{props.headline}</h3>
      <a 
        href={props.url}
        target="_blank"
        rel="noreferrer noopener">
        <img 
          src={props.img} 
          alt={props.headline + 'photo'}/>
      </a>
      <h4>{props.description}</h4>
    </article>
  )
};

export default NewsArticle;