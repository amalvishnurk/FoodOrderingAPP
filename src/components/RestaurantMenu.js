import React, { useState } from 'react'
import { useEffect } from 'react'
import { SWIGGY_REST } from '../utils.js/constants'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

    const [RestaurantDetail, setRestaurantDetail] = useState(null)
    const [RestaurantMenu, setRestaurantMenu] = useState(null)
    const { restID } = useParams()
    console.log(restID);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_REST + restID)
        const json = await data.json()
        // console.log("json", json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurantDetail(json?.data?.cards[2].card?.card.info)
        setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    // const { name } = RestaurantDetail?.cards[2]?.card?.card?.info;
    // console.log("RestaurantDetail",RestaurantDetail)


    return RestaurantDetail && setRestaurantMenu ? (<div>
        <h1>{RestaurantDetail?.name}</h1>
        <h4>{RestaurantDetail?.costForTwoMessage}</h4>
        <p>Cuisines: {RestaurantDetail?.cuisines.join(',')}</p>
        <p>Rating : {RestaurantDetail.avgRating}</p>
        <h5>Menu</h5>
        <ul>
            {RestaurantMenu.map(item =>
                (<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price / 100} </li>)
            )}
        </ul>

    </div>

    ) : <Shimmer />
}

export default RestaurantMenu