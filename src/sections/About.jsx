import profilePic from "../assets/profile2.jpg";

function About() {
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
    { name: "SQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
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
      default:
        return "hover:bg-white/80 hover:border-white hover:text-gray-900";
    }
  };

  return (
    <div className="flex-1 flex items-center flex-col min-h-screen">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-(--orange)">About Me</h2>
      </div>
      <div className="flex-1 flex w-full flex-row items-center justify-between p-2">
        <div className="flex flex-1 justify-end relative">
          <div className="relative w-3/4 max-w-md flex justify-center items-center">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 h-135 w-4/5">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Bottom Frosted Glass Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-white/30 via-white/0 to-transparent backdrop-blur-md mask-[linear-gradient(to_top,black_30%,transparent_100%)]"></div>

              <div className="relative z-20 flex flex-col justify-end items-start h-full p-6 pb-8 text-gray-900 w-full text-left">
                <div className="flex-1"></div>

                <div className="flex flex-col mb-4">
                  <p className="text-2xl font-bold text-white">
                    Beyrem Oueslati
                  </p>
                  <p className="text-sm font-medium text-white mt-1">
                    Developing intelligent systems with modern software
                    technologies.
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 hover:-translate-y-1 bg-white/40 backdrop-blur-sm border border-white/50 rounded-md text-xs font-semibold text-gray-900 shadow-sm transition-all duration-300 cursor-default ${getHoverCategoryColor(
                        skill.category,
                      )}`}
                      title={skill.category}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                <div className="w-full flex justify-end">
                  {/* subtle brightness effect when hovered */}
                  <a
                    href="#contact"
                    className="px-4 py-1.5 bg-(--orange) text-white text-sm font-semibold rounded-full transition-transform duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg hover:brightness-110"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-5 md:px-12 lg:pr-24 space-y-6 text-lg font-light leading-relaxed text-gray-300 border-l-2 border-(--orange) ">
          <p>
            My journey in the field of technology began with a passion for
            robotics and problem-solving. Over the years, this curiosity has
            developed into a broader interest in{" "}
            <span className="font-medium text-(--orange)">
              software engineering
            </span>{" "}
            and{" "}
            <span className="font-medium text-(--orange)">
              artificial intelligence.
            </span>
          </p>
          <br />
          <p>
            Today, I'm a Computer Science student focused on building
            intelligent systems. I work with full-stack applications, APIs,
            databases, and intelligent systems, creating software for real-world
            use cases and integrating modern AI concepts.
          </p>
          <br />
          <p className="italic">
            I am constantly learning, experimenting with new technologies, and
            looking for opportunities to grow and improve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
