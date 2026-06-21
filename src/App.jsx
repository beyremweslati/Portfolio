import { useState } from "react";
import TopBar from "./components/TopBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen mb-30">
        <TopBar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
