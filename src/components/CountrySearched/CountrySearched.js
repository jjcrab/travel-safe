import React, { useState, useEffect } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';

const URL = 'https://www.travel-advisory.info/api';

const CountrySearched = ({ match }) => {
	const [countrySearch, setCountrySearch] = useState([]);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				let countryList = [];
				console.log(res);
				for (let key in res.data) {
					countryList.push(res.data[key]);
				}
				console.log(countryList);
				setCountrySearch(countryList);
				console.log(countrySearch);
				return countryList;
			})
			.then((countryList) => {
				if (match) {
					let singleCountry = countryList.filter((element) => {
						return element.name === match.params.countryname;
					});
					setCountrySearch(singleCountry);
					console.log(countrySearch);
					console.log(singleCountry);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!countrySearch) {
		return <div>loading...</div>;
	}
	return (
		<div>
			<SwitchCountryBar />
			{/* {match && <p>{countrySearch.advisory.score}</p>} */}
		</div>
	);
};

export default CountrySearched;
