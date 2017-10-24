import { connect } from 'react-redux';

import Navbar from './Navbar';
import * as userActions from '@store/actions/users';

const mapStateToProps = state => {
	return {
		authenticated: state.users.authenticated,
		user: state.users.user
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
