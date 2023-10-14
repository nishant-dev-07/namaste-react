import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter, json } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});
test("Should Search Res list for pizza text input", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const searchBtn = screen.getByRole("button",{name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change((searchInput),{ target : {value: "pizza"}})
    fireEvent.click(searchBtn);

    // screen should load three card

    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(2)

    
})

it("should filtred top rated Restro", async () => {

   

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20)
    const topRatedRestroBtn = screen.getByRole('button',{name: "Top Rated Restaurant"})

    // console.log(topRatedRestroBtn)
     fireEvent.click(topRatedRestroBtn);

     const cardsfilter = screen.getAllByTestId("resCard")

     expect(cardsfilter.length).toBe(4)
})