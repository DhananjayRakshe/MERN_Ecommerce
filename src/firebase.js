import * as firebase from "firebase";

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDAFU0uj4fFBZNJ19Tey4uL6TEffcODPgg",
  authDomain: "ecommerce-68f11.firebaseapp.com",
  projectId: "ecommerce-68f11",
  storageBucket: "ecommerce-68f11.appspot.com",
  messagingSenderId: "124045819162",
  appId: "1:124045819162:web:8de018d95ec5b257ae00a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
