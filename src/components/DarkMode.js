import React from "react";
import { MoonIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const DarkMode = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="ml-3 p-1 flex items-center justify-center border border-solid border-dark rounded-sm hover:bg-dark hover:text-light dark:border-light"
    >
      {mode === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button>
  );
};

export default DarkMode;