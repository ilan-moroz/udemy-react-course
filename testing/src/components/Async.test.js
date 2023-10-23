import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Async from './Async';

describe('Async comp', () => {
  test('renders posts if req succeeds', async () => {
    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
