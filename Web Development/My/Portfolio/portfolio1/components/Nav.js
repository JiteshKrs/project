import Link from "next/link";
import { useState } from "react";

import navStyles from "../styles/Nav.module.scss";

const Nav = () => {

  const [navOpen, setNavbarOpen] = useState(false);
  const toggleHamburger = () => {
    setNavbarOpen(!navOpen);
    console.log(navOpen);
  }

  return (
    <nav className={navStyles.navContainer}>
      <h4>
        <a href="#">Jitesh Kumar</a>
      </h4>

      {/* hamburger icon */}
      <div className={navStyles.hamburger} onClick={toggleHamburger} >
        <span className={ navOpen ?navStyles.bar1  : navStyles.bar}></span>
        <span className={navOpen ?navStyles.bar2  : navStyles.bar}></span>
        <span className={navOpen ?navStyles.bar3  : navStyles.bar}></span>
      </div>

      <ul className={navOpen ? navStyles.active : navStyles.inactive}>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
