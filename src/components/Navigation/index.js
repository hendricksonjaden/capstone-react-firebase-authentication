import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="right-side">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.ART}>Art Gallery</Link>
            </li>
            <li>
              <Link to={ROUTES.BLOG}>Blog</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
            {/* <li>
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li> */}
          </ul>
        </div>

        <div className="left-side">Mallory Hendrickson</div>
      </div>
    );  
  }  
}