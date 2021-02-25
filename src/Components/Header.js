import React from 'react'
import HomeIng from "../Images/homebtn.png"
import '../Header.css'

function Header() {
    return (
			<div className="header">
				<div className="HomeBtn">
				    <img src={HomeIng} alt="" className="Homeimg" />
                </div>
			</div>
		)
}

export default Header
