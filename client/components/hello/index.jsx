import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './styles.css';

class Hello extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={4} sm={4} md={4} lg={4}>
							<img src="assets/splash-profile.jpg" className="splash-img"/>
						</Col>
						<Col xs={8} sm={8} md={8} lg={8}>
							<Jumbotron>	
								<h2>
								Hello, friend.
								</h2>
								<br/>
								<p>
								I’m Eugene, and I build full-stack web applications. 
								</p>
								<p>
								You can find out more about me on <a href="https://github.com/heug" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/eugene-choe" target="_blank">LinkedIn</a>, and <a href="https://www.instagram.com/generalchoe" target="_blank">Instagram</a>.
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
