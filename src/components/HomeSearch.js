import PropTypes from 'prop-types';
import '../css/HomeSearch.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeSearch(props) {
	const { catData } = props;
	const [filteredData, setFilteredData] = useState([]);
	const [nameEntered, setNameEntered] = useState('');
	const focusRef = useRef();
	const navigate = useNavigate();
	const catOptions = document.querySelector('.cat_options');
	const choosedCat = cat => {
		navigate('/Description', { state: { catDescription: cat } });
	};
	const catFilter = catName => {
		setNameEntered(catName);
		const filteredCat = Object.entries(catData).filter(value => {
			return value[1].name.toLowerCase().includes(catName.toLowerCase());
		});
		if (nameEntered === '') {
			setFilteredData([]);
		} else {
			setFilteredData(filteredCat);
		}
	};

	const focusSearch = inputFocus => {
		if (inputFocus === true) {
			focusRef.current.classList.add('focus_search');
		} else if (inputFocus === false) {
			setTimeout(() => {
				focusRef.current.value = '';
				setFilteredData([]);
				focusRef.current.classList.remove('focus_search');
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
	return (
		<section className='home_search'>
			<h1>Find your new favorite cat</h1>
			<p>And learn more about his breed</p>
			<div className='search_wrapper'>
				<div className='search_options'>
					<input
						type='text'
						ref={focusRef}
						onBlur={() => focusSearch(false)}
						onFocus={() => focusSearch(true)}
						onChange={e => catFilter(e.target.value)}
						className='cat_searcher'
					/>
					<a
						className='btn_adv_search'
						onClick={() => navigate('/SearchCat', { state: { catData } })}
					>
						Advanced search
					</a>
				</div>
				<div className='cat_options'>
					{filteredData != null
						? filteredData.map((catValue, index) => {
								return (
									<a onClick={() => choosedCat(catValue[1])} key={index}>
										{catValue[1].name}
									</a>
								);
						  })
						: null}
				</div>
			</div>
		</section>
	);
}
HomeSearch.propTypes = {
	catData: PropTypes.array,
};
export default HomeSearch;
