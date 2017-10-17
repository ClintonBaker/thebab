import React from 'react';
import './styles/SmallText.css';

const SmallText = (props: PropsT) => {
	return <small styleName="SmallText">{props.children}</small>;
};

export default SmallText;
