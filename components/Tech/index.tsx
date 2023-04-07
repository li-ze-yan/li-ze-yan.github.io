"use client";

import { technologies } from "@/app/constants";
import { ITechnology } from "@/app/type/Portfolio";
import { BallCanvas } from "../canvas";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-16">
      {technologies.map((technology: ITechnology, index: number) => (
        <motion.div
          variants={
            [0, 1, 2, 6, 7].includes(index)
              ? fadeIn("right", "", 0.1, 1)
              : fadeIn("left", "", 0.1, 1)
          }
          initial="hidden"
          whileInView="show"
          className="w-32 h-32"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
