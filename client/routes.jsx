import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/app/';
import Hello from './components/hello/';
import About from './components/about/';
import Projects from './components/projects/';
import Ci from './components/ci/'

const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={App}>
			<IndexRoute component={Hello} />
			<Route path='about' component={About} />
			<Route path='projects' component={Projects} />
			<Route path='ci' component={Ci} />
		</Route>
	</Router>
);

export default Routes;
