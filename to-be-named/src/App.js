import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginPage></LoginPage> */}
        <Router>
          <Switch>
              <Route exact path="/" component = {LoginPage} />
              <Route exact path = "/signup" component = {SignUpPage} />
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
