import React from "react";


export default ({ conversations }) => (
  <ul>
    {conversations.map(conv => {
      return (
        <div className="chat_messages">     <br></br>  
          
                <div key={conv.id}>
                  <div className='display_name'>
                  {conv._id}: 
                  <span className='display_message'>
                  {" "}  {" "}{conv.title}
                  </span>
                  </div>
          </div>
        </div>
      );
    })}
  </ul>
);

