import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyC-D4in71wUDnOBT30iwWX6Yqrmg6j7hPg",
  authDomain: "instagram-project-cc402.firebaseapp.com",
  projectId: "instagram-project-cc402",
  storageBucket: "instagram-project-cc402.appspot.com",
  messagingSenderId: "930865735060",
  appId: "1:930865735060:web:ce6da2c5aee7c13ff81b81",
  measurementId: "G-Q6J2T2W28Q"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
