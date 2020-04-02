import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import Account from '../Account';
import PasswordForgetPage from '../PasswordForget';
import AboutPage from '../About';
import ArtPage from '../Art';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import AuthPage from '../Auth';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <div className="container">
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage} 
        />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ABOUT} component={AboutPage} />
        <Route exact path={ROUTES.ART} component={ArtPage} />
        <Route exact path={ROUTES.BLOG} component={BlogPage} />
        <Route exact path={ROUTES.CONTACT} component={ContactPage} />
        <Route exact path={ROUTES.AUTH} component={AuthPage} />
      </div>
    </Router>
  </div>
);

export default withAuthentication(App);