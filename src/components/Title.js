import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <h2 className={`font-bold text-6xl mt-24 w-full text-center${className}`}>
      {title}
    </h2>
  );
};
export default Title;
