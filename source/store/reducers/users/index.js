import { GET_USERS, CLEAR_USERS } from '../../consts/users'

const initialState = []

export default (state = initialState, action) => {
	if (action.type === GET_USERS) {
		return [...action.data.users]
	} else if (action.type === CLEAR_USERS) {
		return []
	} else {
		return state
	}
}
