import PropTypes from 'prop-types';
import SearchFilter from './SearchFilter';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function SearchFilterFunctions(props) {
	const { cats, setCatFiltered, setFilterOrder } = props;
	const {
		navToggle,
		primaryNav,
		catCheck,
		setCatCheck,
		catPerks,
		setSheddMax,
		setSheddMin,
		cardMin,
		listTrack,
		setCardMin,
		setCardMax,
		accordionBox,
		setAccordionBox,
		catFiltered,
		sheddMin,
		sheddMax,
	} = useContext(DataContext);
	const menuToggle = () => {
		const menuVisibility = primaryNav.current.getAttribute('data-visible');
		if (menuVisibility === 'false') {
			primaryNav.current.setAttribute('data-visible', true);
			navToggle.current.setAttribute('aria-expanded', true);
		} else if (menuVisibility === 'true') {
			primaryNav.current.setAttribute('data-visible', false);
			navToggle.current.setAttribute('aria-expanded', false);
		}
	};
	const accordionToggle = (e, x) => {
		if (e.target.offsetParent.classList.value !== 'option_list') {
			const selectBox = accordionBox;
			e.currentTarget.classList.toggle('active');
			selectBox[x] = e.currentTarget;
			setAccordionBox(selectBox);
		}
	};
	const checker = () => {
		const catsToFilter = cats.slice().sort(function (a, b) {
			let catA = 0;
			let catB = 0;
			if (catPerks.current[8].checked === true) {
				catA = catA + a.adaptability;
				catB = catB + b.adaptability;
			}
			if (catPerks.current[5].checked === true) {
				catA = catA + a.affection_level;
				catB = catB + b.affection_level;
			}
			if (catPerks.current[1].checked === true) {
				catA = catA + a.child_friendly;
				catB = catB + b.child_friendly;
			}
			if (catPerks.current[0].checked === true) {
				catA = catA + a.dog_friendly;
				catB = catB + b.dog_friendly;
			}
			if (catPerks.current[3].checked === true) {
				catA = catA + a.energy_level;
				catB = catB + b.energy_level;
			}
			if (catPerks.current[9].checked === true) {
				catA = catA + a.grooming;
				catB = catB + b.grooming;
			}
			if (catPerks.current[10].checked === true) {
				catA = catA + a.health_issues;
				catB = catB + b.health_issues;
			}
			if (catPerks.current[11].checked === true) {
				catA = catA + a.intelligence;
				catB = catB + b.intelligence;
			}
			if (sheddMin && sheddMin.className === 'shedd_low shedd_selected') {
				catA = catA - a.shedding_level;
				catB = catB - b.shedding_level;
			}
			if (sheddMax && sheddMax.className === 'shedd_high shedd_selected') {
				catA = catA + a.shedding_level;
				catB = catB + b.shedding_level;
			}
			if (catPerks.current[4].checked === true) {
				catA = catA + a.social_needs;
				catB = catB + b.social_needs;
			}
			if (catPerks.current[2].checked === true) {
				catA = catA + a.stranger_friendly;
				catB = catB + b.stranger_friendly;
			}
			if (catPerks.current[12].checked === true) {
				catA = catA + a.vocalisation;
				catB = catB + b.vocalisation;
			}
			if (catA === catB) {
				return 0;
			}
			if (catA < catB) {
				return 1;
			}
			return -1;
		});
		setCardMax(10);
		setCardMin(0);
		if (cardMin !== 0) {
			listTrack(1);
		}
		setCatFiltered(catsToFilter);
	};
	const resetPerkRefs = () => {
		for (let x = 0; x < catPerks.current.length; x++) {
			catPerks.current[x].checked = false;
		}
		checkUpdate();
	};
	const resetPerkCheck = () => {
		for (let x = 0; x < catPerks.length; x++) {
			if (x === 6) {
				catPerks.current[x].classList.value = 'shedd_low shedd_selected';
			} else if (x === 7) {
				catPerks.current[x].classList.value = 'shedd_high';
			} else {
				catPerks.current[x].checked = false;
			}
		}
	};
	const checkBoxCheck = () => {
		for (let x = 0; x < catPerks.current.length; x++) {
			if (catCheck && catPerks.current[x] && catCheck[x] === true) {
				catPerks.current[x].checked = true;
			}
		}
	};
	const accordionBoxCheck = () => {
		if (accordionBox && accordionBox.length > 0) {
			for (let i = 0; i < primaryNav.current.children.length; i++) {
				if (
					accordionBox[i] &&
					primaryNav.current.children[i].className === 'accordion_box'
				) {
					primaryNav.current.children[i].className = accordionBox[i].className;
				}
			}
		}
	};
	const sheddLvlCheck = () => {
		if (sheddMin || sheddMax) {
			catPerks.current[6].classList.value = sheddMin.classList.value;
			catPerks.current[7].classList.value = sheddMax.classList.value;
		}
	};
	const menuRange = shedd => {
		if (shedd.target.className === 'shedd_low') {
			catPerks.current[6].classList.add('shedd_selected');
			catPerks.current[7].classList.remove('shedd_selected');
			setSheddMax(catPerks.current[7]);
			setSheddMin(catPerks.current[6]);
		} else if (shedd.target.className === 'shedd_high') {
			catPerks.current[7].classList.add('shedd_selected');
			catPerks.current[6].classList.remove('shedd_selected');
			setSheddMax(catPerks.current[7]);
			setSheddMin(catPerks.current[6]);
		}
	};
	const checkUpdate = () => {
		setCatCheck(catUpdate => {
			for (let x = 0; x < catPerks.current.length; x++) {
				catUpdate[x] = catPerks.current[x].checked;
			}
			return catUpdate;
		});
	};
	const resetAccordion = () => {
		const accordionUpdate = accordionBox;
		for (let i = 0; i < primaryNav.current.children.length; i++) {
			if (primaryNav.current.children[i].classList.contains('active')) {
				primaryNav.current.children[i].classList.remove('active');
				accordionUpdate[i].classList.remove('active');
			}
		}
		setAccordionBox(accordionUpdate);
	};
	const resetFilters = () => {
		const catReset = cats;
		resetPerkRefs();
		resetPerkCheck();
		setSheddMax('');
		setSheddMin('');
		setCardMax(10);
		setCardMin(0);
		setFilterOrder(false);
		setCatFiltered(catReset);
		resetAccordion();
		if (cardMin !== 0) {
			listTrack(1);
		}
		catPerks.current[6].classList.add('shedd_selected');
		catPerks.current[7].classList.remove('shedd_selected');
	};
	const resetCheck = () => {
		if (
			catFiltered !== cats ||
			cardMin !== 0 ||
			catPerks.current.some(index => index.checked === true) ||
			accordionBox.some(index => index.classList.contains('active')) ||
			catPerks.current[7].classList.value === 'shedd_high shedd_selected'
		) {
			resetFilters();
		}
	};
	return (
		<>
			<SearchFilter
				cats={cats}
				setCatFiltered={setCatFiltered}
				setFilterOrder={setFilterOrder}
				checker={checker}
				resetPerkRefs={resetPerkRefs}
				resetPerkCheck={() => resetPerkCheck()}
				checkBoxCheck={checkBoxCheck}
				menuRange={menuRange}
				checkUpdate={() => checkUpdate()}
				menuToggle={() => menuToggle()}
				accordionToggle={accordionToggle}
				resetCheck={() => resetCheck()}
				accordionBoxCheck={accordionBoxCheck}
				sheddLvlCheck={sheddLvlCheck}
			/>
		</>
	);
}
SearchFilterFunctions.propTypes = {
	cats: PropTypes.array,
	setCatFiltered: PropTypes.func,
	setFilterOrder: PropTypes.func,
};
export default SearchFilterFunctions;
