import TimelineItem from "../components/TimeLineItem";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const entries = [
  {
    org: "Lanterns Studios",
    role: "Software Engineering Intern",
    context: "Automated Bottleneck Detection & Performance Optimization System",
    date: "Feb 2026 — May 2026",
    points: [
      "Implemented Unreal Engine performance and metrics data collection in C++ (per-frame, per-scene, per-object)",
      "Built the backend processing pipeline with FastAPI",
      "Integrated AI-driven analysis using LangChain and LLMs",
      "Designed PostgreSQL-based data storage",
      "Built an interactive dashboard with React and Material UI",
    ],
    skills: ["C++ (Unreal Engine)", "FastAPI", "LangChain", "PostgreSQL", "React", "Material UI"],
  },
  {
    org: "Proxym Group",
    role: "Software Development Intern",
    context: "ProxIP Manager — Enterprise IP Address Management System",
    date: "Jul 2025",
    points: [
      "Built a full-stack MERN application for IP management",
      "Implemented subnetting and IP allocation",
      "Developed dashboards using Ant Design",
      "Tracked and visualised IP usage statistics",
      "Containerised the application using Docker",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Ant Design"],
  },
  {
    org: "DRÄXLMAIER Group",
    role: "IT Intern",
    context: "IT operations and low-code application development",
    date: "Jul 2024",
    points: [
      "Supported deployment and usage of low-code applications built with Microsoft PowerApps",
      "Assisted in maintaining internal IT systems and user requests",
      "Participated in IT troubleshooting",
    ],
    skills: ["IT Operations", "Microsoft PowerApps"],
  },
  {
    org: "ISSAT Sousse",
    role: "Computer Science Bachelor",
    context: "Higher Institute of Applied Science and Technology of Sousse",
    date: "2023 — 2026",
    points: ["Software Engineering major", "Graduated with High Honors"],
    skills: [],
  },
  {
    org: "Jemmel High School",
    role: "Computer Science Specialisation",
    context: "",
    date: "2019 — 2023",
    points: ["Baccalaureate obtained with High Honors"],
    skills: [],
  },
];

const Experience = () => {
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

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 87%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Experience</h2>
        <p>A record of learning by building, shipping, and asking better questions.</p>
      </div>
      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        <ol>
          {entries.map((entry) => (
            <TimelineItem key={`${entry.org}-${entry.date}`} {...entry} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
