import profilePic from "../assets/profile2.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText.js";

function About() {
  useGSAP(() => {
    const paraSplit = new SplitText(".aboutText", { type: "lines" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".aboutsub",
          start: "bottom bottom",
          pin: false,
          toggleActions: "play none none reverse",
        },
      })
      .from(".aboutsub", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
      });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card",
        start: "top bottom",
        pin: false,
        toggleActions: "play none none reverse",
      },
    });
    t1.from(paraSplit.lines, {
      yPercent: 200,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.08,
      opacity: 0,
    })
      .from(
        ".card",
        {
          opacity: 0,
          y: 80,
          duration: 0.8,
        },
        "<",
      )
      .from(
        ".up",
        {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.1,
        },
        ">0.2",
      )
      .from(".borderLine", {
        borderColor: "transparent",
        duration: 0.5,
      });
  }, []);

  const skills = [
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Langchain", category: "AI" },
    { name: "Pytorch", category: "AI" },
    { name: "SQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Nginx", category: "Tools" },
    { name: "Linux", category: "Tools" },
  ];

  return (
    <div
      className="flex-1 flex items-center flex-col min-h-screen mb-10"
      id="about"
    >
      <div className="w-full flex flex-col items-center pb-10 aboutsub">
        <h2 className="text-(--orange)">About Me</h2>
      </div>
      <div className="flex-1 flex w-full flex-col items-center justify-between gap-5 lg:flex-row lg:gap-0 2xl:p-30">
        <div className="flex flex-1 relative justify-center lg:justify-end">
          <div className="w-full max-w-sm px-6 lg:px-0">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl card">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={profilePic}
                  alt="Beyrem Oueslati"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[0.2em] text-(--orange)">
                  Software Engineer
                </p>
              </div>

              <div className="p-5 text-left">
                <div className="flex items-start justify-between gap-4 up">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-white">
                      Beyrem Oueslati
                    </p>
                    <p className="mt-1 text-sm text-white/55">
                      Full-stack development & AI systems
                    </p>
                  </div>
                </div>

                <div className="mt-6 up">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                      Skills
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-md border border-white/15 bg-black/15 px-2.5 py-1 text-xs font-medium text-white/70 transition-colors duration-300 hover:border-(--orange) hover:text-(--orange)"
                        title={skill.category}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-(--orange) px-4 py-2 text-sm font-medium text-(--orange) transition-colors duration-300 hover:bg-(--orange) hover:text-black"
                >
                  Let&apos;s work together
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center items-center px-10 md:px-12 lg:pr-24 space-y-6 text-md font-light leading-relaxed text-gray-300 borderLine lg:text-lg">
          <div>
            <p className="aboutText">
              My journey in the field of technology began with a passion for
              robotics and problem-solving. Over the years, this curiosity has
              developed into a broader interest in{" "}
              <span className="font-medium text-(--orange)">
                Software Engineering
              </span>{" "}
              and{" "}
              <span className="font-medium text-(--orange)">
                Artificial Intelligence.
              </span>
            </p>
            <br />
            <p className="aboutText">
              Today, I'm a Computer Science student focused on building
              intelligent systems. I work on full-stack applications, APIs,
              databases, and intelligent systems, creating software for
              real-world use cases and integrating modern AI concepts.
            </p>
            <br />
            <p className="aboutText text-start" id="lastText">
              I am constantly learning, experimenting with new technologies, and
              looking for opportunities to grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
