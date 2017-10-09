import React from 'react';

import './styles/Tagz.css'

const Tagz = ( props ) => {
  return (
    <label styleName='Tagz'>
      Tag: <input type='text' input={ props.tagz } onChange={ props.updateInput } />
    </label>
  );
};

export default Tagz;