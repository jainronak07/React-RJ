import { render, screen } from "@testing-library/react";
import { fastDeliveryLabel, RestrauntCard } from "../app/restrauntCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resturantCardMock.json";

test("is card loading", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);

  const resNAme= screen.getByText("Subway")

  expect(resNAme).toBeInTheDocument();
});


test("shows 'Fast delivery' label when delivery time is ≤ 30 mins", () => {
    const FastCard = fastDeliveryLabel(RestrauntCard);
  
    render(<FastCard resData={MOCK_DATA} />);
    const label = screen.getByText("Fast delivery");
  
    expect(label).toBeInTheDocument(); // will fail if label is not rendered
  });
  