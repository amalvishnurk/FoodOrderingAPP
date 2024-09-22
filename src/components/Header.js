import { useContext, useEffect, useState } from "react"
import { LOGO_URL } from "../utils.js/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils.js/useOnlineStatus"
import UserContext from "../utils.js/UserContext"

const Header = () => {
    const [button, setButton] = useState('Login')
    const onlineStatus = useOnlineStatus()

    const handleclick = () => {
        button === 'Login' ? setButton('Logout') : setButton('Login')
    }

    const {loggedUser} = useContext(UserContext)
    // console.log(data);
    

    useEffect(() => {
        // console.log("use effect rendered")
    }, [])
    return (
        <div className="flex justify-between items-center bg-green-50 lg:bg-gray-300  shadow-lg mb-10 ">
            <div className="logoContainer">
                <img className="w-32" src={LOGO_URL} />
            </div>
            <div className="">
                <ul className="flex pr-5 font-medium">

                    <Link className='pr-3' to='/'>Home</Link>
                    <Link className='pr-3' to='/about'>About Us</Link>
                    <Link className='pr-3' to='/contactUs'>Contact us</Link>
                    <Link className="pr-3" to='/grocery'>Grocery</Link>
                    <li className="pr-3">Cart</li>
                    <div className="pr-3">
                        <button className="btn-login" onClick={() => handleclick()}>{button}</button>
                    </div>
                    <li>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
                    <li className="pl-3 font-bold">{loggedUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header 