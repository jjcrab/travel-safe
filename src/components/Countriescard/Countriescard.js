import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SwitchContinent from '../SwitchContinent/SwitchContinent';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';
import Grid from '../Grid';

const tripURL = 'https://www.travel-advisory.info/api';

const Countriescard = ({ match }) => {
	const [countries, setCountries] = useState([]);
	const [formState, setFormState] = useState('');
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();

	useEffect(() => {
		fetch(tripURL)
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
		let fullList = countries;

		setCountries(countrySearch);

		if (!countrySearch.length) {
			setError(true);
			setCountries(fullList);
			setCountryNotIncluded(formState);
		}
		setFormState('');
	}

	return (
		<div>
			<div style={{ margin: '2%' }}>
				<Grid gap='1rem'>
					<SearchBar
						formState={formState}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						country={countries}
					/>
					<SwitchContinent className='switchContinent' />
				</Grid>
			</div>

			{match && match.params.continent === 'AN' && <h2>Antartica</h2>}
			{match && match.params.continent === 'AF' && <h2>Africa</h2>}
			{match && match.params.continent === 'AS' && <h2>Asia</h2>}
			{match && match.params.continent === 'OC' && <h2>Oceania</h2>}
			{match && match.params.continent === 'EU' && <h2>Europe</h2>}
			{match && match.params.continent === 'NA' && <h2>North America</h2>}
			{match && match.params.continent === 'SA' && <h2>South America</h2>}

			{error && (
				<p style={{ color: 'tomato' }}>
					<span style={{ fontWeight: '600' }}>{countryNotIncluded}</span> is not
					in this region.
				</p>
			)}

			<Grid gap='1rem' minWidth='100px'>
				{countries.map((element) => (
					<div>
						<Link to={`/country/${element.iso_alpha2}`}>
							<p>{element.name}</p>
						</Link>
					</div>
				))}
			</Grid>
		</div>
	);
};

export default Countriescard;
