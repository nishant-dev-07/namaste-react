import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resID} = useParams();

    const [showitem,setShowitem] = useState(0)

    //console.log(resID);

    const resInfo = useRestaurantMenu(resID);


    if(resInfo === null)  return <Shimmer />

    const {name, cuisines ,costForTwoMessage,} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ele) => {

        
       return ele?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    

   return (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
           
           {
            categories.map((category, index) => {
               return <RestaurantCategory 
                key={category.card.card.title}
                 data={category?.card?.card}
                 setItem={index == showitem ? true : false}
                 setShowitem = {() => index === showitem ? setShowitem(null) : setShowitem(index)}
                 />
            })
           }
             
        </div>
    )
}

export default RestaurantMenu;