import { connect } from 'react-redux';
import ThingForm from './ThingForm';
import { postThing } from '@store/actions/things';
import { getUsers } from '@store/actions/users';

const mapStateToProps = state => {
	return {
		FormPosted: state.FormPosted
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
      PostForm( form ) {
        dispatch(postThing( form ));
			}
		}
	}
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ThingForm)
