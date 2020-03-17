import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js'
import './NewsContainer.css'

const NewsContainer = ({ articles }) => {
  const newsArticles = articles.map(article => (
    <NewsArticle

    />
  ))

  return <div  className="articles-container">{newsArticles}</div>
}

export default NewsContainer;