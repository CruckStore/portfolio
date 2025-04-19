import { Link } from "react-router-dom";
import "@/styles/Home.scss";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-content container">
        <span className="role-badge">
          Full‑Stack Developer &amp; UI/UX Designer
        </span>

        <h1 className="home-title">
          Gtol
          <span className="home-title--highlight">on top</span>
          <span className="home-title--arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </span>
        </h1>

        <p className="home-subtitle">
          I’m a full‑stack developer and UI/UX designer crafting
          responsive,user‑centric web applications to elevate your brand.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn-home btn-outline">
            See All Projects
          </Link>

          <Link to="/contact" className="btn-home btn-primary">
            Contact Now
          </Link>
        </div>
      </div>

      <div className="testimonial-card card-1">
        <p>“Working with him was a game changer!”</p>
        <span className="author">– pranavnb</span>
      </div>

      <div className="testimonial-card card-2">
        <p>“We increased our conversions by 200%”</p>
        <span className="author">– vijaynb</span>
      </div>
    </section>
  );
}
