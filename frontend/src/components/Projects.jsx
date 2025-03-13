import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollLink } from "react-scroll";
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

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = (e) => {
    e.stopPropagation(); // Prevent clicking on project link
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
      className="pb-5 border border-white p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div
        onClick={() => window.open(project_link, "_blank")}
        className="relative w-full h-[230px] cursor-pointer"
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src="/github-mark-white.svg"
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>

        {/* ✅ Wrap the expanding text inside motion.div with overflow-hidden */}
        <motion.div
          layout
          className="overflow-hidden"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.p
                key="expanded"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 text-secondary text-[14px]"
              >
                {description}
              </motion.p>
            ) : (
              <motion.p
                key="collapsed"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 text-secondary text-[14px]"
              >
                {`${description.substring(0, 100)}...`}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={toggleReadMore}
          className="mt-2 text-blue-400 underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="border-b border-[#915EFF] sm:border-neutral-900 pb-14 sm:pb-24">
      <h1 className="sm:my-20 my-10 text-center text-4xl">
        My <span className="text-[#915EFF]">Work</span>
      </h1>

      {/* Project Cards Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 1 }}
        className="flex flex-wrap gap-7 justify-center"
      >
        <AnimatePresence>
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <motion.div
                key={`project-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Show Less Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.button
          onClick={() => {
            handleShowMore();
            if (showAll) {
              window.scrollTo({
                top: document.getElementById("work").offsetTop,
                behavior: "smooth",
              });
            }
          }}
          className="block mx-auto px-4 py-2 mt-4 transition-all duration-200  text-white "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Click For More.."}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects;
