import RestaurantCard from "./RestaurantCard"
import restList from "../utils.js/mockData"
import { useEffect, useState } from "react"
import Shimmer from '../components/Shimmer'
import { SWIGGY_API, SWIGGY_URL } from "../utils.js/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils.js/useOnlineStatus"

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([])
    const [searchTerm, setsearchTerm] = useState('')
    const [filteredRestaurants, setfilteredRestaurants] = useState([])
    console.log("body");

    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        fetchData()
    }, [])

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

    if (!onlineStatus){
        return <h1>You are Offline !! Please check your internet connection</h1>
    }

        return (
            ListOfRestaurant.length === 0 ? <Shimmer /> :
                < div className="body" >
                    <div className="filter">
                        <div className="search">
                            <input type="text" onChange={(e) => handleChange(e)} value={searchTerm}></input>
                            <button onClick={() => handleSearch()}>Search</button>
                        </div>
                        <button button className="filter-btn" onClick={() => handleclick()}> Top rated Restaurants</button >
                    </div>

                    <div className="res-container">
                        {filteredRestaurants.map((restaurant) =>
                            <Link className="Link-card" key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard key={restaurant.info.id} restData={restaurant} /></Link>)
                        }
                    </div>
                </div >

        )
}

export default Body