import React, { useState, useEffect } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';
import { Link } from 'react-router-dom';

const URL = 'https://www.travel-advisory.info/api';

const CountrySearched = ({ match }) => {
	const [countrySearch, setCountrySearch] = useState([]);
	const [flagList, setFlagList] = useState([]);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				let list = [];
				for (let key in res.data) {
					list.push(res.data[key]);
				}
				console.log(list);
				let singleCountry = list.filter((element) => {
					return element.name === match.params.countryname;
				});
				console.log(singleCountry);
				setCountrySearch(singleCountry);
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
				if (match.params.countryname === 'United States') {
					let uslist = [];
					let us = res[239];
					uslist.push(us);
					setFlagList(uslist);
				} else {
					let countryFlag = res.filter((element) => {
						return element.name === match.params.countryname;
					});
					setFlagList(countryFlag);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!countrySearch.length) {
		return (
			<div>
				<p style={{ color: 'tomato' }}>
					{match.params.countryname} is not a country, please
					<span>
						<Link to='/countries'> try </Link>
					</span>
					again.
				</p>
			</div>
		);
	}
	return (
		<div>
			<div style={{ paddingLeft: '70vw', marginTop: '1rem' }}>
				<SwitchCountryBar />
			</div>

			<Link to={`/country/${countrySearch[0].iso_alpha2}`}>
				<h2 style={{ marginTop: '2rem' }}>{countrySearch[0].name}</h2>
			</Link>
			{flagList.length !== 0 ? (
				<div style={{ marginTop: '4rem' }}>
					<p>Region: {flagList[0].region}</p>
					<p>Capital: {flagList[0].capital}</p>
					<p>Population: {flagList[0].population}</p>
					<p>Calling Code: {flagList[0].callingCodes[0]}</p>
					<p>
						Currencies: {flagList[0].currencies[0].name}{' '}
						<span> {flagList[0].currencies[0].symbol}</span>
					</p>
					<p>Timezones: {flagList[0].timezones[0]}</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default CountrySearched;
