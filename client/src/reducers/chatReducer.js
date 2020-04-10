import { GET_CHATS, ADD_MESSAGE, START_CHAT } from "../actions/types";


const initialState = { chat: {} };

export default function(state = initialState, action) {
  switch (action.type) { 
    case GET_CHATS: 
    console.log(action.type)
      return { 
  
      };
    case ADD_MESSAGE: 
    console.log(action.payload)
      return {

      };
      case START_CHAT: 
      console.log(action.payload)
        return {

        }
    default:
      return state;
  }
}