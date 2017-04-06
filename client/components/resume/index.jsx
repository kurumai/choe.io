import React from 'react';

export class Resume extends React.Component {
	render() {
		return (
			<div class="block-text resume">
				<a href="https://goo.gl/99TfvG" class="button resume-btn">Download PDF Resume</a><br/>
				<iframe src="https://docs.google.com/document/d/1PfGjbEM0O8xz-dhwYrK_f8OUdl1KxfnRR2_QICrC0vg/pub?embedded=true" frameborder="0"></iframe>
			</div>
		);
	}
};
