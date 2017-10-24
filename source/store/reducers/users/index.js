import { NEW_USER, AUTH_USER } from '../../consts/users';

const initialState = { NewUser: false, authenticated: false };

export default (state = initialState, action) => {
	if (action.type === NEW_USER) {
		return { ...state, user: action.data, NewUser: true, authenticated: true };
	} else if (action.type === AUTH_USER) {
		return { ...state, user: action.user, authenticated: true }
	} else {
		return state;
	}
};
