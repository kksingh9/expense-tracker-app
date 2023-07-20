import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./navigation";

const rend = component => render(
    <BrowserRouter>
    <Provider store={store}>
        {component}
    </Provider>
    </BrowserRouter>
)
describe("Navigation Component",() => {
    test("navigation component", () => {
       rend( <Navigation />)
    })
})