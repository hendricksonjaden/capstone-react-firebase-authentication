import React from 'react';
import { withFirebase } from '../Firebase';
const SignInButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignIn}>
    Sign Out
  </button>
);
export default withFirebase(SignInButton);