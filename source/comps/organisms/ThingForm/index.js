import { connect } from 'react-redux'
 
import ThingForm from './ThingForm';

const mapStateToProps = state => {
	return {
		session: state.session
	}
}

const mapActionsToProps = dispatch => {
	return {
		actions: {
      postForm() {
        console.log('Form POSTed!');
      }
		}
	}
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ThingForm)
