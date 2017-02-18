import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/app/';
import Hello from './components/hello/';
import About from './components/about/';
import Resume from './components/resume/';
import Projects from './components/projects/';

const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={App}>
			<Route path='hello' component={Hello} />
			<Route path='resume' component={Resume} />
			<Route path='projects' component={Projects} />
			<Route path='about' component={About} />
		</Route>
	</Router>
);

export default Routes;
