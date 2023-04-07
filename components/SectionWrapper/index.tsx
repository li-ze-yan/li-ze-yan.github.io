"use client";

import { styles } from "@/app/constants/styles";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface IProps {
  Component: any;
  idName: string;
}

const SectionWrapper = ({ Component, idName }: IProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
