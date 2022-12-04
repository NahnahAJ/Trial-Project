import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders paragraph text', () => {
  render(<App />);
  const linkElement = screen.getByText('Type / for blocks');
  expect(linkElement).toBeInTheDocument();
});