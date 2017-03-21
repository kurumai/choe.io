import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TopNav from '../nav';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="application">
				<TopNav />
				<Row>
					{ this.props.children }
				</Row>
			</div>
		);
	}
}

export default App;
