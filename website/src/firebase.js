import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
});

export const auth = firebase.auth();

export default app;
