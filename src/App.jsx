import React, { useRef } from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Service";
import Projects from "./components/Portfolio/project";

function App() {
  // 1. Create a ref to reference the Services component.
  const servicesRef = useRef(null);
  // 2. Create a ref for the Projects component to handle scrolling.
  const projectsRef = useRef(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Renders the Navbar and passes both servicesRef and projectsRef for scrolling */}
      <Navbar servicesRef={servicesRef} projectsRef={projectsRef} />
      
      {/* Renders the Hero section */}
      <Hero />
      
      {/* Renders the Services section, attached to the ref */}
      <div ref={servicesRef}>
        <Services />
      </div>
      
      {/* Renders the Projects section, now attached to its own ref */}
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
