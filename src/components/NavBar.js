import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon } from "./Icons";
import { motion } from "framer-motion";

//  links
const links = [
  { name: "Inicio", path: "/", icon: "j", className: "mr-4" },
  { name: "Sobre mi", path: "/about", icon: "j", className: "mx-4" },
  { name: "Servicios", path: "/services", icon: "j", className: "mx-4" },
  { name: "Portafolio", path: "/portfolio", icon: "j", className: "mx-4" },
  { name: "Contactos", path: "/contacts", icon: "j", className: "ml-4" },
];
const linksSocialMedia = [
  {
    name: "Twiter",
    path: "https://twitter.com/",
    icon: <TwitterIcon />,
    className: "w-6 mr-3",
  },
  {
    name: "GitHub",
    path: "https://github.com/Erik-Aviles",
    icon: <GithubIcon />,
    className: "w-6 mx-3",
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/erikaviles/",
    icon: <LinkedInIcon />,
    className: "w-6 mx-3",
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/",
    icon: <InstagramIcon />,
    className: "w-6 ml-3",
  },
];

const NavBar = () => {
  const router = useRouter();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${item.className} relative group`}
          >
            {item.name}
            <span
              className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                router.asPath === item.path ? "w-full" : "w-0"
              }`}
            >
              &nbsp;
            </span>
          </Link>
        ))}
      </nav>
      <nav className="flex items-center justify-center">
        {linksSocialMedia.map((item, index) => (
          <motion.a
            key={index}
            href={item.path}
            target={"_black"}
            className={item.className}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
