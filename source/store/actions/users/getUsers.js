import { GET_USERS } from '../../consts/users'

const GET_USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export default () => {
	return async dispatch => {
		console.log('getting users')
		const response = await fetch(GET_USERS_ENDPOINT)
		const users = await response.json()
		dispatch({
			type: GET_USERS,
			data: {
				users
			}
		})
	}
}
