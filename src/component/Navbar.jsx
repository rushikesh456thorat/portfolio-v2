import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Home, Info, BookOpen, Code } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Navbar Top */}
      <nav className="h-16 sm:h-20 w-full  bg-white dark:bg-black flex justify-between items-center px-4 sm:px-20 z-50">
        <div className=" sm:text-xl font-bold">
          <span className="text-2xl font-serif">RT<span className="text-blue-400"><strong>.</strong></span></span>
        </div>

        <ul className="hidden sm:flex gap-12 text-sm sm:text-base">
          <li><Link className="hover:border-b-3" to="/" >Home</Link></li>
          <li><Link className="hover:border-b-3" to="/about" >About</Link></li>
          <li><Link className="hover:border-b-3" to="/blog">Blog</Link></li>
          <li><Link className="hover:border-b-3" to="/projects">Projects</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="sm:hidden p-2 rounded-md border border-gray-400 dark:border-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 border border-gray-400 dark:border-gray-600 rounded-full"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-10 text-xl sm:text-2xl font-semibold items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <Home size={22} /> Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="flex items-center gap-2">
            <Info size={22} /> About
          </Link>
          <Link to="/blogs" onClick={closeMenu} className="flex items-center gap-2">
            <BookOpen size={22} /> Blogs
          </Link>
          <Link to="/projects" onClick={closeMenu} className="flex items-center gap-2">
            <Code size={22} /> Projects
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
