import React from 'react';
import './styles/ThingPrev.css';

const ThingPrev = (props: PropsT) => {
	return (
		<div styleName="ThingPrev">
			<h4>{props.data.name}</h4>
			<p>{props.data.description.substr(0, 70)}</p>
		</div>
	);
};

export default ThingPrev;
