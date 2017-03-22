import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.scss';

class Projects extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<img className="card-img" src="assets/mynanny/1.png" alt="MyNanny" />
					<div className="card-block">
						<h4 className="card-title"><a href="#" target="_blank">MyNanny</a></h4>
						<h6 className="card-subtitle">Virtual assistant for managing your children’s curfews and chores</h6>
						<div className="project-description">
							<span className="role">Front End Developer</span>
							<span className="role">Alexa Developer</span>
							<br/>
							<span className="skill">React</span>
							<span className="skill">Redux</span>
							<span className="skill">Amazon Alexa</span>
							<span className="skill">AWS</span>
							<span className="skill">Webpack</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Projects;
				// <Grid>
				// 	<Row>
				// 		<Col md={12}>
				// 		</Col>
				// 	</Row>
				// </Grid>

			// <div class="block-text projects">
			// 	<div class="img-box"><a href="#modal-1"><img src="assets/mynanny/1.png" class="project-img" alt="MyNanny" /></a></div>
			// 	<div class="img-box"><a href="#modal-2"><img src="assets/radradio/1.png" class="project-img" alt="Radradio" /></a></div>
			// 	<br/>
			// 	<div class="img-box"><a href="#modal-3"><img src="assets/roomly/1.png" class="project-img" alt="Roomly" /></a></div>
			// 	<div class="img-box"><a href="#modal-4"><img src="assets/giftminder/1.png" class="project-img" alt="Giftminder" /></a></div>
			// 	<br/>
			// 	<div class="modal-dialog" id="modal-1">
			// 		<div>
			// 			<a href="#" title="Close" class="close">X</a>
			// 			<div class="modal-title">
			// 				myNanny
			// 			</div>
			// 			<img src="assets/mynanny/2.png" class="modal-img" />
			// 			<div class="modal-body">
			// 			  Virtual assistant for managing your children’s curfews and choresParents manage their children through a web portal, and children interact with their Amazon Echo to check in and receive a list of chores. Powered by Amazon Alexa and hosted on AWS Lambda and Express servers, with a front-end using React, Redux, and Bootstrap. 80% test coverage.
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div class="modal-dialog" id="modal-2">
			// 		<div>
			// 			<a href="#close" title="Close" class="close">X</a>
			// 			<div class="modal-title">
			// 				Radradio
			// 			</div>
			// 			<img src="assets/radradio/2.png" class="modal-img" />
			// 			<div class="modal-body">
			// 				Create or listen to live audio streams instantly with live messaging. Streams are archived and available for access after live streams terminate. Built with Kurento Media Server, socket.io, React, Express, Passport, and MongoDB.
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div class="modal-dialog" id="modal-3">
			// 		<div>
			// 			<a href="#close" title="Close" class="close">X</a>
			// 			<div class="modal-title">
			// 				Roomly
			// 			</div>
			// 			<img src="assets/roomly/2.png" class="modal-img" />
			// 			<div class="modal-body">
			// 				Web application to assist in finding a new roommate in your Facebook network. Built with React, Redux, Facebook OAuth, Express, MongoDB, and Webpack.
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div class="modal-dialog" id="modal-4">
			// 		<div>
			// 			<a href="#close" title="Close" class="close">X</a>
			// 			<div class="modal-title">
			// 				Giftminder
			// 			</div>
			// 			<img src="assets/giftminder/2.png" class="modal-img" />
			// 			<div class="modal-body">
			// 				A simple application to help you remind yourself of gift ideas for friends and family. Built with Angular 1, Express, and MongoDB. Stylized with Bootstrap.
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>