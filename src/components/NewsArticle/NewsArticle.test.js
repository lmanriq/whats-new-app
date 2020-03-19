import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom'

describe ('NewsArticle', () => {
  it('renders text that we expect', () => {
    const headline = 'Florida Man Gets Eaten By Gators';
    const imgUrl = 'https://www.rollingstone.com/scary-gator-photo';
    const description = 'Gary "the Gator Man" Gorbichov gets ruthlesslessy mauled to death by King K. Rool and his cronies';
    const articleURL = 'https://www.rollingstone.com/scary-gator-story';
    const { getByText, getByAltText } = render(<NewsArticle 
        id={5}
        key={5}
        headline={headline}
        img={imgUrl}
        description={description}
        url={articleURL}
      />)
    expect(getByText(headline)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByAltText(headline + ' photo')).toBeInTheDocument();
  })
})