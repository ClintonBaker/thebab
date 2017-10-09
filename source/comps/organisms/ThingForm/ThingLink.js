import React from 'react';

import './styles/ThingLink.css'

const ThingLink = ( props ) => {
  return (
    <label styleName='ThingLink'>
      Link: <input type='text' input={ props.thinglink } onChange={ props.updateInput } />
    </label>
  );
};

export default ThingLink;