import MainNavigation from "./MainNavigation";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";
import userEvent from "@testing-library/user-event";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
    )

describe("render 'MainNavigation Component'",() => {
    test("render 'Home Link'",() => {
        rend(<MainNavigation />);

        const homeLink = screen.getByText("Home");
        //userEvent.click(homeLink);
        expect(homeLink).toBeInTheDocument();
    })
})