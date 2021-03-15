import React from 'react';
import { Link } from 'react-router-dom';
import './Continents.css';
// import Countries from '../Countries/Countries';
import './Continents.css';

const url = process.env.PUBLIC_URL + `/images/`;

const Continents = () => {
	return (
		<div className='continents'>
			<ul>
				<Link to='/continents/AF'>
					<p>Africa</p>
				</Link>
				<Link to='/continents/AN'>
					<p>Antartica</p>
				</Link>
				<Link to='/continents/AS'>
					<p>Asia</p>
				</Link>
				<Link to='/continents/OC'>
					<p>Oceania</p>
				</Link>
				<Link to='/continents/EU'>
					<p>Europe</p>
				</Link>
				<Link to='/continents/NA'>
					<p>North America</p>
				</Link>
				<Link to='/continents/SA'>
					<p>South America</p>
				</Link>
			</ul>
			<div className='continentsimg'>
				<img src={url + 'continents.jpg'} alt='continentsimg' />
			</div>
		</div>
	);
};

export default Continents;
