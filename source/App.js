import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import { Home } from '@scenes';

const App = (props) => {
	return (
		<div>
			<Router history={ browserHistory }>
				<Route path='/'>
					<IndexRoute component={ Home }/>
				</Route>
				<header>yolo</header>
				<h1>Here is the app.</h1>
				<div class='test0'>test0</div>
			</Router>
		</div>
	)
}

export default App;
