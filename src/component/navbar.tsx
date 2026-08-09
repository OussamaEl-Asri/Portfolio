import { NavLink } from "react-router";
import logo from "../assets/icons/portofolioIcon.svg";

export function NavBar() {
  const links = [
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="w-full px-5 py-5 sm:px-8 lg:px-10">
      <nav className="flex w-full items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Oussama El-Asri" className="h-6 w-6" />

          <span className="text-lg font-medium text-white">
            Oussama El-Asri
          </span>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink
            key="home"
            to="/"
            end
            className={({ isActive }) =>
              `text-base transition-colors duration-200 ${
                isActive ? "text-white" : "text-[#ABB2BF] hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          {links.map(({ label, to }) => (
            <a
              className="text-base transition-colors duration-200 text-[#ABB2BF] hover:text-white"
              href={to}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu button will go here later */}
        <button
          type="button"
          className="text-[#ABB2BF] md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
