import React, { useRef } from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Service";
import Projects from "./components/Portfolio/project";
import Testimonials from "./components/Testimonial/testimonial";

function App() {
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Pass all refs to the Navbar for scrolling */}
      <Navbar servicesRef={servicesRef} projectsRef={projectsRef} testimonialsRef={testimonialsRef} />
      
      <Hero />
      
      <div ref={servicesRef}>
        <Services />
      </div>
      
      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
