import React from 'react';
import { CommentSection, CommentBox } from '@comps';

import './styles/Inspect.css';

class Inspect extends React.Component {
	componentWillMount() {
		this.props.actions.getThing(this.props.params.id);
	}

	render({ props } = this) {
		return (
			<div styleName="Inspect">
				<Choose>
					<When condition={props.thing}>
						<h3>{props.thing.name}</h3>
						<p>{props.thing.link}</p>
						<p>{props.thing.description}</p>
						<small>{props.thing.tags}</small>
						<Choose>
							<When condition={props.thing.comments}>
								<CommentSection comments={props.thing.comments}/>
							</When>
							<Otherwise>
								<p>Currently there are no comments to display! Perhaps you could be the first?</p>
							</Otherwise>
						</Choose>
						<CommentBox thing={props.thing}/>
					</When>
					<Otherwise>
						<small>loading</small>
					</Otherwise>
				</Choose>
			</div>
		);
	}
}

export default Inspect;
