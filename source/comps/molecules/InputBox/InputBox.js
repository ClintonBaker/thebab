import React from 'react';
import { Input, Button } from '@comps/atoms';
import './styles/InputBox.css';

const InputBox = (props: PropsT) => {
	return (
		<div styleName="InputBox">
			<Input
				value={props.value}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
			/>
			<Button>{props.buttonText}</Button>
		</div>
	);
};

export default InputBox;
