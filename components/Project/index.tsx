"use client";

import { styles } from "@/app/constants/styles";
import { textVariant } from "@/app/utils/motion";
import classNames from "classnames";
import { motion } from "framer-motion";
import CustomCard from "../CustomCard";
import { projects } from "@/app/constants";

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={classNames(styles.sectionSubText, "text-center")}>
          Use technology to solve needs
        </p>
        <p className={classNames(styles.sectionHeadText, "text-center")}>
          Project Experience.
        </p>
      </motion.div>
      <div className="flex justify-start items-start flex-wrap mt-[80px]">
        {projects.map((item, index) => (
          <CustomCard key={`project_${item.name}`} {...item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Project;
