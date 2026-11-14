import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const profiles = [
  { name: "GitHub", href: "https://github.com/beyremweslati", Icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/beyremweslati", Icon: FiLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/beyrem.weslati", Icon: FiFacebook },
];

function SocialLinks({ limit, className = "" }) {
  return (
    <ul className={`social-list ${className}`.trim()}>
      {profiles.slice(0, limit ?? profiles.length).map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            className="social-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
