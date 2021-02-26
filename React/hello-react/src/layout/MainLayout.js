import React from 'react';
import { Route,  NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from "../App"
import About from "../pages/about"
import Services from "../pages/services"
import Contact from "../pages/contact"

class MainLayout extends React.Component {
    render() {
        const { match } = this.props
        return (
            <>
              

                <header>
        <h1>Web App</h1>
    </header>
      <nav>
      <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active"   to="/">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink  activeClassName="active"  to="/about">About</NavLink >
        </li>
        <li>
          <NavLink  activeClassName="active"  to="/services">Services</NavLink >
        </li>
        <li>
          <NavLink activeClassName="active"  to="/contact">Contact</NavLink >
        </li>
      </ul>
     
  </div>
      </nav>
      <content>
            <Switch>
                <Route  exact path={`${match.path}`} render={(props) => <App {...props} /> }/>
                <Route  path={`${match.path}about`} component={About}/>
                <Route  path={`${match.path}services`} component={Services}/>
                <Route  path={`${match.path}contact`} component={Contact}/>
            </Switch>
      </content>
      <footer>
          <p>copyright @dotnetist 2021</p>
      </footer>
            </>
        )
    }
}

MainLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default MainLayout