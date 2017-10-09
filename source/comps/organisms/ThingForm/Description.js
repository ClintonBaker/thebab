import React from 'react';

import './styles/Description.css'

const Description = ( props ) => {
  return (
    <label styleName='Description'>
      Description: <input type='text' input={ props.description } onChange={ props.updateInput } />
    </label>
  );
};

export default Description;