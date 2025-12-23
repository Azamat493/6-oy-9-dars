import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Britlex from "../../assets/images/Britlex.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbar = [
    { id: 1, key: "home", path: "/" },
    { id: 2, key: "skills", path: "/#features" },
    { id: 3, key: "about", path: "/#about" },
    { id: 4, key: "pricing", path: "/#pricing" },
    { id: 5, key: "contacts", path: "/#contact" },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setIsMenuOpen(false);
  };

  const scrollToSection = (path) => {
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="max-w-[1440px] relative sticky gap-5 top-0 z-50 bg-white w-[90%] m-auto flex items-center justify-between py-4 px-4">
      <img src={Britlex} alt="Britlex Logo" className="" />

      <nav className="hidden md:flex flex-wrap items-center gap-8">
        <ul className="flex gap-6">
          {navbar.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {t(`navbar.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="px-3 py-1.5 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.5rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1em 1em",
            paddingRight: "2rem",
          }}
        >
          <option value="en"> {t("languages.english")}</option>
          <option value="uz"> {t("languages.uzbek")}</option>
          <option value="ru"> {t("languages.russian")}</option>
        </select>
      </nav>

      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="43"
          height="24"
          viewBox="0 0 43 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all"
        >
          <rect
            width="42.3529"
            height="4.23529"
            rx="1"
            fill="#39515E"
            className={`transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <rect
            y="9.88235"
            width="42.3529"
            height="4.23529"
            rx="1"
            fill="#39515E"
            className={`transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
            style={{
              transformOrigin: "center",
              ...(isMenuOpen
                ? { transform: "rotate(45deg) translateY(6px)" }
                : {}),
            }}
          />
          <rect
            y="19.7647"
            width="29.957"
            height="4.23529"
            rx="1"
            fill="#39515E"
            className={`transition-all duration-300 ${
              isMenuOpen ? "rotate-[-45deg] -translate-y-2.5" : ""
            }`}
            style={{
              transformOrigin: "center",
              ...(isMenuOpen
                ? { transform: "rotate(-45deg) translateY(-6px)" }
                : {}),
            }}
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-40 flex flex-col md:hidden shadow-lg border-t">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 flex-1 px-6">
            {navbar.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
                className="text-2xl text-gray-800 font-semibold hover:text-blue-600 transition-colors"
              >
                {t(`navbar.${item.key}`)}
              </a>
            ))}
          </div>

          <div className="px-6 mt-5 pb-6">
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="en"> {t("languages.english")}</option>
              <option value="uz"> {t("languages.uzbek")}</option>
              <option value="ru"> {t("languages.russian")}</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
