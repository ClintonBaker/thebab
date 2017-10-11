import { POST_THING } from '../../consts/things';

export default ( form ) => {
  console.log(form);
  return dispatch => {
    debugger;
    console.log('Is this being called?');
    // fetch('http://rest.learncode.academy/api/thebab/things', {
    //   method: 'POST',
    //   data: JSON.stringify(form)
    // }).then( response => {
    //   if( response.ok ) {
    //     console.log('Stuff is working?');
    //     return response.json();
    //   }
    //   throw new Error('Shit fucked up');
    // }).then(json => {
    //   console.warn('Why is this not working?');
    //   return dispatch({
    //     type: POST_THING,
    //     data: 'Form Posted'
    //   });
    // }).catch( error => {
    //   console.log('We had some issues...');
    // });
  }
    console.log('?');
};