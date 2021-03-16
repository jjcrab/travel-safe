import React from 'react';
import { Link } from 'react-router-dom';

const SwitchContinent = () => {
	return (
		<div>
			<Link to='/switchingcontinent'>
				<button className='switchbutton'>Switch Continent</button>
			</Link>
		</div>
	);
};

export default SwitchContinent;
