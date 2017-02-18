import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import TopNav from '../nav';
import Hello from '../hello';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Row>
					<TopNav />
				</Row>
				<Row>
					<Hello />
					{ this.props.children }
				</Row>
			</div>
		);
	}
}

export default App;
