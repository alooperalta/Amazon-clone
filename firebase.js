import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBSNDPZSb1FeyCS51sDqiZtAidQV_X-kfE",
    authDomain: "clone-ed77e.firebaseapp.com",
    projectId: "clone-ed77e",
    storageBucket: "clone-ed77e.appspot.com",
    messagingSenderId: "657386891749",
    appId: "1:657386891749:web:ec3cc02793ae71abf1670c"
  };

  const app = !firebase.apps.length 
              ? firebase.initializeApp(firebaseConfig)
              : firebase.app();

  const db = app.firestore();

  export default db;