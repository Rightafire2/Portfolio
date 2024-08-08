import '../styling/home.css';
import { ReactTyped } from 'react-typed';
import { HPParticles } from '../components/HPParticles';

export const Home = () => {
    return (
        <>

        <div className="background-image-me">
            
            <div className="large-text">
                
                <h1>AMOGH BHARADWAJ</h1>
                <ReactTyped className="typed" strings={["Amogh Bharadwaj", "Software Developer", "Business Analyst"]} typeSpeed={40} backSpeed={40} loop/>
            </div>
        </div>
        </>
    );
}