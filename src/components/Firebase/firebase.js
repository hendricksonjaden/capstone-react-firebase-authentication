import app from 'firebase/app';

const config = {
  apiKey: process.env.AIzaSyCX060lrDCU1gRKjXlhDvQFbHPuBA8NVd8,
  authDomain: process.env.capstone-final-js.firebaseapp.com,
  databaseURL: process.env."https://capstone-final-js.firebaseio.com",
  projectId: process.env.capstone-final-js,
  storageBucket: process.env.'capstone-final-js.appspot.com',
  messagingSenderId: process.env.681158044622,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;