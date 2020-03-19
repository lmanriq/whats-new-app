import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import '@testing-library/jest-dom'
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

describe ('Menu', () => {
  it('renders text that we expect', () => {
    const mockFilterTopic = jest.fn();
    const { getByText } = render(<Menu 
        topics = {
          {
            local: {
              contents: local,
              key: 1
            },
            entertainment: {
              contents: entertainment,
              key: 2
            },
            health: {
              contents: health,
              key: 3
            },
            science: {
              contents: science,
              key: 4
            },
            technology: {
              contents: technology,
              key: 5
            }
          }
        }
        filterTopic = {mockFilterTopic}
      />)
    const scienceBtn = getByText('science');
    expect(scienceBtn).toBeInTheDocument();
  })

  it('filters by topic', () => {
    const mockFilterTopic = jest.fn();
    const { getByText } = render(<Menu 
        topics = {
          {
            local: {
              contents: local,
              key: 1
            },
            entertainment: {
              contents: entertainment,
              key: 2
            },
            health: {
              contents: health,
              key: 3
            },
            science: {
              contents: science,
              key: 4
            },
            technology: {
              contents: technology,
              key: 5
            }
          }
        }
        filterTopic = {mockFilterTopic}
      />)
      fireEvent.click(getByText('entertainment'));
      expect(mockFilterTopic).toHaveBeenCalledWith('entertainment');
  })
})