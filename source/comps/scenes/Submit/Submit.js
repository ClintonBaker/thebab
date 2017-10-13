import React from 'react'
import './styles/Submit.css'

import { ThingForm } from '@comps/organisms'

class Submit extends React.Component {
	state = {
		redirect: false
	};

	componentDidUpdate() {
		this.state.redirect
		? this.props.router.push('/inspect/' + this.props.ID)
		: null;
	};

	redirect = (red) => {
		this.setState( state => {
			return {
				redirect: red
			};
		});
	};

	render(){
		return (
			<div styleName='Submit'>
				<ThingForm redirect={ this.redirect }/>
			</div>
		)
	}
}

export default Submit
