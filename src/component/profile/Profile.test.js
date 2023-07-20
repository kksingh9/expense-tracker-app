import Profile from "./Profile";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/index";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe("render 'Profile Component'",() => {
    test("render 'Contact Detail'", () => {
        rend(<Profile />);

        const text =  screen.getByText('Contact Detail');
        expect(text).toBeInTheDocument();
        
    })
   
    test("render 'async'", async() => {
        
        
            window.fetch = jest.fn();
            window.fetch.mockResolvedValueOnce({
                json:  {idToken : 'hh', },
            });
            rend(<Profile />);
    
           const list = await screen.findAllByRole('');
           expect(list).not.toHaveLength(0);
        });
    
})