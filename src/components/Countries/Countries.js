import React from 'react';
import './Countries.css';

const tripAdviceURL = 'https://www.travel-advisory.info/api';

const Countries = () => {
	fetch(tripAdviceURL)
		.then((res) => res.json())
		.then((res) => {
			console.log(res.data.AD);
		})
		.catch((err) => {
			console.error(err);
		});
	return <div>Hello</div>;
};

export default Countries;
