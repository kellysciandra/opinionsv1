import React, { Component } from 'react';

import io from 'socket.io-client';
import config from '../config';
import BottomBarNew from '../BottomBarNew';
import ConversationList from './ConversationList';
import ActiveConversation from './ActiveConversation'
import ActiveUsers from '../chat/ActiveUsers'
// import MainChat from '../chat/MainChat'

class ConversationDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      _id: '',
      title: '',
    };
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    // Load the last 10 messages in the window.
    this.socket.on('init', (conv) => {
      this.setState((state) => ({
        conversations: [...state.conversations, ...conv.reverse()],
      }));
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (conv) => { 
      this.setState((state) => ({
        conversations: [...state.conversations, conv],
      }));
    });
  }

   // Save the message the user is typing in the input field.
   handleId(event) {
    this.setState({
      _id: event.target.value,
    });
  }

  //
  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  // When the user is posting a new message.
  handleSubmit(event) {
    // Prevent the form to reload the current page.
    event.preventDefault();

    this.setState((state) => {
      console.log(state);
      console.log('this', this.socket);
      // Send the new message to the server.
      this.socket.emit('conversation', { 
        _id: state._id,
        title: state.title,
      });

      // Update the chat with the user's message and remove the current message.
      return {
        conversations: [...state.conversations, {
          _id: state._id,
          title: state.title,
        }],
        title: '',
        _id: '',
      };
    });
  }


  render() { 
    return (
      <div>
         <section className='showcase'>
   
          </section>
    
        <BottomBarNew
          _id={this.state._id}
          handleId={this.handleId.bind(this)}
          handleTitle={this.handleTitle.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          title={this.state.title}
        />

      <div  className='grid'> 
   
    
 
        <div className='display_chat_text'>
          <section className='display_chat_text_header'>
          <h1>{this.state.conversations.title}</h1>
          </section>
        
        <ConversationList conversations={this.state.conversations} />
        {/* <MainChat conversations={this.state.conversations} /> */}
        </div>

        <div className='chat_nav'>
        <section className='display_users_text_header'>
          <h1>active users</h1>
          </section>
          <ActiveUsers />
        </div>

        <div className='ask_form_card'>
        <section className='display_chats_text_header'>
          <h1>live chats</h1>
          </section>
          <ActiveConversation conversations={this.state.conversations}/>
        </div> 
      </div>
              
      </div>
    );
  }
}

export default ConversationDashboard;




