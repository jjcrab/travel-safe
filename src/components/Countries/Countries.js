import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';
import Grid from '../Grid';

const flagURL = 'https://restcountries.eu/rest/v2/all';

const Countries = () => {
	const [fullList, setFullList] = useState([]);
	const [formState, setFormState] = useState('');

	useEffect(() => {
		fetch(flagURL)
			.then((res) => res.json())
			.then((res) => {
				setFullList(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function handleChange(event) {
		setFormState(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div>
			<form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
				<label htmlFor='searchcountry' style={{ color: 'darkblue' }}>
					Search Country{' '}
				</label>
				<input
					placeholder='country name'
					type='text'
					id='countryname'
					required
					onChange={handleChange}
					value={formState}
					style={{ padding: '3px' }}
				/>

				<Link to={`/countrysearched/${formState}`}>
					<button
						type='submit'
						style={{ margin: '6px', borderColor: 'lightgrey' }}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='darkblue'
							class='bi bi-search'
							viewBox='0 0 16 16'>
							<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
						</svg>
					</button>
				</Link>
			</form>

			<div style={{ backgroundColor: 'white' }}>
				<div className='background'>
					<Grid gap='1rem'>
						{fullList.map((element) => (
							<div className='countryLink'>
								<Link to={`/country/${element.alpha2Code}`}>
									<img
										src={element.flag}
										alt='test'
										className='flag'
										key='countryFlag'
									/>
									<p key='countryName'>{element.name}</p>
								</Link>
							</div>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Countries;
