import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
//const RestaurantCard = ({resName , cuisine}) => { // you can write like this also
const RestaurantCard = (props) => {
   
const { resData } = props

//console.log(resData);
const {loggedInUser } = useContext(UserContext)
// console.log('rrr', resData);
const {cloudinaryImageId, name, cuisines,avgRating,costForTwo} = resData



   return (
    <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200" >
        <img 
            className="rounded-lg h-52"
            alt="res-logos"
            src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        { <h4>{cuisines.join(', ')}</h4> }
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
    </div>
   ) 
}


// Higher order Compnent 

// input - RestarurantCard => RestaurantCardPromted

export const topRatedRestro = (RestaurantCard) => {

    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard