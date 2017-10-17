import React from 'react';
import './styles/Box.css';

type PropsT = {
	padding?: string,
	radius?: boolean,
	background?: string,
	width: string,
};

const Box = (props: PropsT) => {
	const { padding, radius, background, width } = props;
	const borderRadius = radius ? '3px' : '0px';
	return (
		<div styleName="Box" style={{ width, padding, borderRadius, background }}>
			{props.children}
		</div>
	);
};

Box.defaultProps = {
	padding: '12px',
	radius: true,
	background: 'none',
};

export default Box;
