import React from 'react'
import { Navbar } from '@comps/organisms';
import './styles/Frame.css'

class Frame extends React.Component {
	render(){
		console.log(props);
		return (
			<div styleName='Frame'>
				<p>Here's some Frame Stuff!</p>
				<Navbar/>
				{
					this.props.children
				}
			</div>
		)
	}
}

export default Frame