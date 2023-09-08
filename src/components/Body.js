
import RestaurantCard from './RestaurantCard'
import resObj from '../utils/mockData';
import {useState} from 'react';

// not using key (not acceptable) <<< index as key <<<<<<<<<<<<<< unique id(best prectice)
const Body = () => {
    console.log(resObj);
    // Local State Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
    return (
    <div className="body">
        <div className="filter">
            <button 
                className='filter-btn'
                onClick={() => {
                    // Filter logic here
                    
                    filterdList = listOfRestaurant.filter((res) =>  res.avgRating > 4.1      
                    );
                    setListOfRestaurant(filterdList)
                }}
                >
                Top Rated Restaurant
            </button>
            <button className='filter-btn'
            onClick={()=> setListOfRestaurant(resObj)}
            >Clear Filter</button>
        </div>
        <div className="res-container">
           
            
            {
                listOfRestaurant.map((restaurant) => (
                    
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    
                ))
            }
            
            
        </div>
    </div>
    )
}

export default Body;