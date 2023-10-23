import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting comp', () => {
  test('renders hello world text', () => {
    // arrange
    render(<Greeting />);

    //   act
    // ... nothing

    // assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
