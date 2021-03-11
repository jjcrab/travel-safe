import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<h3>Travel Safe</h3>
			<Link to='/'>
				<p>Home</p>
			</Link>
			<Link to='/continents'>
				<p>Continents</p>
			</Link>
			<Link to='/countries'>
				<p>Countries</p>
			</Link>
			<Link to='/about'>
				<p>About</p>
			</Link>
		</div>
	);
};

export default Nav;
