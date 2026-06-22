import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText.js";

function Hero() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    const nextSection = document.querySelector("#about");
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".sub", { type: "lines" });

    gsap.from("#line", {
      scaleX: 0,
      duration: 2,
      ease: "expo.out",
    });

    gsap.from(".intro", {
      opacity: 0,
      translateX: 250,
      duration: 2,
      ease: "expo.out",
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.04,
      opacity: 0,
      delay: 0.5,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.04,
      delay: 1.5,
    });

    mm.add("(min-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "+=119%",
            scrub: 1,
          },
        })
        .to(".scroll", {
          y: () => nextSection.offsetTop,
          ease: "power1.inOut",
        });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="flex-1 flex items-center flex-col " id="hero">
      <div className="flex-1 flex flex-col justify-end items-center">
        <div className="w-fit flex flex-col">
          <div className="flex items-center gap-4 text-lg">
            <p className="shrink-0 intro">Hi I am</p>
            <div
              className="h-1 w-60 md:w-151 lg:w-187 bg-(--orange) rounded-full"
              id="line"
            ></div>
          </div>

          <h1 className="text-center leading-[0.9] title">
            <span className="block md:inline-block text-7xl md:text-8xl lg:text-[130px] -translate-x-10 md:translate-x-0">
              Beyrem
            </span>

            <span className="block md:inline-block text-7xl md:text-8xl lg:text-[130px] translate-x-10 md:translate-x-0 md:ml-4">
              Oueslati
            </span>
          </h1>

          <div className="self-end text-right text-(--orange) text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest md:-translate-x-10 sub">
            <p>
              A SOFTWARE <br /> ENGINEER
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-between p-4 md:p-8">
        <div className=" w-15 flex justify-end items-center flex-col gap-8 scroll">
          <a
            href="https://github.com/beyremweslati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--orange) transition-colors sub"
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
            className="hover:text-(--orange) transition-colors sub"
          >
            <FiLinkedin
              className="text-white hover:text-(--orange) transition-colors"
              size={25}
            />
          </a>
        </div>
        <div className="w-15 flex justify-center items-end text-white hover:text-(--orange) transition-colors scroll">
          <p className=" transform rotate-90 font-extralight tracking-widest sub ">
            Scroll
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
