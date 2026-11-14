import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-mark" aria-hidden="true">BO</p>
        <p className="footer-copy">
          Software engineer working across full-stack, data, and AI systems.
          <br />
          © {new Date().getFullYear()} Beyrem Oueslati
        </p>
        <div className="footer-side">
          <SocialLinks className="footer-socials" />
          <a className="back-to-top" href="#hero">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
