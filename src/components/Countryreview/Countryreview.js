import React, { useEffect, useState } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';

const countryAdviceURL = 'https://www.travel-advisory.info/api?countrycode=';

const Countryreview = ({ match }) => {
	const [countryDetail, setCountryDetail] = useState(null);
	const [flagList, setFlagList] = useState([]);

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

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let countryFlag = res.filter((element) => {
					return element.alpha2Code === match.params.countryiso;
				});
				setFlagList(countryFlag);
				console.log(countryFlag);
				console.log(flagList);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!countryDetail) {
		return (
			<div>
				<p>No Information (yet).</p>
			</div>
		);
	}
	if (!flagList) {
		return (
			<div>
				<p>No Image (yet).</p>
			</div>
		);
	}

	return (
		<div>
			<SwitchCountryBar />
			<h2>{countryDetail.name}</h2>
			<p>{countryDetail.advisory.score}</p>
			<p>{countryDetail.advisory.message}</p>
			<footer>Updated on {countryDetail.advisory.updated}</footer>
			<img src={flagList.flag} alt='flag' />
			<p>{flagList.capital}</p>
		</div>
	);
};

export default Countryreview;
