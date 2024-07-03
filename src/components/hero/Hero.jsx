import React from "react";
import "./hero.css";
import image from "../../images/PoolView.jpeg";
import kabert1 from "../../images/IMG_4228.jpg";
import kabert2 from "../../images/IMG_4460.jpg";

const Hero = () => {
  return (
    <div className="kabert__hero bg-stone-100 text-gray-700 pt-24" id="home">
      <div className=" h-96 bg-fixed bg-left bg-parallax bg-cover">
        <h1 className="text-7xl font-bold py-2 m-5 mt-16 bg-gradient-to-r from-emerald-500 to-slate-200 text-transparent bg-clip-text inline-block">
          Serving aluminum makers since 1960
        </h1>
        <p className="text-right text-5xl m-5 pb-2 font-bold bg-gradient-to-r from-slate-200 to-emerald-500 text-transparent bg-clip-text">
          Dedicated to excellence and efficiency.
        </p>
      </div>
      {/* <div className="placeholder my-4 h-96 w-auto bg-slate-400 text-center">
        Placeholder for Image <br />
        The text below will be overlayed onto the image(s)
      </div> */}
      {/* <img src={image} alt="nothing here" />
      <img src={kabert1} alt="nothing here" />
      <img src={kabert2} alt="nothing here" /> */}
    </div>
  );
};

export default Hero;
