import React from "react";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Corporates from "./components/corporates.jsx";
import AssociativeCard from "./components/associativeCard.jsx";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <AssociativeCard />
      <Corporates />
    </div>
  );
}

export default App;
