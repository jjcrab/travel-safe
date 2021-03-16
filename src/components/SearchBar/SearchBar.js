import React from 'react';
import { Link } from 'react-router-dom';

const Searchbar = ({ formState, handleSubmit, handleChange, country }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchcountry' style={{ color: 'brown' }}>
					Search Country{' '}
				</label>
				<input
					placeholder='country name'
					type='text'
					id='countryname'
					required
					onChange={handleChange}
					value={formState}
					style={{ borderColor: 'brown', padding: '0.5rem' }}
				/>
				<button
					type='submit'
					style={{ margin: '6px', borderColor: 'lightgrey' }}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='brown'
						class='bi bi-search'
						viewBox='0 0 16 16'>
						<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
					</svg>
				</button>
			</form>
		</div>
	);
};

export default Searchbar;
