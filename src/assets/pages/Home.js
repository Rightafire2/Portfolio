import '../styling/home.css';
import { ReactTyped } from 'react-typed';
import { HPParticles } from '../components/HPParticles';
import { AboutMe } from './AboutMe';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = ({ mode }) => {
  {/* Scroll animation strategy suggested by ChatGPT since react router dom was not navigating to About Me page */ }
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
        <section className="background-image-me">
          <HPParticles />
          <div className="background-overlay" />
          <div className="large-text">
            <h1>Amogh Bharadwaj</h1>
            <ReactTyped className="typed" strings={["Software Developer", "Business Analyst"]} typeSpeed={40} backSpeed={40} loop />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br id="aboutme" />
        <br />
        <section>
          <AboutMe mode={mode} />
        </section>
        <br />
        <br />
    </main>
  );
}
