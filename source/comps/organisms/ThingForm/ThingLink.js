import React from 'react';

import './styles/ThingLink.css'

const ThingLink = ( props ) => {
  return (
    <label styleName='ThingLink'>
      Link: <input name={ props.name } type='text' value={ props.value } onChange={ props.updateInput } />
    </label>
  );
};

export default ThingLink;