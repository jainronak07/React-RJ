import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../app/body";
import MOCK_DATA from "../mocks/mockResBody.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body and search button working", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const serchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByPlaceholderText(
    "Search Restraunt / dish....."
  );
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(serchButton)
  const cardsNum= screen.getAllByTestId("resCard").length


  expect(cardsNum).toBe(1);
});
