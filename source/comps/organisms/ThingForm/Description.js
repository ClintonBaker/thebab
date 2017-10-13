import React from 'react';

import './styles/Description.css'

const Description = ( props ) => {
  return (
    <label styleName='Description'>
      Description: <input name={ props.name } type='text' value={ props.value } onChange={ props.updateInput } />
    </label>
  );
};

export default Description;