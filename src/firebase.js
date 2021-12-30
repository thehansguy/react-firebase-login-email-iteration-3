import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWzueL_uG_xXg-EXrpUguf_XjWlnPlEc",
  authDomain: "auth-development-f981c.firebaseapp.com",
  projectId: "auth-development-f981c",
  storageBucket: "auth-development-f981c.appspot.com",
  messagingSenderId: "152702508072",
  appId: "1:152702508072:web:4a7055001a777727a8291d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const createUserStoffs = createUserWithEmailAndPassword();

export { auth, createUserStoffs };
