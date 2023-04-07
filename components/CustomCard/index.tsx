"use client";

import { styles } from "@/app/constants/styles";
import { cardVariant, fadeIn } from "@/app/utils/motion";
import {
  github,
  instagram,
  jobit,
  pinterest,
  wavinghand,
} from "@/public/picture";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";

interface IProps {
  name: string;
  description: string;
  detail: string;
  skills: string[];
  image: string;
  link: string;
  index: number;
}

const CustomCard = ({
  name,
  description,
  detail,
  skills,
  image,
  index,
  link,
}: IProps) => {
  return (
    <motion.div
      variants={cardVariant()}
      initial="hidden"
      whileInView="show"
      className="w-[350px] h-[515px] mx-auto cursor-pointer mt-[30px] group perspective-1000"
    >
      <div className="relative w-full h-full transition-transform duration-1000 transform-gpu group-hover:rotate-y-180 transformStyle-3d">
        <div
          className={`w-full h-full rounded-[15px] absolute ${image} bg-contain bg-no-repeat bg-card px-[40px] py-[60px] flex flex-col justify-end text-white backfaceVisibility-hidden`}
        >
          <h2 className="font-medium">{name}</h2>
          <p className="text-[#ccc] text-sm">{description}</p>
          <button className="w-[120px] border-solid border-white border bg-transparent rounded-[50px] px-[20px] py-[8px] cursor-pointer mt-[20px] text-white">
            hover me
          </button>
        </div>
        <div className="w-full h-full rounded-[15px] absolute bg-white text-[#333] px-[40px] py-[20px] rotate-y-180 backfaceVisibility-hidden">
          <Image src={wavinghand} alt="" width={120} />
          <a href={link}>
            <BsGithub className="text-black text-3xl absolute right-6 top-6" />
          </a>
          <h1 className="text-[50px] leading-[55px] mb-[10px]">
            {name.split(" ")[0]}{" "}
            <span className="font-normal">{name.split(" ")[1]}</span>
          </h1>
          <p className="text-sm">{detail}</p>
          <div className="flex items-center mt-[30px]">
            <div
              className="flex-1 text-center text-[#555] text-[12px] relative before:content-none 
            before:w-[1.5px] before:h-[20px] before:bg-[#7800ad] before:absolute before:top-[5px] before:right-0"
            >
              <h2 className="text-[20px]">{skills[0]}</h2>
              <p className="mt-[5px] after:hidden">Mainly</p>
            </div>
            <div
              className="flex-1 text-center text-[#555] text-[12px] relative before:content-none 
            before:w-[1.5px] before:h-[20px] before:bg-[#7800ad] before:absolute before:top-[5px] before:right-0"
            >
              <h2 className="text-[20px]">{skills[1]}</h2>
              <p className="mt-[5px] after:hidden">Used</p>
            </div>
            <div
              className="flex-1 text-center text-[#555] text-[12px] relative before:content-none 
            before:w-[1.5px] before:h-[20px] before:bg-[#7800ad] before:absolute before:top-[5px] before:right-0"
            >
              <h2 className="text-[20px]">{skills[2]}</h2>
              <p className="mt-[5px] after:hidden">Technology</p>
            </div>
          </div>
          <div className="flex items-center mt-[30px]">
            <button className="mr-3">others:</button>
            <ImHtmlFive className="text-2xl mx-2" />
            <SiCss3 className="text-2xl mx-2" />
            <SiJavascript className="text-2xl mx-2" />
            <SiTypescript className="text-2xl mx-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomCard;
