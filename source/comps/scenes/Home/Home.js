import React from 'react';
import './styles/Home.css';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '@store/actions/users';
import { Title, Input, InlineButton } from '@comps/atoms';
import { InputBox } from '@comps/molecules';

type PropsT = {
	actions: Object
};

const Home = (props: PropsT) => {
	// console.log({ props });
	return (
		<div styleName="Home">
			<header />
			<div styleName="header">
				<Title>
					The <span styleName="green">Hub</span> For Tooling Enthusiasts
				</Title>
				{/* <p>Libraries, frameworks, courses and more. We got the toolz.</p> */}
				<InputBox buttonText="Sign Up" placeholder="Email address" />
			</div>
			<Link styleName='SubmitLink' to='/submit'>New Thing</Link>
			{/* <button onClick={props.actions.getUsers}>GET THE USERS</button> */}
			{/* <button onClick={props.actions.clearUsers}>GET THE USERS</button> */}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
			getUsers() {
				dispatch(userActions.getUsers());
			},
			clearUsers() {
				dispatch(userActions.clearUsers());
			}
		}
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
