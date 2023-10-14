import RestaurantCard, { topRatedRestro } from "../RestaurantCard"
import { render, screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom"


test("it should be render restaurant card component",() => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const restroName = screen.getByText("Janta Sweet Home");

    expect(restroName).toBeInTheDocument();
})

it("should render Restaurant card compoent with promoted label",() => {
    const WithTopLable = topRatedRestro(RestaurantCard)
    render(<WithTopLable resData={MOCK_DATA} />);

    const topLabel = screen.getByText("Top Rated");

    expect(topLabel).toBeInTheDocument();
})