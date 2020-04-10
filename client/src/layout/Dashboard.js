import React, { Component } from 'react';


import MainChat from '../chat/MainChat'




class Dashboard extends Component {
  render() {
    return (
      <div>
 
        {/* main page container */}
        <section className='showcase'>
   
        </section>

        <section>
        <MainChat />
        </section>

      </div>
    );
  }
}

export default Dashboard;