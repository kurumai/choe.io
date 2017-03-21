import React from 'react';
import { browserHistory } from 'react-router';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class TopNav extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			links: {
				'about': '/about',
				'projects': '/projects',
				'resume': '/resume',
				'contact': '/contact'
			}
		};

		this.handleLink = this.handleLink.bind(this);
	}

	handleLink(eventKey) {
		browserHistory.push(this.state.links[eventKey]);
	}

	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">Eugene Choe</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem eventKey={'about'} onSelect={this.handleLink}>About</NavItem>
					<NavItem eventKey={'projects'} onSelect={this.handleLink}>Projects</NavItem>
					<NavItem eventKey={'resume'} onSelect={this.handleLink}>Resume</NavItem>
					<NavItem eventKey={'contact'} onSelect={this.handleLink}>Contact</NavItem>
				</Nav>
			</Navbar>
		);
	}
};

export default TopNav;
