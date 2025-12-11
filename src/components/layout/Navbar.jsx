import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      // Migrate old "retro" theme to "emerald"
      if (savedTheme === "retro") {
        localStorage.setItem("theme", "emerald");
        return "emerald";
      }
      return savedTheme || "emerald";
    }
    return "emerald";
  });

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dim");
    } else {
      setTheme("emerald");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html")?.setAttribute("data-theme", localTheme || "emerald");
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-300 z-50">
      <div className="navbar bg-base-300 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden" aria-label="Open navigation menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              role="menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mb-14">
              <li role="menuitem"><Link to="/" className="text-xl font-bold">Home</Link></li>
              <li role="menuitem"><Link to="/apartments" className="text-xl font-bold">Apartments</Link></li>
              <li role="menuitem"><Link to="/bio" className="text-xl font-bold">Bio</Link></li>
              {/*<li role="menuitem"><Link to="/testimonials" className="text-xl font-bold">Testimonials</Link></li>*/}
              <li role="menuitem"><Link to="/contact" className="text-xl font-bold">Contact</Link></li>
            </ul>
          </div>
       <Link to="/apartments" className="btn btn-ghost text-xl flex items-center">
        <span className="hidden sm:inline">Johnny Peña - Real Estate</span>
      </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-medium sm:text-lg" role="menubar">
            <li role="menuitem"><Link to="/apartments">Apartments</Link></li>
            <li role="menuitem"><Link to="/bio">Bio</Link></li>
            {/*<li role="menuitem"><Link to="/testimonials">Testimonials</Link></li>*/}
            <li role="menuitem" className="hidden">
            <a href="https://shop.arcomelody.com" target="_blank" rel="noopener noreferrer">Merch</a>
            </li>
            <li role="menuitem"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <span className="ml-2 mr-2">🌞</span>
            <input
              type="checkbox"
              className="toggle toggle-sm md:toggle-md"
              onChange={handleToggle}
              checked={theme === "dim"}
              aria-label="Toggle dark mode theme"
            />
            <span className="mr-2 ml-2">🌚</span>
          </div>
        </div>
      </div>
    </nav>
  );
}