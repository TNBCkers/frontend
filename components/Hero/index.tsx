import React from "react";
import Navbar from "./Navbar";
import HeroMain from "./HeroMain";

function Hero() {
  return (
    <div className={`hero flex-col justify-center px-[8vw] bg-blue py-6`}>
      <Navbar />
      <HeroMain />
    </div>
  );
}

export default Hero;
