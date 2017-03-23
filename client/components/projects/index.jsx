import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.scss';

class Projects extends React.Component {
	render() {
		return (
			<div>
				<div className="proj-card">
					<img className="proj-card-img" src="assets/mynanny/2.png" alt="MyNanny" />
					<div className="proj-card-block">
						<h4 className="proj-card-title"><a href="https://my-nanny.org" target="_blank">MyNanny</a></h4>
						<h6 className="proj-card-subtitle">Virtual assistant for managing your children’s curfews and chores</h6>
						<div className="proj-card-text">
							<span className="job role">Front End Developer</span>
							<span className="job role">Alexa Developer</span>
							<div className="spacer"></div>
							<span className="job skill">React</span>
							<span className="job skill">Redux</span>
							<span className="job skill">Amazon Alexa</span>
							<span className="job skill">AWS</span>
							<span className="job skill">Webpack</span>
							<span className="job skill">Mocha/Chai</span>
							<span className="job skill">Webpack</span>
						</div>
					</div>
				</div>
				<div className="proj-card">
					<img className="proj-card-img" src="assets/radradio/2.png" alt="RadRadio" />
					<div className="proj-card-block">
						<h4 className="proj-card-title">RadRadio</h4>
						<h6 className="proj-card-subtitle">Create or listen to live audio streams instantly with live messaging</h6>
						<div className="proj-card-text">
							<span className="job role">Back End Developer</span>
							<span className="job role">DB Administrator</span>
							<div className="spacer"></div>
							<span className="job skill">NodeJS</span>
							<span className="job skill">KurentoRTC</span>
							<span className="job skill">Express</span>
							<span className="job skill">Passport</span>
							<span className="job skill">Authentication</span>
							<span className="job skill">APIs</span>
							<span className="job skill">MongoDB</span>
						</div>
					</div>
				</div>
				<div className="proj-card">
					<img className="proj-card-img" src="assets/roomly/2.png" alt="Roomly" />
					<div className="proj-card-block">
						<h4 className="proj-card-title">Roomly</h4>
						<h6 className="proj-card-subtitle">Web application to find you a new roommate in your Facebook network</h6>
						<div className="proj-card-text">
							<span className="job role">Front End Developer</span>
							<span className="job role">Back End Developer</span>
							<div className="spacer"></div>
							<span className="job skill">React</span>
							<span className="job skill">NodeJS</span>
							<span className="job skill">Express</span>
							<span className="job skill">Facebook OAuth</span>
							<span className="job skill">Material UI</span>
						</div>
					</div>
				</div>
				<div className="proj-card">
					<img className="proj-card-img" src="assets/giftminder/1.png" alt="Giftminder" />
					<div className="proj-card-block">
						<h4 className="proj-card-title">Giftminder</h4>
						<h6 className="proj-card-subtitle">A web application to help you remember gift ideas for friends and family</h6>
						<div className="proj-card-text">
							<span className="job role">Front End Developer</span>
							<div className="spacer"></div>
							<span className="job skill">Angular</span>
							<span className="job skill">NodeJS</span>
							<span className="job skill">Express</span>
							<span className="job skill">MongoDB</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Projects;
