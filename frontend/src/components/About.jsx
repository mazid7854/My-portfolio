import about from "../assets/about.jpg";

import { Link, redirect } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },

  visible: {
    y: 0,
    opacity: 1,
  },
};

const handleDownload = () => {
  console.log("clicked");

  // Trigger the download of the PDF
  const pdfUrl = "/resume.pdf"; // Relative path to the PDF file in the public folder
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "resume.pdf"; // File name for the downloaded file
  link.click(); // Simulate a click to trigger the download
};

const About = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  // Handle animation completion using onAnimationComplete prop
  const handleAnimationComplete = () => {
    setIsAnimationComplete(true); // Start typing effect once motion animation completes
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth", offsetTop: -150 });
  };

  return (
    <div className=" border-b border-[#915EFF]  sm:border-neutral-900  ">
      <h1 className="sm:my-20 my-10 text-center text-4xl ">
        {" "}
        About
        <span className="text-[#915EFF] ml-2">Me</span>
      </h1>
      <div className="container mx-auto mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          transition={{ duration: 1.5 }}
          onAnimationComplete={handleAnimationComplete}
          className="grid grid-cols-1 md:grid-cols-12 gap-4   p-5"
        >
          <motion.div variants={item} className="md:col-span-7">
            <div className="">
              <div>
                <motion.p
                  variants={item}
                  className="mb-4"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="text-2xl">
                    Hello<span className="text-[#915EFF]">!</span>{" "}
                  </strong>
                </motion.p>
                <motion.p
                  variants={item}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="leading-7"
                  viewport={{ once: true }}
                >
                  {isAnimationComplete && (
                    <Typewriter
                      words={[
                        `I am a proficient MERN stack developer with over two years of hands-on experience in crafting full-stack web applications.
                        My core expertise includes MongoDB, Express.js, React.js, and Node.js, where I’ve developed scalable and high-performance web solutions that address complex business requirements.
                        I am also skilled in API documentation using Swagger, containerization with Docker, and deploying applications on cloud platforms.
                        
                        
                        Additionally, I have experience with JUnit and Mockito for testing, ensuring the reliability and robustness of the code.
                        To enhance my technical skills and broaden my backend knowledge, I have mastered System Design, Java, and Spring Boot, enabling me to design and deploy efficient and scalable systems.`,
                      ]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      cursorColor="#915EFF"
                      typeSpeed={10}
                      deleteSpeed={0}
                      delaySpeed={1000}
                    />
                  )}
                </motion.p>
              </div>
            </div>
          </motion.div>
          <div className="block md:hidden mt-5 border-b border-solid border-[#915EFF]   "></div>
          <motion.div variants={item} className="md:col-span-5 mt-8">
            <div>
              <motion.ul variants={item}>
                <motion.li
                  variants={item}
                  className="relative py-3 pl-[115px]"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="absolute top-3 left-0 w-[115px] pr-5">
                    <span className="px-1 py-0.5 rounded-sm">Age:</span>
                  </strong>
                  27 Years
                </motion.li>
                <motion.li
                  variants={item}
                  className="relative py-3 pl-[115px]"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="absolute top-3 left-0 w-[115px] pr-5">
                    <span className="px-1 py-0.5 rounded-sm">Country:</span>
                  </strong>
                  India
                </motion.li>
                <motion.li
                  variants={item}
                  className="relative py-3 pl-[115px]"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="absolute top-3 left-0 w-[115px] pr-5">
                    <span className="px-1 py-0.5 rounded-sm">Address:</span>
                  </strong>
                  C-170, street no-11, madanpur khadar ext. new delhi-110076.
                </motion.li>
                <motion.li
                  variants={item}
                  className="relative py-3 pl-[115px]"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="absolute top-3 left-0 w-[115px] pr-5">
                    <span className="px-1 py-0.5 rounded-sm">Phone:</span>
                  </strong>
                  <a href="tel:8010050062">8010050062</a>
                </motion.li>
                <motion.li
                  variants={item}
                  className="relative py-3 pl-[115px]"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <strong className="absolute top-3 left-0 w-[115px] pr-5">
                    <span className="px-1 py-0.5 rounded-sm">E-mail:</span>
                  </strong>
                  <a href="mailto:mail@mazid.info">mail@mazid.info</a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          transition={{ duration: 1.5 }}
          className="items-center sm:mx-5"
        >
          <motion.button
            variants={item}
            onClick={handleDownload}
            className="relative rounded-2xl p-3 px-6  mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 "
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
            <span className="relative z-10">Download cv</span>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="relative rounded-2xl p-3 px-6 mt-5 mx-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 "
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
            <span className="relative z-10">Contact me</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
