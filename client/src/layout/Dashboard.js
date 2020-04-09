import React, { Component } from 'react';


// import MainChat from '../chat/MainChat'
import ChatDashboard from '../chat/ChatDashboard'
import AllConversations from '../Conversations/AllConversations';


class Dashboard extends Component {
  render() {
    return (
      <div>
 
        {/* main page container */}
        <section className='showcase'>
   
        </section>

        <section>
        {/* <MainChat /> */}
        <ChatDashboard/>
        </section>

      </div>
    );
  }
}

export default Dashboard;