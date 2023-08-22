import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-clone-6525f.firebaseapp.com",
  projectId: "netflix-clone-6525f",
  storageBucket: "netflix-clone-6525f.appspot.com",
  messagingSenderId: "129923015162",
  appId: "1:129923015162:web:1f2406febf825b0d4e4443",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default db;
export { auth };
