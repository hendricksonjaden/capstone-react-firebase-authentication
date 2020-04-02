import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ArtPage from '../Art';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import AuthPage from '../Auth';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componenetDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
      },
    );
  }

  componenetWillUnmount() {
    this.listener();
  }

  render() {
  return (
    <div className="container">
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.ART} component={ArtPage} />
          <Route path={ROUTES.BLOG} component={BlogPage} />
          <Route path={ROUTES.CONTACT} component={ContactPage} />
          <Route path={ROUTES.AUTH} component={AuthPage} />
        </div>
      </Router>
    </div>
    )
  }
}


export default withFirebase(App);