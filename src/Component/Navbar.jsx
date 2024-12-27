import React, { useState, useEffect  } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Maps", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex flex-wrap items-center py-6 justify-between mx-14">
          {/* Logo */}
          <img
            className="w-28"
            src="public/assets/logo-dark.png"
            alt="Logo"
          />

          {/* Menu toggle button for mobile */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden ml-3 text-yellow-500 border border-yellow-500 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-9 inline-flex items-center justify-center"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          {/* Menu items */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:block w-full md:w-auto`}
          >
            <ul
              className={`flex flex-col md:flex-row justify-center items-center md:space-x-11 mt-4 md:mt-0 md:text-sm md:font-medium ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="font-extralight block pl-3 pr-4 py-2 md:p-0"
                >
                  <a href={item.href} className="hover:text-yellow-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
