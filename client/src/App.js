import React, { Component } from 'react';
import { Route, Router, Switch, useParams } from 'react-router-dom'


//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import ConversationDashboard from './conversation/ConversationDashboard'

import MainChat from './chat/MainChat.js';
import ChatDashboard from './chat/ChatDashboard.js'

//history
import history from './history'


class App extends Component {


  render() {

    return (
      <div>
  
        <Router history={history}>
        <NavBar />
        <Route exact path="/" component={Dashboard}/>
   
      
        <Route exact path="/chat" component={MainChat}/>
        <Route exact path="/conversations" component={ConversationDashboard}/>
        <Footer />
        <Switch>
        <Route path="/chat/about/:id" component={ChatDashboard} />
        </Switch>
        </Router>

      </div>
    );
  }
}



export default App;


















