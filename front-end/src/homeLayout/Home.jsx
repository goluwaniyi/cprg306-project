import React from "react";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-4 lg:px-12 max-w-[1240px] mx-auto">
        <About />
      </div>
    </div>
  );
};

export default Home;
