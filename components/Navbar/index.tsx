"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constants";
import { styles } from "@/app/constants/styles";
import { logo, menu, close } from "@/public/picture";
import classNames from "classnames";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import { useUserStore } from "@/app/store/user";

const Navbar = () => {
  // 移动端下菜单的显隐
  const [toggle, setToggle] = useState(false);
  // 用户信息
  const userStore = useUserStore();

  return (
    <motion.nav
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className={classNames(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            userStore.saveAnchorPoint("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Vector &nbsp;
            <span className="md:block hidden"> | JavaScript Coder</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                userStore.anchorPoint === nav.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => userStore.saveAnchorPoint(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={classNames(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={classNames(
                    userStore.anchorPoint === nav.title
                      ? "text-white"
                      : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    setToggle(!toggle);
                    userStore.saveAnchorPoint(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
