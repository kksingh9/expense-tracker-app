import MainNavigation from "./MainNavigation";
import { screen, render } from "@testing-library/react";

describe("render 'MainNavigation Component'",() => {
    test("render 'Home Link'",() => {
        render(<MainNavigation />);

        const homeLink = screen.getByText("Home");
        expect(homeLink).toBeInTheDocument();
    })
})