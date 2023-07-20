import Profile from "./Profile";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const rend = component => render(
    <BrowserRouter>
    <Provider store={store}>
        {component}
    </Provider>
    </BrowserRouter>
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
                json: () =>  {return{idToken : 'hh', }},
            });
            rend(<Profile />);
    
        //    const list = await screen.findAllByRole('');
        //    expect(list).not.toHaveLength(0);
        });
    
})