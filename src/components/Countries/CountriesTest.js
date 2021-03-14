import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const CountriesTest = ({ match, countries, setCountries }) => {
	const [formState, setFormState] = useState('');
	const [countryFromSearch, setCountryFromSearch] = useState([2, 3]);
	const [fullList, setFullList] = useState([]);

	useEffect(() => {
		// if (match) {
		// 	let filteredList = countries.filter((element) => {
		// 		return element.continent === match.params.continent;
		// 	});
		// setCountries(filteredList);
		// 	console.log(countries);
		// }

		console.log(countries);
		setFullList(countries);
	}, []);

	function handleChange(event) {
		setFormState(event.target.value);
		console.log(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getCountry(formState);
	}

	// useEffect(() => {
	// 	getCountry(formState);
	// }, [formState]);

	function getCountry(formState) {
		let countrySearch = countries.filter((element) => {
			return element.name === formState;
		});
		// if (!countrySearch.length) {
		//     setError(true);
		// 	setCountries(fullList);
		// }

		setCountryFromSearch(countrySearch);
		console.log(countryFromSearch);
		console.log(countrySearch);
	}

	return (
		<div>
			<SearchBar
				formState={formState}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				countryFromSearch={countryFromSearch}
			/>
			{fullList.map((element) => (
				<div>
					<Link to={`/country/${element.iso_alpha2}`}>
						<p>{element.name}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CountriesTest;
