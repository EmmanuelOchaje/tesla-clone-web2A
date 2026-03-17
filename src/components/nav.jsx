import { useState } from "react";
import logo from "../../public/assets/logo.svg";
import user from "../../public/assets/user.png";
import world from "../../public/assets/world.png";
import question from "../../public/assets/question.png";

const navLinks = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 h-14 transition-all duration-300 text-black bg-white`}
      >
        <img src={logo} alt="" className="l" />

        <ul className="hidden md:flex ml-20 items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-sm font-medium px-3 py-2 rounded">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          {[world, question, user].map((item, index) => (
            <a key={index} href="">
              <img src={item} alt="" className="w-6 h-6" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#171a20]/98 flex flex-col items-start justify-center px-10 gap-6">
          <button
            className="absolute top-5 right-6 text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          {[...navLinks, "Support", "Account"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-2xl font-light hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
