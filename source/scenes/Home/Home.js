import React, { PureComponent } from 'react';
import './styles/Home.css';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '@store/actions/users';
import { InputBox, Box, Title, Input, Button, SmallText, SmallThing } from '@comps';

type PropsT = {
	actions: Object
};

class Home extends React.PureComponent {
	state = {
		searchValue: '',
		things: []
	};

	async componentDidMount() {
		const response = await fetch('http://rest.learncode.academy/api/thebab/things');
		const data = await response.json();
		this.setState({
			things: data
		});
	}

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
		console.log(state.things)
		return (
			<div styleName="Home" e2e="Home">
				<div styleName="header" e2e="header">
					<Title e2e="title">The Hub For Tooling Enthusiasts</Title>
					<Box padding="24px" width="400px" layout="column">
						<Input
							onIconClick={this.getSearchResults}
							onChange={this.setSearchValue}
							placeholder="search query"
							value={state.searchValue}
							e2e="searchInput"
							id="searchInput"
							icon="search"
							iconSize="lg"
						/>
						<Link styleName="create-new" to="/submit">
							<SmallText e2e="submitLink">submit a new thing</SmallText>
						</Link>
					</Box>
				</div>
				<main styleName='body'>
					<Choose>
						<When condition={state.things.length}>
							<section styleName='thingBox'>
								<For each='thing' of={state.things} index='index'>
									<SmallThing
										name={thing.name}
										id={thing.id}
									/>
								</For>
							</section>
						</When>
						<Otherwise>
							{/* TODO: Create Loading component. */}
							<section styleName='loadingIndicator'>
								<h3>Loading...</h3>
							</section>
						</Otherwise>
					</Choose>
				</main>
			</div>
		);
	}
}

export default Home;
