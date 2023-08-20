import React, { useEffect } from "react";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [showNav, handleShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

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
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
          />
        </a>
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
