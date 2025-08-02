import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import useScrollAnimation from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/main.css';
import './assets/css/responsive.css';

const App = () => {
    // Activar animaciones de scroll
    useScrollAnimation();

    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Certificates />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));