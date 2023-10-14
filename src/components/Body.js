
import RestaurantCard,{topRatedRestro} from './RestaurantCard'
import {useContext, useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

// not using key (not acceptable) <<< index as key <<<<<<<<<<<<<< unique id(best prectice)
const Body = () => {
    
    // Local State Variable - Super powerful variable
    //console.log(resObj);

    // Whenever state variables update, react triggers a reconcilation cycle(re-renders the component) 
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filtredRestraunt, setFiltredRestraunt] = useState([]);

     const[searchText,setSearchText] = useState('');

    const WithTopLable = topRatedRestro(RestaurantCard);
    useEffect(() => {
       fetchData();
    },[]);

    const fetchData = async () => {
      
      
      try{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

      
        const json = await data.json();

            
        async function checkJsonData(jsonData) {                                                                                                        
            for(let i =0;  i < jsonData?.data?.cards.length;i++) {
                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
               
                // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    //console.log('return',checkData);
                  return checkData;
                }
            }
        }
        

        // Optional Chaining 
        const resData = await checkJsonData(json);
       
            await setFiltredRestraunt(resData);
            await setListOfRestaurant(resData);
       
       
      } catch (error){
        console.log(error);
      }
        
    };

  // console.log(listOfRestaurant);
    const onlineStatus = useOnlineStatus();

    const {setUserName, loggedInUser} = useContext(UserContext);

    if(onlineStatus === false ) return <h1> Looks like you are offline  please check your internet connection</h1>
    // conditional Rendering
    return (listOfRestaurant.length === 0) ? ( 
    <Shimmer />
    ) : (
        
    <div className="body">
        <div className="filter">
            <div className='search m-4 p-4'>
                <input type="text"
                    data-testid="searchInput"
                     className='border border-solid border-black'
                     onChange={(e) => setSearchText(e.target.value)}
                     value={searchText}
                   />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    // Filter the restro card and update the ui
                    // SearchText
                    
                    
                   const filterdrestro =  listOfRestaurant.filter((res) => (
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   ))

                   setFiltredRestraunt(filterdrestro)

                   
                   
                }}>Search</button>
            </div>
            <button 
                className='button border-solid button-black px-4 py-2 bg-gray-100 m-2 rounded-lg'
                onClick={() => {
                    // Filter logic here
                    
                    const filterdListTop = listOfRestaurant.filter((res) =>  res.info.avgRating > 4.1);
                    setFiltredRestraunt(filterdListTop)
                }}
                >
                Top Rated Restaurant
            </button>
            <button className='button border-solid button-black px-4 py-2 bg-gray-100 m-2 rounded-lg'
            onClick={()=> fetchData()}
            >Clear Filter</button>

                <label> User Name:</label>
                <input className="border border-black mx-4 p-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
            
        </div>
        <div className="res-container flex flex-wrap">
           
            
            {
                filtredRestraunt.map((restaurant) => (
                  
                   
                    <Link  
                    className='res-card-anchor'
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}>

                        {
                            
                             restaurant.info.avgRating > 4 ? <WithTopLable  resData={restaurant.info}/> : <RestaurantCard  resData={restaurant.info}/>
                        }
                       
                    </Link>
                    ))
                
                    
            }
            
           
        </div>
    </div>
    )
   
 }

export default Body;