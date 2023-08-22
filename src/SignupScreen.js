import React from "react";
import "./SignupScreen.css";
import { auth } from "./firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      alert(error.message);
    });
  }

  function signIn(e) {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert(error.message);
    });
    navigate("/home");
  }

  return (
    <div className="signupScreen">
      <form action="" className="signupScreen__input">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          New to Netflix?{" "}
          <a href="#" onClick={register}>
            Sign up now
          </a>
          .
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
