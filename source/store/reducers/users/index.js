import { NEW_USER } from '../../consts/users';

const initialState = { NewUser: false };

export default (state = initialState, action) => {
	if (action.type === NEW_USER) {
		return { ...state, user: action.data, NewUser: true };
	} else {
		return state;
	}
};
