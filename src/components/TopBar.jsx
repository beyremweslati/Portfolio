import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const sections = ["about", "projects", "experience", "contact"];

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function TopBar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = ["hero", ...sections]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "hero" ? "" : entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".topbar-inner > *", {
        y: -14,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.1,
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar-inner">
        <a className="wordmark" href="#hero" aria-label="Beyrem Oueslati, back to top">
          <span className="wordmark-logo" aria-hidden="true">
            <span className="wordmark-path">/home/oues</span>
            <span className="wordmark-prompt">&gt;</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.id}
              className="nav-link"
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
