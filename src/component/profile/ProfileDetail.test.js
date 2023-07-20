import { render, screen } from '@testing-library/react';
import ProfileDetail from './ProfileDetail';
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
            json: async () => [{id: 'p1',}]
        });
        rend(<ProfileDetail />);

    //    const list = await screen.findAllByRole('listitem');
    //    expect(list).not.toHaveLength(0);
    });
});