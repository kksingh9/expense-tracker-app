import ForgetPassWord from "./ForgetPassword";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("render 'ForgetPassWord Component'",() => {
    test("render 'Expense Tracker' text",() => {
        render(<ForgetPassWord />);

        const expense = screen.getByText("Expense Tracker");
        expect(expense).toBeInTheDocument();
    })
    test("render 'Send Link' text",() => {
        render(<ForgetPassWord />);

        const linkText = screen.getByText("Send Link");
        expect(linkText).toBeInTheDocument();
    })
    test("render 'button'",() => {
        render(<ForgetPassWord />);

        const Button = screen.getByRole("button");
        userEvent.click(Button);
    })
})