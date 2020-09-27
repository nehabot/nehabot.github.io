import React from 'react';
import { Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import App from './App';
// import MainPage from './components/Home';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  	<Route exact path="/" component={App}>
		<Route path='/contact' component={Contact} />
		<Route path='/about' component={About} />
	</Route>
);