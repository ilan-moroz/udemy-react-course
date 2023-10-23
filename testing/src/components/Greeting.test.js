import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world text', () => {
  // arrange
  render(<Greeting />);

  //   act
  // ... nothing

  // assert
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
