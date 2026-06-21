import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import emailService from "../helpers/email";
import { useState } from "react";

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

  return (
    <div className="flex-1 flex items-center flex-col h-fit mb-15" id="contact">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-(--orange)">Contact Me</h2>
        <p className="text-gray-300 text-2xl text-center">
          Whether you have a question, a project idea, or just want to connect.
          <br />
          Drop me a message, and 'll be in touch soon!
        </p>
      </div>
      <div className="w-1/2 mt-5 ">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex w-full mb-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="p-2 border border-gray-300 rounded w-1/2 mr-2 active:border-(--orange) focus:border-(--orange) hover:border-(--orange) focus:ring-(--orange) focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="p-2 border border-gray-300 rounded w-1/2 active:border-(--orange) focus:border-(--orange) hover:border-(--orange) focus:ring-(--orange) focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="mb-4 p-2 border border-gray-300 rounded w-full active:border-(--orange) focus:border-(--orange) hover:border-(--orange) focus:ring-(--orange) focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="mb-4 p-2 border border-gray-300 rounded w-full h-32 active:border-(--orange) focus:border-(--orange) hover:border-(--orange) focus:ring-(--orange) focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
          />
          <button
            className={`text-black p-2 rounded text-sm w-full transition-colors duration-300 focus:ring-(--white) focus:ring-opacity-50 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
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
        <div>
          <div className="flex items-center my-4">
            <div className="grow border-t border-gray-500"></div>
            <span className="shrink mx-1 text-gray-400 text-sm font-medium">
              OR
            </span>
            <div className="grow border-t border-gray-500"></div>
          </div>
          <div>
            <p className="text-gray-300 text-center">
              You can also reach me on:
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.facebook.com/beyrem.weslati"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--orange) transition-colors"
              >
                <FiFacebook
                  className="text-white hover:text-(--orange) transition-colors"
                  size={25}
                />
              </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
