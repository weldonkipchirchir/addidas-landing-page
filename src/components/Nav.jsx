import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className={` ${showNav ? "justify-center flex z-10" : "flex items-center justify-between max-container"}`}>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul
          className={`flex flex-row items-start justify-around flex-1 gap-16 ${showNav ? "max-lg:flex-col items-end pt-12":"max-lg:hidden"}`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleNav}
            style={{ cursor: "pointer" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav