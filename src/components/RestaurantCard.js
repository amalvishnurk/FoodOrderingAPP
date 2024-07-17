import { CDN_URL } from "../utils.js/constants"

const RestaurantCard = (props) => {
    // console.log("rest:", restData.restData.info);
    const { name, avgRating, areaName, cuisines, cloudinaryImageId, sla } = props.restData.info
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines?.join(',')}</h4>
            <h4>Rating : {avgRating} stars</h4>
            <h4>Delivery Time : {sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard