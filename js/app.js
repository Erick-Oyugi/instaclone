
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, browserSessionPersistence, setPersistence } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWgxIE5th6AjvEfv5-LAvguIEuTIy2D9c",
  authDomain: "creditbank-cs.firebaseapp.com",
  databaseURL: "https://creditbank-cs-default-rtdb.firebaseio.com",
  projectId: "creditbank-cs",
  storageBucket: "creditbank-cs.appspot.com",
  messagingSenderId: "375358774159",
  appId: "1:375358774159:web:a83b386c8a4a003e2b49fa",
  measurementId: "G-VYQBYLK11P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
var displayUsername = document.getElementById('username')


document.getElementById('login_button').addEventListener('click', function(e) {
  e.preventDefault();

 var email = document.getElementById('email').value;
 var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
   const user = auth.currentUser;

   if (user!==null){

    const email = user.email
    
   }



 swal({
    title:"Menengai Elite Football Academy",
    text:`Welcome ${email}`,
    icon:"success",
    timer:3000,
    button:"Ok",
  })



   .then(() => {



       window.location = './pages/dashboard/';
})
   
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
     swal({
        title:"Error!",
        text:"Incorrect username/password combination",
        icon:"info",
        button:"Ok",
      })

  });

onAuthStateChanged(auth, (user)=> {
    if(user){
     
      const email = user.email

      displayUsername.innerHTML= `<ion-label>${email}</ion-label>`
    }

    console.log(uid)
  })

  



});