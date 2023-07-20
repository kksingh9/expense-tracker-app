
import VerifyEmailId from "./VerifyEmailId";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/index";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe("render 'VerifyEmailId Component'",() => {
    test("render 'button'",() => {
        rend(<VerifyEmailId />);

        const ButtonText = screen.getByText("VerifyEmailId");
        expect(ButtonText).toBeInTheDocument();
    })
})