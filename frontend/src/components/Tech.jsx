import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap, FaDocker } from "react-icons/fa";
import { SiHibernate, SiMysql, SiRedux, SiSpring } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      repeat: Infinity,
      duration: duration,
      repeatType: "reverse",
      // type: "tween",
    },
  },
});
const Tech = () => {
  return (
    <div className="border-b border-[#915EFF] sm:border-neutral-900 sm:pb-24 pb-10">
      <h2 className="my-10 sm:my-20 text-center text-4xl">
        Tech <span className="text-[#915EFF]">Stack</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <RiReactjsLine className="text-4xl sm:text-7xl text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <SiRedux className="text-4xl sm:text-7xl text-red-600" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <IoLogoJavascript className="text-4xl sm:text-7xl text-yellow-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaCss3Alt className="text-4xl sm:text-7xl text-green-300" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaHtml5 className="text-4xl sm:text-7xl text-red-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <DiJqueryLogo className="text-4xl sm:text-7xl text-orange-500" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <IoLogoFirebase className="text-4xl sm:text-7xl text-orange-600" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <RiTailwindCssFill
              className="text-4xl sm:text-7xl"
              style={{ color: "#38BDF8" }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaBootstrap className="text-4xl sm:text-7xl text-purple-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaNode className="text-4xl sm:text-7xl text-green-500" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <BiLogoMongodb className="text-4xl sm:text-7xl text-green-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaJava className="text-4xl sm:text-7xl text-red-500" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <SiSpring className="text-4xl sm:text-7xl text-green-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <FaDocker className="text-4xl sm:text-7xl text-blue-600" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
          <div className="relative z-10">
            <SiMysql className="text-4xl sm:text-7xl text-[#00758f]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
