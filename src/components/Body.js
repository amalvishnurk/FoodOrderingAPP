import RestaurantCard, { withVegLabel } from "./RestaurantCard"
import restList from "../utils.js/mockData"
import { useContext, useEffect, useState } from "react"
import Shimmer from '../components/Shimmer'
import { SWIGGY_API, SWIGGY_URL } from "../utils.js/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils.js/useOnlineStatus"
import UserContext from "../utils.js/UserContext"

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([])
    const [searchTerm, setsearchTerm] = useState('')
    const [filteredRestaurants, setfilteredRestaurants] = useState([])

    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        fetchData()
    }, [])

    const VegRestaurantCard = withVegLabel(RestaurantCard)

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL)
        const json = await data.json()
        setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const handleclick = () => {
        const filteredData = ListOfRestaurant.filter(rest => rest.info.avgRating > 4.2)
        setfilteredRestaurants(filteredData)
    }

    const handleChange = (e) => {
        setsearchTerm(e.target.value)
    }

    const handleSearch = () => {
        console.log(searchTerm);
        const searchFilter = ListOfRestaurant.filter(rest => rest.info.name.toLowerCase().includes(searchTerm.toLowerCase()))
        console.log(searchFilter);
        setfilteredRestaurants(searchFilter)
    }

    const { setUserName, loggedUser } = useContext(UserContext)

    if (!onlineStatus) {
        return <h1>You are Offline !! Please check your internet connection</h1>
    }

    return (
        ListOfRestaurant.length === 0 ? <Shimmer /> :
            < div className="body" >
                <div className="flex justify-between mb-10 mx-2">
                    <div className="search">
                        <input className="border-slate-600 border rounded-md h-8" type="text" onChange={(e) => handleChange(e)} value={searchTerm}></input>
                        <button className="bg-blue-500 px-6 py-1 ml-2 rounded-md" onClick={() => handleSearch()}>Search</button>
                    </div>
                    <div>
                        <label className="font-bold">User Name </label>
                        <input className="border border-black rounded-md p-2 h-8"
                            value={loggedUser}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <button button className="px-6 rounded-md py-1 bg-green-700 text-white" onClick={() => handleclick()}> Top rated Restaurants</button >
                </div>

                <div className="flex flex-wrap">
                    {filteredRestaurants.map((restaurant) =>
                        <Link className="Link-card"
                            key={restaurant.info.id}
                            to={`/restaurant/${restaurant.info.id}`}>
                            {/* If rest is veg show veg label */}
                            {restaurant?.info?.veg ? <VegRestaurantCard restData={restaurant} /> : <RestaurantCard restData={restaurant} />}

                        </Link>)
                    }
                </div>
            </div >

    )
}

export default Body