import SearchFilterFunctions from './SearchFilterFunctions';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CatCard from './CatCard';
import DataContext from '../context/DataContext';
import '../css/SearchCat.css';

function SearchCat() {
	const {
		listTrack,
		setPageFocus,
		pageFocus,
		setPageTrack,
		pageTrack,
		setLatestPage,
		page1,
		page2,
		page3,
		page4,
		page5,
		page6,
		page7,
		filterOrder,
		setFilterOrder,
		cardMax,
		setCardMax,
		cardMin,
		setCardMin,
		catFiltered,
		setCatFiltered,
		catFilter,
		setCatFilter,
	} = useContext(DataContext);
	const [navLive, setNavLive] = useState(false);
	const location = useLocation();
	const navPage = document.getElementsByClassName('nav_page');
	const btnBack = document.querySelector('.btn_back');
	const btnNext = document.querySelector('.btn_next');
	const nextCards = () => {
		setCardMin(cardMin + 10);
		setCardMax(cardMax + 10);
		setCatFilter(catFiltered.slice(cardMin, cardMax));
		const prevPage = pageTrack - 1;
		navPage[pageTrack].classList.add('focused');
		navPage[prevPage].classList.remove('focused');
		setPageFocus(navPage[pageTrack]);
		setLatestPage(navPage[pageTrack]);
		setPageTrack(pageTrack + 1);
		setNavLive(true);
	};
	const backCards = () => {
		setCardMin(cardMin - 10);
		setCardMax(cardMax - 10);
		setCatFilter(catFiltered.slice(cardMin, cardMax));
		const navPage = document.getElementsByClassName('nav_page');
		const prevPage = pageTrack - 1;
		const prevvPage = pageTrack - 2;
		navPage[prevvPage].classList.add('focused');
		navPage[prevPage].classList.remove('focused');
		setPageFocus(navPage[prevvPage]);
		setLatestPage(navPage[prevvPage]);
		setPageTrack(pageTrack - 1);
		setNavLive(true);
	};
	useEffect(() => {
		if (btnBack) {
			if (cardMin < 10) {
				btnBack.classList.add('hidden');
			} else {
				btnBack.classList.remove('hidden');
			}
		}
		if (btnNext) {
			if (cardMax > 60) {
				btnNext.classList.add('hidden');
			} else {
				btnNext.classList.remove('hidden');
			}
		}
	}, [cardMin, cardMax, navLive]);
	useEffect(() => {
		if (filterOrder === false && catFilter.length > 1) {
			setCatFilter(catFiltered.slice(cardMin, cardMax));
		} else if (filterOrder === true && catFilter.length > 1) {
			setCatFilter(catFiltered.slice(0).reverse().slice(cardMin, cardMax));
		}
		if (location.state.catData && catFilter.length <= 0) {
			setCatFilter(location.state.catData.slice(cardMin, cardMax));
			setCatFiltered(location.state.catData);
		}
	}, [location.state.catData, cardMin, cardMax, filterOrder, catFiltered]);

	useEffect(() => {
		if (
			document.querySelector('.page_1') &&
			pageFocus === null &&
			pageTrack === 1
		) {
			document.querySelector('.page_1').classList.add('focused');
			setNavLive(true);
		} else if (
			pageFocus &&
			pageFocus.className.includes('focused') &&
			navLive === false
		) {
			listTrack(pageTrack);
			setNavLive(true);
		}
	}, [pageTrack, pageFocus]);
	return (
		<section className='search_cat'>
			<div className='cat_menu'>
				<div className='cat_filter'>
					<SearchFilterFunctions
						cats={location.state.catData}
						setCatFiltered={setCatFiltered}
						setFilterOrder={setFilterOrder}
					/>
				</div>
				<div className='cat_selected'>
					<div className='cat_cards'>
						{catFilter.map((value, index) => {
							return (
								<CatCard
									catPhoto={
										value.reference_image_id !== undefined
											? 'https://cdn2.thecatapi.com/images/' +
											  value.reference_image_id +
											  '.jpg'
											: require('../img/noimg(2).png')
									}
									catReference={value.reference_image_id}
									catName={value.name}
									catInfo={value}
									key={index}
								/>
							);
						})}
					</div>
					<div className='cat_nav'>
						<a className='btn_back hidden' onClick={() => backCards()}></a>
						<ul>
							<li
								ref={page1}
								className='nav_page page_1'
								onClick={() => listTrack(1)}
							>
								<a>1</a>
							</li>
							<li
								ref={page2}
								className='nav_page page_2'
								onClick={() => listTrack(2)}
							>
								<a>2</a>
							</li>
							<li
								ref={page3}
								className='nav_page page_3'
								onClick={() => listTrack(3)}
							>
								<a>3</a>
							</li>
							<li
								ref={page4}
								className='nav_page page_4'
								onClick={() => listTrack(4)}
							>
								<a>4</a>
							</li>
							<li
								ref={page5}
								className='nav_page page_5'
								onClick={() => listTrack(5)}
							>
								<a>5</a>
							</li>
							<li
								ref={page6}
								className='nav_page page_6'
								onClick={() => listTrack(6)}
							>
								<a>6</a>
							</li>
							<li
								ref={page7}
								className='nav_page page_7'
								onClick={() => listTrack(7)}
							>
								<a>7</a>
							</li>
						</ul>
						<a className='btn_next' onClick={() => nextCards()}></a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SearchCat;
