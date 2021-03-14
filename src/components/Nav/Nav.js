import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<h3>Travel Safe</h3>
			<Link to='/' className='navlink'>
				<p>Home</p>
			</Link>
			<Link to='/continents' className='navlink'>
				<p>Continents</p>
			</Link>
			<Link to='/countries' className='navlink'>
				<p>Countries</p>
			</Link>
			<Link to='/about' className='navlink'>
				<p>About</p>
			</Link>
		</div>
	);
};

export default Nav;
