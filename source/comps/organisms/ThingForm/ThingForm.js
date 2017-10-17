import React from 'react';
import { Redirect } from 'react-router';
import './styles/ThingForm.css';

import Name from './Name';
import ThingLink from './ThingLink';
import Description from './Description';
import Tagz from './Tagz';

class ThingForm extends React.Component {
	state = {
		name: '',
		thinglink: '',
		description: '',
		tagz: '',
	};

	clearForm = () => {
		this.setState(state => {
			return {
				name: '',
				thinglink: '',
				description: '',
				tagz: '',
			};
		});
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		});
	};

	submitForm = e => {
		e.preventDefault();
		this.props.actions.postThing({
			name: this.state.name,
			thinglink: this.state.thinglink,
			description: this.state.description,
			tagz: this.state.tagz,
		});
		this.clearForm();
	};

	render() {
		return (
			<div styleName="ThingForm">
				<form>
					<Name name="name" value={this.state.name} updateInput={this.updateInput} />
					<ThingLink name="thinglink" value={this.state.thinglink} updateInput={this.updateInput} />
					<Description name="description" value={this.state.description} updateInput={this.updateInput} />
					<Tagz name="tagz" value={this.state.tagz} updateInput={this.updateInput} />
					<button onClick={this.submitForm}>Submit</button>
				</form>
			</div>
		);
	}
}

export default ThingForm;
