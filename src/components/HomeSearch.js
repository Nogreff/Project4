import PropTypes from 'prop-types';
import '../css/HomeSearch.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeSearch(props) {
	const { catData } = props;
	const [filteredData, setFilteredData] = useState([]);
	const [nameEntered, setNameEntered] = useState('');
	const focusRef = useRef('');
	const navigate = useNavigate();
	const catOptions = document.querySelector('.cat_options');
	const catFilter = catName => {
		setNameEntered(catName);
		if (catName.length > 0) {
			const filteredCat = Object.entries(catData).filter(value => {
				return value[1].name.toLowerCase().includes(catName.toLowerCase());
			});
			if (nameEntered === '') {
				setFilteredData([]);
			} else {
				setFilteredData(filteredCat.slice(0, 6));
			}
		}
	};

	const focusSearch = inputFocus => {
		let localFocusRef = null;
		if (focusRef.current) localFocusRef = focusRef.current;
		if (inputFocus === true) {
			localFocusRef.classList.add('focus_search');
		} else if (inputFocus === false) {
			setTimeout(() => {
				localFocusRef.value = '';
				setFilteredData([]);
				localFocusRef.classList.remove('focus_search');
			}, 100);
		}
	};
	useEffect(() => {
		if (catOptions) {
			if (nameEntered.length > 1 && filteredData.length > 0) {
				catOptions.classList.add('show');
			} else {
				catOptions.classList.remove('show');
			}
		}
	}, [nameEntered]);
	const imgFormat = imageId => {
		let finalFormat;
		if (imageId === undefined) {
			finalFormat = require('../img/noimg(2).png');
			return finalFormat.toString();
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
		return finalFormat.toString();
	};
	const goToDescription = (e, cat, mainImg) => {
		e.preventDefault();
		navigate('/Description', {
			state: {
				catDescription: cat,
				mainImg,
			},
		});
	};
	return (
		<section className='home_search'>
			<h1>Find your new favorite cat</h1>
			<p>And learn more about his breed</p>
			<div className='search_wrapper'>
				<div className='search_options_wrapper'>
					<div className='search_options'>
						<input
							type='text'
							ref={focusRef}
							onBlur={() => focusSearch(false)}
							onFocus={() => focusSearch(true)}
							onChange={e => catFilter(e.target.value)}
							className='cat_searcher'
						/>
					</div>
					<div className='cat_options'>
						{filteredData != null
							? filteredData.map(catValue => {
									return (
										<a
											key={catValue[0]}
											onMouseDown={(
												e,
												mainImg = imgFormat(catValue[1].reference_image_id)
											) => {
												goToDescription(e, catValue[1], mainImg);
												console.log('working');
											}}
										>
											{catValue[1].name}
										</a>
									);
							  })
							: null}
					</div>
				</div>
				<a
					className='btn_adv_search'
					onClick={() => navigate('/SearchCat', { state: { catData } })}
				>
					Advanced search
				</a>
			</div>
		</section>
	);
}
HomeSearch.propTypes = {
	catData: PropTypes.array,
};
export default HomeSearch;
