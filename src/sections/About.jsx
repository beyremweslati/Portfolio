import profilePic from "../assets/profile2.jpg";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript", "C++", "Java"] },
  { label: "Frontend", items: ["React", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "FastAPI"] },
  { label: "AI", items: ["LangChain", "PyTorch"] },
  { label: "Data", items: ["SQL", "MongoDB"] },
  { label: "Tools", items: ["Git", "Docker", "Nginx", "Linux"] },
];

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".section-heading > *", {
        opacity: 0,
        y: 26,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".about-card", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".about-copy > p", {
        opacity: 0,
        y: 22,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-copy",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills-group", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-list",
          start: "top 88%",
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-shell" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title">About</h2>
        <p>Curious by default. Most useful when turning a messy problem into a clear system.</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <img src={profilePic} alt="Beyrem Oueslati" />
          <div className="about-card-caption">
            <span>Beyrem Oueslati</span>
            <span>Software engineer</span>
          </div>
        </div>
        <div className="about-copy">
          <p>
            My journey started with robotics and problem-solving. That curiosity
            grew into a focus on <em>software engineering</em> and{" "}
            <em>artificial intelligence</em>.
          </p>
          <p>
            Today I build full-stack applications, APIs, databases, and
            intelligent systems for real-world use cases.
          </p>
          <p>
            I am constantly learning, experimenting, and looking for the next
            difficult problem worth solving.
          </p>
          <dl className="skills-list">
            {skillGroups.map((group) => (
              <div className="skills-group" key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
