import React, { useState } from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Continents from '../Continents/Continents';
import Countries from '../Countries/CountriesOld';
import { Route } from 'react-router-dom';
import Countryreview from '../Countryreview/Countryreview';
// import CountrySearched from '../CountrySearched/CountrySearched';
import './App.css';

function AppOld() {
	const [continent, setContinent] = useState();
	const [countries, setCountries] = useState([]);

	return (
		<div className='App'>
			<header className='App-header'>
				<Nav />
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/continents' exact component={Continents} />
				<Route path='/about' exact component={About} />
				<Route
					path='/countries'
					render={() => (
						<Countries countries={countries} setCountries={setCountries} />
					)}
				/>
				<Route
					path='/continents/:continent'
					render={(routerProps) => (
						<Countries
							match={routerProps.match}
							countries={countries}
							setCountries={setCountries}
						/>
					)}
				/>
				<Route
					path='/country/:countryiso'
					render={(routerProps) => (
						<Countryreview
							match={routerProps.match}
							countries={countries}
							setCountries={setCountries}
						/>
					)}
				/>

				{/* <Route
					path='/countrysearched'
					render={() => (
						<CountrySearched
							countries={countries}
							setCountries={setCountries}
						/>
					)}
				/> */}
			</main>
		</div>
	);
}

export default AppOld;
