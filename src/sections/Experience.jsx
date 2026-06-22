import TimelineItem from "../components/TimeLineItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Experience = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".experienceSub",
        start: "bottom bottom",
        pin: false,
        toggleActions: "play none none reverse",
      },
    });
    t1.from(".experienceSub", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
    }).from(".experienceText", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
    });

    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: "#experience",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      },
    );
  });

  return (
    <div
      className="flex-1 flex items-center flex-col min-h-screen mb-35"
      id="experience"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-(--orange) experienceSub">Experience</h2>
        <p className="text-gray-300 text-2xl text-center experienceText">
          My journey in the tech industry.
        </p>
      </div>
      <div className="w-full flex justify-center pt-10">
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/40 -translate-x-1/2 timeline-line" />
          <TimelineItem
            title="Lanterns Studios — Software Engineering Intern"
            subtitle="Automated Bottleneck Detection & Performance Optimization System"
            date="Feb 2026 — May 2026"
            side="left"
            points={[
              "Implemented Unreal Engine performance and metrics data collection in C++ (Per-Frame, Per-Scene, Per-Object)",
              "Built backend processing pipeline with FastAPI",
              "Integrated AI-driven analysis using LangChain and LLMs",
              "Designed PostgreSQL-based data storage",
              "Built interactive dashboard using ReactJS and Material UI",
            ]}
            skills={[
              "C++ (Unreal Engine Modules)",
              "FastAPI",
              "Langchain",
              "PostgreSQL",
              "ReactJS",
              "Material UI",
            ]}
          />
          <TimelineItem
            title="Proxym Group — Software Development Intern"
            subtitle="ProxIP Manager — Enterprise IP Address Management System"
            date="Jul 2025"
            side="right"
            points={[
              "Built full-stack MERN application for IP management",
              "Implemented subnetting and IP allocation system",
              "Developed dashboards using Ant Design",
              "Tracked and visualized IP usage statistics",
              "Containerized application using Docker",
            ]}
            skills={[
              "ReactJS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Docker",
              "Ant Design",
            ]}
          />
          <TimelineItem
            title="DRÄXLMAIER Group — IT Intern"
            subtitle="IT Operations & low-code application development Internship"
            date="Jul 2024"
            side="left"
            points={[
              "Supported deployment and usage of low-code applications using Microsoft PowerApps",
              "Assisted in maintaining and supporting internal IT systems and user requests",
              "Participated in IT troubleshooting tasks",
            ]}
            skills={["IT Operations", "Microsoft PowerApps"]}
          />

          <TimelineItem
            title="ISSAT Sousse — Computer Science Bachelor"
            subtitle="Higher Institute of Applied Science and Technology of Sousse"
            date="2023 — 2026"
            side="right"
            points={[
              "Software Engineering Major",
              "Graduated with High Honors",
            ]}
          />

          <TimelineItem
            title="Jemmel High School"
            subtitle=""
            date="2019 — 2023"
            side="left"
            points={[
              "Computer Science Specialization",
              "Baccalaureate Obtained with High Honors",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
