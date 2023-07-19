import Csvfile from "./csvfile";
import { screen, render } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";

describe("render 'Csvfile Component'",() => {
    test("render 'expenses Link'",() => {
        render(<Csvfile />);

        const expenseText = screen.getByText("expenses");
        expect(expenseText).toBeInTheDocument();
    })

    test("render 'DownLoad csvfile from link below'",() => {
        render(<Csvfile />);

        const Text = screen.getByText("DownLoad csvfile from link below");
        expect(Text).toBeInTheDocument();
    })
});