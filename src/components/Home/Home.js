import React from 'react';
import './Home.css';

const Home = () => {
	const url = process.env.PUBLIC_URL + `/images/`;
	return (
		<div className='home'>
			<h1 style={{ height: '6%' }}>
				<span>Welcome to </span>
				Travel Safe.
			</h1>
			<div
				style={{ width: '80%', height: '30%', padding: '2rem' }}
				className='homemessage'>
				<p>
					Here you can find the up-to-date official travel advisories which are
					issued by governments across the globe.
				</p>
				<p>
					Hope this site can help you get a more comprehensive impression for
					your trip planning.
				</p>
				<div id='safetravel'>
					<p>Safe travel!</p>
					<p>Bon Voyage</p>
					<p>一路平安</p>
					<p>Gute Reise</p>
					<p>良い旅を</p>
					<p>buon viaggio</p>
					<p>Buen viaje!</p>
					<p>आपकी यात्रा शानदार हो</p>
				</div>
			</div>
			<div className='box'>
				{/* <div>
					{' '}
					<img
						src={url + 'travelglobally.jpg'}
						alt='travel-globally'
						id='homepageimg'
					/>
				</div> */}

				<div className='container'>
					<div className='earth'></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
