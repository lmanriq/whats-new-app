import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom'

describe ('Form', () => {
  it('renders text that we expect', () => {
    const mockFilterTopic = jest.fn();
    const { getByText } = render(<Form 
      filterTopic={mockFilterTopic}
      />)
    const labelEl = getByText('Search...');
    expect(labelEl).toBeInTheDocument();
  })

  it('can search for keywords', () => {
    const mockFilterTopic = jest.fn();
    const { getByPlaceholderText,
            getByRole } = render(<Form 
      filterTopic={mockFilterTopic}
      />)
    fireEvent.change(getByPlaceholderText('Search Articles'), {target: {value: 'chicken'}});
    fireEvent.click(getByRole('button'));
    expect(mockFilterTopic).toHaveBeenCalledWith('chicken');
  })
})