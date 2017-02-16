import React from 'react';

class Hello extends React.Component {
	render() {
		return (
			<div className="block-text splash active">
				<img src="../assets/splash-profile.jpg" className="splash-img" />
				<h3>
				Hello, friend.
				</h3>
				<p>
				I’m Eugene, a software engineer based in Oakland, California. I love the creative process of turning abstract ideas into useful applications that people can use to make life easier, and envision a future where an increasingly digital world affords everyone more time to do the things they love.
				</p>
				<p>
				You'll find me on the hiking trail, in the yoga studio, or on the motorcycle most weekends.
				</p>
			</div>
		);
	}
};

export default Hello;

