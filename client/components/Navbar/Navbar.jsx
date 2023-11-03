import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo ls.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-scroll";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
    <>
      <nav className="flex justify-between p-2 fixed w-full bg-white z-10 top-0 responsive">        
        <Link smooth={true} to="nosotros" duration={500}>
          <Image src={logo} width={30} alt="LavaSolution logo" />
        </Link>        
        <p className="font-bold text-3xl">LavaDelta</p>
        <MenuRoundedIcon
          className="text-4xl cursor-pointer"
          onClick={toggleNavbar}
        />
        <div className={isOpen ? "menu" : "closed-menu"}>
          <CloseRoundedIcon className="close-icon" onClick={toggleNavbar} />
          <ul>
            <Link smooth={true} to="nosotros" duration={500}>
              <li>Nosotros</li>
            </Link>
            <Link smooth={true} to="productos" duration={500}>
              <li>Productos</li>
            </Link>
            <Link smooth={true} to="repuestos" duration={500}>
              <li>Repuestos</li>
            </Link>
            <Link smooth={true} to="reparacion" duration={500}>
              <li>Plan Canje</li>
            </Link>
            <Link smooth={true} to="envios" duration={500}>
              <li>Envíos</li>
            </Link>
          </ul>
        </div>
      </nav>
      <nav className="flex justify-between p-2 fixed w-full bg-white z-10 top-0 desktop">
        <div className="flex">
          <Link className="cursor-pointer" smooth={true} duration={500} to="nosotros">
            <Image src={logo} width={30} alt="LavaSolution logo" />
          </Link>
          <p className="font-bold text-3xl">LavaDelta</p>
        </div>
        <div className="text-xl font-bold cursor-pointer">
          <Link className="mx-2" smooth={true} to="nosotros" duration={500}>
            Nosotros
          </Link>
          <Link className="mx-2" offset={-50} smooth={true} to="productos" duration={500}>
            Productos
          </Link>
          <Link className="mx-2" offset={-50} smooth={true} to="repuestos" duration={500}>
            Repuestos
          </Link>
          <Link className="mx-2" smooth={true} to="reparacion" duration={500}>
            Plan Canje
          </Link>
          <Link className="mx-2" smooth={true} to="envios" duration={500}>
            Envíos
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
