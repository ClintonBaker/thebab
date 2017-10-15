import React from 'react';
import './styles/Inspect.css';

class Inspect extends React.Component {

	componentWillMount(){
		this.props.actions.getThing(this.props.params.id);
	};
	
	render(){
		return (
			<div styleName="Inspect">
				<Choose>
					<When condition={ this.props.thing }>
						<h3>{this.props.thing.name}</h3>
						<p>{this.props.thing.thinglink}</p>
						<p>{this.props.thing.description}</p>
						<small>{this.props.thing.tagz}</small>
					</When>
					<Otherwise>
						<small>loading</small>
					</Otherwise>
				</Choose>
			</div>
		);
	}
};

export default Inspect;
