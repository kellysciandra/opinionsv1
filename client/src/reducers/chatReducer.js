import { CREATE_CHAT, ADD_KEYWORDS, ADD_MESSAGES} from "../actions/types";
const isEmpty = require('lodash/isEmpty') ;

const initialState = { chat: {} };

export default function(state = initialState, action) {
  switch (action.type) { 
    case CREATE_CHAT:
      console.log(action.payload)
      return { 
        // ...state,
        // isAuthenticated: !isEmpty(action.payload),
        // artist: action.payload
      };
    case ADD_KEYWORDS: 
    console.log(action.payload)
      return {
        // ...state,
        //   artists: action.payload
      };
      case ADD_MESSAGES: 
      console.log(action.payload)
        return {
          // ...state,
          //   artists: action.payload
        }
    default:
      return state;
  }
}