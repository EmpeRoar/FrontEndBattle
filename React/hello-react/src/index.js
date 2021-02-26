import React from 'react';
import { Route,   BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import About from '../src/pages/about'
import Services from '../src/pages/services'
import Contact from '../src/pages/contact'
import Notfound from '../src/pages/notfound'
import MainLayout from './layout/MainLayout';

const routing = (
  <Router>
    
    <Switch>
        <Route path="/" render={ (props) => <MainLayout {...props} /> } />        
        <Route component={Notfound} />
    </Switch>
  </Router>)


ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
