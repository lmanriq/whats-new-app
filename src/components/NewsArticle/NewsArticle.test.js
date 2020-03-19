import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom'

describe ('NewsArticle', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<NewsArticle 
      
      />)
    // const labelEl = getByText('Search...');
    // expect(labelEl).toBeInTheDocument();
  })
})