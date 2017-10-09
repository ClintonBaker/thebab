import React from 'react';

import './styles/Name.css'

const Name = ( props ) => {
  return (
    <label styleName='Name'>
      Name: <input name={ props.name } type='text' value={ props.value } onChange={ props.updateInput } />
    </label>
  );
};

export default Name;