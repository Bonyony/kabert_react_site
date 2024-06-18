import React from "react";
import "./App.css";

import { About, Contact, Hero, Products, Header, Footer } from "./components";

const App = () => {
  return (
    <div className="App text-gray-700">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
