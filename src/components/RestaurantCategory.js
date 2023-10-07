import ItemList from "./ItemList"
import { useState } from "react";
const RestaurantCategory = ({ data, setItem, setShowitem}) => {

  
    const handleClick = () => {
        setShowitem()
    }
    return (
        <div>
            <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-4  cursor-pointer">
               <div className="flex justify-between " onClick={handleClick}>
               <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>➕</span>
               </div>
               {setItem && <ItemList items={data.itemCards} />}
            </div>

           
        </div>
    )
}

export default RestaurantCategory