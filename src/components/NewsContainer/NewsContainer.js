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

  return <div  className="articles-container">{newsArticles}</div>
}

export default NewsContainer;