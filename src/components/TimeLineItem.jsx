import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TimelineItem = ({
  title,
  subtitle,
  date,
  side = "left",
  points = [],
  skills = [],
}) => {
  const isLeft = side === "left";
  const containerRef = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        x: isLeft ? -80 : 80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 1,
        },
      });
    });
    mm.add("(max-width: 1023px)", () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 1,
        },
      });
    });
    gsap.from(containerRef.current.querySelectorAll("p"), {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });
    return () => mm.revert();
  });
  return (
    <div
      ref={containerRef}
      className={`relative mb-14 flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      } justify-start group`}
    >
      <div
        className={`w-full md:w-2/3 px-8 md:px-0 text-left ${
          isLeft ? "md:pr-40 md:text-right" : "md:pl-40"
        }`}
      >
        <h3 className="text-white text-lg font-semibold leading-snug group-hover:text-(--orange) transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mt-1">{subtitle}</p>
        <p className="text-(--orange) text-[11px] uppercase tracking-[0.15em] mt-2 group-hover:text-white transition-colors duration-300">
          {date}
        </p>
        <div className="text-white/60 text-xs mt-4 space-y-2 leading-relaxed">
          {points.map((p, i) => (
            <p key={i}>
              <span className="text-(--orange)">&gt;</span> {p}
            </p>
          ))}
        </div>
        <p className="text-white/35 text-[11px] leading-relaxed mt-4 group-hover:text-(--orange) transition-colors duration-300">
          {skills.join(" · ")}
        </p>
      </div>

      <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-(--orange)" />
    </div>
  );
};

export default TimelineItem;
