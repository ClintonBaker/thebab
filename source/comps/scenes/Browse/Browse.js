import React from 'react';
import './styles/Browse.css';

class Browse extends React.Component {
	componentWillMount(){
		this.props.actions.getThings();
	}

	render() {
		console.log(this.props.things);
		return (

			<div styleName="Browse" />
		);
	}
};

export default Browse;
