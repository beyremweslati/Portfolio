import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const ProjectCard = ({ title, subtitle, description, images, tech = [], projectNumber }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const closeButtonRef = useRef(null);

  const changeImage = (newIndex) => {
    setLoaded(false);
    setIndex(newIndex);
  };

  useEffect(() => {
    if (!selectedImg) return;

    const previousFocus = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImg(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [selectedImg]);

  return (
    <>
      <article className="projectCard">
        <div className="project-inner">
          <div className="project-copy">
            <p className="project-number">
              PROJECT / {String(projectNumber).padStart(2, "0")}
            </p>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p className="project-description">{description}</p>
            {tech.length > 0 && (
              <ul className="project-tech" aria-label="Technologies used">
                {tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="project-media">
            <button
              className="project-zoom"
              type="button"
              onClick={() => setSelectedImg(images[index])}
              aria-label={`Open ${title} screenshot ${index + 1} full screen`}
            >
              <img
                key={images[index]}
                src={images[index]}
                onLoad={() => setLoaded(true)}
                alt={`${title} screenshot ${index + 1}`}
                className={loaded ? "is-loaded" : ""}
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className="project-controls">
              <span className="project-count" aria-live="polite">
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <div className="project-arrows">
                <button
                  type="button"
                  onClick={() => changeImage((index - 1 + images.length) % images.length)}
                  aria-label="Previous project image"
                  className="project-arrow"
                >
                  <FiChevronLeft aria-hidden="true" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => changeImage((index + 1) % images.length)}
                  aria-label="Next project image"
                  className="project-arrow"
                >
                  <FiChevronRight aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      {selectedImg &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${index + 1}`}
            onClick={() => setSelectedImg(null)}
          >
            <figure>
              <img
                src={selectedImg}
                alt={`${title} screenshot ${index + 1}, full size`}
              />
            </figure>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImg(null)}
              aria-label="Close image"
              ref={closeButtonRef}
            >
              <FiX aria-hidden="true" size={20} />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectCard;
