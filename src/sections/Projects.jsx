import ProjectCard from "../components/ProjectCard";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText.js";

const baseURL = (url) => `${import.meta.env.BASE_URL}${url}`;

const project1 = Array.from({ length: 9 }, (_, i) =>
  baseURL(`/projects/project1/${i + 1}.png`),
);
const project2 = Array.from({ length: 7 }, (_, i) =>
  baseURL(`/projects/project2/${i + 1}.png`),
);
const project3 = Array.from({ length: 9 }, (_, i) =>
  baseURL(`/projects/project3/${i + 1}.png`),
);
const project4 = Array.from({ length: 5 }, (_, i) =>
  baseURL(`/projects/project4/${i + 1}.png`),
);

const projectData = [
  {
    title: "Automated Bottleneck Detection & Performance Optimization System",
    subtitle: "AI-powered performance analysis for Unreal Engine",
    description:
      "An end-to-end system that collects Unreal Engine performance data in C++, processes it with FastAPI, analyses it with LangChain and LLMs, stores it in PostgreSQL, and presents findings in a React and Material UI dashboard.",
    images: project1,
    tech: ["C++ / Unreal", "FastAPI", "LangChain", "PostgreSQL", "React"],
  },
  {
    title: "Echrily",
    subtitle: "An e-commerce website for gaming enthusiasts",
    description:
      "An e-commerce platform for video games with a Node.js and Express backend and MongoDB for data management. It supports dynamic game listings, cart state management, and a responsive storefront.",
    images: project2,
    tech: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    title: "Echrily Admin Dashboard",
    subtitle: "Managing game data, orders, and platform analytics",
    description:
      "A MERN admin dashboard for the Echrily platform. It imports games through the RAWG API and manages listings, customer orders, and platform analytics from one interface built with React and Material UI.",
    images: project3,
    tech: ["MERN", "RAWG API", "Material UI", "Analytics"],
  },
  {
    title: "DocVoice",
    subtitle:
      "Medical voice recognition for report transcription with a fine-tuned speech-to-text model",
    description:
      "A medical speech-to-text system built on a fine-tuned Whisper model. A preprocessing pipeline generates medical vocabulary audio with ElevenLabs, and LoRA training improves recognition of clinical terms. WER dropped from 277.19% to 70.18% and CER from 68.89% to 31.11% on roughly 220 samples.",
    images: project4,
    tech: ["Whisper", "LoRA", "Python", "ElevenLabs"],
  },
];

const pad = (value) => String(value).padStart(2, "0");

const Projects = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const cards = gsap.utils.toArray(".projectCard", sectionRef.current);

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
    });

    // Reaveal for mobile 
    mm.add(
      "(max-width: 1199px) and (prefers-reduced-motion: no-preference)",
      () => {
        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });
      },
    );

    // horizontal reveal for desktop
    mm.add(
      "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
      () => {
        const stage = stageRef.current;
        const track = trackRef.current;
        if (!stage || !track) return;

        const splits = [];
        let shownIndex = 0;

        const distance = () =>
          Math.max(0, track.scrollWidth - stage.offsetWidth);

        const setCounter = (index) => {
          if (index === shownIndex || !counterRef.current) return;
          shownIndex = index;
          counterRef.current.textContent = pad(index);
        };

        const setProgress = (progress) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${progress})`;
          }
        };

        const reel = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setProgress(self.progress);
              setCounter(
                Math.min(
                  cards.length,
                  Math.floor(self.progress * cards.length) + 1,
                ),
              );
            },
          },
        });

        const cardTrigger = (card, start, end) => ({
          trigger: card,
          containerAnimation: reel,
          start,
          end,
          scrub: true,
        });

        cards.forEach((card) => {
          const media = card.querySelector(".project-media");
          const copy = card.querySelector(".project-copy");
          const title = card.querySelector("h3");

          if (media) {
            gsap.fromTo(
              media,
              { clipPath: "inset(0% 0% 100% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: cardTrigger(card, "left 80%", "left 50%"),
              },
            );
          }

          if (copy) {
            gsap.from(copy.children, {
              y: 26,
              opacity: 0,
              ease: "none",
              stagger: 0.08,
              scrollTrigger: cardTrigger(card, "left 80%", "left 50%"),
            });
          }

          if (title) {
            let titleTween;
            splits.push(
              SplitText.create(title, {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                onSplit: (self) => {
                  titleTween?.scrollTrigger?.kill();
                  titleTween?.kill();
                  titleTween = gsap.from(self.lines, {
                    yPercent: 115,
                    ease: "none",
                    stagger: 0.12,
                    scrollTrigger: cardTrigger(card, "left 80%", "left 50%"),
                  });
                },
              }),
            );
          }
        });

        setProgress(0);
        setCounter(1);

        const centerCard = (event) => {
          const card = event.target.closest?.(".projectCard");
          const trigger = reel.scrollTrigger;
          if (!card || !trigger) return;

          const targetX = Math.min(
            0,
            -(card.offsetLeft - stage.offsetWidth * 0.16),
          );
          const progress = Math.min(1, Math.max(0, -targetX / distance()));
          window.scrollTo({
            top: trigger.start + progress * (trigger.end - trigger.start),
            behavior: "smooth",
          });
        };
        track.addEventListener("focusin", centerCard);

        return () => {
          track.removeEventListener("focusin", centerCard);
          splits.forEach((split) => split.revert());
        };
      },
    );

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section-shell section-shell--projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <h2 id="projects-title">Selected work</h2>
        <p>Systems, interfaces, and experiments where engineering meets intelligence.</p>
      </div>

      <div className="projects-stage" ref={stageRef}>
        <div className="projects-stage-head" aria-hidden="true">
          <span className="projects-index">
            <span ref={counterRef}>01</span>
            <span className="projects-index-total"> / {pad(projectData.length)}</span>
          </span>
          <span className="projects-hint">Scroll to pan the reel</span>
        </div>

        <div className="projects-viewport">
          <div className="projects-track" ref={trackRef}>
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.title}
                projectNumber={index + 1}
                {...project}
              />
            ))}
          </div>
        </div>

        <div className="projects-progress" aria-hidden="true">
          <span className="projects-progress-fill" ref={progressRef} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
