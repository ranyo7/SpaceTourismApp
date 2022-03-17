import React from "react";
import Navigation from "./navigation.jsx";

function Header(){
  return (
    <div>
      <a className="skip-to-content" href="#main">Skip to main content</a>
      <header className="primary-header flex">

        <div>
          <img src="./assets/shared/logo.svg" alt="space tourism log" className="logo"></img>
        </div>

        <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={handleClick}>
          <span className="sr-only" aria-expanded="false"> Menu </span>
        </button>

        <Navigation />

      </header>
    </div>
  );

  function handleClick() {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    if(nav.getAttribute('data-visible') === "false"){
      nav.setAttribute('data-visible', true);
      navToggle.getAttribute("aria-expanded", true);
    } else {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute("aria-expanded", false);
    }
  }

}

export default Header;
