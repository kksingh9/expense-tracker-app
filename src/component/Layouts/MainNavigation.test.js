import MainNavigation from "./MainNavigation";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const rend = component => render(
    <BrowserRouter>
    <Provider store={store}>
        {component}
    </Provider>
    </BrowserRouter>
    )

describe("render 'MainNavigation Component'",() => {
    test("render 'Home Link'",() => {
        rend(<MainNavigation />);

        const homeLink = screen.getByText("Home");
        //userEvent.click(homeLink);
        expect(homeLink).toBeInTheDocument();
    })
    test("render 'expense Link'",() => {
        rend(<MainNavigation />);

        const expenseLink = screen.getByText("Expense");
        //userEvent.click(homeLink);
        expect(expenseLink).toBeInTheDocument();
    })
})