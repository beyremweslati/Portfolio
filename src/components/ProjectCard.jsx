import { useState, useRef } from "react";
import gsap from "gsap";
import { createPortal } from "react-dom";
const ProjectCard = ({ title, subtitle, description, imageList }) => {
  const images = imageList;

  const [selectedImg, setSelectedImg] = useState(null);
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);

  const changeImage = (newIndex) => {
    const img = imgRef.current;

    gsap.to(img, {
      opacity: 0,
      scale: 0.98,
      duration: 0.2,
      onComplete: () => {
        setIndex(newIndex);

        gsap.fromTo(
          img,
          { opacity: 0, scale: 1.02 },
          { opacity: 1, scale: 1, duration: 0.3 },
        );
      },
    });
  };

  return (
    <>
      <div className="border border-white/40 rounded-md w-full h-fill projectCard bg-(--bg)">
        <div className="flex flex-col items-center h-full lg:flex-row">
          <div className="p-4 flex-1 flex flex-col gap-8 m-2">
            <div className="flex flex-col gap-2 border-b-(--orange) border-b-3">
              <h3 className="text-xl font-semibold text-(--orange)">{title}</h3>
              <h4 className="text-lg font-medium text-white pb-3">
                {subtitle}
              </h4>
            </div>
            <div>
              <p className="text-white/55 text-sm whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-1 m-2 relative w-full h-full rounded-lg overflow-hidden border border-white/10 bg-black/20 p-3 shadow-xl group flex flex-col items-center aspect-video">
            <img
              ref={imgRef}
              src={images[index]}
              onClick={() => setSelectedImg(images[index])}
              alt={`project image ${index + 1}`}
              className="w-full h-full object-contain rounded-md"
            />

            <div className="flex gap-3 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Left arrow */}
            <button
              onClick={() =>
                changeImage((index - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 
               bg-black/40 text-white p-2 rounded-full 
               opacity-100 md:opacity-0 group-hover:opacity-100 
               transition-all duration-300 hover:bg-black/70"
            >
              ‹
            </button>

            {/* Right arrow */}
            <button
              onClick={() => changeImage((index + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 
               bg-black/40 text-white p-2 rounded-full 
               opacity-100 md:opacity-0 group-hover:opacity-100 
               transition-all duration-300 hover:bg-black/70 "
            >
              ›
            </button>
          </div>
        </div>
      </div>
      {selectedImg &&
        createPortal(
          <div
            onClick={() => setSelectedImg(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "95vw",
                maxHeight: "95vh",
                display: "flex",
              }}
            >
              <img
                src={selectedImg}
                alt="fullscreen"
                style={{
                  display: "block",
                  maxWidth: "95vw",
                  maxHeight: "95vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "white",
                  fontSize: "24px",
                  background: "rgba(0,0,0,0.7)",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectCard;
