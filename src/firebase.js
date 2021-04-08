import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx2ZAjngMfKiKdF3UIfLIc2EpCIGN4d04",
  authDomain: "clone-36219.firebaseapp.com",
  projectId: "clone-36219",
  storageBucket: "clone-36219.appspot.com",
  messagingSenderId: "304595875142",
  appId: "1:304595875142:web:825c752df4973c846da147",
  measurementId: "G-CBXFCZMN6P"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };