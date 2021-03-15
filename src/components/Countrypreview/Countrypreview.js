import React, { useEffect, useState } from 'react';
import SwitchCountryBar from '../SwitchCountryBar/SwitchCountryBar';
import './Countrypreview.css';

const countryAdviceURL = 'https://www.travel-advisory.info/api?countrycode=';

const Countrypreview = ({ match }) => {
	const [countryDetail, setCountryDetail] = useState(null);
	const [flagList, setFlagList] = useState([]);

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

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let countryFlag = res.filter((element) => {
					return element.alpha2Code === match.params.countryiso;
				});
				setFlagList(countryFlag);
				console.log(countryFlag);
				console.log(flagList);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!countryDetail) {
		return (
			<div>
				<SwitchCountryBar />
				<p>No Information (yet).</p>
			</div>
		);
	}
	if (!flagList) {
		return (
			<div>
				<p>No Image (yet).</p>
			</div>
		);
	}

	return (
		<div className='advisory'>
			<div
				style={{
					marginTop: '1rem',
					textAlign: 'right',
					paddingRight: '1rem',
				}}
				className='switchcountry'>
				<SwitchCountryBar />
			</div>

			<h2>{countryDetail.name}</h2>
			<main className='countryPreviewMain'>
				<h4>Advisories:</h4>
				<p>Risk Score: {countryDetail.advisory.score}</p>
				{countryDetail.advisory.score >= 4.5 && (
					<p>Risk Level: Extreme Warning</p>
				)}
				{countryDetail.advisory.score >= 3.5 &&
					countryDetail.advisory.score < 4.5 && <p>Risk Level: High Risk</p>}
				{countryDetail.advisory.score >= 2.5 &&
					countryDetail.advisory.score < 3.5 && <p>Risk Level: Medium Risk</p>}
				{countryDetail.advisory.score < 2.5 && <p>Risk Level: Low Risk</p>}
				<p>{countryDetail.advisory.message}</p>
			</main>

			<footer>
				<p>Updated on {countryDetail.advisory.updated}</p>
				<p>Source from {countryDetail.advisory.source}</p>
			</footer>

			{/* <img src={flagList[0].flag} alt='flag' />
			<p>{flagList[0].capital}</p> */}
		</div>
	);
};

export default Countrypreview;
