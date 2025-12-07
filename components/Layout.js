// components/Layout.js

import Menu from './Menu';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <main>
        {/* Aquí se inyecta el contenido de la página actual (ej. index.js, cursos.js) */}
        {children}
      </main>
    <Footer/>
    </div>
  );
};

export default Layout;