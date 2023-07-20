import Csvfile from "./csvfile";
import { screen, render } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/index";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe("render 'Csvfile Component'",() => {
    test("render 'expenses Link'",() => {
        rend(<Csvfile />);

        const expenseText = screen.getByText("expenses");
        expect(expenseText).toBeInTheDocument();
    })

    test("render 'DownLoad csvfile from link below'",() => {
        rend(<Csvfile />);

        const Text = screen.getByText("DownLoad csvfile from link below");
        expect(Text).toBeInTheDocument();
    })
});