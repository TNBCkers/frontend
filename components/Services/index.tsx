import React from "react";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <div className="px-[8vw] bg-bgGray flex flex-col justify-center items-center py-16 text-center">
      <h1 className="font-bold text-gray text-4xl">Most Popular Services</h1>
      <p className="text-lightGray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum{" "}
        <br />
        libero imperdiet, consectetur leo a, efficitur diam.
      </p>
      <ServicesGrid />
    </div>
  );
};

export default Services;
