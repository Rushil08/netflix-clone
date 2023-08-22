import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  redirect,
} from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        console.log(user);
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   function checkUser() {
  //     if (user) {
  //       return redirect("/home");
  //     } else {
  //       return redirect("/");
  //     }
  //   }
  //   checkUser();
  // }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />}></Route>
        </Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/home" element={<HomeScreen />}></Route>
          </Routes>
        )}

        {/* <Route path="/" element={<LoginScreen />}></Route>
          <Route path="/home" element={<HomeScreen />}></Route> */}
      </Router>
    </div>
  );
}

export default App;
