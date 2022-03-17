import React from "react";
import Header from "./Components/header.jsx";
import DATA from "./data";

const Crew = () => {
  return (
    <div className="crew background">
      <Header />

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">02</span>Meet your crew</h1>

        <Image />

        <article className="crew-info flow">
          <CrewMember />
          <Description />
        </article>

        <div className="dot-indicators flex">
          <button className="commander" aria-selected="true" onClick={() => handleTabClick("commander")}>     <span className="sr-only" >The Commander</span>          </button>
          <button className="specialist" aria-selected="false" onClick={() => handleTabClick("specialist")}>  <span className="sr-only">The Mission Specialist</span>  </button>
          <button className="pilot" aria-selected="false" onClick={() => handleTabClick("pilot")}>            <span className="sr-only">The Pilot</span>               </button>
          <button className="engineer" aria-selected="false" onClick={() => handleTabClick("engineer")}>      <span className="sr-only">The Engineer</span>            </button>
        </div>

      </main>

    </div>
  );

  function handleTabClick(input){
    //deactivate tabs
    document.querySelectorAll(".dot-indicators > button").forEach( function(button) {
      button.ariaSelected = false;
    });
    //activate tabs
    document.querySelector("."+input).ariaSelected = true;
    //Update crew information and images
    switch(input){
      case "commander": updateInformation(DATA.crew[0]);
        break;
      case "specialist": updateInformation(DATA.crew[1]);
        break;
      case "pilot": updateInformation(DATA.crew[2]);
        break;
      case "engineer": updateInformation(DATA.crew[3]);
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
    document.querySelector(".title").textContent = input.role;
    document.querySelector(".name").textContent = input.name;
    //Update description
    document.querySelector(".description").textContent = input.bio;
  }
};

export default Crew;

function Image(){
  return (
    <picture>
      <source srcSet="./assets/crew/image-douglas-hurley.webp" type="image/webp"></source>
      <img src="./assets/crew/image-douglas-hurley.png" alt="the commander"></img>
    </picture>
  );
}
function CrewMember(){
  return (
    <header className="flow flow--sm">
      <h2 className="fs-600 uppercase ff-serif text-light title">Commander</h2>
      <p className="fs-700 ff-serif uppercase name">Douglas Hurley</p>
    </header>
  );
}
function Description(){
  return (
    <p className="text-light description">
      Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
      and former NASA astronaut. He launched into space for the third time as
      commander of Crew Dragon Demo-2.
    </p>
  );
}
