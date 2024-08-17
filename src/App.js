import './assets/styling/App.css';
import { Navigation } from './assets/components/Navigation.js';
import { Home } from './assets/pages/Home.js';
import { Resume } from './assets/pages/Resume.js';
import { navData } from './assets/configurations/NavData.js';
import Footer from './assets/components/Footer.js';
import Portfolio from './assets/pages/Portfolio.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import { ContactMe } from './assets/pages/ContactMe.js';


const App = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.classList.add('dark-mode');
      } else {
          setMode('light');
          document.body.classList.remove('dark-mode');
      }
  }

  const router = createBrowserRouter([
              {
                  path: "/",
                  element: (
                      <div>
                          <Navigation toggleMode={toggleMode} navData={navData} />
                          <Home mode={mode} />
                          <Footer />
                      </div>
                  )
              },
              {
                  path: "/portfolio",
                  element: (
                      <div>
                          <Navigation toggleMode={toggleMode} navData={navData} />
                          <Portfolio mode={mode} />
                      </div>
                  )
              },
              {
                  path: "/resume",
                  element: (
                      <div>
                          <Navigation toggleMode={toggleMode} navData={navData} />
                          <Resume />
                      </div>
                  )
              },
              {
                path: "/contactme",
                element: (
                    <div>
                        <Navigation toggleMode={toggleMode} navData={navData} />
                        <ContactMe mode={mode} />
                    </div>
                )
            }
  ])

  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App;
