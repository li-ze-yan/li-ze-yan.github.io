"use client";

import { personInfo } from "@/app/constants";
import { styles } from "@/app/constants/styles";
import { fadeIn, textVariant, zoomIn } from "@/app/utils/motion";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import AboutSvg from "@/public/picture/about.svg";
import Image from "next/image";

const Banner = () => {
  // 文本
  const [text, setText] = useState("");
  // 文本数组
  const [textArr, setTextArr] = useState([
    "Vector Mandalorian",
    "Web Developer",
    "React Developer",
  ]);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const period = 2000;

  const tick = () => {
    let i = loopNum % textArr.length;
    let fullText = textArr[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  return (
    <section
      className={classNames(
        styles.paddingX,
        "relative w-full m-auto max-w-7xl lg:mt-[120px] mt-0 sm:flex block "
      )}
    >
      <div className="sm:w-4/7 w-full h-full">
        <motion.p
          className={classNames(styles.heroHeadText, "text-white ")}
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
        >
          Hi, I&apos;m &nbsp;
          <span>
            <span className="border-r-4 border-[#666] ">{text}</span>
          </span>
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="tracking-wider font-normal mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {personInfo}
        </motion.p>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="font-extrabold text-white mt-8 cursor-pointer flex items-center"
        >
          <span>Let&apos;s Connect </span>
          <BsArrowRightCircle className="inline text-2xl animate-pulse ml-4" />
        </motion.div>
      </div>
      <motion.div
        className="sm:w-3/7 w-full flex items-center justify-end"
        variants={fadeIn("left", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={AboutSvg}
          className="sm:ml-24 ml-0 mt-20 animate-bounce-slow"
          alt={""}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
