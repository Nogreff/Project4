import PropTypes from 'prop-types';
import { createContext, useState, useRef } from 'react';

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
	const [catFiltered, setCatFiltered] = useState([]);
	const [catFilter, setCatFilter] = useState([]);
	const [cardMin, setCardMin] = useState(0);
	const [cardMax, setCardMax] = useState(10);
	const [pageFocus, setPageFocus] = useState(null);
	const [pageTrack, setPageTrack] = useState(1);
	const [filterOrder, setFilterOrder] = useState(false);
	const [latestPage, setLatestPage] = useState(null);
	const [accordionBox, setAccordionBox] = useState([]);
	const [sheddMin, setSheddMin] = useState();
	const [sheddMax, setSheddMax] = useState();
	const [catCheck, setCatCheck] = useState([]);
	const page1 = useRef();
	const page2 = useRef();
	const page3 = useRef();
	const page4 = useRef();
	const page5 = useRef();
	const page6 = useRef();
	const page7 = useRef();
	const catPerks = useRef([]);
	const primaryNav = useRef();
	const navToggle = useRef();
	const listTrack = track => {
		const navPage = document.getElementsByClassName('nav_page');
		setPageFocus(navPage[track - 1]);
		setPageTrack(track);
		let setLatest;
		if (latestPage === null) {
			setLatest = navPage[0];
		} else {
			setLatest = latestPage;
		}
		setCardMin(10 * track - 10);
		setCardMax(10 * track);
		setCatFilter(catFiltered.slice(cardMin, cardMax));
		navPage[track - 1].classList.add('focused');
		if (navPage[track - 1].classList.value !== setLatest.classList.value) {
			setLatest.classList.remove('focused');
		}
		setLatestPage(navPage[track - 1]);
	};
	return (
		<DataContext.Provider
			value={{
				navToggle,
				primaryNav,
				catCheck,
				setCatCheck,
				catPerks,
				sheddMax,
				setSheddMax,
				sheddMin,
				setSheddMin,
				listTrack,
				accordionBox,
				setAccordionBox,
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
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
DataProvider.propTypes = {
	children: PropTypes.element,
};
export default DataContext;
