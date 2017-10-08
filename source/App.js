import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import { Browse, Home, Inspect, Profile, Settings, Submit } from '@scenes'

const App = props => {
	return (
		<div>
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={Home} />

					<Route path="/account">
						<IndexRoute component={Profile} />
						<Route path="/settings" component={Settings} />
					</Route>

					<Route path="/browse">
						<IndexRoute component={Browse} />
						<Route path="/inspect/:id" component={Inspect} />
					</Route>

					<Route path="/submit" component={Submit} />
				</Route>
			</Router>
		</div>
	)
}

export default App
