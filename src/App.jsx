import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen mb-50">
        <TopBar />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;
