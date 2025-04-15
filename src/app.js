import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/main.css';
import './assets/css/responsive.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Experience />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));