import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroMain = () => {
  return (
    <div className="mt-12 flex items-center justify-center md:justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl font-bold text-center md:text-5xl">
            Find the freelancers you <br />
            need for any business.
          </h1>
          <p className={`text-xl hidden text-center md:inline-block`}>
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </p>
        </div>
        <div className="flex flex-col justify-center text-sm mt-5 md:flex-row md:items-center md:text-lg">
          <input
            type="text"
            className="outline-none rounded-lg px-5 py-2"
            placeholder="Search for services"
          />
          <button className="bg-black rounded-lg text-white px-5 flex items-center justify-center py-2 md:ml-[-25px]">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/assets/images/hero-img.svg"
          height={620}
          width={420}
          alt={"Hero Image"}
        />
      </div>
    </div>
  );
};

export default HeroMain;
