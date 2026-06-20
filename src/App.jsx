import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen mb-50">
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
