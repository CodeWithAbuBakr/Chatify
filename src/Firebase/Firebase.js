import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAG7z0iCbpPlOa3IJAfMZDIQi315ORY_rY",
  authDomain: "fir-authentication-64360.firebaseapp.com",
  projectId: "fir-authentication-64360",
  storageBucket: "fir-authentication-64360.firebasestorage.app",
  messagingSenderId: "970087602452",
  appId: "1:970087602452:web:0a3ec03ff443b669500a01",
  measurementId: "G-JM26C96XDE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
