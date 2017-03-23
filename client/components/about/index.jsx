import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import './styles.scss';

class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			repos: []
		}
	}

	componentWillMount() {
		fetch('https://api.github.com/users/heug/repos')
		.then((res) => {
			res = res.json();
			return res;
		}).then((data) => {
			data.sort((a,b) => { 
				return b.updated_at.localeCompare(a.updated_at);
			});
			return this.setState({repos: data});
		}).catch((err) => {
			return console.error('unable to fetch repos from github!');
		});
	}

	createRepoList() {
		if (!this.state.repos.length) {
			return (
				<div>
					Loading <a href="https://github.com/heug" target="_blank">repos</a>...
				</div>
			)
		}
		return (
			this.state.repos.map((repo) => {
				return (
					<div className="card" key={repo.id}>
						<div className="card-block">
							<h4 className="card-title"><a href={repo.html_url} target="_blank">{repo.name}</a></h4>
							<p className="card-text">{repo.description ? repo.description : ''}</p>
						</div>
					</div>
				);
			})
		);
	}

	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} sm={12} md={8} lg={8}>
							<h2>About</h2>
							<p>
							I'm passionate about building scalable, maintainable, and well-tested applications with a focus on usability for non-technical people. Although relatively new to software engineering as a full-time vocation, I've been programming for over 15 years. 
							</p>
							<p>
							After getting my start with HTML and CSS in high school, I graduated to VBA and SQL after Excel wasn't cutting it anymore when doing data analysis. I eventually started picking up Python as my needs grew, and I even started teaching myself JavaScript during my time as a chef. Along the way, I’ve discovered a passion for building applications that I’m unable to shake.
							</p>
							<p>
							Let’s build something awesome together 🙌.
							</p>
						</Col>
						<Col xs={12} sm={8} md={4} lg={4}>
							<h2>Github Repos</h2>
							{ this.createRepoList() }
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
};

export default About;
