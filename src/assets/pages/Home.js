import '../styling/home.css';
import { ReactTyped } from 'react-typed';
import { HPParticles } from '../components/HPParticles';
import { AboutMe } from './AboutMe';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';

export const Home = ({ mode, toggleMode }) => {
  {/* Scroll animation strategy suggested by ChatGPT */}
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
        <>
        <Navigation mode={mode} toggleMode={toggleMode} style={{}} />
        <div className="background-image-me">

            <HPParticles />
            <div className="background-overlay" />
            <div className="large-text">
                <h1>Amogh Bharadwaj</h1>
                <ReactTyped className="typed" strings={["Software Developer", "Business Analyst"]} typeSpeed={40} backSpeed={40} loop />
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="aboutme">
            <AboutMe mode={mode} />
        </div>
        <br />
        <br />
        </>
    );
}
