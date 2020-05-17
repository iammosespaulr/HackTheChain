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
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginPage></LoginPage> */}
        <Router>
          <Provider store={store}>
          <Switch>
              <Route exact path="/" component = {LoginPage} />
              <Route exact path = "/signup" component = {SignUpPage} />
        </Switch>
        </Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;
