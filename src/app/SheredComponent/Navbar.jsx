"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Rectangle 2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/foods" },
    { name: "Add Food", href: "/add-food" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/95 backdrop-blur-md shadow-lg" : "bg-gray-950"}`}>
      <nav className="h-20 flex items-center text-gray-100 justify-between w-full md:w-10/12 px-4 md:px-8 mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 focus:outline-none">
          <Image src={logo} alt="Meal Mate" className="w-7 h-7" />
          <h1 className="font-semibold text-2xl text-[#FFB200]">Meal <span className="text-white">Mate</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-10 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`cursor-pointer transition hover:text-[#f9b233] ${isActive(link.href) ? "text-[#FFB200] font-bold" : "text-gray-100"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href='/login' className="flex items-center gap-2 px-6 py-1.5 border-2 border-[#f9b233] rounded-full text-[#f9b233] text-[16px] font-medium hover:bg-[#f9b233] hover:text-black transition ml-7">
            <FaArrowRight className="text-[14px]" />
            Login
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none p-2"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-gray-950 border-t border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center py-6 gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <Link
                href={link.href}
                className={`cursor-pointer transition hover:text-[#f9b233] text-lg ${isActive(link.href) ? "text-[#FFB200] font-bold" : "text-gray-100"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li onClick={() => setIsOpen(false)}>
            <Link href='/login' className="flex items-center gap-2 px-8 py-2 border-2 border-[#f9b233] rounded-full text-[#f9b233] text-[16px] font-medium hover:bg-[#f9b233] hover:text-black transition mt-2">
              <FaArrowRight className="text-[14px]" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
