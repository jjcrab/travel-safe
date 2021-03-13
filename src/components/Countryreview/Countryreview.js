import React, { useEffect, useState } from 'react';

const countryAdviceURL = 'https://www.travel-advisory.info/api?countrycode=';

const Countryreview = ({ match }) => {
	const [countryDetail, setCountryDetail] = useState(null);

	useEffect(() => {
		const url = `${countryAdviceURL}${match.params.countryiso}`;
		console.log(match.params.countryiso);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let countryObj = res.data[match.params.countryiso];
				console.log(countryObj);
				setCountryDetail(countryObj);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	if (!countryDetail) {
		return <div>loading...</div>;
	}
	return (
		<div>
			<form>
				<label>Switch Country </label>
				<input placeholder='country name'></input>
				<button>submit</button>
			</form>
			<h2>{countryDetail.name}</h2>

			<p>{countryDetail.advisory.score}</p>
			<p>{countryDetail.advisory.message}</p>
			<footer>Updated on {countryDetail.advisory.updated}</footer>
		</div>
	);
};

export default Countryreview;
