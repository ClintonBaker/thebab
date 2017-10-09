import { POST_THING } from '../../consts/things';

const initialState = [];

export default (state = initialState, action) => {
  if(action.type === POST_THING){
    return [];
  } else {
    return state;
  }
};