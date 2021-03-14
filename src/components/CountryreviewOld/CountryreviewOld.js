import React, { useEffect, useState } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';

const countryAdviceURL = 'https://www.travel-advisory.info/api?countrycode=';

const CountryreviewOld = ({ match, countries, setCountries }) => {
	const [countryDetail, setCountryDetail] = useState(null);
	const initialState = { countryname: '' };
	const [formState, setFormState] = useState(initialState);

	useEffect(() => {
		const url = `${countryAdviceURL}${match.params.countryiso}`;
		console.log(match.params.countryiso);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let countryObj = res.data[match.params.countryiso];
				console.log(countryObj);
				setCountryDetail(countryObj);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	if (!countryDetail) {
		return <div>loading...</div>;
	}
	return (
		<div>
			<SwitchCountryBar />
			<h2>{countryDetail.name}</h2>
			<p>{countryDetail.advisory.score}</p>
			<p>{countryDetail.advisory.message}</p>
			<footer>Updated on {countryDetail.advisory.updated}</footer>
			<p>{countries.name}</p>
		</div>
	);
};

export default CountryreviewOld;
