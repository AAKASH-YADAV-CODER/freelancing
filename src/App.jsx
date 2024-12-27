import React from "react";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Corporates from "./components/corporates.jsx";
import AssociativeCard from "./components/associativeCard.jsx";
import EventStats from "./components/EventStats.jsx";
import IndustriesCover from "./components/IndustriesCover.jsx";
import EducationCover from "./components/EducationCover.jsx";
import EventHighlight from "./components/EventHighlight.jsx";
import TentaiveTimeline from "./components/TentaiveTimeline.jsx";
import ParticipatingCompany from "./components/ParticipatingCompany.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <EventStats />
      <IndustriesCover />
      <EducationCover />
      <EventHighlight />
      <TentaiveTimeline />
      <ParticipatingCompany />
      <FAQ />
      <Footer />

      {/* <AssociativeCard /> */}
      {/* <Corporates /> */}
    </div>
  );
}

export default App;
// npm  install --legacy-peer-deps three @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component
