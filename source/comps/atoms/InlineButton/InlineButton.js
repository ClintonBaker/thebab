import React from 'react';
import './styles/InlineButton.css';

const InlineButton = (props: PropsT) => {
	return <button styleName="InlineButton">{props.children}</button>;
};

export default InlineButton;
