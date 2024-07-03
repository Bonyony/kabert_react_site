import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-stone-100 to-white" id="about">
      <div className="kabert__about text-gray-700 flex-column my-8 mx-4  p-6 rounded-3xl shadow-lg shadow-emerald-900">
        <div className="kabert__about-blurb1 flex">
          <h1 className="text-5xl font-bold text-emerald-800 m-2 basis-1/3">
            Quality and Experience
          </h1>
          <p className="text-xl text-slate-600 basis-2/3">
            Since 1960, Kabert Industries Inc. has been furnishing the aluminum
            industry with quality casting supplies. We continually strives to
            provide its customers with exceptional service. Our experienced
            sales staff has been helping aluminum makers solve casting problems
            for over 60 years.
          </p>
        </div>
        <div className="kabert__about-image">
          <div className="placeholder my-4 h-44 bg-slate-400 text-center rounded-lg">
            Placeholder for Image
          </div>
          <img src="" alt="" />
        </div>
        <div className="kabert__about-blurb2 flex">
          <h1 className="text-5xl font-bold text-emerald-800 m-2 basis-1/3">
            What We Do
          </h1>
          <p className="text-xl text-slate-600 basis-2/3">
            High-twist fiberglass cloth is woven, cut and sewn at our plant
            specifically for aluminum distribution and filtration. Other
            products available include gaskets, vacuum formed shapes, and
            ceramic foam filters - all trusted by the aluminum industry for more
            than half a century.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
