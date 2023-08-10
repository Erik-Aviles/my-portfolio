import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-certer justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
        <div className="flex items-center">
          Hecho con mucho{" "}
          <span className="text-primary text-2xl px-1">&#9825;</span>
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
