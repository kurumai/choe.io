import React from 'react';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './styles.scss';

export class Ci extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showText: false
		};
	}

	clickButton(e) {
		e.preventDefault();
		this.setState({showText: !this.state.showText});
	}

	render() {
		return (
			<div className="project">
				<h1>A Trivial Application</h1>
				<div className="pad-top">
					<Button onClick={this.clickButton.bind(this)} id="btn-1">Toggle text</Button>
					<div className="pad-top" id="sentence">
						{this.state.showText ? 'CircleCI is Continuous Integration' : ''}
					</div>
				</div>
			</div>
		);
	}
};
