import firebase from "firebase";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD20p4-tjamM_krkP65GDQ1RmHSG4m7J7c",
    authDomain: "project-60-e6384.firebaseapp.com",
    databaseURL: "https://project-60-e6384-default-rtdb.firebaseio.com",
    projectId: "project-60-e6384",
    storageBucket: "project-60-e6384.appspot.com",
    messagingSenderId: "598356705369",
    appId: "1:598356705369:web:0b65865febb677533fb148"
};

//initialize your database
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();

  //https://console.firebase.google.com/u/2/project/project-60-e6384/database/project-60-e6384-default-rtdb/data---- firebase database link/