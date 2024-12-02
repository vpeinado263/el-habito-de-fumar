import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
        <h1>El Hábito de fumar</h1>
        <nav>
            <Link href='/'>Inicio</Link> | <Link href='/about'>Aceca de la adiccion</Link>
        </nav>
    </header>
  );
};
export default Header;
