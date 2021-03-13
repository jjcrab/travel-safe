import React from 'react';
import './Home.css';

const Home = () => {
	const url = process.env.PUBLIC_URL + `/images/`;
	return (
		<div>
			<h1>
				<span>Welcome to </span>
				Travel Safe.
			</h1>
			<p>
				Here you can find the up-to-date official travel advisories which are
				issued by governments across the globe.
			</p>
			<p>
				Hope this site can help you get a more comprehensive impression for your
				trip planning.
			</p>
			<p>Safe travel!</p>
			<img src={url + 'travelglobally.jpg'} alt='travel-globally' />
		</div>
	);
};

export default Home;
