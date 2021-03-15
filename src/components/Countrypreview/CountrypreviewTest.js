import React, { useState, useEffect } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';

const CountrypreviewTest = ({ match, countries, setCountries }) => {
	const [countryDetail, setCountryDetail] = useState([]);

	useEffect(() => {
		if (match) {
			let oneCountry = countries.filter((element) => {
				return element.iso_alpha2 === match.params.countryiso;
			});
			setCountryDetail(oneCountry);
			// console.log(oneCountry);
			console.log(countryDetail);
		}
	}, []);

	if (!countryDetail.length) {
		return <div>loading...</div>;
	}

	return (
		<div>
			<SwitchCountryBar />
			<p>hello</p>
			{/* <p>{countryDetail.name}</p> */}
		</div>
	);
};

export default CountrypreviewTest;
