import { POST_THING } from '../../consts/things';

export default () => {
  return dispatch => {
    const things = 'POSTing ALL THE THINGS!';
    dispatch({
      type: POST_THING,
      data:{
        message: things
      }
    });
  };
};