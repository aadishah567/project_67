import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
  apiKey: "AIzaSyD-FqwseuHaqd4aXvj6SSgNUP85RphmKOM",
  authDomain: "teamvotingapp-f3eff.firebaseapp.com",
  databaseURL: "https://teamvotingapp-f3eff-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-f3eff",
  storageBucket: "teamvotingapp-f3eff.appspot.com",
  messagingSenderId: "246733412990",
  appId: "1:246733412990:web:f28f28e2913e96a58d562f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase.database();