import React from 'react'
import { Navbar } from '@comps/organisms';
import './styles/Frame.css'

class Frame extends React.Component {
	render(){
		return (
			<div styleName='Frame'>
				<Navbar/>
				{
					this.props.children
				}
			</div>
		)
	}
}

export default Frame