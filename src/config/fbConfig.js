import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyCCCnrH58SJFTl-Sf_B9orTvA3hT4s9aew",
  authDomain: "react-redux-app-56375.firebaseapp.com",
  databaseURL: "https://react-redux-app-56375.firebaseio.com",
  projectId: "react-redux-app-56375",
  storageBucket: "react-redux-app-56375.appspot.com",
  messagingSenderId: "703032623095"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase