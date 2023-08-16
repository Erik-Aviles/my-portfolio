import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light xs:text-xs sm:text-sm lg:text-base xl:text-sm xl:py-0">
      <Layout className="py-16 flex items-center justify-around  xs:gap-1 lg:flex-col lg:gap-2">
        <span>
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
        <div className="flex items-center gap-1 ">
          Hecho con mucho{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          por&nbsp;
          <Link
            href="/"
            targer="_black"
            className="underline underline-offset-2 "
          >
            Erika Aviles
          </Link>
        </div>
        <div>
          <Link
            href="/"
            targer="_black"
            className="underline underline-offset-2 "
          >
            Dime Hola!
          </Link>
        </div>
      </Layout>
    </footer>
  );
};
export default Footer;
