import { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <header>
        {isMobile && (
          <div className="mobile-nav">
            <button className="nav__menu-toggle" onClick={handleMenuToggle}>
              <img src="algo.png" alt="Menu Toggle" />
            </button>
            <nav className={`nav__menu ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li className="nav__item">
                  <a href="/" className="nav__item">
                    Inicio
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/groups" className="nav__item">
                    Grupos
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/quiz" className="nav__item">
                    Avance Personal
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/login" className="nav__item">
                    Logo
                  </a>
                </li>
                <li className="nav__item">
                  <button className="nav__menu-toggle" onClick={closeMenu}>
                    Esconder Menu
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {!isMobile && (
          <nav className="nav">
            <div className="nav__container">
              <h1>Logo</h1>
              <ul>
                <li className="nav__item">
                  <a href="/" className="nav__item">
                    Inicio
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/groups" className="nav__item">
                    Grupos
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/quiz" className="nav__item">
                    Avance Personal
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/login" className="nav__item">
                    Logo
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
