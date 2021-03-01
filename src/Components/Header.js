import React from 'react'
import HomeIng from "../Images/homebtn.png"
import '../Header.css'
import { Link } from 'react-router-dom'

function Header({ setLanguage }) {
	return (
		<div className="header">
			<Link to="/" className="HomeBtn">
				<img src={HomeIng} alt="" className="Homeimg" />
			</Link>
			<div className="lang-controls">
				<div className="lang-btn" onClick={() => setLanguage('english')}>
					English
				</div>
				<div className="lang-btn" onClick={() => setLanguage('sinhala')}>
					Sinhala
				</div>
				<div className="lang-btn" onClick={() => setLanguage('tamil')}>
					Tamil
				</div>
			</div>
		</div>
	)
}

export default Header
