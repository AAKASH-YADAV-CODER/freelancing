import React from "react";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Corporates from "./components/corporates.jsx";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Corporates />
    </div>
  );
}

export default App;
