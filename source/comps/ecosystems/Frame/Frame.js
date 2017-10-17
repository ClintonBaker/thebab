import React, { Component } from 'react';
import { Navbar } from '@comps/organisms';
import './styles/Frame.css';

class Frame extends Component {
	render() {
		return (
			<div styleName="Frame">
				<Navbar />
				{this.props.children}
			</div>
		);
	}
}

export default Frame;
