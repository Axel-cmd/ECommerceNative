import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzSbkot5y3u5zPAs6kMXFZVb7vHZeA9U",
  authDomain: "yousucksock.firebaseapp.com",
  projectId: "yousucksock",
  storageBucket: "yousucksock.appspot.com",
  messagingSenderId: "532970004983",
  appId: "1:532970004983:web:80687cf6944310b8fb4ef2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { app, fireDB, auth, storage }