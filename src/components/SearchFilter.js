import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import '../css/SearchFilter.css';
import DataContext from '../context/DataContext';

function SearchFilter(props) {
	const {
		checker,
		checkBoxCheck,
		checkUpdate,
		menuRange,
		menuToggle,
		accordionToggle,
		resetCheck,
		accordionBoxCheck,
		sheddLvlCheck,
	} = props;
	const { primaryNav, navToggle, catPerks } = useContext(DataContext);
	useEffect(() => {
		checkBoxCheck();
		accordionBoxCheck();
		sheddLvlCheck();
	});
	return (
		<div className='filter_wrapper'>
			<button
				ref={navToggle}
				className='mobile_toggle'
				aria-controls='filter_list'
				aria-expanded='false'
				onClick={() => menuToggle()}
			></button>
			<div
				ref={primaryNav}
				className='filter_container filter_menu'
				data-visible='false'
			>
				<div className='accordion_box' onClick={e => accordionToggle(e, 0)}>
					<div className='box_label'>
						<h3>Good with</h3>
					</div>
					<div className='option_list'>
						<div className='check_wrapper dog_friendly'>
							<input
								ref={e => (catPerks.current[0] = e)}
								type='checkbox'
								className='dog_fri'
								value='dog_friendly'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper child_friendly'>
							<input
								ref={e => (catPerks.current[1] = e)}
								type='checkbox'
								className='chi_fri'
								value='child_friendly'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper stranger_friendly'>
							<input
								ref={e => (catPerks.current[2] = e)}
								type='checkbox'
								className='str_fri'
								value='stranger_friendly'
								onClick={checkUpdate}
							/>
						</div>
					</div>
				</div>
				<div className='accordion_box' onClick={e => accordionToggle(e, 1)}>
					<div className='box_label'>
						<h3>Activity level</h3>
					</div>
					<div className='option_list'>
						<div className='check_wrapper energy_level'>
							<input
								ref={e => (catPerks.current[3] = e)}
								type='checkbox'
								className='ene_lev'
								value='energy_level'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper social_needs'>
							<input
								ref={e => (catPerks.current[4] = e)}
								type='checkbox'
								className='soc_nee'
								value='social_needs'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper affection_level'>
							<input
								ref={e => (catPerks.current[5] = e)}
								type='checkbox'
								className='aff_lev'
								value='affection_level'
								onClick={checkUpdate}
							/>
						</div>
					</div>
				</div>
				<div className='accordion_box' onClick={e => accordionToggle(e, 2)}>
					<div className='box_label'>
						<h3>Shedding level</h3>
					</div>
					<div className='option_list'>
						<div className='check_wrapper shedding_level'>
							<ul>
								<li
									ref={e => (catPerks.current[6] = e)}
									className='shedd_low shedd_selected'
									onClick={e => menuRange(e)}
								>
									LOW
								</li>
								<li
									ref={e => (catPerks.current[7] = e)}
									className='shedd_high'
									onClick={e => menuRange(e)}
								>
									HIGH
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='accordion_box' onClick={e => accordionToggle(e, 3)}>
					<div className='box_label'>
						<h3>Others</h3>
					</div>
					<div className='option_list'>
						<div className='check_wrapper adaptability'>
							<input
								ref={e => (catPerks.current[8] = e)}
								type='checkbox'
								className='adapt'
								value='adaptability'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper grooming'>
							<input
								ref={e => (catPerks.current[9] = e)}
								type='checkbox'
								className='groom'
								value='grooming'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper health_issues'>
							<input
								ref={e => (catPerks.current[10] = e)}
								type='checkbox'
								className='hea_iss'
								value='health_issues'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper intelligence'>
							<input
								ref={e => (catPerks.current[11] = e)}
								type='checkbox'
								className='intel'
								value='intelligence'
								onClick={checkUpdate}
							/>
						</div>
						<div className='check_wrapper vocalisation'>
							<input
								ref={e => (catPerks.current[12] = e)}
								type='checkbox'
								className='vocal'
								value='vocalisation'
								onClick={checkUpdate}
							/>
						</div>
					</div>
				</div>
				<ul className='filter_btns'>
					<li
						className='btn_filter'
						onClick={() => {
							checker();
							menuToggle();
						}}
					>
						Search
					</li>
					<li
						className='btn_reset'
						onClick={() => {
							resetCheck();
							menuToggle();
						}}
					>
						Reset
					</li>
				</ul>
			</div>
		</div>
	);
}

SearchFilter.propTypes = {
	cats: PropTypes.array,
	setCatFiltered: PropTypes.func,
	setFilterOrder: PropTypes.func,
	checker: PropTypes.func,
	resetPerkRefs: PropTypes.func,
	resetPerkCheck: PropTypes.func,
	checkBoxCheck: PropTypes.func,
	checkUpdate: PropTypes.func,
	menuRange: PropTypes.func,
	menuToggle: PropTypes.func,
	accordionToggle: PropTypes.func,
	resetCheck: PropTypes.func,
	accordionBoxCheck: PropTypes.func,
	sheddLvlCheck: PropTypes.func,
};
export default SearchFilter;
