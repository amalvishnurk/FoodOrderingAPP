import React, { useState } from 'react'

const User = () => {
    const [count] = useState(0)
    const [count2] = useState(0)
    return (
        <div className='userCard'>
            <h3>Amal Vishnu</h3>
            <h4>Location : Bangalore</h4>
            <h4>Email : amal@gmail.com</h4>
        </div>
    )
}

export default User