import React, { Component } from 'react';
import { Link, Switch, Route, useParams } from "react-router-dom";
import ChatDashboard from '../chat/ChatDashboard'

class ActiveConversations extends Component {

  passProp(conv) { 
    return <ChatDashboard conv={conv}/>
  }
  
  render(props) { 

      let conv = this.props.conversations ? this.props.conversations.map(conv => { 
        return (
          <ul>
                <div className='chat_links_left'>     <br></br>  
                       <div key={conv.id}>         
                        <Link to={`/chat/about/${conv._id}`} onClick={ (event) => this.passProp(conv.title)} >{conv._id}</Link>                        
                 </div>
                </div>
          </ul>
        )
      }): null

    return (
      <div>
        {conv}
      </div>
    );
  }
}


export default ActiveConversations;