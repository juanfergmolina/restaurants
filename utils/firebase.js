import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA1wyEOgur1z1bNqOuJMbIyDv76Goc2jA4",
    authDomain: "restaurants-48bd5.firebaseapp.com",
    projectId: "restaurants-48bd5",
    storageBucket: "restaurants-48bd5.appspot.com",
    messagingSenderId: "525547807989",
    appId: "1:525547807989:web:6154faf8c90953cf3c11bc"
  };
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);