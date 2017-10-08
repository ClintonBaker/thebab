import React from 'react'
import './styles/Home.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '@store/actions/users'

type PropsT = {
	actions: Object
}

const Home = (props: PropsT) => {
	console.log({ props })
	return (
		<div styleName="Home">
			<header></header>
			<span>This is Home</span>
			<h1>Here is the app.</h1>
			<br/>
			<button onClick={props.actions.getUsers}>GET THE USERS</button>
			<button onClick={props.actions.clearUsers}>GET THE USERS</button>
			<br/>
			<p>users: {props.users.length}</p>
			<br/>
			<div class="test0">test0</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		users: state.users
	}
}

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
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Home)
