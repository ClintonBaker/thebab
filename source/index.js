import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './styles/index.styl'

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.querySelector('mount')
)
