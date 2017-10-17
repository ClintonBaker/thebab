import { POST_THING, GET_THING } from '../../consts/things';

const initialState = { FormPosted: false };

export default (state = initialState, action) => {
	if (action.type === POST_THING) {
		return { ...state, ID: action.data, FormPosted: true };
	}
	if (action.type === GET_THING) {
		return { ...state, thingData: action.data };
	} else {
		return state;
	}
};
