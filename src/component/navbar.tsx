import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/icons/portofolioIcon.svg";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="relative w-full px-5 py-5 sm:px-8 lg:px-10">
      <nav className="flex w-full items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Oussama El-Asri" className="h-6 w-6" />

          <span className="text-lg font-medium text-white">
            Oussama El-Asri
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink
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
              key={label}
              href={to}
              className="text-base transition-colors duration-200 text-[#ABB2BF] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-[#ABB2BF] md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 px-5 sm:px-8">
          <div className="border-t border-[#ABB2BF]/20 bg-[#282C33] pt-4 pb-5">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                end
                onClick={() => setIsMenuOpen(false)}
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
                  key={label}
                  href={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base transition-colors duration-200 text-[#ABB2BF] hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
