import React from 'react'
import './styles/ThingForm.css'

import Name from './Name';
import ThingLink from './ThingLink';
import Description from './Description';
import Tagz from './Tagz';

class ThingForm extends React.Component {
	state = {
		name: '',
		thinglink: '',
		description: '',
		tagz: ''
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	render(){
		return (
			<div styleName='ThingForm'>
				Hello World!
				{/*
				<form>
					<Name name={ this.state.name } updateInput={ this.updateInput } />
					<ThingLink thinglink={ this.state.thinglink } updateInput={ this.updateInput } />
					<Description description={ this.state.description } updateInput={ this.updateInput } />
					<Tagz tagz={ this.state.tagz } updateInput={ this.updateInput } />
				</form>
				*/}
				
			</div>
		)
	}
}

export default ThingForm