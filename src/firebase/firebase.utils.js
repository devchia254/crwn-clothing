import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOHCNPU7GWernJtLC3jxXeCsDUn5AZgd0",
  authDomain: "crwn-clothing-db-5d834.firebaseapp.com",
  projectId: "crwn-clothing-db-5d834",
  storageBucket: "crwn-clothing-db-5d834.appspot.com",
  messagingSenderId: "1075653878677",
  appId: "1:1075653878677:web:76c2ce5a3f3147a483cc9c",
  measurementId: "G-GSNL4YBJDC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // If there is no snapshot (data) existing, create a new snapshot
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }

  return userRef;
  // console.log("snapshot: ", snapShot);
  // console.log(userAuth);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
