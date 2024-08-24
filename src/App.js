import { Navigation } from './assets/components/Navigation.js';
import { Home } from './assets/pages/Home.js';
import { Resume } from './assets/pages/Resume.js';
import Portfolio from './assets/pages/Portfolio.js';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ContactMe } from './assets/pages/ContactMe.js';

/* Code modified from Stack Overflow due to errors with ScrollRestoration function in createBrowserRouter: https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

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
                    <Navigation mode={mode} toggleMode={toggleMode} />
                    <Home mode={mode} />
                </div>
            )
        },
        {
            path: "/portfolio",
            element: (
                <div>
                    <Navigation mode={mode} toggleMode={toggleMode} />
                    <Portfolio mode={mode} />
                </div>
            )
        },
        {
            path: "/resume",
            element: (
                <div>
                    <Navigation mode={mode} toggleMode={toggleMode} />
                    <Resume mode={mode}/>
                </div>
            )
        },
        {
            path: "/contactme",
            element: (
                <div>
                    <Navigation mode={mode} toggleMode={toggleMode} />
                    <ContactMe mode={mode} />
                </div>
            )
        }
    ]);

    return (
        <RouterProvider router={router}>
            <ScrollToTop />
        </RouterProvider>
    );
}

export default App;
