"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white fixed top-0 left-0 w-full bg-zinc-500 p-4 flex items-center justify-between z-10">
      <h1>A3B</h1>
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <ul className="navbar-menu absolute right-0 top-full mt-2 mr-2 bg-zinc-600 p-2 rounded shadow-lg">
          <li>
            <a href="#home" className="block px-4 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#store" className="block px-4 py-2">
              Store
            </a>
          </li>
          <li>
            <a href="#about" className="block px-4 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
