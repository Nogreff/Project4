import PropTypes from 'prop-types';
import '../css/Header.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {
	const { catData } = props;
	const navigate = useNavigate();
	return (
		<header>
			<img
				src={require('../img/svg-gobbler(27).svg').default}
				onClick={() => navigate('/')}
			/>
			<ul className='header_menu'>
				<li className='menu_home' onClick={() => navigate('/')}>
					Home
				</li>
				<li
					className='menu_advanced_search'
					onClick={() => navigate('/SearchCat', { state: { catData } })}
				>
					Advanced search
				</li>
			</ul>
		</header>
	);
}
Header.propTypes = {
	catData: PropTypes.array,
};
export default Header;
