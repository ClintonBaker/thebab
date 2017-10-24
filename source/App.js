import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { Browse, Home, Inspect, Profile, Settings, Submit, Signup, Login } from '@scenes';
import { Frame, Navbar } from '@comps';

const App = props => {
	return (
		<div>
			<Router history={browserHistory}>
				<Route path="/" component={Frame}>
					<IndexRoute component={Home} />

					<Route path="/account">
						<IndexRoute component={Profile} />
						<Route path="/settings" component={Settings} />
					</Route>

					<Route path="/browse">
						<IndexRoute component={Browse} />
						<Route path="/inspect/:id" component={Inspect} />
					</Route>

					<Route path='/signup' component={Signup}/>

					<Route path="/submit" component={Submit} />

					<Route path='/login' component={Login} />
				</Route>
			</Router>
		</div>
	);
};

export default App;
