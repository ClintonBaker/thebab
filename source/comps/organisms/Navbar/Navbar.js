import React from 'react';

import UserBox from './UserBox';
import './styles/Navbar.css';

const Navbar = props => {
	return (
		<nav styleName="Navbar">
			<div styleName="logoBox">
				<h2>thebab</h2>
			</div>
			<div styleName="linksBox">
				<p>home</p>
				<p>browse</p>
				<p>latest</p>
				<p>blog</p>
			</div>
			<UserBox />
		</nav>
	);
};

export default Navbar;
