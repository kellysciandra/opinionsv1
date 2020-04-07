import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { CREATE_CHAT, ADD_KEYWORDS, ADD_MESSAGES} from "./types";

export const createChat = (chatData, history) => dispatch => { 
  axios
    .post("/api/chats", artistData)
    .then(res =>  console.log(res), history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addKeywords = chatData => dispatch => { 
  axios
    .post("", chatData)
    .then(res => { console.log(res)

    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const addMessages = chatData => dispatch => { 
  axios
    .post("", chatData)
    .then(res => { console.log(res)

    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

