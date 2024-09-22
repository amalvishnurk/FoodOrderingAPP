import React, { useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestuarantMenu from '../utils.js/useRestuarantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {

    const { restID } = useParams()
    const { RestaurantDetail, RestaurantCard } = useRestuarantMenu(restID)
    const [showIndex, setshowIndex] = useState(null)
    const category = RestaurantCard?.filter(c => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return RestaurantDetail ? (
        <div className='text-center'>
            <h1 className='font-bold mb-5 text-2xl'>{RestaurantDetail?.name}</h1>
            <p className='font-bold mb-5'>{RestaurantDetail?.cuisines.join(', ')} - {RestaurantDetail?.costForTwoMessage} </p>
            {category.map((cat, index) =>
                // controlled component
                <RestaurantCategory
                    data={cat?.card?.card}
                    showItems={index === showIndex && true}
                    index={index}
                    setshowIndex={setshowIndex}

                />)}
        </div>

    ) : <Shimmer />
}

export default RestaurantMenu