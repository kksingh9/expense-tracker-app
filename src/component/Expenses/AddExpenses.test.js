import { render, screen } from '@testing-library/react';
import AddExpenses from './AddExpenses';
import store from "../../store/index";
import { Provider } from "react-redux";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('AddExpenses component', () => {
    test('renders posts if request succeeds', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {return{id: 'p1', title: 'First post'}}
        });
        rend(<AddExpenses />);

    //    const list = await screen.findAllByRole('listitem');
    //    expect(list).not.toHaveLength(0);
    });
});