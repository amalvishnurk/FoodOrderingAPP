import RestaurantCard from "./RestaurantCard"
import restList from "../utils.js/mockData"
import { useEffect, useState } from "react"
import Shimmer from '../components/Shimmer'

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([])
    const [searchTerm, setsearchTerm] = useState('')
    const [filteredRestaurants, setfilteredRestaurants] = useState([])
    console.log("body");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
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
                        <RestaurantCard key={restaurant.info.id} restData={restaurant} />)
                    }
                </div>
            </div >

    )
}

export default Body