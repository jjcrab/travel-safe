import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';
import SearchBar from '../SearchBar/SearchBar';

const tripAdviceURL = 'https://www.travel-advisory.info/api';

const Countries = () => {
	const [fullList, setFullList] = useState([]);
	const [formState, setFormState] = useState('');
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();

	useEffect(() => {
		fetch(tripAdviceURL)
			.then((res) => res.json())
			.then((res) => {
				let countryList = [];
				for (let key in res.data) {
					countryList.push(res.data[key]);
				}
				setFullList(countryList);
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
		let countrySearch = fullList.filter((element) => {
			return element.name === formState;
		});
		let original = fullList;

		setFullList(countrySearch);

		if (!countrySearch.length) {
			setError(true);

			console.log(original);
			setCountryNotIncluded(formState);
		}
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
					value={formState}
				/>
				{/* <Link to={`/country/${fullList.iso_alpha2}`}> */}
				<button type='submit'>submit</button>
				{/* </Link> */}
			</form>

			{error && (
				<p>{countryNotIncluded} is not a country. Please check spelling.</p>
			)}

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

export default Countries;
