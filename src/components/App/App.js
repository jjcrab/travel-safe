import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Continents from '../Continents/Continents';
import Countries from '../Countries/Countries';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Nav />
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/continents' exact component={Continents} />
				<Route path='/countries' exact component={Countries} />
			</main>
		</div>
	);
}

export default App;
