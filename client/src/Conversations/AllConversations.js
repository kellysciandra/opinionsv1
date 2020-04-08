import React, { Component } from 'react';

import io from 'socket.io-client';
import config from '../config';
import BottomBarNew from '../BottomBarNew';
import ConversationList from './ConversationList';

class AllConversations extends Component {
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
    console.log(event);

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









  render() { console.log(this.state.conversations)
    return (
      <div>
        {this.state.title, this.state._id}
        
        <BottomBarNew
          _id={this.state._id}
          handleId={this.handleId.bind(this)}
          handleTitle={this.handleTitle.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          title={this.state.title}
        />

      {/* <div  className='grid'> */}
   
        {/* <div className='ask_form_card'>
          <ChatBox
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
          />
        </div> */}
{/* 
        <div className='display_chat_text'>
          <section className='display_chat_text_header'>
          <h1>what do you think of poop?</h1>
          </section><br></br><br></br>
        
        <ChatList chats={this.state.chat} />
        </div>

        <div className='chat_nav'>
          <ChatNav />
        </div>
      </div> */}
              <ConversationList chats={this.state.conversations} />
      </div>
    );
  }
}

export default AllConversations;




