import React from 'react';
import { Link } from 'react-router';
import { ThingPrev } from '@comps/molecules';

import './styles/Browse.css';

class Browse extends React.Component {
	componentWillMount(){
		this.props.actions.getThings();
	}

	render({ things } = this.props) {
		return (
			<div styleName="Browse" >
				<Choose>
					<When condition={things}>
						{
							things.map((thing, index) => {
								return(
									<Link key={index} to={ '/inspect/' + thing.id }>
										<ThingPrev data={thing}/>
									</Link>
								)
							})
						}
					</When>
					<Otherwise>
						<small>...loading</small>
					</Otherwise>
				</Choose>
			</div>
		);
	}
};

export default Browse;
