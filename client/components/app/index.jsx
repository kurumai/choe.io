import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TopNav from '../nav';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TopNav />
				<div>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default App;
