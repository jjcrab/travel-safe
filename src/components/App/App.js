import React, { useEffect } from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Continents from '../Continents/Continents';
import Countries from '../Countries/Countries';
import { Route, Redirect } from 'react-router-dom';
import Countryreview from '../Countryreview/Countryreview';
import Countriescard from '../Countriescard/Countriescard';
// import CountrySearched from '../CountrySearched/CountrySearched';
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
				<Route path='/about' exact component={About} />

				<Route path='/countries' component={Countries} />
				<Route
					path='/continents/:continent'
					render={(routerProps) => <Countriescard match={routerProps.match} />}
				/>
				<Route
					path='/country/:countryiso'
					render={(routerProps) => <Countryreview match={routerProps.match} />}
				/>

				<Route
					path='/switchingcountry'
					render={() => <Redirect to='/countries' />}
				/>

				{/* <Route
					path='/countrysearched/:countryname'
					render={(routerProps) => (
						<CountrySearched match={routerProps.match} />
					)}
				/> */}
			</main>
		</div>
	);
}

export default App;
