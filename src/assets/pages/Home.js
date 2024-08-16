import '../styling/home.css';
import { ReactTyped } from 'react-typed';
import { HPParticles } from '../components/HPParticles';
import { AboutMe } from './AboutMe';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = ({ mode }) => {
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
        <div className="background-image-me">
            <HPParticles />
            <div className="background-overlay" />
            <div className="large-text">
                <h1 className={`text-${mode === 'light' ? 'dark' : 'red'}`}>Amogh Bharadwaj</h1>
                <ReactTyped className="typed" strings={["Software Developer", "Business Analyst"]} typeSpeed={40} backSpeed={40} loop />
            </div>
        </div>
        {[...Array(4)].map((_, index) => <br key={index} />)} {/* Referenced from ChatGPT to make adding more breaks between lines easier */}
        <div id="aboutme">
            <AboutMe mode={mode} />
        </div>
        </>
    );
}
