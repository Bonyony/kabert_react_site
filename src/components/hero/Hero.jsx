import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="kabert__hero text-gray-700 pt-24" id="home">
      <div className="placeholder my-4 h-96 w-auto bg-slate-400 text-center">
        Placeholder for Image <br />
        The text below will be overlayed onto the image(s)
      </div>
      <h1 className="text-7xl font-bold py-2 m-5 mt-16 bg-gradient-to-r from-emerald-500 to-slate-700 text-transparent bg-clip-text inline-block">
        Serving aluminum makers since 1960
      </h1>
      <p className="text-right text-5xl m-5 pb-2 font-bold bg-gradient-to-r from-slate-700 to-emerald-500 text-transparent bg-clip-text">
        Dedicated to excellence and efficiency.
      </p>
    </div>
  );
};

export default Hero;
