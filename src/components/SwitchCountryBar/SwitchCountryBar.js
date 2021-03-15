import React from 'react';
import { Link } from 'react-router-dom';

const SwitchCountryBar = () => {
	return (
		<div>
			<Link to='/switchingcountry'>
				<button>Switch Country</button>
			</Link>
		</div>
	);
};

export default SwitchCountryBar;
