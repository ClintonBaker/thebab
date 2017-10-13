import { POST_THING } from '../../consts/things';

const initialState = { FormPosted: false }

export default (state = initialState, action) => {
  if(action.type === POST_THING){
    return {  ...state, FormPosted: true  };
  } else {
    // console.log(state);
    return state;
  }
};