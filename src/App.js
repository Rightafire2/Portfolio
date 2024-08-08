import './assets/styling/App.css';
import { Navigation } from './assets/components/Navigation.js';
import { Home } from './assets/pages/Home.js';
import { HPParticles } from './assets/components/HPParticles.js';
import { AboutMe } from './assets/pages/AboutMe.js';


function App() {
  return (
    <>
    <Navigation />
    
    <Home />
    <AboutMe />
    </>
  );
}

export default App;
