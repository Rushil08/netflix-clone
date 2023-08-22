import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SingupScreen from "./SignupScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SignupScreen from "./SignupScreen";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("no user");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
