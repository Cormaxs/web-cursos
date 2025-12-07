// components/Header.js

import Link from 'next/link';

const Menu = () => {
  return (
    <header >
      <nav>
        <Link href="/">
          Inicio
        </Link>
        <Link href="/cursos/all-courses">
          Cursos
        </Link>
        <Link href="/contacto">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Menu;