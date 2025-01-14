import React from "react";
import mazid from "../assets/mazid.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      type: "spring",
      damping: 10,
    },
  },
});

const Hero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  // Handle animation completion using onAnimationComplete prop
  const handleAnimationComplete = () => {
    setIsAnimationComplete(true); // Start typing effect once motion animation completes
  };

  return (
    <div className="border-b  border-[#915EFF] sm:border-neutral-900 pb-4 lg:mb-35 mt-24 sm:mt-32   ">
      <div className="flex flex-wrap justify-between items-center sm:my-20 my-10">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-start lg:items-start  ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              onAnimationComplete={handleAnimationComplete}
              className="pb-16 font-normal text-6xl tracking-tight lg:mt-16 lg:text-8xl mt-7"
            >
              Mazid <span className="text-[#915EFF]">Ali</span>
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
            >
              {isAnimationComplete && (
                <Typewriter
                  words={["Full Stack Developer"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  cursorColor="#915EFF"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tighter font-light "
            >
              <p className="font-bold text-xl italic">
                "Delivering Reliable & Scalable Web Solutions with Modern Tech
                Stack".
              </p>
              <p className="mt-5">
                MERN Stack Developer With System Design, Java Spring Boot, API
                Documentation, Cloud, & Testing.
              </p>
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex flex-col justify-between items-center">
          <div className="flex justify-center items-center mt-5 sm:mt-0">
            {/* <div className="w-1 sm:h-full h-10 bg-gradient-to-b from-[#915EFF] to-transparent" /> */}
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={mazid}
              alt="mazid ali"
              className="rounded-xl shadow-2xl"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
