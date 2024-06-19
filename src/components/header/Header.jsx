import React from "react";
import "./header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href="#about"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href="#products"
          >
            Our Products
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href="#contact"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <div className="kabert__header text-gray-700 font-bold rounded-b-3xl fixed top-0 w-full shadow-md">
      <div className="kabert__links-container flex justify-between items-center p-5 mx-auto">
        <div className="kabert__logo text-2xl ml-3 bg-gradient-to-r from-emerald-700 to-slate-700 text-transparent bg-clip-text">
          {/* Place a logo here that animates to the Kabert Industries name */}
          <h1>Kabert Industries Inc.</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
