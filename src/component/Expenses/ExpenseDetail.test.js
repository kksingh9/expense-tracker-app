import { render, screen } from '@testing-library/react';
import ExpenseDetail from './ExpenseDetail';
import { Provider } from "react-redux";
import store from "../../store/index";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const rend = component => render(
    <BrowserRouter>
    <Provider store={store}>
        {component}
    </Provider>
    </BrowserRouter>
    )

describe('ExpenseDetail component', () => {
    test('renders posts if request succeeds', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });
        rend(<ExpenseDetail />);

       const list = await screen.findAllByRole('listitem');
       expect(list).not.toHaveLength(0);
    });
});