import AuthForm from "./AuthForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

describe("Login component",() => {
    test("render 'Forget Password ?' Link", () => {
        render(<AuthForm />);

        const password = screen.getByText("Forget Password ?");
        expect(password).toBeInTheDocument();
    })
    test("render 'button' Link", () => {
        render(<AuthForm />);

        const Button = screen.getByRole("button");
        userEvent.click(Button);

        // const password = screen.getByText("Forget Password ?");
        // expect(password).toBeInTheDocument();
    })

})
