import React from 'react';

import './styles/Name.css'

const Name = ( props ) => {
  return (
    <label styleName='Name'>
      Name: <input type='text' input={ props.name } onChange={ props.updateInput } />
    </label>
  );
};

export default Name;