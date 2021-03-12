import React, { useEffect } from 'react';

const countryAdviceURL = 'https://www.travel-advisory.info/api?countrycode=';

const Countryreview = ({ match, country, setCountry }) => {
	useEffect(() => {
		const url = `${countryAdviceURL}${match.params.countryiso}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let countryObj = res.data[match.params.countryiso];
				setCountry(countryObj);
				console.log(country);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<label>Switch Country </label>
			<input placeholder='country name'></input>
			<button>submit</button>
			<p>{country.advisory.score}</p>
			<p>{country.advisory.message}</p>
		</div>
	);
};

export default Countryreview;
