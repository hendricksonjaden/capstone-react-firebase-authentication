import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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
      authUser: "NOT_LOGGED_IN",
    };
  }

  handleSuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
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

  authorizedPages() {
    return [
      <Route path={ROUTES.AUTH} component={AuthPage} />
    ];
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
          {this.state.authUser === "LOGGED_IN" ? (
                    this.authorizedPages()
                    ) : null}
        </div>
      </Router>
    </div>
    )
  }
}


export default withFirebase(App);