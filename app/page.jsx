"use client";

import useScrollAnimation from "../src/hooks/useScrollAnimation";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Competitions from "../src/components/Competitions";
import Experience from "../src/components/Experience";
import Certificates from "../src/components/Certificates";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
// Al final, tras el CSS de cada sección: replica la cascada original.
import "../src/assets/css/main.css";
import "../src/assets/css/responsive.css";

export default function Page() {
  useScrollAnimation();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Competitions />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
