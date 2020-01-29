import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBfFemE5-l6iZZS5OLynCWgz1EVl6P3kY0",
    authDomain: "simple-notes-firebase-29fbd.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-29fbd.firebaseio.com",
    projectId: "simple-notes-firebase-29fbd",
    storageBucket: "simple-notes-firebase-29fbd.appspot.com",
    messagingSenderId: "699360577741",
    appId: "1:699360577741:web:c3232eb7a5e2a7074c8184",
    measurementId: "G-11Q9J0RZYC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;