import React from 'react';
import './styles/Button.css';

const Button = (props: PropsT) => {
	return <button styleName="Button">{props.children}</button>;
};

export default Button;
