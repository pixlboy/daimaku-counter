import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Thanks from './Thanks';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
      <NavBar></NavBar>
      <div className="container">
        <Switch>
          <Route path="/thanks" component={Thanks}></Route>
          <Route path="/" component={App}></Route>         
        </Switch>
      </div>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
