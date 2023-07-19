import Profile from "./Profile";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("render 'MainNavigation Component'",() => {
    test("render 'Home Link'",() => {
        render(<Profile />);

        const Button = screen.getByRole("button");
        userEvent.click(Button);
    })
})