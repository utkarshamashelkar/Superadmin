import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
test('renders Super Admin', () => {
  render(<Router> <App /></Router> );
  expect(screen.getByText(/Login Details for Senegal Search Super Admin/)).toBeInTheDocument();
});


