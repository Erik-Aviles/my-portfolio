import React from "react";
import { motion } from "framer-motion";
import { SubTitle } from "./Titles";

const FramerImage = motion.img;
const testimonialData = [
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    name: "Katty Aviles",
    role: "Gerente",
    company: "DailyGPS",
    testimony: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
    avatar: "/images/testimonials/testimony-1.jpg",
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    name: "Lisseth Bodero",
    role: "Asistente de gerencia",
    company: "Bodero Racing Development",
    testimony: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
    avatar: "/images/testimonials/testimony-1.jpg",
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    name: "Erika Aviles",
    role: "Freelance",
    company: "Betimes Company",
    testimony: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
    avatar: "/images/testimonials/testimony-1.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col md:gap-4 gap-8 ">
      <SubTitle title="Testimonios" />
      <div className="flex flex-row max-w-4xl mx-auto md:flex-col gap-9">
        {testimonialData.map((item) => (
          <article
            key={item?.id}
            className="w-full flex flex-col items-center gap-4 relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-[#f4f0e5] shadow-2xl p-8 dark:bg-dark dark:border-light  lg:p-4 xs:rounded-2xl xs:rounded-br-3xl "
          >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <FramerImage
              loading="lazy"
              src={item?.avatar}
              alt={item?.role}
              className="w-3/4 rounded-full "
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              priority="true"
              sizes={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="w-full text-2xl font-bold dark:text-light sm:text-sm lg:text-xl">
                {item?.name}
              </h2>
              <p className="italic dark:text-light">{item?.testimony}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
