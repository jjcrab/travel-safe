import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

const tripAdviceURL = 'https://www.travel-advisory.info/api';

const CountriesOld = ({ match, countries, setCountries }) => {
	const initialState = { countryname: '' };
	const [formState, setFormState] = useState(initialState);
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();
	const [resList, setResList] = useState();
	const [filterRes, setFilterRes] = useState();

	useEffect(() => {
		fetch(tripAdviceURL)
			.then((res) => res.json())
			.then((res) => {
				let countryList = [];
				for (let key in res.data) {
					countryList.push(res.data[key]);
				}
				setCountries(countryList);
				setResList(countryList);
				console.log(countries);
				return countryList;
			})
			.then((countryList) => {
				// console.log(countries);
				setError(false);
				if (match) {
					let filteredList = countryList.filter((element) => {
						return element.continent === match.params.continent;
					});
					setCountries(filteredList);
					setFilterRes(filteredList);
					console.log(countries);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setFormState({ countryname: event.target.value });
		console.log(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError(false);
		let countrySearch = countries.filter((element) => {
			return element.name === formState.countryname;
		});
		let fullList = countries;

		setCountries(countrySearch);

		if (!countrySearch.length) {
			setError(true);
			setCountries(fullList);
			setCountryNotIncluded(formState.countryname);
		}

		// setFormState(initialState);
		// if (match && countries.length === 1) {
		// 	setCountries(filterRes);
		// }

		// if (!match && countries.length === 1) {
		// 	setCountries(resList);
		// }
		console.log(countrySearch);
		return countrySearch;
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchcountry'>Search Country </label>
				<input
					placeholder='country name'
					type='text'
					id='countryname'
					required
					onChange={handleChange}
					value={formState.countryname}
				/>
				{/* <Link to={`/country/${countrySearch.iso_alpha2}`}> */}
				<button type='submit'>submit</button>
				{/* </Link> */}
			</form>

			{match && match.params.continent === 'AF' && <h3>Africa</h3>}
			{match && match.params.continent === 'AN' && <h3>Antartica</h3>}
			{match && match.params.continent === 'AS' && <h3>Asia</h3>}
			{match && match.params.continent === 'OC' && <h3>Oceania</h3>}
			{match && match.params.continent === 'EU' && <h3>Europe</h3>}
			{match && match.params.continent === 'NA' && <h3>North America</h3>}
			{match && match.params.continent === 'SA' && <h3>South America</h3>}

			{error && <p>{countryNotIncluded} is not in this region.</p>}

			{countries.map((element) => (
				<div>
					<Link to={`/country/${element.iso_alpha2}`}>
						<p>{element.name}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CountriesOld;
