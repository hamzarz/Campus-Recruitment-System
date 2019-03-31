import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyAqlBcsZd0DjovYsrmJj08EqF8ITiyMXJc",
    authDomain: "campus-recruitment-syste-767f3.firebaseapp.com",
    databaseURL: "https://campus-recruitment-syste-767f3.firebaseio.com",
    projectId: "campus-recruitment-syste-767f3",
    storageBucket: "campus-recruitment-syste-767f3.appspot.com",
    messagingSenderId: "257641356219"
  };
  const fire = firebase.initializeApp(config);
  
  export default fire