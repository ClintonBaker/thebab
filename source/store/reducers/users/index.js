import { NEW_USER, AUTH_USER, LOGOUT } from '../../consts/users';

const initialState = { user: null, NewUser: false, authenticated: false };

export default (state = initialState, action) => {
	if (action.type === NEW_USER) {
		return { ...state, user: action.data, NewUser: true, authenticated: true };
	} else if (action.type === AUTH_USER) {
		return { ...state, user: action.user, authenticated: true }
	} else if ( action.type === LOGOUT ) {
		return { ...state, user: null, authenticated: false }
	} else {
		return state;
	}
};
