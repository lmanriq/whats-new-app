import React from 'react';
import { render } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import '@testing-library/jest-dom'

describe ('NewsContainer', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<NewsContainer 
      
      />)
    // const labelEl = getByText('Search...');
    // expect(labelEl).toBeInTheDocument();
  })
})