import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
  function checkActiveTab(path){
    if(path === window.location.pathname){
      return true;
    } else {
      return false;
    }
  }

  return (
    <nav>
      <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
        <li className={`${checkActiveTab('/home') ? 'active' : ''}`}>
          <Link to="/home"><span aria-hidden="true">00</span>Home</Link>
        </li>

        <li className={`${checkActiveTab('/destination') ? 'active' : ''}`}>
          <Link to="/destination"><span aria-hidden="true">01</span>Destination</Link>
        </li>

        <li className={`${checkActiveTab('/crew') ? 'active' : ''}`}>
          <Link to="/crew"><span aria-hidden="true">02</span>Crew</Link>
        </li>

        <li className={`${checkActiveTab('/technology') ? 'active' : ''}`}>
          <Link to="/technology"><span aria-hidden="true">03</span>Technology</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
