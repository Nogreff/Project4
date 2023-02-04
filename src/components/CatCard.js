import PropTypes from 'prop-types';
import '../css/CatCard.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function CatCard(props) {
	const { catPhoto, catName, catInfo, catReference } = props;
	const [imageCheck, setImageCheck] = useState(null);
	const navigate = useNavigate();
	const alternativeImage = e => {
		setImageCheck('https://cdn2.thecatapi.com/images/' + catReference + '.png');
		e.target.src = imageCheck;
	};
	if (catReference !== undefined && imageCheck === null) {
		setImageCheck(catPhoto);
	}
	return (
		<div
			className='cat_card'
			onClick={() =>
				navigate('/Description', { state: { catDescription: catInfo } })
			}
		>
			<img
				referrerPolicy='no-referrer'
				src={catReference === undefined ? catPhoto : catPhoto}
				onError={e => alternativeImage(e)}
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
