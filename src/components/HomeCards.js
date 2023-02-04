import PropTypes from 'prop-types';
import CatCard from './CatCard';
import { useState, useEffect } from 'react';
import '../css/HomeCards.css';

function HomeCards(props) {
	const { catData, mountCheck } = props;
	const [randomCat, setRandomCat] = useState([]);
	const [randomCheck, setRandomCheck] = useState(false);
	let randomNumContainer = [];
	let cat0 = -1;
	let cat1 = -1;
	let cat2 = -1;
	let cat3 = -1;
	const arrayFiller = (x, randomValue) => {
		switch (x) {
			case 0:
				cat0 = randomValue;
				randomNumContainer = [...randomNumContainer, catData[cat0]];
				break;
			case 1:
				cat1 = randomValue;
				randomNumContainer = [...randomNumContainer, catData[cat1]];
				break;
			case 2:
				cat2 = randomValue;
				randomNumContainer = [...randomNumContainer, catData[cat2]];
				break;
			case 3:
				cat3 = randomValue;
				randomNumContainer = [...randomNumContainer, catData[cat3]];
				break;
		}
	};
	const randomCatCardFiller = x => {
		let validNum = false;
		while (validNum === false) {
			const randomValue = Math.floor(Math.random() * 67);
			if (
				randomValue !== cat0 &&
				randomValue !== cat1 &&
				randomValue !== cat2 &&
				randomValue !== cat3
			) {
				validNum = true;
				arrayFiller(x, randomValue);
			} else {
				validNum = false;
			}
		}
	};
	if (catData && randomNumContainer.length < 3 && mountCheck === true) {
		for (let x = 0; x < 4; x++) {
			randomCatCardFiller(x);
		}
	}
	const imgFormat = imageId => {
		let finalFormat;
		if (imageId === undefined) {
			finalFormat = require('../img/noimg(2).png');
			return finalFormat;
		}

		if (
			imageId === 'O3btzLlsO' ||
			imageId === '4RzEwvyzz' ||
			imageId === 'DbwiefiaY'
		) {
			finalFormat = 'https://cdn2.thecatapi.com/images/' + imageId + '.png';
		} else {
			finalFormat = 'https://cdn2.thecatapi.com/images/' + imageId + '.jpg';
		}
		return finalFormat;
	};
	useEffect(() => {
		if (
			catData &&
			mountCheck === true &&
			randomCheck === false &&
			randomNumContainer.length >= 3
		) {
			setRandomCat([...randomNumContainer]);
			setRandomCheck(true);
		}
	}, [mountCheck, randomCheck]);
	return (
		<section className='home_card'>
			<h1>Over 60 breeds to discover</h1>
			<div className={'card_wrapper'}>
				{randomCat
					? randomCat.map((value, index) => {
							return (
								<CatCard
									catPhoto={imgFormat(value.reference_image_id)}
									catReference={value.reference_image_id}
									catName={value.name}
									catInfo={value}
									key={index}
								/>
							);
					  })
					: null}
			</div>
		</section>
	);
}

HomeCards.propTypes = {
	catData: PropTypes.array,
	mountCheck: PropTypes.bool,
};
export default HomeCards;
