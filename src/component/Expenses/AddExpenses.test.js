import { render, screen } from '@testing-library/react';
import AddExpenses from './AddExpenses';

describe('Async component', () => {
    test('renders posts if request succeeds', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });
        render(<AddExpenses />);

       const list = await screen.findAllByRole('listitem');
       expect(list).not.toHaveLength(0);
    });
});