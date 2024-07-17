import RestaurantCard from "./RestaurantCard"
import restList from "../utils.js/mockData"
import { useState } from "react"

const Body = () => {

    const [ListOfRestaurant, setListOfRestaurant] = useState(restList)
    const handleclick = () => {
        console.log("inside");

        const filteredData = ListOfRestaurant.filter(rest => rest.info.avgRating > 4.2)
        setListOfRestaurant(filteredData)
        console.log("inside");
    }

    return (
        <div className="body">
            {/* <div className="search" style={{ margin: "10px", padding: "10px" }}>search</div> */}
            <button className="filter-btn" onClick={() => handleclick()}>Top rated Restaurants</button>
            <div className="res-container">
                {ListOfRestaurant.map((restaurant) =>
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body