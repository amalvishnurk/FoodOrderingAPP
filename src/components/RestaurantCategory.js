import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex, index }) => {
    const [dropDown, setdropDown] = useState(false)
    const handleDropdown = () => {
        setdropDown((prev) => !prev)
        if (dropDown == true) {
            setshowIndex(null)
        } else {
            setshowIndex(index)
        }

    }



    return (
        <div className="bg-gray-100 shadow-md my-5 w-9/12 mx-auto p-4">
            <div className="flex justify-between cursor-pointer " onClick={handleDropdown}>
                <span className="font-medium">{data?.title} ({data?.itemCards.length})</span>
                <span >{dropDown ? '⬆' : '⬇'}  </span>
            </div>
            {showItems &&
                <div>
                    <ItemList items={data?.itemCards} />
                </div>}


        </div>
    )
}
export default RestaurantCategory