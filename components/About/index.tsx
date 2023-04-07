"use client";

import { services } from "@/app/constants";
import { styles } from "@/app/constants/styles";
import { fadeIn, textVariant } from "@/app/utils/motion";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface IProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const DetailCard = ({ index, title, icon }: IProps) => {
  return (
    <Tilt className="sm:w-[250px] w-[320px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        initial="hidden"
        whileInView="show"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-start">
        {services.map((service, index) => (
          <DetailCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
