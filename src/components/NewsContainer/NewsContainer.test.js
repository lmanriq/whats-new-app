import React from 'react';
import { render } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import local from '../../data/local';
import '@testing-library/jest-dom'

describe ('NewsContainer', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<NewsContainer
        articles={local}
      />)
    const randomArticle = getByText('The Who postpones Denver Concert at the Pepsi Center');
    expect(randomArticle).toBeInTheDocument();
  })
})