import React from 'react';
import Icon from '@comps/atoms/Icon';
import './styles/Input.css';

type PropsT = CorePropsT & {
	value: string,
	placeholder: string,
	onChange: Function,

	defaultValue?: string,
	required?: boolean,
	onIconClick?: Function,
	iconSize: string,
	icon?: string,
};

const Input = (props: PropsT) => {
	return (
		<div styleName="Input">
			<input
				defaultValue={props.defaultValue}
				placeholder={props.placeholder}
				required={props.required}
				onChange={props.onChange}
				value={props.value}
			/>
			<If condition={props.icon}>
				<Icon onClick={props.onIconClick} size={props.iconSize} name={props.icon} styleName="icon" />
			</If>
		</div>
	);
};

Input.defaultProps = {
	required: false,
};

export default Input;
