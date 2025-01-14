import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { motion } from "framer-motion";
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
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <div className=" pb-5">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="border border-white p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={() => window.open(project_link, "_blank")}
          className="relative w-full h-[230px]"
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {" "}
              <img
                src="/github-mark-white.svg"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:h-[130px] h-[120px]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        {/* <button>Read more</button> */}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const [showProjects, setShowProjects] = useState("all");

  const showProjectsHandler = (e) => {
    setShowProjects(e);
  };

  const maxLength = Math.max();

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="border-b border-[#915EFF]  sm:border-neutral-900 pb-14 sm:pb-24">
      <h1 className="sm:my-20 my-10 text-center text-4xl">
        My <span className="text-[#915EFF]">Work</span>
      </h1>

      <div className="flex justify-center items-center"></div>

      <>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 1 }}
          className=" flex flex-wrap gap-7 justify-center"
        >
          {showAll
            ? projects.map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))
            : projects
                .slice(0, 3)
                .map((project, index) => (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={() => {
              handleShowMore();
              if (showAll) {
                window.scrollTo({
                  top: document.getElementById("work").offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="block mx-auto px-4 py-2 rounded-full  transition-all duration-200 "
          >
            {showAll ? "Show Less" : "Click For More.."}
          </button>
        </motion.div>
      </>
    </div>
  );
};

export default Projects;
