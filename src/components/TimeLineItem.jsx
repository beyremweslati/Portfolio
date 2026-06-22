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
    gsap.from(containerRef.current, {
      opacity: 0,
      x: isLeft ? -80 : 80,
      y: 40,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 55%",
        scrub: 1,
      },
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
  });
  return (
    <div
      ref={containerRef}
      className={`relative mb-14 flex ${
        isLeft ? "justify-start" : "justify-end"
      } group`}
    >
      <div
        className={`w-2/3 ${isLeft ? "pr-40 text-right" : "pl-40 text-left"}`}
      >
        <h3 className="text-white text-lg font-semibold group-hover:text-(--orange) transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/80 text-sm">{subtitle}</p>

        <p className="text-white/40 text-xs mt-1 group-hover:text-(--orange) transition-colors duration-300">
          {date}
        </p>

        <div className="text-white/60 text-xs mt-2 space-y-1">
          {points.map((p, i) => (
            <p key={i}>
              <span className="text-(--orange)">&gt;</span> {p}
            </p>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-2 group-hover:text-(--orange) transition-colors duration-300">
          {skills.join(" · ")}
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-(--orange) shadow-[0_0_15px_var(--orangeDarker)]" />
    </div>
  );
};

export default TimelineItem;
