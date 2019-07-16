import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFvXny800izNXkupi43m0ccm43Mys3dmU",
  authDomain: "crown-cloth-db.firebaseapp.com",
  databaseURL: "https://crown-cloth-db.firebaseio.com",
  projectId: "crown-cloth-db",
  storageBucket: "",
  messagingSenderId: "627231639870",
  appId: "1:627231639870:web:d0b76d9ab022a731"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
