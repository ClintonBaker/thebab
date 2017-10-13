import React from 'react'
import { Input, InlineButton } from '@comps/atoms';
import './styles/InputBox.css'

const InputBox = (props: PropsT) => {
	return (
		<div styleName='InputBox'>
			<Input
				value={props.value}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
			/>
			<InlineButton>{props.buttonText}</InlineButton>
		</div>
	)
}

export default InputBox
