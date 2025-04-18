import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

// describe("contact us page test cases",()=>{
    test("contact us page should be rendered", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
      });
      
      test("contact us page should have a button", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
      
        expect(button).toBeInTheDocument();
      });
      
      test("check 2 input box", () => {
          render(<Contact />);
        const inputBox = screen.getAllByRole("textbox");
      
        console.log(inputBox);
      
        expect(inputBox.length).toBe(2)
      });

// })


