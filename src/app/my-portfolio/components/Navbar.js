import "../styles/Navbar.css";

export const metadata = {
  title: "Home",
};

export default function Navbar() {
  const navs = [
    { id: 0, href: "/home", name: "Home" },
    { id: 1, href: "/resume", name: "Resume" },
    { id: 2, href: "/about", name: "About" },
    { id: 3, href: "/contact", name: "Contact" },
    { id: 4, href: "/blog", name: "Blog" },
    { id: 5, href: "/contents", name: "Content Creation" },
  ];
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Abdullahi H Mu'az</div>

        <ul className="nav-menu" id="navMenu">
          {navs.map((nav) => (
            <li key={nav.id} className="active">
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>

        <div className="some">
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon" id="themeIcon"></i>
          </button>
          <button
            className="mobile-menu-toggle"
            id="mobileToggle"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
