import React, { Component } from 'react';
import Nav from '../nav';
import Hello from '../hello';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav />
				<Hello />
			</div>
		);
	}
}

export default App;
