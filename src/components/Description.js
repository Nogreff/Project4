import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DescriptionPhoto from './DescriptionPhoto.js';
import DescriptionPerks from './DescriptionPerks.js';
import '../css/Description.css';

function Description(props) {
	const { photoRequest, catPhotos, mountCheck } = props;
	const [photo, setPhoto] = useState([]);
	const location = useLocation();
	useEffect(() => {
		if (location.state.catDescription.id) {
			photoRequest(location.state.catDescription.id);
		}
	}, [location.state.catDescription.id]);
	useEffect(() => {
		if (photo !== catPhotos) {
			setPhoto(catPhotos);
		}
	}, [catPhotos]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section className='description'>
			<div className='cat_info'>
				<div className='info_profile'>
					<h1>{location.state.catDescription.name}</h1>
					<img
						src={location.state.mainImg}
						style={{
							aspectRatio: 1,
							resizeMode: 'contain',
						}}
					/>
				</div>
				<div className='info_data'>
					<h2>Information</h2>
					<ul>
						<li>
							<span className='data_title'>Information</span>
						</li>
						<li>
							<span className='data_name cat_ori'>Origin:</span>
							<span className='data_description'>
								{location.state.catDescription.origin}
							</span>
						</li>
						<li>
							<span className='data_name cat_lif'>Life spawn:</span>
							<span className='data_description'>
								{location.state.catDescription.life_span}
							</span>
						</li>
						<li>
							<span className='data_name cat_tem'>Temperament:</span>
							<span className='data_description'>
								{location.state.catDescription.temperament}
							</span>
						</li>
						<li>
							<span className='data_name cat_des'>Description:</span>
							<span className='data_description'>
								{location.state.catDescription.description}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='cat_fact'>
				<h1>Breed characteristics</h1>
				<ul className='cat_perks'>
					<li>
						<span className='perk_name'>Adaptability:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.adaptability}
						/>
					</li>
					<li>
						<span className='perk_name'>Affection level:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.affection_level}
						/>
					</li>
					<li>
						<span className='perk_name'>Child friendly:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.child_friendly}
						/>
					</li>
					<li>
						<span className='perk_name'>Dog friendly:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.dog_friendly}
						/>
					</li>
					<li>
						<span className='perk_name'>Energy level:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.energy_level}
						/>
					</li>
					<li>
						<span className='perk_name'>Grooming:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.grooming}
						/>
					</li>
					<li>
						<span className='perk_name'>Health issues:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.health_issues}
						/>
					</li>
					<li>
						<span className='perk_name'>Intelligence:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.intelligence}
						/>
					</li>
					<li>
						<span className='perk_name'>Shedding level:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.shedding_level}
						/>
					</li>
					<li>
						<span className='perk_name'>Social needs:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.social_needs}
						/>
					</li>
					<li>
						<span className='perk_name'>Stranger friendly:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.stranger_friendly}
						/>
					</li>
					<li>
						<span className='perk_name'>Vocalisation:</span>
						<DescriptionPerks
							catPerk={location.state.catDescription.vocalisation}
						/>
					</li>
				</ul>
			</div>
			<div className='cat_photo'>
				<DescriptionPhoto photo={photo} mountCheck={mountCheck} />
			</div>
		</section>
	);
}
Description.propTypes = {
	photoRequest: PropTypes.func,
	catPhotos: PropTypes.array,
	mountCheck: PropTypes.bool,
};
export default Description;
