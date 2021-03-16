import React from 'react';
import { Link } from 'react-router-dom';
import './Continents.css';
// import Countries from '../Countries/Countries';
import './Continents.css';

const url = process.env.PUBLIC_URL + `/images/`;

const Continents = () => {
	return (
		<div className='continents'>
			<div className='list'>
				<ul>
					<Link to='/continents/AF' className='continentlink'>
						<p>Africa</p>
					</Link>
					<Link to='/continents/AN' className='continentlink'>
						<p>Antartica</p>
					</Link>
					<Link to='/continents/AS' className='continentlink'>
						<p>Asia</p>
					</Link>
					<Link to='/continents/OC' className='continentlink'>
						<p>Oceania</p>
					</Link>
					<Link to='/continents/EU' className='continentlink'>
						<p>Europe</p>
					</Link>
					<Link to='/continents/NA' className='continentlink'>
						<p>North America</p>
					</Link>
					<Link to='/continents/SA' className='continentlink'>
						<p>South America</p>
					</Link>
				</ul>
			</div>

			<div className='continentsimg'>
				<img src={url + 'continents.jpg'} alt='continentsimg' />
			</div>
		</div>
	);
};

export default Continents;
