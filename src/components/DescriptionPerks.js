import PropTypes from 'prop-types';
import '../css/DescriptionPerks.css';

function DescriptionPerks(props) {
	const { catPerk } = props;
	const uncolored = { background: 'white' };
	const colored = { background: 'green' };
	let perk1 = uncolored;
	let perk2 = uncolored;
	let perk3 = uncolored;
	let perk4 = uncolored;
	let perk5 = uncolored;
	if (catPerk > 0) {
		perk1 = colored;
	}
	if (catPerk > 1) {
		perk2 = colored;
	}
	if (catPerk > 2) {
		perk3 = colored;
	}
	if (catPerk > 3) {
		perk4 = colored;
	}
	if (catPerk > 4) {
		perk5 = colored;
	}
	return (
		<ul className='description_perks'>
			<li id='perk_1' style={perk1}></li>
			<li id='perk_1' style={perk2}></li>
			<li id='perk_1' style={perk3}></li>
			<li id='perk_1' style={perk4}></li>
			<li id='perk_1' style={perk5}></li>
		</ul>
	);
}

DescriptionPerks.propTypes = {
	catPerk: PropTypes.number,
};
export default DescriptionPerks;
