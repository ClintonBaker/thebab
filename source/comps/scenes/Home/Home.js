import React, { PureComponent } from 'react';
import './styles/Home.css';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '@store/actions/users';
import { Title, Input, InlineButton } from '@comps/atoms';
import { InputBox } from '@comps/molecules';
import Box from '@comps/atoms/Box';

type PropsT = {
	actions: Object
};

class Home extends React.PureComponent {
	state = { searchValue: '' };

	setSearchValue = ({ target: { value } }) => {
		this.setState(state => {
			return {
				searchValue: value
			};
		});
	};

	getSearchResults = () => {
		console.log('getting dem shits');
	};

	render({ props, state } = this) {
		return (
			<div styleName="Home">
				<header />
				<div styleName="header">
					<Title>The Hub For Tooling Enthusiasts</Title>
					<Box>
						<Input
							onIconClick={this.getSearchResults}
							onChange={this.setSearchValue}
							placeholder="search query"
							value={state.searchValue}
							icon="search"
							iconSize="lg"
						/>
					</Box>
				</div>
				<Link styleName="SubmitLink" to="/submit">
					New Thing
				</Link>
				{/* <button onClick={props.actions.getUsers}>GET THE USERS</button> */}
				{/* <button onClick={props.actions.clearUsers}>GET THE USERS</button> */}
			</div>
		);
	}
}

export default Home;
