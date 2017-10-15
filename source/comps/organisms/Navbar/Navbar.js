import React from 'react';
import { Link } from 'react-router';

import UserBox from './UserBox';
import './styles/Navbar.css';

const Navbar = props => {
	return (
		<nav styleName="Navbar" e2e="Navbar">
			<div styleName="logoBox">
				<h2 styleName="logo">thebab</h2>
			</div>
			<div styleName="linksBox">
				<p>home</p>
				<Link to='/browse'>
					<p>browse</p>
				</Link>
				<p>latest</p>
				<p>blog</p>
			</div>
			<UserBox />
		</nav>
	);
};

export default Navbar;
