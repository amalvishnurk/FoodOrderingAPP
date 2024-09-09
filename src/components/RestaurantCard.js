import { CDN_URL } from "../utils.js/constants"

const RestaurantCard = (props) => {
    // console.log("rest:", restData.restData.info);
    const { name, avgRating, areaName, cuisines, cloudinaryImageId, sla } = props.restData.info
    return (
        <div className="rounded-md w-[250px] h-[450px] p-2 bg-gray-200 m-2 hover:bg-gray-400">
            <img className="rounded-md h-[236px] w-[236px]" alt="res-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="my-2 font-medium">{name}</h3>
            <h4>Location: {areaName}</h4>
            {/* <h4 className="cuisine">{cuisines?.join(',')}</h4> */}
            <div className="flex flex-wrap">
                {cuisines?.slice(0, 5).map((cuisine, index) => (
                    <span key={index} className="cuisine-item">{cuisine}</span>
                ))}
            </div>
            <h4>Rating : {avgRating} stars</h4>
            <h4>Delivery Time : {sla?.deliveryTime} minutes</h4>
        </div >
    )
}
// Higher order component
export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-green-700 text-white rounded-md px-2 absolute">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard