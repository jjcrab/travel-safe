import React from 'react';
import { Link } from 'react-router-dom';

const Searchbar = ({ formState, handleSubmit, handleChange, fullList }) => {
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
				{/* <Link to={`/countrysearched/${formState}`}> */}
				<button type='submit'>submit</button>
				{/* </Link> */}
			</form>
		</div>
	);
};

export default Searchbar;
