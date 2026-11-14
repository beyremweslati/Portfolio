import { useEffect } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  /* Repeat clicks on the same anchor still scroll to the section. */
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link || link.classList.contains("skip-link")) return;

      const id = link.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView();
      window.history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <TopBar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
