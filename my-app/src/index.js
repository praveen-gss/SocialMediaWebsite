import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RegistrationPage from './Components/RegistrationPage'
import LoginPage from './Components/LoginPage'
import NewsFeed from './Components/NewsFeed';
import Chat from './Components/Chat';
import UserProfile from './Components/UserProfile';
import UserChat from './Components/UserChat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = "/">
        <RegistrationPage />
      </Route>
      <Route exact path = "/LoginPage">
        <LoginPage />
      </Route>
      <Route exact path = "/NewsFeed">
        <NewsFeed />
      </Route>
      <Route exact path = "/Chat">
        <Chat />
      </Route>
      <Route exact path = "/UserProfile">
        <UserProfile />
      </Route>
      <Route exact path = "/UserChat">
        <UserChat />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
