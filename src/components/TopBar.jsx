import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function TopBar() {
  useGSAP(() => {
    gsap.from(".item", {
      y: 75,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-10 px-4 sm:m-12 mt-6 sm:mt-14 text-sm sm:text-base font-light text-[var(--orange)] tracking-widest">
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full item">
          <a href="#about">ABOUT ME</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full item">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full item">
          <a href="#experience">EXPERIENCE</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full item">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
}

export default TopBar;
