import PropTypes from 'prop-types';
import HomeSearch from './HomeSearch';
import HomeCards from './HomeCards';
import HomeMore from './HomeMore';
import '../css/Home.css';

function Home(props) {
	const { catData, mountCheck } = props;
	return (
		<div>
			<HomeSearch catData={catData} />
			<HomeCards catData={catData} mountCheck={mountCheck} />
			<HomeMore />
		</div>
	);
}

Home.propTypes = {
	catData: PropTypes.array,
	mountCheck: PropTypes.bool,
};

export default Home;
