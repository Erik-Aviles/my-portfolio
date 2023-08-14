import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <h2
      className={`font-bold text-8xl mt-24 w-full text-center sm:text-4xl md:text-6xl ${className}`}
    >
      {title}
    </h2>
  );
};
export default Title;
