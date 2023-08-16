import React, { useState } from "react";
import Logo from "./Logo";
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon } from "./Icons";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import DarkMode from "./DarkMode";
import ButtonHamburger from "./ButtonHamburger";
import CustomMobileLink from "./CustomMobileLink";

//  links
const links = [
  { title: "Inicio", href: "/", icon: "j" },
  { title: "Sobre mi", href: "/about", icon: "j" },
  { title: "Servicios", href: "/services", icon: "j" },
  { title: "Proyectos", href: "/projects", icon: "j" },
  { title: "Contactos", href: "/contacts", icon: "j" },
];
const linksSocialMedia = [
  {
    title: "Twiter",
    href: "/",
    icon: <TwitterIcon />,
    className: "w-6 mr-3",
  },
  {
    title: "GitHub",
    href: "https://github.com/Erik-Aviles",
    icon: <GithubIcon />,
    className: "w-6 mx-3",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/erikaviles/",
    icon: <LinkedInIcon />,
    className: "w-6 mx-3",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const anchoPantalla = typeof window !== "undefined" ? window.innerWidth : 0;
  // console.log(anchoPantalla);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" relative w-full px-32 pt-8 font-medium flex items-center justify-between dark:text-light z-10 xl:px-16 md:px-12 sm:px-8 sm:pt-8 sm:pb-14">
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
        <nav className="flex items-center justify-center">
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
          <nav className="flex items-center justify-center flex-wrap mt-2 text-light dark:text-dark">
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

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
