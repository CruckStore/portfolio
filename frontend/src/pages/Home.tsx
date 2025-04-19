import { Link } from "react-router-dom";
import ArrowIcon from "@/components/ArrowIcon";
import "@/styles/Home.scss";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-content container">
        <span className="role-badge">UI/UX &amp; Graphic Designer</span>
        <h1 className="home-title">
          Johan
          <span className="home-title--highlight">Beker</span>
          <ArrowIcon />
        </h1>
        <p className="home-subtitle">
          I’m a versatile designer specializing in graphic, web, and product
          design to help grow your business. Let’s build something great!
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
