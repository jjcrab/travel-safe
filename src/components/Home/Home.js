import React from 'react';
import './Home.css';

const Home = () => {
	const url = process.env.PUBLIC_URL + `/images/`;
	return (
		<div className='home'>
			<h1 style={{ height: '10%' }}>
				<span>Welcome to </span>
				Travel Safe.
			</h1>
			<div style={{ width: '80%', height: '20%' }}>
				<p>
					Here you can find the up-to-date official travel advisories which are
					issued by governments across the globe.
				</p>
				<p>
					Hope this site can help you get a more comprehensive impression for
					your trip planning.
				</p>
				<p id='safetravel'>Safe travel!</p>
			</div>
			<div style={{ height: '60%' }}>
				<img
					src={url + 'travelglobally.jpg'}
					alt='travel-globally'
					id='homepageimg'
				/>
			</div>
		</div>
	);
};

export default Home;
