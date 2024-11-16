import React from "react";

export const Title = ({ title, className = "" }) => {
  return (
    <h2
      className={`font-bold text-8xl mt-24 w-full text-center sm:text-4xl md:text-6xl ${className}`}
    >
      {title}
    </h2>
  );
};

export const SubTitle = ({ title, className = "" }) => {
  return (
    <div className="w-full px-2 flex gap-16 items-center md:justify-center">
      <h3
        className={`whitespace-nowrap text-xl my-5 w-auto text-primary dark:text-primaryDark md:text-2xl ${className}`}
      >
        {title}
      </h3>
      <div className="w-full h-[2px] bg-primary dark:bg-primaryDark md:hidden" />
    </div>
  );
};
