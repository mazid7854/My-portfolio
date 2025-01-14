import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { motion } from "framer-motion";
import { CiCircleChevUp } from "react-icons/ci";
import { FaChevronCircleUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import Experience from "./components/Experience";

const App = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BrowserRouter>
      <div className=" bg-primary fixed top-0  w-full z-50">
        <motion.div
          variants={{
            hidden: { y: -100, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="container m-auto px-8 "
        >
          <Navbar />
        </motion.div>
      </div>
      <div className="overflow-x-hidden text-neutral-300 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        // tap to top button
        <ul>
          <li className="fixed right-3 bottom-4 z-50 text-green-600 font-bold">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="cursor-pointer"
            >
              <CiCircleChevUp className="text-6xl font-bold" />
            </ScrollLink>
          </li>
        </ul>
        <div className="container m-auto px-8 ">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="tech">
            <Tech />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="work">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
