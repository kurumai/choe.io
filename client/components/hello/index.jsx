import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './styles.scss';

class Hello extends React.Component {

	clickGH() {
		analytics.track('Clicked Action', {
			location: 'hello',
			text: 'github'
		});
	}

	clickLI() {
		analytics.track('Clicked Action', {
			location: 'hello',
			text: 'linkedin'
		});
	}

	clickIG() {
		analytics.track('Clicked Action', {
			location: 'hello',
			text: 'instagram'
		});
	}

	clickEm() {
		analytics.track('Clicked Action', {
			location: 'hello',
			text: 'email'
		});
	}

	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} sm={4} md={4} lg={4}>
							<div className="vertical-center hidden-xs">
								<img src="assets/splash-profile.jpg" className="splash-img"/>
							</div>
						</Col>
						<Col xs={12} sm={8} md={8} lg={8}>
							<Jumbotron>	
								<h2>
								Hello, friend.
								</h2>
								<br/>
								<p>
								I’m Eugene, and I build full-stack web applications. 
								</p>
								<p>
								You can find out more about me on <a href="https://github.com/heug" target="_blank" onClick={this.clickGH}>GitHub</a>, <a href="https://www.linkedin.com/in/eugene-choe" target="_blank" onClick={this.clickLI}>LinkedIn</a>, and <a href="https://www.instagram.com/generalchoe" target="_blank" onClick={this.clickIG}>Instagram</a>. Or just shoot me an <a href="mailto:eugene.choe+choe.io@gmail.com" onClick={this.clickEm}>e-mail</a>.
								</p>
							</Jumbotron>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
};

export default Hello;
