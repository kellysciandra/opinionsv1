import React from "react";


export default ({ chats }) => (
  <ul>
    {chats.map(chat => {
      return (
        <div className="chat_messages">     <br></br>  
          
                <div key={chat.id}>
                  <div className='display_name'>
                  {chat.name}: 
                  <span className='display_message'>
                  {" "}  {" "}{chat.content}
                  </span>
                  </div>
          </div>
        </div>
      );
    })}
  </ul>
);


