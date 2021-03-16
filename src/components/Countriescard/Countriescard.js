import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SwitchContinent from '../SwitchContinent/SwitchContinent';
import Grid from '../Grid';
import './Countriescard.css';

const tripURL = 'https://www.travel-advisory.info/api';

const Countriescard = ({ match }) => {
	const [countries, setCountries] = useState([]);
	const [formState, setFormState] = useState('');
	const [error, setError] = useState(false);
	const [countryNotIncluded, setCountryNotIncluded] = useState();
	const [originalList, setOriginalList] = useState([]);
	const [filterContinent, setFilterContinent] = useState([]);

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
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setError(false);
		setFormState(event.target.value);
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
			<div className='continentName'>
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
			</div>

			{error && (
				<p style={{ color: 'tomato' }}>
					<span style={{ fontWeight: '600' }}>{countryNotIncluded}</span> is
					either not in this region or a typo.
				</p>
			)}

			<div style={{ backgroundColor: 'white' }}>
				<div style={{ backgroundColor: 'white' }} className='countriesLink'>
					{!countries.length && filterContinent ? (
						<Grid gap='1rem' minWidth='100px'>
							{filterContinent.map((element) => (
								<div>
									<Link
										to={`/country/${element.iso_alpha2}`}
										style={{ textDecoration: 'none' }}
										className='test'>
										<p>{element.name}</p>
									</Link>
								</div>
							))}
						</Grid>
					) : (
						''
					)}
				</div>
			</div>

			{countries.length ? (
				<div>
					<Link to={`/country/${countries[0].iso_alpha2}`}>
						<p style={{ fontSize: '3rem' }}>{countries[0].name}</p>
					</Link>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Countriescard;
