import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SwitchContinent from '../SwitchContinent/SwitchContinent';
import Grid from '../Grid';

const tripURL = 'https://www.travel-advisory.info/api';

const Countriescard = ({ match }) => {
	const [countries, setCountries] = useState([]);
	const [formState, setFormState] = useState('');
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();
	const [originalList, setOriginalList] = useState([]);
	const [filterContinent, setFilterContinent] = useState([]);
	const [error2, setError2] = useState(false);

	useEffect(() => {
		fetch(tripURL)
			.then((res) => res.json())
			.then((res) => {
				let countryList = [];
				for (let key in res.data) {
					countryList.push(res.data[key]);
				}
				setOriginalList(countryList);

				return countryList;
			})
			.then((countryList) => {
				if (match) {
					let filteredList = countryList.filter((element) => {
						return element.continent === match.params.continent;
					});
					setFilterContinent(filteredList);
					console.log(countries);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setError(false);
		setFormState(event.target.value);
		console.log(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError(false);
		let countrySearch = filterContinent.filter((element) => {
			return element.name === formState;
		});
		setCountries(countrySearch);
		if (!countrySearch.length) {
			setError(true);
			setCountryNotIncluded(formState);
		}

		setFormState('');
	}
	if (!originalList.length) {
		return null;
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

			{match && match.params.continent === 'AN' && (
				<h2>
					Countries in <span>Antartica</span>
				</h2>
			)}
			{match && match.params.continent === 'AF' && (
				<h2>
					Countries in <span>Africa</span>
				</h2>
			)}
			{match && match.params.continent === 'AS' && (
				<h2>
					Countries in <span>Asia</span>
				</h2>
			)}
			{match && match.params.continent === 'OC' && (
				<h2>
					Countries in <span>Oceania</span>
				</h2>
			)}
			{match && match.params.continent === 'EU' && (
				<h2>
					Countries in <span>Europe</span>
				</h2>
			)}
			{match && match.params.continent === 'NA' && (
				<h2>
					Countries in <span>North America</span>
				</h2>
			)}
			{match && match.params.continent === 'SA' && (
				<h2>
					Countries in <span>South America</span>
				</h2>
			)}

			{error && (
				<p style={{ color: 'tomato' }}>
					<span style={{ fontWeight: '600' }}>{countryNotIncluded}</span> is
					either a typo or not in this region.
				</p>
			)}
			{!countries.length && filterContinent ? (
				<div>
					<Grid gap='1rem' minWidth='100px'>
						{filterContinent.map((element) => (
							<div>
								<Link to={`/country/${element.iso_alpha2}`}>
									<p>{element.name}</p>
								</Link>
							</div>
						))}
					</Grid>
				</div>
			) : (
				''
			)}

			{countries.length ? (
				<div>
					<Link to={`/country/${countries[0].iso_alpha2}`}>
						<p>{countries[0].name}</p>
					</Link>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Countriescard;
