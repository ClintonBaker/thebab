import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '@store/actions/users';
import Home from './Home';

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
