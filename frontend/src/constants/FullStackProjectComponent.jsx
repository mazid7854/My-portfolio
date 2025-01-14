import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { fullStackProjects } from "./index.js";
import { motion } from "framer-motion";

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
}) => {
  return (
    <div className=" pb-10">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="border border-white p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
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
              <img
                src=""
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

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

const FullStackProjectComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const handleShowMore = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-20 flex flex-wrap gap-7 justify-center"
      >
        {showAll
          ? fullStackProjects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))
          : fullStackProjects
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
        viewport={{ once: true, amount: 0.5 }}
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
    </div>
  );
};

export default FullStackProjectComponent;
