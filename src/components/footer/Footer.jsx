import React from "react";
import "./footer.css";
import stockImage from "../../images/pexels-fwstudio-33348-132204.jpg";

const Footer = () => {
  return (
    <div className="kabert__footer text-gray-700">
      <img
        className=" h-52 w-full bg-slate-400 text-center"
        src={stockImage}
        alt=""
      />
    </div>
  );
};

export default Footer;
