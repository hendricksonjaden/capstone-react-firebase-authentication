import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ArtPage from '../Art';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.ART} component={ArtPage} />
      <Route path={ROUTES.BLOG} component={BlogPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
