import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCL2UGt6tvVUqkCLfUoe8AtFv-mYMd5qA",
  authDomain: "orpat-react.firebaseapp.com",
  projectId: "orpat-react",
  storageBucket: "orpat-react.appspot.com",
  messagingSenderId: "705413986011",
  appId: "1:705413986011:web:6ac330e8ca6a05b446fefe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
