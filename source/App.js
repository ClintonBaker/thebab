import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import { Browse, Home, Profile, Submit } from '@scenes';

const App = (props) => {
	return (
		<div>
			<Router history={ browserHistory }>
				<Route path='/'>
					<IndexRoute component={ Home } />
					<Route path='/profile' component={ Profile } />
					<Route path='/browse' component={ Browse } />
					<Route path='/submit' component={ Submit } />
				</Route>

			</Router>
		</div>
	)
}

export default App;
