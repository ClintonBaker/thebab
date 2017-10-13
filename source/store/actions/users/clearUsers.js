import { CLEAR_USERS } from '../../consts/users';

export default () => {
	return dispatch => {
		dispatch({
			type: CLEAR_USERS
		});
	};
};
