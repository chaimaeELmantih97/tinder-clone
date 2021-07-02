import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzhWLqjh2xtfpa5Uh5UIedxTe5x6iYrHU",
  authDomain: "tinderclo-6e753.firebaseapp.com",
  projectId: "tinderclo-6e753",
  storageBucket: "tinderclo-6e753.appspot.com",
  messagingSenderId: "529483384499",
  appId: "1:529483384499:web:0d2ece10c5d0ffc5a692c6",
  measurementId: "G-WDXFSRJHDN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
