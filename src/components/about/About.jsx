import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="kabert__about flex m-8 bg-stone-100" id="about">
      <div className="kabert__about-blurb1">
        <h1 className="text-5xl">Quality and Experience</h1>
        <p>
          Since 1960, Kabert Industries Inc. has been furnishing the aluminum
          industry with quality casting supplies. We continually strives to
          provide its customers with exceptional service. Our experienced sales
          staff has been helping aluminum makers solve casting problems for over
          60 years.
        </p>
      </div>
      <div className="kabert__about-image">
        <img src="" alt="" />
      </div>
      <div className="kabert__about-blurb2">
        <h1 className="text-5xl">What we do</h1>
        <p>
          High-twist fiberglass cloth is woven, cut and sewn at our plant
          specifically for aluminum distribution and filtration. Other products
          available include gaskets, vacuum formed shapes, and ceramic foam
          filters - all trusted by the aluminum industry for more than half a
          century.
        </p>
      </div>
    </div>
  );
};

export default About;
