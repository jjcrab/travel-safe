import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';
import Grid from '../Grid';
// import SearchBar from '../SearchBar/SearchBar';

const flagURL = 'https://restcountries.eu/rest/v2/all';

const Countries = () => {
	const [fullList, setFullList] = useState([]);
	const [formState, setFormState] = useState('');
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();

	useEffect(() => {
		fetch(flagURL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setFullList(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setError(false);
		console.log(error);
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
		console.log(countrySearch);

		if (!countrySearch.length) {
			setError(true);
			console.log(original);
			setCountryNotIncluded(formState);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} style={{ marginTop: '0.5rem' }}>
				<label htmlFor='searchcountry'>Search Country </label>
				<input
					placeholder='country name'
					type='text'
					id='countryname'
					required
					onChange={handleChange}
					value={formState}
				/>
				{/* <Link to={`/country/${fullList.alpha2Code}`}> */}
				<button type='submit'>submit</button>
				{/* </Link> */}
			</form>

			{error && (
				<p style={{ color: 'tomato' }}>
					{countryNotIncluded} is not a country. Please check spelling.
				</p>
			)}
			<div className='background'>
				<Grid>
					{fullList.map((element) => (
						<div className='countryLink'>
							<Link to={`/country/${element.alpha2Code}`}>
								<img src={element.flag} alt='test' className='flag' />
								<p>{element.name}</p>
							</Link>
						</div>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Countries;
