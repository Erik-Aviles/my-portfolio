import Link from "next/link";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const FramerImage = motion.img;

export const FeaturedProject = ({
  type,
  title,
  summary,
  src,
  link,
  github,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-[#f4f0e5] shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl 
      xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          loading="lazy"
          src={src}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base capitalize">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light  sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="dark:text-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 bg-dark rounded-lg text-light 
              p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:text-dark
            dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base"
          >
            Visitar proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

export const Project = ({ type, title, src, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center  border border-solid border-dark  bg-[#f4f0e5] rounded-2xl relative  dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-t-2xl"
      >
        <FramerImage
          loading="lazy"
          src={src}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between p-4">
        <span className="text-primary  dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between dark:text-light">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base "
          >
            Visitar
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
