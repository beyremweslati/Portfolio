import { useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import emailService from "../helpers/email";
import SocialLinks from "../components/SocialLinks";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setMessage("");

    try {
      const formData = new FormData(form);
      await emailService.sendEmail({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      });

      form.reset();
      setStatus("success");
      setMessage("Message sent! I'll get back to you as soon as possible.");
    } catch (error) {
      console.error("Error sending email", error);
      setStatus("error");
      setMessage("An error occurred while sending the email. Please try again later.");
    }
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".section-heading > *", {
        opacity: 0,
        y: 26,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".contact-intro, .contact-note, .contact-socials", {
        opacity: 0,
        y: 22,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact-panel",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".field, .contact-submit", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-shell" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <h2 id="contact-title">Contact</h2>
        <p>Have a question, a project idea, or a difficult problem? I would like to hear about it.</p>
      </div>
      <div className="contact-panel">
        <div>
          <p className="contact-intro">
            Good work starts with a clear conversation. Tell me what you are
            building and where it is stuck.
          </p>
          <p className="contact-note">
            Share a little context and I will get back to you. The form goes
            straight to my inbox.
          </p>
          <SocialLinks className="contact-socials" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="A little context helps."
              required
            />
          </div>

          <button
            className="contact-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" && <span className="spinner" aria-hidden="true" />}
            {status === "success" && <FiCheck aria-hidden="true" size={16} />}
            {status === "sending"
              ? "Sending"
              : status === "success"
                ? "Message sent"
                : "Send message"}
          </button>

          <p
            className={`form-status${status === "error" ? " is-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
