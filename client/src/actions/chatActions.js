import { GET_CHATS, START_CHAT, ADD_MESSAGE } from './types'
import io from 'socket.io-client';

export const loadChats = () => dispatch => {

}

export const newChat = (chat) => dispatch => {
  return(dispatch) => { 
    this.socket.emit('conversation', {
      _id: chat._id, 
      title: chat.title
    }).then(response => {
      console.log(response)
    })
  }
}

export const newMessage = () => dispatch => {

}



