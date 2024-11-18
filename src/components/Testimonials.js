import React from "react";
import { motion } from "framer-motion";
import { SubTitle } from "./Titles";
import { testimonialData } from "@/resources/testimonialdata";

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col md:gap-4 gap-8 ">
      <SubTitle title="Testimonios" />
      <div className="flex flex-row max-w-4xl mx-auto md:flex-col gap-9">
        {testimonialData?.map((item, index) => {
          const opacity = [90, 60, 30, 10];
          return (
            <article
              key={item?.id}
              className={`w-full flex flex-col items-center gap-4 relative shadow-2xl p-8 lg:p-4 rounded-br-2xl xs:rounded-2xl xs:rounded-br-3xl rounded-3xl border border-solid border-dark dark:border-light bg-primary/${
                opacity[index] || 10
              } dark:bg-black`}
            >
              <motion.img
                loading="lazy"
                src={item?.avatar}
                alt={item?.role}
                className="w-[30%] rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                priority="true"
                sizes={100}
              />
              <div className="relative group flex flex-col gap-2">
                <h2 className="w-full text-center text-2xl font-bold mb-2 pb-2 sm:text-sm lg:text-xl border-b-2 border-dark dark:border-light group-hover:border-light dark:group-hover:border-primary">
                  {item?.name}
                </h2>
                <p className="italic">{item?.testimony}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
