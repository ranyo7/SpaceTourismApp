import React from "react";
import Header from "./Components/header.jsx";
import DATA from "./data";

const Technology = () => {
  return (
    <div className="technology background">

      <Header />

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">03</span>Space Launch 101</h1>

        <Image />

        <div className="number-indicators flex">
          <button id="launch" aria-selected="true" onClick={() => handleTabClick("launch")}>1</button>
          <button id="spaceport" aria-selected="false" onClick={() => handleTabClick("spaceport")}>2</button>
          <button id="capsule" aria-selected="false" onClick={() => handleTabClick("capsule")}>3</button>
        </div>

        <article className="technology-info">
          <header className="flow flow--sm">
            <h2 className="fs-400 uppercase ff-serif text-light">The terminology...</h2>
            <Terminology />
          </header>

          <Description />
        </article>

      </main>

    </div>
  );

  function handleTabClick(input){
    //deactivate tabs
    document.querySelectorAll(".number-indicators > button").forEach( function(button) {
      button.ariaSelected = false;
    });
    //activate tabs
    document.querySelector("#"+input).ariaSelected = true;
    //Update crew information and images
    switch(input){
      case "launch": updateInformation(DATA.technology[0]);
        break;
      case "spaceport": updateInformation(DATA.technology[1]);
        break;
      case "capsule": updateInformation(DATA.technology[2]);
        break;
    }

  }

  function updateInformation(input){
    //Update images
    const image = [...document.querySelector("picture").children];
    image[0].setAttribute("srcSet", input.images.portrait);
    image[1].setAttribute("src", input.images.landscape);
    image[1].setAttribute("alt", input.name);
    //Update Title
    document.querySelector(".name").textContent = input.name;
    //Update description
    document.querySelector(".description").textContent = input.description;
  }
};

export default Technology;

function Image(){
  return (
    <picture>
      <source media="(min-width: 45em)" srcSet="./assets/technology/image-launch-vehicle-portrait.jpg" type="image/jpg" />
      <img className="image" src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="Rocket Launch" />
    </picture>
  );
}

function Terminology(){
  return (
    <p className="fs-700 ff-serif uppercase name">Launch Vehicle</p>
  );
}

function Description(){
  return (
    <p className="description">
      A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
      it's quite an awe-inspiring sight on the launch pad!
    </p>
  );
}
