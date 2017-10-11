import { POST_THING } from '../../consts/things';

const initialState = []

export default (state = initialState, action) => {
  if(action.type === POST_THING){
    return {  ...state, FormPosted: action.data  };
  } else {
    return state;
  }
};