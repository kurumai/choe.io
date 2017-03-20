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
			<div>
				<Navbar className="nav">
					<Navbar.Header className="name">
						<Navbar.Brand>
							<a href="/">Eugene</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav className="links">
						<NavItem eventKey={'about'} onSelect={this.handleLink}>About</NavItem>
						| <NavItem eventKey={'projects'} onSelect={this.handleLink}>Projects</NavItem>
						| <NavItem eventKey={'resume'} onSelect={this.handleLink}>Resume</NavItem>
						| <NavItem eventKey={'contact'} onSelect={this.handleLink}>Contact</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
};

export default TopNav;
