// import React from "react";
// import { Link } from "react-router-dom";
// import ChatDashboard from '../chat/ChatDashboard'

// function passProp(prop) { console.log(prop)
//   return <ChatDashboard conversation={prop}  />
// }

// export default ({ conversations }) => (
//   <ul>
//     {conversations.map(conv => {
//       return (
//         <div className='chat_links_left'>     <br></br>  
         
//                 <div key={conv.id}>
             
//                 <Link to={'/'} onClick={ (event) => passProp(conv._id)} >{conv._id}</Link>
//           </div>
//         </div>
//       );
//     })}
//   </ul>
// );


import React, { Component } from 'react';
import { Link, Switch, Route, useParams } from "react-router-dom";
import ChatDashboard from '../chat/ChatDashboard'

class ConversationsNav extends Component {

  passProp(prop) { 
    return <ChatDashboard conv_id={prop}/>
  }
  
  render(props) { 

      let conv = this.props.conversations ? this.props.conversations.map(conv => {
        return (
          <ul>
                <div className='chat_links_left'>     <br></br>  
                       <div key={conv.id}>         
                        <Link to={`/chat/about/${conv._id}`} onClick={ (event) => this.passProp(conv._id)} >{conv._id}</Link>                        
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




export default ConversationsNav;