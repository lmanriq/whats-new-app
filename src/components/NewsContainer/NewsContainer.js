import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js'
import './NewsContainer.css'

const NewsContainer = ({ articles }) => {
  const newsArticles = articles.map(article => (
    <NewsArticle
      id={article.id}
      key={article.id}
      headline={article.headline}
      img={article.img}
      description={article.description}
      url={article.url}
    />
  ))
  
  const content = newsArticles.length ? newsArticles : <h5>No Stories Found</h5>
  return <main className="articles-container">{content}</main>
}

export default NewsContainer;