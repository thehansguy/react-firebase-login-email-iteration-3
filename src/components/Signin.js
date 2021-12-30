import React, { useRef } from "react";
import "./Signin.css";

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

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      getAuth(),
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button>Sign In</button>
        <h6>
          Not yet registered?{" "}
          <span onClick={signUp} className="signin__link">
            Sign Up
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Signin;
