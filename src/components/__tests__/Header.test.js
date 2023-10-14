import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should to check is header component is load",()=> {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

it("Should check cart item present in header with 0 item", () => {

    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {

    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout")

    expect(logoutButton).toBeInTheDocument();
})