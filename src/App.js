import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"



const searchStyle = {
    margin: "10px"
}

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <div className="px-2">
            <Header />
            <Outlet />
        </div>
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