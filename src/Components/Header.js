import React from 'react'
import HomeIng from "../Images/homebtn.png"
import '../Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
			<div className="header">
				<Link to="/" className="HomeBtn">
				    <img src={HomeIng} alt="" className="Homeimg" />
                </Link>
			</div>
		)
}

export default Header
