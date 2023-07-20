import AuthForm from "./AuthForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../store/index";

// const rend = (component) => render(
//     <Provider store={store}>
//         {component}
//     </Provider>
// )

describe("Login component",() => {
    test("render 'Forget Password ?' Link", () => {
        render(<AuthForm />);

        const password = screen.getByText("Forget Password ?");
        expect(password).toBeInTheDocument();
    })
    // test("render 'button' Link", () => {
    //     rend(<AuthForm />);

    //     const Button = screen.getAllByRole("button");
    //     userEvent.click(Button);

    //     // const password = screen.getByText("Forget Password ?");
    //     // expect(password).toBeInTheDocument();
    // })

})
