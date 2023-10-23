import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

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

  test('renders nice to see if button not clicked', () => {
    render(<Greeting />);
    const pText = screen.getByText('Its nice to see u');
    expect(pText).toBeInTheDocument();
  });

  test('renders changed if button was clicked', () => {
    // arrange
    render(<Greeting />);

    //   act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // assert
    const pText = screen.getByText(/Changed/i);
    expect(pText).toBeInTheDocument();
  });

  test('does not render "nice to see u" if the button clicked', () => {
    // arrange
    render(<Greeting />);

    //   act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // assert
    const pText = screen.queryByText('Its nice to see u');
    expect(pText).toBeNull();
  });
});
