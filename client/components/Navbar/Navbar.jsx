import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo ls.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const hasSectionId = (id) => {
    const section = document.getElementById(id);
    return !!section;
  };

  const handleLinkClick = (id) => {
    toggleNavbar();
    if (hasSectionId(id)) {
      scroll.scrollTo(`#${id}`, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <nav className="flex justify-between p-2 fixed w-full bg-white z-10 top-0">
      <Link href="/">
        <Image src={logo} width={30} alt="LavaSolution logo" />
      </Link>
      <p className="font-bold text-3xl">LavaSolution</p>
      <MenuRoundedIcon className="text-4xl" onClick={toggleNavbar} />
      <div className={isOpen ? "menu" : "closed-menu"}>
        <CloseRoundedIcon className="close-icon" onClick={toggleNavbar} />
        <ul>
          <Link href="/#nosotros">
            <li>Nosotros</li>
          </Link>
          <Link href="/#productos">
            <li>Productos</li>
          </Link>
          <Link href="/#repuestos">
            <li>Repuestos</li>
          </Link>
          <Link href="/#reparacion">
            <li>Reparación</li>
          </Link>
          <Link href="/#contactos">
            <li>Contactos</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
