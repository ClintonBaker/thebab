import { connect } from 'react-redux';
import ThingForm from './ThingForm';
import { postThing } from '@store/actions/things';
import { getUsers } from '@store/actions/users';

const mapStateToProps = state => {
	return {
		session: state.session
	}
}

const mapActionsToProps = dispatch => {
	return {
		actions: {
      PostForm( form ) {
				console.log( JSON.stringify( form ) );
        postThing( form );
			},
			GetForm() {
				fetch('http://rest.learncode.academy/api/thebab/things')
				.then( response => {
					return response.json();
				}).then( json =>{
					console.log(json);
				});
			},
			GetUsers() {
				getUsers();
			}
		}
	}
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ThingForm)
