import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils.js/constants"
import { Link } from "react-router-dom"

const Header = () => {
    const [button, setButton] = useState('Login')

    const handleclick = () => {
        button === 'Login' ? setButton('Logout') : setButton('Login')
    }

    // console.log("header rendered")
    useEffect(() => {
        // console.log("use effect rendered")
    }, [])
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>

                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About Us</Link>
                    <Link className='link' to='/contactUs'>Contact us</Link>
                    <li>Cart</li>
                    <div className="loginButton">
                        <button className="btn-login" onClick={() => handleclick()}>{button}</button>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Header 