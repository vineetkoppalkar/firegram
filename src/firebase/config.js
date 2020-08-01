import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoYTs9nI5na0gLfaIwmbi3bLUVKAdLAzM",
  authDomain: "firegram-bea2f.firebaseapp.com",
  databaseURL: "https://firegram-bea2f.firebaseio.com",
  projectId: "firegram-bea2f",
  storageBucket: "firegram-bea2f.appspot.com",
  messagingSenderId: "701680903565",
  appId: "1:701680903565:web:a3ace84b9022fe68f689c4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
