import NavBar from "./NavBar";
import Hireme from "./Hireme";
import useActions from "./hooks/useActions";
import ButtonHamburger from "./ButtonHamburger";

const Header = () => {
  const { changeNavbar, navbar } = useActions();

  return (
    <header className="relative w-full p-7 lg:pr-0 lg:py-0 font-medium flex items-center justify-between dark:text-light z-10">
      <ButtonHamburger changeNavbar={changeNavbar} navbar={navbar} />
      <NavBar changeNavbar={changeNavbar} navbar={navbar} />
      <Hireme className="hidden lg:block" />
    </header>
  );
};

export default Header;
