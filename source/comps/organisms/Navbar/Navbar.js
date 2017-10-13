import React from 'react';

import UserBox from './UserBox';
import './styles/Navbar.css';

const Navbar = props => {
	return (
		<nav styleName="Navbar" e2e='Navbar'>
			<div styleName="logoBox">
				<h2 e2e='logo'>thebab</h2>
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
