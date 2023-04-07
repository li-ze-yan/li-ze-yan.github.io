"use client";

import { styles } from "@/app/constants/styles";
import classNames from "classnames";
import { ComputerCanvas } from "../canvas";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={classNames(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        )}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className={classNames(styles.heroHeadText, "text-white")}>
            Welcome<span className="lg:inline hidden">, </span>
            <span className="text-[#915EFF] lg:inline block">my Portfolio</span>
          </h1>
          <p className={classNames(styles.heroSubText, "mt-2 text-white-100")}>
            this is my personal website &nbsp;
            <br className="sm:block hidden" />
            to show off my skills and talents
          </p>
        </motion.div>
      </div>
      {/* 模型 */}
      <ComputerCanvas />
      {/* 跳动的区域logo */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
