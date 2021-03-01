import React, { useState, useEffect } from 'react'
import '../Swiper.css'
import LeftArr from '../Images/arrow-left.png'
import RightArr from '../Images/arrow-right.png'
import { purchaseMovie } from '../Data/PurchaseMovieInstructions'

function SwiperContainer( {language}) {
	const [currentSlide, changeSlide] = useState(0)
	const [showNext, setshowNext] = useState(true)
	const [slideTypes, setslideTypes] = useState([])

	const decideSlideType = (object) => {
		if (object.tv && object.remote) {
			return '1'
		}
		return '2'
	}

	useEffect(() => {
		const tmpArray = []
		purchaseMovie.forEach((slide) => {
			tmpArray.push(decideSlideType(slide))
		})
		setslideTypes(tmpArray)
	}, [])

	useEffect(() => {
		console.log(currentSlide)
		console.log(purchaseMovie[currentSlide])
		if (currentSlide === purchaseMovie.length - 1) {
			setshowNext(false)
		} else {
			setshowNext(true)
		}
		console.log('slidetype', slideTypes)
	}, [currentSlide])

	const handleNext = () => {
		changeSlide(currentSlide + 1)
	}

	const handlePrev = () => {
		changeSlide(currentSlide - 1)
	}

	return (
		<div className="swiper-container">
			<div className="swiper-visuals">
				<div
					className="image-container"
					style={{ transform: `translateX(calc(-${currentSlide}*100vw)` }}>
					{purchaseMovie.map((item, index) => {
						if (slideTypes[index] === '1') {
							return (
								<div className="type1-container">
									<div className="tv-container-1">
										<div className="img">
											<img src={item.tv} alt="" className="type1-tv" />
										</div>
									</div>
									<div className="remote-container-1">
										<img src={item.remote} alt="" className="type1-remote" />
									</div>
								</div>
							)
						}
						if (slideTypes[index] === '2') {
							return (
								<div className="type2-container">
									<div className="tv-container-2">
										<div className="img-2">
											<img src={item.tv} alt="" className="type2-tv" />
										</div>
									</div>
								</div>
							)
						}
						return
					})}
				</div>
			</div>
			<div
				className="swiper-instructions"
				style={{ transform: `translateX(calc(-${currentSlide}*100vw)` }}>
				{purchaseMovie.map((item, index) => {
					const { instruction } = item
					return (
						<div className="instructions-container">
							<div className="instructions-wrapper">
								{instruction.image ? (
									<div>
										<img
											src={instruction.image}
											alt=""
											className="instruction-img"
										/>
									</div>
								) : null}

								{language === 'english' ? (
									<div className="instruction-text">{instruction.english}</div>
								) : null}
								{language === 'sinhala' ? (
									<div className="instruction-text">{instruction.sinhala}</div>
								) : null}
								{language === 'tamil' ? (
									<div className="instruction-text">{instruction.tamil}</div>
								) : null}
							</div>
						</div>
					)
				})}
			</div>
			<div className="swiper-controls">
				<div className="control-container">
					{currentSlide ? (
						<div className="prevBtn" onClick={handlePrev}>
							<img src={LeftArr} alt="" className="btnImg" />
						</div>
					) : null}

					{showNext ? (
						<div className="nextBtn" onClick={handleNext}>
							<img src={RightArr} alt="" className="btnImg" />
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default SwiperContainer
