import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { TopNav } from '../nav';


export class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TopNav />
				<div className="app">
					{ this.props.children }
				</div>
			</div>
		);
	}
};
