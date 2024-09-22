import { useEffect, useState } from 'react'
import { SWIGGY_REST } from '../utils.js/constants'

const useRestuarantMenu = (restID) => {
    const [RestaurantDetail, setRestaurantDetail] = useState(null)
    const [RestaurantCard, setRestaurantMenu] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_REST + restID)
        const json = await data.json()
        // console.log("json", json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurantDetail(json?.data?.cards[2].card?.card.info)
        // setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards)
        // console.log('resData',json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards);
        
    }

    return { RestaurantDetail, RestaurantCard }
}

export default useRestuarantMenu