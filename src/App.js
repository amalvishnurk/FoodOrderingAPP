import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils.js/UserContext"
// import Grocery from "./components/Grocery"



const searchStyle = {
    margin: "10px"
}

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState('')
    useEffect(() => {
        // api call to get user name
        const data = {
            userName: "Amal Vishnu"
        }
        setUserName(data.userName)
    }, [])
    return (

        // <div className="px-2">
        //     <UserContext.Provider value={{ loggedUser: userName }}>
        //         <Header />
        //     </UserContext.Provider>
        //     <Outlet />
        // </div>

        // <UserContext.Provider value={{ loggedUser: userName }}>
        //     <div className="px-2">

        //         <UserContext.Provider value={{loggedUser:'Elon Musk'}}>
        //             <Header />
        //         </UserContext.Provider>
        //         <Outlet />
        //     </div>
        // </UserContext.Provider>
        <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
            <div className="px-2">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>

    )
}

const AppRouter = createBrowserRouter([
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
                element: <Suspense fallback={<h1>Loading</h1>}><About /></Suspense>
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/restaurant/:restID",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>} >
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />)