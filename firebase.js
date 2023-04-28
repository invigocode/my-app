import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGBKARCldD9x2X7GVUZIQ12DaWIiYd5C0",
  authDomain: "testproject-f65da.firebaseapp.com",
  projectId: "testproject-f65da",
  storageBucket: "testproject-f65da.appspot.com",
  messagingSenderId: "720773594544",
  appId: "1:720773594544:web:fe6e53ca8f435a5963aa75",
};

const app = initializeApp(firebaseConfig);

// app = firebase.app();

const auth = getAuth(app);

export { auth };
