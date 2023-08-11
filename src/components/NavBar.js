import React from "react";
import Logo from "./Logo";
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon } from "./Icons";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import DarkMode from "./DarkMode";

//  links
const links = [
  { title: "Inicio", href: "/", icon: "j", className: "mr-4" },
  { title: "Sobre mi", href: "/about", icon: "j", className: "mx-4" },
  { title: "Servicios", href: "/services", icon: "j", className: "mx-4" },
  { title: "Proyectos", href: "/projects", icon: "j", className: "mx-4" },
  { title: "Contactos", href: "/contacts", icon: "j", className: "ml-4" },
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
  {
    title: "Instagram",
    href: "/",
    icon: <InstagramIcon />,
    className: "w-6 mx-3",
  },
];

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        {links.map((item, index) => (
          <CustomLink
            key={`id${index}${item.title}`}
            href={item.href}
            title={item.title}
            className={item.className}
          />
        ))}
      </nav>
      <nav className="flex items-center justify-center">
        {linksSocialMedia.map((item, index) => (
          <motion.a
            key={index}
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
