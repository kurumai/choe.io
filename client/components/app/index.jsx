import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import TopNav from '../nav';


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
				<Row className="container">
					{ this.props.children }
				</Row>
			</div>
		);
	}
}

export default App;
