import React from 'react';
import './styles/Inspect.css';

class Inspect extends React.Component {

	componentWillMount(){
		this.props.actions.getThing(this.props.params.id);
	};
	
	render(){
		console.log(this.props.thing);
		return (
			<div styleName="Inspect">
				{ 
					this.props.thing 
					? (
						<div>
							<h3>{this.props.thing.name}</h3>
							<p>{this.props.thing.thinglink}</p>
							<p>{this.props.thing.description}</p>
							<small>{this.props.thing.tagz}</small>
						</div>
						)
					: (<small>loading</small>)
				}
			</div>
		);
	}
};

export default Inspect;
