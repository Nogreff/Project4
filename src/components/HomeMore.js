import '../css/HomeMore.css';

function HomeMore() {
	return (
		<section className='home_more'>
			<div className='more_wrapper'>
				<div className='more_description'>
					<h1>Why should you own a cat?</h1>
					<p>
						Cat owners can reduce tensions by just stroking their furry friend’s
						head. Petting a cat releases endorphins into the brain, which makes
						you happier. Also, cats have the softest fur!
					</p>
					<a
						href='http://www.vetstreet.com/cats'
						target='_blank'
						rel='noreferrer'
					>
						Learn more
					</a>
				</div>
				<img src={require('../img/moreCat.png')} />
			</div>
		</section>
	);
}

export default HomeMore;
