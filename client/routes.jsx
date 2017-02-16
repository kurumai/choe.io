import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/app/';
import Nav from './components/nav';
import Hello from './components/hello/';

const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={App}>
			<Route path='nav' component={Nav} />
			<Route path='hello' component={Hello} />
		</Route>
	</Router>
);

export default Routes;
