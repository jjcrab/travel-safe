import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

const tripAdviceURL = 'https://www.travel-advisory.info/api';

const Countries = ({ match, countries, setCountries }) => {
	const initialState = { countryname: '' };
	const [formState, setFormState] = useState(initialState);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(tripAdviceURL)
			.then((res) => res.json())
			.then((res) => {
				let countryList = [];
				for (let key in res.data) {
					countryList.push(res.data[key]);
				}
				setCountries(countryList);
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
					console.log(countries);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setFormState(event.target.value);
		console.log(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError(false);
		let countrySearch = countries.filter((element) => {
			return element.name === formState;
		});
		const fullList = countries;

		setCountries(countrySearch);
		if (!countrySearch.length) {
			setError(true);
			setCountries(fullList);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchcountry'>Search by Country </label>
				<input
					placeholder='country name'
					type='text'
					id='countryname'
					onChange={handleChange}
					value={formState.countryname}
				/>
				<button type='submit'>submit</button>
			</form>

			{error && (
				<p>Country is not in the region. {countries.includes(formState)}</p>
			)}

			{!error &&
				countries.map((element) => (
					<div>
						<Link to={`/country/${element.iso_alpha2}`}>
							<p>{element.name}</p>
						</Link>
					</div>
				))}
		</div>
	);
};

export default Countries;
