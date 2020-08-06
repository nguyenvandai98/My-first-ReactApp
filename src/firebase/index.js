import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDjh7VU-SHTgNbNwMUuE9QNbOXkscu8_A0",
    authDomain: "reactjs-2998.firebaseapp.com",
    databaseURL: "https://reactjs-2998.firebaseio.com",
    projectId: "reactjs-2998",
    storageBucket: "reactjs-2998.appspot.com",
    messagingSenderId: "909626649370",
    appId: "1:909626649370:web:593c7cc8f20332eae0daa3",
    measurementId: "G-DGQLMHCVEG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export{
      storage, firebase as default
  }