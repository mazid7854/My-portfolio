/**
 * @file Navbar.jsx
 * @description A React component that renders a navbar
 * @author Mazid Ali <mail@mazid.info>
 */

import logo from "../assets/logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

/**
 * @typedef {Object} container
 * @property {object} hidden - styles when the component is hidden
 * @property {object} visible - styles when the component is visible
 */
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.2,
    },
  },
};

/**
 * @typedef {Object} item
 * @property {object} hidden - styles when the item is hidden
 * @property {object} visible - styles when the item is visible
 */
const item = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

/**
 * @function Navbar
 * @description A React component that renders a navbar
 * @returns {JSX.Element} - the rendered navbar
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    console.log("clicked");
  };
  return (
    <motion.nav className="">
      <div className="   flex items-center justify-between py-6 ">
        <div className=" flex flex-shrink-0 items-center cursor-pointer ">
          <ScrollLink to="hero" smooth={true} duration={500} offset={-150}>
            <img src={logo} className="w-32 sm:w-40" alt="" />
          </ScrollLink>
        </div>

        <div className="sm:block hidden ">
          <ul className="flex gap-10">
            <li className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 cursor-pointer ">
              <ScrollLink to="about" smooth={true} duration={500} offset={-150}>
                About
              </ScrollLink>
            </li>
            <li className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 cursor-pointer ">
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-150}
              >
                Experience
              </ScrollLink>
            </li>
            <li className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 cursor-pointer ">
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                offset={-150}
              >
                Education
              </ScrollLink>
            </li>
            <li className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 cursor-pointer ">
              <ScrollLink to="work" smooth={true} duration={500} offset={-150}>
                Work
              </ScrollLink>
            </li>
            <li className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 cursor-pointer">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-150}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="sm:flex hidden items-center justify-center   gap-3">
          <a
            href="https://www.linkedin.com/in/mazid-ali-773063213/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-all duration-300 text-[30px]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mazid7854"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-all duration-300 text-[30px]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/mazid.ali_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-all duration-300 text-[30px]"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="sm:hidden  flex items-center justify-center">
          <button onClick={toggleMenu} className="text-3xl  ">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col gap-5 mb-4 "
        >
          <motion.li
            variants={item}
            className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 "
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              offset={-100}
            >
              About
            </ScrollLink>
          </motion.li>
          <motion.li
            variants={item}
            className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 "
          >
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              offset={-100}
            >
              Experience
            </ScrollLink>
          </motion.li>
          <motion.li
            variants={item}
            className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300 "
          >
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              offset={-100}
            >
              Education
            </ScrollLink>
          </motion.li>
          <motion.li
            variants={item}
            className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300"
          >
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              offset={-100}
            >
              Work
            </ScrollLink>
          </motion.li>
          <motion.li
            variants={item}
            className="hover:text-[#915EFF] text-[18px] font-medium transition-all duration-300"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              offset={-100}
            >
              Contact
            </ScrollLink>
          </motion.li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
