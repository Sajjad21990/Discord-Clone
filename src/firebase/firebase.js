import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSn24yhKG-TWKfrFVGOchrzV85Rl7kvUM",
  authDomain: "discord-clone-2199.firebaseapp.com",
  databaseURL: "https://discord-clone-2199.firebaseio.com",
  projectId: "discord-clone-2199",
  storageBucket: "discord-clone-2199.appspot.com",
  messagingSenderId: "499627628233",
  appId: "1:499627628233:web:54460d4e27c016fbac5f18",
  measurementId: "G-7E0MS0HYZ0",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
