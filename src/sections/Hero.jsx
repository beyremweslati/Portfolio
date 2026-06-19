import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <div className="flex-1 flex items-center flex-col">
      <div className="flex flex-col justify-start w-1/2 items-center gap-3 mt-40">
        <div className="flex flex-row w-full pr-5 pl-5 items-center gap-4 text-lg">
          <p className="shrink-0">Hi I am</p>
          <div className="flex-1 h-1 bg-(--orange) rounded-full"></div>
        </div>
        <div>
          <h1>Beyrem Oueslati</h1>
        </div>
        <div className="w-full flex flex-col items-end text-[var(--orange)] mr-25 text-3xl font-semibold tracking-widest">
          <p>A SOFTWARE</p>
          <p>ENGINEER</p>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-between p-8">
        <div className=" w-15 flex justify-end items-center flex-col gap-8">
          <a
            href="https://github.com/beyremweslati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--orange) transition-colors"
          >
            <FiGithub
              className="text-white hover:text-(--orange) transition-colors"
              size={25}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/beyremweslati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--orange) transition-colors"
          >
            <FiLinkedin
              className="text-white hover:text-(--orange) transition-colors"
              size={25}
            />
          </a>
        </div>
        <div className="w-15 flex justify-center items-end text-white hover:text-(--orange) transition-colors">
          <p className=" transform rotate-90 font-extralight tracking-widest ">
            Scroll
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
