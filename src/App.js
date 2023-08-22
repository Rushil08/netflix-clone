import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
