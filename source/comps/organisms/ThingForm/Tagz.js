import React from 'react';

import './styles/Tagz.css'

const Tagz = ( props ) => {
  return (
    <label styleName='Tagz'>
      Tag: <input name={ props.name } type='text' value={ props.value } onChange={ props.updateInput } />
    </label>
  );
};

export default Tagz;