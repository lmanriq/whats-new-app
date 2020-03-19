import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom'

describe ('NewsArticle', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<NewsArticle 
        id={5}
        key={5}
        headline={'Florida Man Gets Eaten By Gators'}
        img={'https://www.rollingstone.com/scary-gator-photo'}
        description={'Gary "the Gator Man" Gorbichov gets ruthlesslessy mauled to death by King K. Rool and his cronies'}
        url={'https://www.rollingstone.com/scary-gator-story'}
      />)
    // const labelEl = getByText('Search...');
    // expect(labelEl).toBeInTheDocument();
  })
})