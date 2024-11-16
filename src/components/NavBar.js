import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import DarkMode from "./DarkMode";
import ButtonHamburger from "./ButtonHamburger";
import CustomMobileLink from "./CustomMobileLink";
import { links, linksSocialMedia } from "@/resources/linkdata";
import Hireme from "./Hireme";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const anchoPantalla = typeof window !== "undefined" ? window.innerWidth : 0;
  // console.log(anchoPantalla);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative w-full p-7 lg:pr-0 lg:py-0 font-medium flex items-center justify-between dark:text-light z-10">
      <ButtonHamburger handleClick={handleClickOpen} isOpen={isOpen} />
      <div className="w-full flex justify-between items-center lg:hidden ">
        <nav className="flex items-center justify-between gap-4 text-sm">
          {links.map((item, index) => (
            <CustomLink
              key={`id${index}${item.title}`}
              title={item.title}
              href={item.href}
              className={item.className}
            />
          ))}
        </nav>
        <Logo />
        <nav className="flex items-center justify-center gap-4">
          {linksSocialMedia.map((item, index) => (
            <motion.a
              key={`id${index}${item.title}`}
              href={item.href}
              target={"_black"}
              className={item.className}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
          <DarkMode />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md
      py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            {links.map((item, index) => (
              <CustomMobileLink
                key={`id${index}${item.title}`}
                href={item.href}
                title={item.title}
                toggle={handleClickOpen}
                className=""
              />
            ))}
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-4 mt-2 text-light dark:text-dark">
            {linksSocialMedia.map((item, index) => (
              <motion.a
                key={`id${index}${item.title}`}
                href={item.href}
                target={"_black"}
                className={`${item.className} sm:mx-1`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
            <DarkMode />
          </nav>
        </motion.div>
      ) : null}
      <Hireme className="hidden lg:block" />
    </header>
  );
};

export default NavBar;
