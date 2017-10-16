import React from 'react';
import './styles/Browse.css';

class Browse extends React.Component {
	componentWillMount(){
		this.props.actions.getThings();
	}

	render() {
		return (
			<div styleName="Browse" >
				<p>Lets browse some stuff!</p>
			</div>
		);
	}
};

export default Browse;
