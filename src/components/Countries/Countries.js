import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

const tripAdviceURL = 'https://www.travel-advisory.info/api';

const Countries = ({ match, countries, setCountries }) => {
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
				console.log(countries);
				if (match) {
					let filteredList = countryList.filter((element) => {
						return element.continent === match.params.continent;
					});
					setCountries(filteredList);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<label>Search by Country </label>
			<input placeholder='country name'></input>
			<button>submit</button>
			{countries.map((element) => (
				<Link to={`/country/${element.iso_alpha2}`}>
					<p>{element.name}</p>
				</Link>
			))}
		</div>
	);
};

export default Countries;
