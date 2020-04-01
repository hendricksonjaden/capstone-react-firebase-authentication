import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <div className="nav-wrapper">
    <div className="left-side">
      Mallory 
      Hendrickson
    </div>
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
        {/* <div>
          <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
        </div> */}
      </div>
    </div>
  );  
}  


export default withRouter(Navigation);