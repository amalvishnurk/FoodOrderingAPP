import React from 'react'
import { CDN_URL } from '../utils.js/constants';

const ItemList = ({ items }) => {

    return (
        <div>
            {items.map(item =>
                <div className='border-b-2 border-gray-300 mt-3  p-4 flex justify-between h-42  bg-white'>
                    <div className=' text-left w-10/12 ' key={item?.card?.info?.id}>
                        <p className='font-medium'>{item?.card?.info?.name}</p>
                        <p className='text-sm font-bold mb-2'>₹ {item?.card?.info?.price ?
                            item?.card?.info?.price / 100
                            : item?.card?.info?.defaultPrice / 100}</p>
                        <p className='text-sm text-wrap'>{item?.card?.info?.description}</p>
                    </div>
                    <div className=' pl-2 relative '>
                        <img className='w-32 h-32 rounded-lg' src={CDN_URL + item?.card?.info?.imageId} />
                        <button className='text-green-600 font-bold absolute top-28 left-12
                     px-2 py-1 rounded-lg border z-10 border-gray-300 bg-white text-sm'>ADD</button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default ItemList