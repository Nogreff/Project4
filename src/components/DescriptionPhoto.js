import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../css/DescriptionPhoto.css';

function DescriptionPhoto(props) {
	const { photo } = props;
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		if (photo !== photos) {
			setPhotos(photo);
		}
	}, [photo]);
	return (
		<div className='description_photo'>
			<h2>Gallery</h2>
			<div className={'photo_container'}>
				{photos.map((value, index) => {
					return <img src={value.url} key={index} />;
				})}
			</div>
		</div>
	);
}

DescriptionPhoto.propTypes = {
	photo: PropTypes.array,
};

export default DescriptionPhoto;
