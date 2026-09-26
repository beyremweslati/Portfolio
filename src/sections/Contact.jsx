import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import emailService from "../helpers/email";
import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const formData = new FormData(form);

      const details = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      await emailService.sendEmail(details);
      form.reset();

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email, please try again later");
      alert("Error sending email, please try again later");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactSub",
        start: "bottom bottom",
        pin: false,
        toggleActions: "play none none reverse",
      },
    });
    t1.from(".contactSub", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
    }).from(".contactText", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
    });
    gsap.from(".contact-form", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".grow", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 1.2,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".contact-social", {
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.6,
      delay: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className="flex-1 flex items-center flex-col h-fit mb-15 p-5 "
      id="contact"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-(--orange) contactSub">Contact Me</h2>
        <p className="max-w-2xl text-center text-xl leading-relaxed text-gray-300 contactText">
          Whether you have a question, a project idea, or just want to connect.
          <br />
          Drop me a message, and I&apos;ll be in touch soon.
        </p>
      </div>
      <div className="mt-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl sm:p-8">
        <form
          className="flex flex-col items-center gap-4 contact-form"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              required
              className="w-full rounded-lg border border-white/15 bg-black/20 p-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors duration-300 hover:border-white/30 focus:border-(--orange) focus:ring-1 focus:ring-(--orange)"
            />
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              required
              className="w-full rounded-lg border border-white/15 bg-black/20 p-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors duration-300 hover:border-white/30 focus:border-(--orange) focus:ring-1 focus:ring-(--orange)"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="w-full rounded-lg border border-white/15 bg-black/20 p-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors duration-300 hover:border-white/30 focus:border-(--orange) focus:ring-1 focus:ring-(--orange)"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="h-36 w-full resize-y rounded-lg border border-white/15 bg-black/20 p-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors duration-300 hover:border-white/30 focus:border-(--orange) focus:ring-1 focus:ring-(--orange)"
          />
          <button
            className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium text-black transition-colors duration-300 focus:ring-2 focus:ring-(--orange) disabled:cursor-not-allowed disabled:opacity-50
    ${
      success ? "bg-green-500" : "bg-(--orangeDark) hover:bg-(--orangeDarker)"
    }`}
            type="submit"
            disabled={loading}
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            )}

            {loading
              ? "Sending..."
              : success
                ? "✓ Message Sent"
                : "Send Message"}
          </button>
        </form>
        <div className="mt-3">
          <div className="flex items-center gap-3">
            <div className="grow border-t border-white/10"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-white/30">
              Or connect
            </span>
            <div className="grow border-t border-white/10"></div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/beyrem.weslati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-(--orange) transition-colors"
              >
                <FiFacebook
                  className="text-white hover:text-(--orange) transition-colors contact-social"
                  size={25}
                />
              </a>
              <a
                href="https://github.com/beyremweslati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-(--orange) transition-colors"
              >
                <FiGithub
                  className="text-white hover:text-(--orange) transition-colors contact-social"
                  size={25}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/beyremweslati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-(--orange) transition-colors"
              >
                <FiLinkedin
                  className="text-white hover:text-(--orange) transition-colors contact-social"
                  size={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
