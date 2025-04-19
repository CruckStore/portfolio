import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import "@/styles/Header.scss";

export default function Header() {
  const links = [
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="header-inner">
        <div className="logo">
          <div className="logo">
            <img src={logo} alt="Polo logo" width={316} height={100} />
          </div>
        </div>
        <div className="actions">
          <nav className="nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href="https://discord.gg/tonlien"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-free"
          >
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="var(--token-7a7ce709-7970-4e23-97d8-1ae0355d02f0, rgb(255, 255, 255))"
              >
                <g color="var(--token-7a7ce709-7970-4e23-97d8-1ae0355d02f0, rgb(255, 255, 255))">
                  <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
                </g>
              </svg>
            </span>
            <span>Get for Free</span>
          </a>
        </div>
    </header>
  );
}
