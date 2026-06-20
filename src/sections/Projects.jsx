import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const project1 = [
    "/projects/project1/1.png",
    "/projects/project1/2.png",
    "/projects/project1/3.png",
    "/projects/project1/4.png",
    "/projects/project1/5.png",
    "/projects/project1/6.png",
    "/projects/project1/7.png",
    "/projects/project1/8.png",
    "/projects/project1/9.png",
  ];

  const project2 = [
    "/projects/project2/1.png",
    "/projects/project2/2.png",
    "/projects/project2/3.png",
    "/projects/project2/4.png",
    "/projects/project2/5.png",
    "/projects/project2/6.png",
    "/projects/project2/7.png",
  ];
  const project3 = [
    "/projects/project3/1.png",
    "/projects/project3/2.png",
    "/projects/project3/3.png",
    "/projects/project3/4.png",
    "/projects/project3/5.png",
    "/projects/project3/6.png",
    "/projects/project3/7.png",
    "/projects/project3/8.png",
    "/projects/project3/9.png",
  ];
  const project4 = [
    "/projects/project4/1.png",
    "/projects/project4/2.png",
    "/projects/project4/3.png",
    "/projects/project4/4.png",
    "/projects/project4/5.png",
  ];
  return (
    <div
      className="flex-1 flex items-center flex-col min-h-screen mb-20"
      id="projects"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-(--orange)">Projects</h2>
        <p className="text-gray-300 text-2xl">
          Combining Software Engineering, Artificial Intelligence, and
          continuous learning.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 pl-15 pr-15 pt-4 items-center">
        <ProjectCard
          title="Automated Bottleneck Detection & Performance Optimization System"
          subtitle="AI-Powered Performance Analysis and Optimization Assistant for Unreal Engine"
          description="An end-to-end solution combining Unreal Engine data collection using C++, backend processing with FastAPI (Python), AI-driven analysis powered by LangChain and LLMs, PostgreSQL-based data management, and an interactive dashboard built with ReactJS and Material UI to help developers identify performance bottlenecks and optimize their scenes more efficiently."
          imageList={project1}
        />
        <ProjectCard
          title="Echrily"
          subtitle="An e-commerce website for gaming enthusiasts"
          description="An e-commerce web platform for video games built with a Node.js/Express backend and MongoDB for data management, paired with a vanilla JavaScript frontend for rendering and user interactions. 
          It supports dynamic game listing, cart state management, and a responsive interface optimized for different screen sizes."
          imageList={project2}
        />
        <ProjectCard
          title="Echrily Admin Dashboard"
          subtitle="Admin dashboard for managing game data, orders, and platform analytics"
          description="An admin dashboard built with MERN stack, providing centralized management of the Echrily platform. It integrates the RAWG API to search and import games into the system, and enables full management of game listings and customer orders through a structured interface built with React and Material UI. 
          The dashboard integrates Nivo charts to visualize sales trends and platform activity, along with secure authentication and role-based access control for admin operations."
          imageList={project3}
        />
        <ProjectCard
          title="DocVoice"
          subtitle="Medical voice recognition for report transcription using fine-tuned speech-to-text model"
          description="It is built around a preprocessing pipeline that generates and structures a medical-domain vocabulary audio dataset using medical terms created with ElevenLabs, followed by audio normalization and dataset preparation for training and evaluation.
          A pretrained Whisper model is fine-tuned using LoRA-based training to improve recognition of medical terminology. Performance is evaluated using standard metrics including WER and CER. Reducing WER from 277.19% to 70.18% (~74% reduction) and CER from 68.89% to 31.11% (~55% reduction) on a relatively small dataset (~220 audio samples) and trained on a medium-spec personal machine.
          The final system is deployed via a Streamlit interface for medical transcription."
          imageList={project4}
        />
      </div>
    </div>
  );
};

export default Projects;
