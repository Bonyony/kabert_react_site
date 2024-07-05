import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div
      className="kabert__contact pt-12  bg-stone-100 text-gray-700"
      id="contact"
    >
      <div className="kabert__contact-blurb p-6 rounded-t-3xl  shadow-emerald-900">
        <div className="flex flex-row justify-center">
          <h1 className="text-6xl text-center font-bold py-4 m-5  bg-gradient-to-r from-emerald-500 to-slate-700 text-transparent bg-clip-text">
            Contact Us:
          </h1>
          <div className="flex flex-col py-5">
            <h2 className="text-4xl font-bold text-center mt-2">
              karl@kabert.com
            </h2>
            <h2 className="text-4xl font-bold text-center mb-2">
              (630) 833-2115
            </h2>
          </div>
        </div>
        <p className="text-center text-lg font-bold mx-64">
          If you are in need of high-quality products for manufacturing
          aluminum, look no further than Kabert Industries. With 60 years in the
          industry, you will not find a more reliable source for your aluminum
          needs.
        </p>
      </div>
    </div>
  );
};

export default Contact;
