
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAb3lXdmu3yhlBhUI63O0eQbnSLP6pK9vQ",
      authDomain: "c-93-7e803.firebaseapp.com",
      databaseURL: "https://c-93-7e803-default-rtdb.firebaseio.com",
      projectId: "c-93-7e803",
      storageBucket: "c-93-7e803.appspot.com",
      messagingSenderId: "890506021103",
      appId: "1:890506021103:web:76c598c9e387bc2dd2b31a"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}

getData();


function logout(){
      window.location = "index.html";
}