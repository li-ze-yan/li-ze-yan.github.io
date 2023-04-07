"use client";

import { experiences } from "@/app/constants";
import { styles } from "@/app/constants/styles";
import { IExperience } from "@/app/type/Portfolio";
import { textVariant } from "@/app/utils/motion";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface IProps {
  experience: IExperience;
}

const ExperienceCard = ({ experience }: IProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={classNames(styles.sectionSubText, "text-center")}>
          What I have done so far
        </p>
        <p className={classNames(styles.sectionHeadText, "text-center")}>
          Work Experience.
        </p>
      </motion.div>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline>
          {experiences.map((experience: IExperience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Experience;
