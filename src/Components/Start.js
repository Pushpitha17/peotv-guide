import React from 'react'
import RightArrow from "../Images/arrow-right.png"
import {Link} from 'react-router-dom'
import "../Start.css"

function Start() {
    return (
			<div className="start-screen">
				<Link className="Nextbtn" to="/instructions">
					<img src={RightArrow} alt="" className="Nextimg" />
				</Link>
			</div>
		)
}

export default Start
