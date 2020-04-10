import React, { Component } from 'react';
import { Route, Router, Switch, useParams } from 'react-router-dom'
import { Provider } from "react-redux";

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
//redux
import store from './store'

class App extends Component {


  render() {

    return (
      <div>
        <Provider store={store}>
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
        </Provider>  
      </div>
    );
  }
}



export default App;


















