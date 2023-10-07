import { LOGO_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";





const Header = () => {

    const {loggedInUser} = useContext(UserContext);

    

    const [btnName, setBtnName] = useState('Login');

    const onlineStatus = useOnlineStatus();

    // Subscribing to the store using aSelector

    const cartItems = useSelector((store) => store.cart.items);

    
    
    return (
        <div className="header flex justify-between shadow-lg mb-2">
            <div className="logo-container">
                <Link to="/"><img className="w-56" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    <li className="px-4">
                        Online Status : { onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li className="px-4">
                       <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocerry">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        Cart ({cartItems.length})
                    </li>
                    <button onClick = {() => {
                         btnName === "Login" 
                         ? setBtnName("Logout")
                          : setBtnName("Login")
                        }}
                         className="login-btn">{btnName}</button>
                    <li className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;