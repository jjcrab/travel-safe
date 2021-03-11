import React from 'react';
import { Link } from 'react-router-dom';
import './Continents.css';

const url = process.env.PUBLIC_URL + `/images/`;

const Continents = () => {
	return (
		<div>
			<ul>
				<Link to='/continents/africa'>
					<p>Africa</p>
				</Link>
				<Link to='/continents/antartica'>
					<p>Antartica</p>
				</Link>
				<Link to='/continents/asia'>
					<p>Asia</p>
				</Link>
				<Link to='/continents/australia'>
					<p>Australia</p>
				</Link>
				<Link to='/continents/europe'>
					<p>Europe</p>
				</Link>
				<Link to='/continents/northamerica'>
					<p>North America</p>
				</Link>
				<Link to='/continents/southamerica'>
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
