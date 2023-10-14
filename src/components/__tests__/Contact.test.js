import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


    describe("Contact us page Test Case",() => {
        test("should load contact us componet",() => {

            render(<ContactUs />)
        
           const heading =  screen.getByRole("heading");
        
           expect(heading).toBeInTheDocument();
        })
        
        // You can use test or it
        it("Should load button inside contact component",()=> {
        
            render(<ContactUs />);
        
            const button = screen.getByRole('button');
        
            expect(button).toBeInTheDocument();
        })
        
        test("should load input button in component",() => {
        
            render(<ContactUs />);
        
            const input = screen.getByPlaceholderText('name');
        
            expect(input).toBeInTheDocument();
        })
        
        test("Should load 2 input boxes on the contact compoent",() => {
        
            render(<ContactUs />);
        
            // Querying
            const inputBoxes = screen.getAllByRole("textbox");
        
            expect(inputBoxes.length).toBe(2)
        })
    })
