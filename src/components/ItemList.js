import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  
  const dispach = useDispatch()
  const handleAddItem = (item) => {
    // Dispach an action

    dispach(addItem(item))
  }
  

  return (
    <div >
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-b-2 text-left flex"
          data-testid="itemList"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm py-2">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button className="p-2 bg-white shadow-lg m-auto rounded-sm "
                onClick = {() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>

            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-30 h-auto"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};



export default ItemList;
