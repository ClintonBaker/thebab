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
					<Box padding="24px" width="400px">
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
			</div>
		);
	}
}

export default Home;
