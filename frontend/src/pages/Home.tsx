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
          <span className="home-title--arrow">→</span>
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
