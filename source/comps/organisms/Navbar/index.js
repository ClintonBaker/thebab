import { connect } from 'react-redux'

import Navbar from './Navbar'
import * as userActions from '@store/actions/users'

const mapStateToProps = state => {
	return {
		session: state.session
	}
}

const mapActionsToProps = dispatch => {
	return {
		actions: {
			logHello() {
				console.log('hello, fucker.')
			}
		}
	}
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Navbar)
