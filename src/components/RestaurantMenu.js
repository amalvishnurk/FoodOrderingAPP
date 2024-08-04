import React, { useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestuarantMenu from '../utils.js/useRestuarantMenu'

const RestaurantMenu = () => {

    const { restID } = useParams()
    const { RestaurantDetail, RestaurantMenu } = useRestuarantMenu(restID)

    return RestaurantDetail ? (<div>
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