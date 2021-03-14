import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

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
	}

	return (
		<div>
			<SearchBar
				formState={formState}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>

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

export default Countriescard;
