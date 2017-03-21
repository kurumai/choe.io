import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './styles.css';

class Hello extends React.Component {
	render() {
		return (
			<div className="hello">
				<Jumbotron>	
					<h2>
					Hello, friend.
					</h2>
					<br/>
					<p>
					I’m Eugene, and I build full-stack web applications. 
					</p>
					<p>
					You can find out more about me on <a href="https://github.com/heug">GitHub</a>, <a href="https://www.linkedin.com/in/eugene-choe">LinkedIn</a>, and <a href="https://www.instagram.com/generalchoe">Instagram</a>.
					</p>
				</Jumbotron>
			</div>
		);
	}
};

export default Hello;
