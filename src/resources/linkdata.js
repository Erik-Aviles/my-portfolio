import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

export const links = [
  { title: "Inicio", href: "/", icon: "j" },
  { title: "Sobre mi", href: "/about", icon: "j" },
  { title: "Proyectos", href: "/projects", icon: "j" },
  { title: "Contactos", href: "/contacts", icon: "j" },
];
export const linksSocialMedia = [
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
