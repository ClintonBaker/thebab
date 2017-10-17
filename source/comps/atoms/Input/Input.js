import React from 'react';
import './styles/Input.css';

const Input = (props: PropsT) => {
	return (
		<div styleName="Input">
			<input
				value={props.value}
				defaultValue={props.defaultValue}
				placeholder={props.placeholder}
				required={props.required}
			/>
		</div>
	);
};

export default Input;
