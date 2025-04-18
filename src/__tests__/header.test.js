import { render,screen } from "@testing-library/react";
import { Header } from "../app/header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../store/appStore";

it("should have home button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const homeButton = screen.getByRole("link", { name: "Home" });

  expect(homeButton).toBeInTheDocument();
});
