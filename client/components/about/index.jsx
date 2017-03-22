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
			console.log(data[0].updated_at, data[1].updated_at, data[2].updated_at);
			data.sort((a,b) => { 
				if (a.updated_at > b.updated_at) {
					return -1;
				}
				if (a.updated_at < b.updated_at) {
					return 1;
				}
				return 0;
			});
			console.log(data[0].updated_at, data[1].updated_at, data[2].updated_at);
			return this.setState({repos: data});
		});
	}

	createRepoList() {
		if (!this.state.repos) {
			return (
				<div>
				Loading repos...
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
			<div className="about">
				<Grid>
					<Row>
						<Col sm={8} md={8} lg={8}>
							<h2>About</h2>
							<p>
							I hold American, Canadian, and Korean passports, but really identify myself as a citizen of the world. Born in Toronto, I spent most of my formative years in the Bay Area. Fueled by a desire to explore an unknown city and an interest with working in a quantitative field, I left for New York University and graduated with a B.S. in Finance, after which I worked on trading floors for a few years—long enough to know that I had zero interest in working in the world of finance.
							</p>
							<p>
							I started writing macros in VBA, which then turned into learning SQL and some Python as I got more comfortable with coding while working as a data analyst, and even as a chef (another story for another time). Along the way, I’ve discovered a passion for building applications that I’m unable to shake. I love what I do and am looking forward to all the cool things that I'll inevitably be a part of.
							</p>
							<p>
							Let’s build something awesome together 🙌.
							</p>
						</Col>
						<Col sm={4} md={4} lg={4}>
							{ this.createRepoList() }
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
};

export default About;
