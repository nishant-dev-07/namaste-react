import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About"
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocerry from "./components/Grocerry";


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on Demand loading
// Dynamic import

const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayout = () => {

    const [userName,setUserName] = useState();

    useEffect (() => {

        const data = {
            name: "Nishant Bhardwaj",
        }

        setUserName(data.name)
    },[])
    return (
        <div className="app">
            <Provider store={appStore} >
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <Header />
           <Outlet />
            </UserContext.Provider>
            </Provider>
           
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element : <ContactUs />
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu/>
            },
            {
                path: '/grocerry',
                element: <Suspense fallback={<Shimmer />}><Grocerry /></Suspense>
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)


