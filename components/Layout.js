// components/Layout.js

import Menu from './Menu';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5933305559914134"
     crossorigin="anonymous"></script>
    <div>
      <Menu />
      <main>
        {/* Aquí se inyecta el contenido de la página actual (ej. index.js, cursos.js) */}
        {children}
      </main>
    <Footer/>
    </div></>
  );
};

export default Layout;