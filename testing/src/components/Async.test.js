import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Async from './Async';

describe('Async comp', () => {
  test('renders posts if req succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first' }],
    });

    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
