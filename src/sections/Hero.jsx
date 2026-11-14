import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText.js";
import SocialLinks from "../components/SocialLinks";

function Hero() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const title = new SplitText(".hero-title", { type: "chars" });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".hero-kicker", { opacity: 0, y: 14, duration: 0.7 })
        .from(
          title.chars,
          { yPercent: 110, opacity: 0, duration: 1.05, stagger: 0.035 },
          "-=0.35",
        )
        .from(".hero-copy", { opacity: 0, y: 24, duration: 0.8 }, "-=0.6")
        .from(
          ".hero-links .social-link",
          { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 },
          "-=0.55",
        )
        .from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.35");

      return () => title.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <p className="hero-kicker">Software engineer / AI systems</p>
      <h1 className="hero-title" id="hero-title">
        <span>Beyrem</span>
        <span>Oueslati</span>
      </h1>
      <div className="hero-footer">
        <p className="hero-copy">
          I design and build <strong>useful software</strong> at the intersection
          of full-stack engineering, data, and intelligent systems.
        </p>
        <SocialLinks limit={2} className="hero-links" />
      </div>
      <p className="scroll-cue">Scroll to explore</p>
    </section>
  );
}

export default Hero;
