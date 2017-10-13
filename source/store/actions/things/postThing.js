import { POST_THING } from '../../consts/things';

export default ( form ) => {
  // console.log(JSON.stringify(form));
  return dispatch => {
    fetch('http://rest.learncode.academy/api/thebab/things', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    }).then( response => {
      if( response.ok ) {
        return response.json();
      }
      throw new Error('Shit fucked up');
    }).then(json => {
      // console.log(json);
      dispatch({
        type: POST_THING,
        data: json.id
      });
    }).catch( error => {
      // console.log('We had some issues...');
    });
  };
};
