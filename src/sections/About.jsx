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
        start: "bottom bottom",
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

  const getHoverCategoryColor = (category) => {
    switch (category) {
      case "Language":
        return "hover:bg-blue-200/80 hover:border-blue-400 hover:text-blue-900";
      case "Frontend":
        return "hover:bg-green-200/80 hover:border-green-400 hover:text-green-900";
      case "Backend":
        return "hover:bg-purple-200/80 hover:border-purple-400 hover:text-purple-900";
      case "Database":
        return "hover:bg-yellow-200/80 hover:border-yellow-400 hover:text-yellow-900";
      case "AI":
        return "hover:bg-orange-200/80 hover:border-orange-400 hover:text-orange-900";
      case "Tools":
        return "hover:bg-lime-200/80 hover:border-lime-400 hover:text-lime-900";
      default:
        return "hover:bg-white/80 hover:border-white hover:text-gray-900";
    }
  };

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
          <div className="relative w-fit max-w-md flex justify-center items-center">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 h-135 w-4/5 card">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Blur Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-white/30 via-white/0 to-transparent backdrop-blur-md mask-[linear-gradient(to_top,black_30%,transparent_100%)]"></div>

              <div className="relative z-20 flex flex-col justify-end items-start h-full p-6 pb-8 text-gray-900 w-full text-left">
                <div className="flex-1"></div>

                <div className="flex flex-col mb-4">
                  <p className="text-2xl font-bold text-white up">
                    Beyrem Oueslati
                  </p>
                  <p className="text-sm font-medium text-white mt-1 up">
                    Developing intelligent systems with modern software
                    technologies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 up">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 hover:-translate-y-1 bg-white/40 backdrop-blur-sm border border-white/50 rounded-md text-xs font-semibold text-gray-900 shadow-sm transition-all duration-300 cursor-default  ${getHoverCategoryColor(
                        skill.category,
                      )}`}
                      title={skill.category}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                <div className="w-full flex justify-end">
                  <a
                    href="#contact"
                    className="px-4 py-1.5 bg-(--orangeDark) text-black text-sm font-medium rounded-full transition-transform duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-(--orangeDarker)"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center items-center px-10 md:px-12 lg:pr-24 space-y-6 text-md font-light leading-relaxed text-gray-300 border-(--orange) borderLine lg:border-l-2 lg:text-lg">
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
              intelligent systems. I work with full-stack applications, APIs,
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
