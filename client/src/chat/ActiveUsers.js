import React, { Component } from 'react';

class ActiveUsers extends Component {
  constructor(props) { console.log(props)
    super(props);

  }
  render() { 
    return (
      <div>
        <div className='chat_links'>
  
        <a href='poop'>dave</a><br></br>
        <a href='poop'>greg</a><br></br>
        <a href='poop'>richard</a><br></br>
        <a href='poop'>barb</a><br></br>
        <a href='poop'>steven</a><br></br>
        <a href='poop'>boobies</a><br></br>
        <a href='poop'>blood</a><br></br>
        <a href='poop'>europe</a><br></br>
        </div>
       
      </div>
    );
  }
}

export default ActiveUsers;