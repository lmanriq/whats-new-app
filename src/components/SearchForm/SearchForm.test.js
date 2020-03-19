import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from './SearchForm';
import '@testing-library/jest-dom'

describe ('SearchForm', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<SearchForm 
      
      />)
    // const labelEl = getByText('Search...');
    // expect(labelEl).toBeInTheDocument();
  })
})