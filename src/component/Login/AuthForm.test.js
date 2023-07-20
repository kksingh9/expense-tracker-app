import AuthForm from "./AuthForm";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const rend = (component) => render(
    <BrowserRouter>
    <Provider store={store}>
        {component}
    </Provider>
    </BrowserRouter>
)

describe("Login component",() => {
    test("render 'Forget Password ?' Link", () => {
        rend(<AuthForm />);

        const password = screen.getByText("Forget Password ?");
        expect(password).toBeInTheDocument();
    })
    // test("render 'button' Link", () => {
    //     rend(<AuthForm />);

    //     const Button = screen.getAllByRole("button");
    //     expect(Button).toBeInTheDocument();

    //     // const password = screen.getByText("Forget Password ?");
    //     // expect(password).toBeInTheDocument();
    // })
    test('renders posts if request succeeds', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {return{id: 'p1', title: 'First post'}}
        });
        rend(<AuthForm />);

    //    const list = await screen.findAllByRole('button');
    //    userEvent.click(list);
    });

})
