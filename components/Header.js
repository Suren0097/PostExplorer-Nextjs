"use client";

import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const navbarRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useClickOutside(navbarRef, () => {
    setMenuOpen(false);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">
          <Link href="/">PostExplorer</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="part-of-ref sm:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div
          ref={navbarRef}
          className={`absolute sm:static top-[64px] left-0 w-full bg-blue-500 sm:w-auto sm:bg-transparent sm:flex sm:items-center ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="sm:flex sm:space-x-4 text-center sm:text-left">
            <li>
              <Link
                href="/"
                className="block py-2 px-2 hover:bg-blue-600 sm:hover:bg-transparent"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="block py-2 px-2 hover:bg-blue-600 sm:hover:bg-transparent"
                onClick={toggleMenu}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-2 hover:bg-blue-600 sm:hover:bg-transparent"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="block py-2 px-2 hover:bg-blue-600 sm:hover:bg-transparent"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-2 hover:bg-blue-600 sm:hover:bg-transparent"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
