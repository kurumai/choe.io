import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.scss';

class Projects extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<img className="card-img" src="assets/mynanny/2.png" alt="MyNanny" />
					<div className="card-block">
						<h4 className="card-title"><a href="https://my-nanny.org" target="_blank">MyNanny</a></h4>
						<h6 className="card-subtitle">Virtual assistant for managing your children’s curfews and chores</h6>
						<div className="project-description">
							<span className="role">Front End Developer</span>
							<span className="role">Alexa Developer</span>
							<div className="spacer"></div>
							<span className="skill">React</span>
							<span className="skill">Redux</span>
							<span className="skill">Amazon Alexa</span>
							<span className="skill">AWS</span>
							<span className="skill">Webpack</span>
							<span className="skill">Mocha/Chai</span>
							<span className="skill">Webpack</span>
						</div>
					</div>
				</div>
				<div className="card">
					<img className="card-img" src="assets/radradio/2.png" alt="RadRadio" />
					<div className="card-block">
						<h4 className="card-title">RadRadio</h4>
						<h6 className="card-subtitle">Create or listen to live audio streams instantly with live messaging</h6>
						<div className="project-description">
							<span className="role">Back End Developer</span>
							<span className="role">DB Administrator</span>
							<div className="spacer"></div>
							<span className="skill">NodeJS</span>
							<span className="skill">Kurento RTC</span>
							<span className="skill">Express</span>
							<span className="skill">Passport</span>
							<span className="skill">Authentication</span>
							<span className="skill">APIs</span>
							<span className="skill">MongoDB</span>
						</div>
					</div>
				</div>
				<div className="card">
					<img className="card-img" src="assets/roomly/2.png" alt="Roomly" />
					<div className="card-block">
						<h4 className="card-title">Roomly</h4>
						<h6 className="card-subtitle">Web application to find you a new roommate in your Facebook network</h6>
						<div className="project-description">
							<span className="role">Front End Developer</span>
							<span className="role">Back End Developer</span>
							<div className="spacer"></div>
							<span className="skill">React</span>
							<span className="skill">NodeJS</span>
							<span className="skill">Express</span>
							<span className="skill">Facebook OAuth</span>
							<span className="skill">Material UI</span>
						</div>
					</div>
				</div>
				<div className="card">
					<img className="card-img" src="assets/giftminder/1.png" alt="Giftminder" />
					<div className="card-block">
						<h4 className="card-title">Giftminder</h4>
						<h6 className="card-subtitle">A web application to help you remember gift ideas for friends and family</h6>
						<div className="project-description">
							<span className="role">Front End Developer</span>
							<div className="spacer"></div>
							<span className="skill">Angular</span>
							<span className="skill">NodeJS</span>
							<span className="skill">Express</span>
							<span className="skill">MongoDB</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Projects;
