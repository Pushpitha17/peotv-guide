import React, {useState} from 'react'
import Header from "./Header"
import SwiperContainer from "./SwiperContainer"
import "../Instructions.css"

function Insructions() {
	const [language ,setLanguage] = useState("english")
	console.log(language)

    return (
			<div className="instructions-page">
				<Header setLanguage={setLanguage}/>
                <SwiperContainer language={language} />
			</div>
		)
}

export default Insructions
