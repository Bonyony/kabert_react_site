import React from "react";
import "./header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="hover:text-gray-900 border-black hover:border-b-4"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 border-black hover:border-b-4"
            href="#about"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 border-black hover:border-b-4"
            href="#products"
          >
            Our Products
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-900 border-black hover:border-b-4"
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
    <div className="kabert__header font-bold rounded-b-3xl">
      <div className="kabert__links-container flex justify-between items-center p-5 mx-auto">
        <div className="kabert__logo text-2xl">
          {/* Place a logo here that animates to the Kabert Industries name */}
          <h1>Kabert Industries Inc.</h1>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
