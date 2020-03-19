import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('App', () => {
//   it('can search for articles', () => {
//     const { getByText, 
//             getByPlaceholderText, 
//             getByTestId } = render(<App />);
//     fireEvent.change(getByPlaceholderText('Search Articles'), {target: {value: 'chicken'}});
//     fireEvent.click(getByTestId('search-btn'));
//     const searchedArticle = getByText('Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner');
//     expect(searchedArticle).toBeInTheDocument();
//   })
// })