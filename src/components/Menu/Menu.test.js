import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';
import '@testing-library/jest-dom'

describe ('Menu', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<Menu 
      
      />)
    // const labelEl = getByText('Search...');
    // expect(labelEl).toBeInTheDocument();
  })
})