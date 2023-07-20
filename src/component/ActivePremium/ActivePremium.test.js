import ActivatePremium from "./ActivePremium";
import {screen, render} from "@testing-library/react";
import store from "../../store/index";
import { Provider } from "react-redux";

const rend = component => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe("ActivatePremium Component",() => {
    test('render "ActivatePremium" text',() => {
        rend(<ActivatePremium />);

        const text = screen.getByText('ActivatePremium');
        expect(text).toBeInTheDocument();
    });
});