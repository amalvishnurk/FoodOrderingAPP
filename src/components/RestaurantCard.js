import { CDN_URL } from "../utils.js/constants"

const RestaurantCard = (props) => {
    // console.log("rest:", restData.restData.info);
    const { name, avgRating, areaName, cuisines, cloudinaryImageId, sla } = props.restData.info
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>Location: {areaName}</h4>
            {/* <h4 className="cuisine">{cuisines?.join(',')}</h4> */}
            <div className="cuisine">
                {cuisines?.slice(0, 5).map((cuisine, index) => (
                    <span key={index} className="cuisine-item">{cuisine}</span>
                ))}
            </div>
            <h4>Rating : {avgRating} stars</h4>
            <h4>Delivery Time : {sla?.deliveryTime} minutes</h4>
        </div >
    )
}

export default RestaurantCard