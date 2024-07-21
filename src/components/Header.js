import { useState } from "react"
import { LOGO_URL } from "../utils.js/constants"

const Header = () => {
    const [button, setButton] = useState('Login')

    const handleclick = () => {
        button === 'Login' ? setButton('Logout') : setButton('Login')
    }
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
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