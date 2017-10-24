import React from 'react';
import { Link } from 'react-router';

import './styles/UserBox.css';

const UserBox = props => {
	return (
		<div styleName="UserBox" e2e={props.e2e || 'UserBox'}>
			<Choose>
				<When condition={props.authenticated}>
					<p>Log Out</p>
				</When>
				<Otherwise>
					<Link to='/login'>
						<small>Log In</small>
					</Link>
					<Link to='/signup'>
						<small>Sign Up</small>
					</Link>
				</Otherwise>
			</Choose>
		</div>
	);
};

export default UserBox;
