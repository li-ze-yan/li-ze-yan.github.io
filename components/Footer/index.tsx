"use client";

import { styles } from "@/app/constants/styles";
import classNames from "classnames";
import { useState } from "react";
import { BsGithub, BsTwitter, BsWechat, BsYoutube } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import { useUserStore } from "@/app/store/user";

const Footer = () => {
  // 用户信息
  const userStore = useUserStore();
  const [icons] = useState([
    {
      name: "bilibili",
      icon: <SiBilibili />,
      link: "https://space.bilibili.com/142226262?spm_id_from=333.1007.0.0",
    },
    {
      name: "github",
      icon: <BsGithub />,
      link: "https://github.com/li-ze-yan",
    },
    {
      name: "twitter",
      icon: <BsTwitter />,
      link: "https://twitter.com/lzy_victor",
    },
    {
      name: "youtube",
      icon: <BsYoutube />,
      link: "https://www.youtube.com/channel/UCQ8-LmimPit4UFRNm0QlrhQ",
    },
  ]);

  const [menus] = useState([
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Work",
      link: "work",
    },
    {
      name: "Project",
      link: "project",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ]);

  return (
    <motion.div
      variants={fadeIn("top", "", 0.1, 2)}
      initial="hidden"
      whileInView="show"
      className={classNames(
        styles.paddingX,
        "relative w-full py-5 bg-[#3586ff] min-h-[150px] mt-60"
      )}
    >
      <div>
        <div className="absolute -top-[100px] left-0 w-full h-[100px] z-[1000px] opacity-100 bottom-0 bg-footer-pattern bg-wave animate-wave"></div>
        <div className="absolute -top-[100px] left-0 w-full h-[100px] z-[999px] opacity-50 bottom-[10px] bg-footer-pattern bg-wave animate-wave-reverse"></div>
        <div className="absolute -top-[100px] left-0 w-full h-[100px] z-[1000px] opacity-20 bottom-[25px] bg-footer-pattern bg-wave animate-wave-slow"></div>
        <div className="absolute -top-[100px] left-0 w-full h-[100px] z-[999px] opacity-70 bottom-[35px] bg-footer-pattern bg-wave animate-wave-reverse-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <ul className="relative flex justify-center items-center my-4 list-none">
          {icons.map((item) => {
            return (
              <li key={`footer-${item.name}`}>
                <a
                  href={item.link}
                  className="text-white mx-4 inline-block duration-500 text-3xl hover:-translate-y-2"
                >
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="relative flex justify-center items-center my-4 list-none">
          {menus.map((item) => {
            return (
              <li
                key={`footer-menu-${item.name}`}
                onClick={() => {
                  if (item.link === "") {
                    userStore.saveAnchorPoint("");
                    window.scrollTo(0, 0);
                  } else {
                    userStore.saveAnchorPoint(item.name);
                  }
                }}
              >
                <a
                  href={`#${item.link}`}
                  className="text-white md:mx-4 mx-[4px] inline-block duration-500 text-xl hover:-translate-y-2 hover:text-opacity-100 text-opacity-75"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <p className=" text-center text-white my-4 text-base">
          ©2023 Online Personal Website | All Rights Reserved
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
