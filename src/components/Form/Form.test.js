import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom'

describe ('Form', () => {
  it('renders text that we expect', () => {
    // Setup
    // Render the component and pass it props that it needs
    const { getByText } = render(<Form 
      filterTopic={jest.fn()}
      />)
    const labelEl = getByText('Search...');
    expect(labelEl).toBeInTheDocument();
  })
})