import React from "react";
import {Link} from "react-router-dom";
import Header from "./Components/header.jsx";

const Home = () => {
  return (
    <div className="home background">

      <Header />

      <main id="main" className="grid-container">
        <div>
          <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
        </div>

        <div>
          <Link to="/destination" className="large-button uppercase">Explore</Link>
        </div>
      </main>

    </div>
  );
};

export default Home;
