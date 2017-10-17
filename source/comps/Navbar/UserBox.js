import React from 'react';

import './styles/UserBox.css';

const UserBox = props => {
	return (
		<div styleName="UserBox" e2e={props.e2e || 'UserBox'}>
			<Choose>
				<When condition={props.loggedIn}>
					<p>Log Out</p>
				</When>
				<Otherwise>
					<small>Log In</small>
					<small>Sign Up</small>
				</Otherwise>
			</Choose>
		</div>
	);
};

export default UserBox;
