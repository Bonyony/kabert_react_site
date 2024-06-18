import "./App.css";
import React from "react";
import { About, Contact, Hero, Products, Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
