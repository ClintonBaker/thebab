import React, { PureComponent } from 'react';
import './styles/Home.css';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '@store/actions/users';
import { InputBox, Box, Title, Input, Button, SmallText } from '@comps';

type PropsT = {
	actions: Object,
};

class Home extends React.PureComponent {
	state = { searchValue: '' };

	setSearchValue = ({ target: { value } }) => {
		this.setState(state => {
			return {
				searchValue: value,
			};
		});
	};

	getSearchResults = () => {
		console.log('getting dem shits');
	};

	render({ props, state } = this) {
		return (
			<div styleName="Home">
				<div styleName="header">
					<Title>The Hub For Tooling Enthusiasts</Title>
					<Box padding="24px" width="400px" layout="column">
						<Input
							onIconClick={this.getSearchResults}
							onChange={this.setSearchValue}
							placeholder="search query"
							value={state.searchValue}
							icon="search"
							iconSize="lg"
						/>
						<Link styleName="create-new" to="/submit">
							<SmallText>submit a new thing</SmallText>
						</Link>
					</Box>
				</div>
			</div>
		);
	}
}

export default Home;
