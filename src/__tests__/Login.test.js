import { render, screen, within } from '@testing-library/react';
import Login from '../components/Login/Login'
import { BrowserRouter as Router } from 'react-router-dom';

test('To check if Sign In Button exist', () => {
  render(<Router> <Login /></Router>);
   const { getByText } = within(screen.getByRole('button'))
  expect(getByText(/Sign In/i)).toBeInTheDocument()
});