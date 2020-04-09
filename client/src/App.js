import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'

// import MainChat from './chat/MainChat.js';
import ChatDashboard from './chat/ChatDashboard.js'

//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'

import ModalExample from './chat/ModalExample'
import AllConversations from './Conversations/AllConversations'
//history
import history from './history'

class App extends Component {


  render() {

    return (
      <div>
        <Router history={history}>
        <NavBar />
        <Route exact path="/" component={Dashboard}/>
   
        {/* <Route exact path="/chat" component={MainChat}/> */}
        <Route exact path="/chat" component={ChatDashboard}/>
        <Route exact path="/modal" component={ModalExample}/>
        <Route exact path="/conversations" component={AllConversations}/>
        <Footer />
        </Router>
   
      </div>
    );
  }
}

export default App;


















