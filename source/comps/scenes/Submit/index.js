import { connect } from 'react-redux';
import Submit from './Submit';

const mapStateToProps = state => {
	// console.log(state);
	return {
		FormPosted: state.things.FormPosted,
		ID: state.things.ID
	};
};

// const mapActionsToProps = dispatch => {
// 	return {
// 		actions: {
//       postThing( form ) {
//         dispatch(postThing( form ));
// 			}
// 		}
// 	}
// }

export default connect(
	mapStateToProps
)(Submit)
