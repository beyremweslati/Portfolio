import { useState, useRef } from "react";
import gsap from "gsap";
import { createPortal } from "react-dom";
const ProjectCard = ({
  title,
  subtitle,
  description,
  imageList,
}) => {
  const images = imageList;

  const [selectedImg, setSelectedImg] = useState(null);
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);
  const imgRef = useRef(null);

  const changeImage = (newIndex) => {
    const img = imgRef.current;

    gsap.killTweensOf(img);
    setImageLoaded(false);
    setIndex(newIndex);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.3 },
    );
  };

  return (
    <>
      <article className="projectCard group w-full overflow-hidden rounded-xl border border-white/15 bg-white/[0.03] shadow-xl">
        <div className="h-1 w-full bg-(--orange)" />
        <div className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-10 lg:p-8">
          <div className="flex flex-1 flex-col justify-center lg:max-w-[42%]">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {title}
              </h3>
              <h4 className="text-base font-medium leading-relaxed text-(--orange)">
                {subtitle}
              </h4>
            </div>
            <div className="mt-6">
              <p className="text-sm leading-7 text-white/55 whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-black/30 p-2 shadow-2xl lg:max-w-[58%]">
            <img
              ref={imgRef}
              key={images[index]}
              src={images[index]}
              onLoad={handleImageLoad}
              onClick={() => setSelectedImg(images[index])}
              alt={`project image ${index + 1}`}
              className="aspect-video w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/60 px-3 py-2 backdrop-blur-sm">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeImage(i)}
                  aria-label={`View project image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-(--orange)"
                      : "w-1.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Left arrow */}
            <button
              onClick={() =>
                changeImage((index - 1 + images.length) % images.length)
              }
              aria-label="Previous project image"
              className="absolute left-4 top-1/2 -translate-y-1/2
               rounded-full bg-black/60 p-2 text-white
               opacity-100 md:opacity-0 group-hover:opacity-100
               transition-all duration-300 hover:bg-(--orange) hover:text-black"
            >
              ‹
            </button>

            {/* Right arrow */}
            <button
              onClick={() => changeImage((index + 1) % images.length)}
              aria-label="Next project image"
              className="absolute right-4 top-1/2 -translate-y-1/2
               rounded-full bg-black/60 p-2 text-white
               opacity-100 md:opacity-0 group-hover:opacity-100
               transition-all duration-300 hover:bg-(--orange) hover:text-black"
            >
              ›
            </button>
          </div>
        </div>
      </article>
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
