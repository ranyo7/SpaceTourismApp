import React from "react";
import Header from "./Components/header.jsx";
import DATA from "./data";


const Destination = () => {
  return (
    <div className="destination background">

      <Header />

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
        <Image />

        <div className="tab-list underline-indicators flex">
          <button className="tabButton moon" aria-selected="true" onClick={() => handleTabClick("moon")}>Moon</button>
          <button className="tabButton mars" aria-selected="false" onClick={() => handleTabClick("mars")}>Mars</button>
          <button className="tabButton europa" aria-selected="false" onClick={() => handleTabClick("europa")}>Europa</button>
          <button className="tabButton titan" aria-selected="false" onClick={() => handleTabClick("titan")}>Titan</button>
        </div>


        <article className="destination-info">
          <Title />
          <Description />
          <Meta />
        </article>

      </main>

    </div>
  );

  function handleTabClick(input){
    //deactivate tabs
    document.querySelectorAll(".tabButton").forEach( function(button) {
      button.ariaSelected = false;
    });
    //activate tabs
    document.querySelector("."+input).ariaSelected = true;
    //Update planet information and images
    switch(input){
      case "moon": updateInformation(DATA.destinations[0]);
        break;
      case "mars": updateInformation(DATA.destinations[1]);
        break;
      case "europa": updateInformation(DATA.destinations[2]);
        break;
      case "titan": updateInformation(DATA.destinations[3]);
        break;
    }

  }

  function updateInformation(input){
    //Update images
    const image = [...document.querySelector("picture").children];
    image[0].setAttribute("srcSet", input.images.webp);
    image[1].setAttribute("src", input.images.png);
    image[1].setAttribute("alt", input.name);
    //Update Title
    document.querySelector(".name").textContent = input.name;
    //Update description
    document.querySelector(".description").textContent = input.description;
    //Update meta
    document.querySelector(".distance").textContent = input.distance;
    document.querySelector(".travelLength").textContent = input.travel;
  }
};

export default Destination;

function Image(){
  return (
    <picture>
      <source srcSet="../assets/destination/image-moon.webp" type="image/webp" />
      <img src="../assets/destination/image-moon.png" alt="the moon" />
    </picture>
  );
}

function Title(){
  return (
    <h2 className="fs-800 ff-serif uppercase name">Moon</h2>
  );
}

function Description(){
  return (
    <p className="description">
      See our planet as you’ve never seen it before. A perfect relaxing trip away to help
      regain perspective and come back refreshed. While you’re there, take in some history
      by visiting the Luna 2 and Apollo 11 landing sites.
    </p>
  );
}

function Meta(){
  return (
    <div className="destination-meta flex ">
      <div>
        <h3 className="text-light fs-200 uppercase">Avg. distance</h3>
        <p className="ff-serif uppercase distance">384,400 km</p>
      </div>

      <div>
        <h3 className="text-light fs-200 uppercase">Est. travel time</h3>
        <p className="ff-serif uppercase travelLength">3 days</p>
      </div>
    </div>
  );
}
