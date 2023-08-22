import React, { useEffect} from "react";
import "./Nav.css";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [showNav, handleShowNav] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${showNav ? "nav__background" : ""}`}>
      <div className="nav__contents">
        <a href="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />
        </a>
        <button className="nac__logoutbtn" onClick={logout}>
          Sign Out
        </button>
        <a href="/">
          <img
            className="nav__avatar"
            src="https://loodibee.com/wp-content/uploads/Netflix-avatar-2.png"
            alt="avatar"
          />
        </a>
      </div>
    </div>
  );
}

export default Nav;
