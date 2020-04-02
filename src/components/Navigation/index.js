import React from 'react';
import { NavLink } from 'react-router-dom';

import SignInButton from '../SignIn';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
    {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="nav-wrapper">
  <div className="left-side">Mallory Hendrickson</div>
    <div className="right-side">
      <div className="nav-link-wrapper">
        <NavLink to={ROUTES.HOME} activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to={ROUTES.ABOUT} activeClassName="nav-link-active">
          About
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to={ROUTES.ART} activeClassName="nav-link-active">
          Art Gallery
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to={ROUTES.BLOG} activeClassName="nav-link-active">
          Blog
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to={ROUTES.CONTACT} activeClassName="nav-link-active">
          Contact
        </NavLink>
      </div>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <div>
      <NavLink to={ROUTES.AUTH}>Auth</NavLink>  
    </div>
    <li>
      <SignOutButton />
    </li>
    <li>
      <SignInButton />
    </li>
  </ul>
)    

export default Navigation;