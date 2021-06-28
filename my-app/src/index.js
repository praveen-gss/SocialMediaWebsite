import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import NewsFeed from './NewsFeed';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = "/">
        <LoginPage />
      </Route>
      <Route exact path = "/RegistrationPage">
        <RegistrationPage />
      </Route>
      <Route exact path = "/NewsFeed">
        <NewsFeed />
      </Route>
      <Route exact path = "/Chat">
        <Chat />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
