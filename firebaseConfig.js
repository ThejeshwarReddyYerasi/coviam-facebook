import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGI0IWSaxcnnWeyOa8iTS1a2Cu8eoB-eA",
  authDomain: "funecart-b7cbd.firebaseapp.com",
  databaseURL: "https://funecart-b7cbd.firebaseio.com",
  projectId: "funecart-b7cbd",
  storageBucket: "funecart-b7cbd.appspot.com",
  messagingSenderId: "891605544269",
  appId: "1:891605544269:web:7fc7a83a85275320119b04",
  measurementId: "G-7K15G92FHK"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage =firebase.storage();
  const imageStore = storage.ref('/imageStore/');
  const videoStore = storage.ref('/videoStore');

  export {
    storage,
    imageStore,
    videoStore,
  }
  