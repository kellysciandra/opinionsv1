import React, { Component } from 'react';

import io from 'socket.io-client';
import ChatList from './ChatList';
import ActiveConversation from '../conversation/ActiveConversation';
import ActiveUsers from './ActiveUsers'
import config from '../config';



import BottomBar from '../BottomBar';


class ChatDashboard extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      chat: [],
      content: '',
      name: '',
      conversation_id: ''
    };
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    // Load the last 10 messages in the window.
    this.socket.on('init', (msg) => { console.log(msg)
      this.setState((state) => ({
        chat: [...state.chat, ...msg.reverse()],
      }));
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (msg) => { 
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }));
    });
  }

   // Save the message the user is typing in the input field.
   handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  //
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  // When the user is posting a new message.
  handleSubmit(event) {
    console.log(event);

    // Prevent the form to reload the current page.
    event.preventDefault();

    this.setState((state) => {
      console.log(state);
      console.log('this', this.socket);
      // Send the new message to the server.
      this.socket.emit('message', { 
        name: state.name,
        content: state.content,
        conversation_id: this.props.match.params.id
      });

      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
          conversation_id: state.conversation_id
        }],
        content: '',
      };
    });
  }


  render() { console.log(this.state, this.props.conv)
    return (
      <div>
         <section className='showcase'>
         </section>
        
        <BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />

      <div  className='grid'>
   
      <div className='ask_form_card'>
      <section className='display_chats_text_header'>
          <h1>live chats</h1>
          </section>
          <ActiveConversation />
        </div> 

        <div className='display_chat_text'>
          <section className='display_chat_text_header'>
          <h1>{this.props.match.params.id}</h1>
          </section><br></br><br></br>
        
        <ChatList chats={this.state.chat} />
        </div>

        <div className='chat_nav'>
        <section className='display_users_text_header'>
          <h1>active users</h1>
          </section>
          <ActiveUsers />
        </div>
      </div>

      </div>
    );
  }
}

export default ChatDashboard;




