import React from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

import { useState } from "react";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__grad"></div>
      <img
        className="loginScreen__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      />
      {!signIn ? (
        <>
          <button
            className="loginScreen__button"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Sign In
          </button>

          <div className="loginScreen__body">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address"></input>
                <button
                  className="loginScreen__submit"
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  Get Started {">"}
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <SignupScreen />
      )}
    </div>
  );
}

export default LoginScreen;
