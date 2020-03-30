import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      
      <hr />

      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
