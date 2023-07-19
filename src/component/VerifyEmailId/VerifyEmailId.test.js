
import VerifyEmailId from "./VerifyEmailId";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("render 'VerifyEmailId Component'",() => {
    test("render 'button'",() => {
        render(<VerifyEmailId />);

        const Button = screen.getByRole("button");
        userEvent.click(Button);
    })
})