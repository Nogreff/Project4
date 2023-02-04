import PropTypes from 'prop-types';
import '../css/CatCard.css';
import { useNavigate } from 'react-router-dom';
function CatCard(props) {
	const { catPhoto, catName, catInfo } = props;
	const navigate = useNavigate();
	return (
		<div
			className='cat_card'
			onClick={() =>
				navigate('/Description', { state: { catDescription: catInfo } })
			}
		>
			<img
				referrerPolicy='no-referrer'
				src={catPhoto}
				style={{
					aspectRatio: 1,
					resizeMode: 'contain',
				}}
			/>
			<label>{catName}</label>
		</div>
	);
}

CatCard.propTypes = {
	catPhoto: PropTypes.string,
	catName: PropTypes.string,
	catInfo: PropTypes.object,
	catReference: PropTypes.string,
};
export default CatCard;
