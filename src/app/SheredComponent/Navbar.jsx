"use client";
import React, { useState, useEffect, use } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Rectangle 2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaPlus,
  FaUtensils,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    { name: "About", href: "/about" },
  ];

  const isActive = (path) => pathname === path;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! ",
          error,
        });
      });
  };

  return (
    <div
      className={`sticky top-0 left-0 w-full z-100 transition-all bg-black duration-300 ${scrolled
          ? "bg-gray-950  backdrop-blur-md shadow-lg"
          : "bg-gray-950"
        }`}
    >
      <nav className="h-20 flex items-center justify-between w-full md:w-10/12 px-4 md:px-8 mx-auto">
        <Link href="/" className="flex items-center gap-1.5 focus:outline-none">
          <Image src={logo} alt="Meal Mate" className="w-8 h-8 rounded-full" />
          <h1 className="font-bold text-2xl text-[#FFB200]">
            Meal <span className="text-white">Mate</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 text-sm lg:text-base ${isActive(link.href)
                      ? "text-[#FFB200] font-bold"
                      : "text-slate-100 dark:text-gray-300 hover:text-[#FFB200]"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full ring-2 ring-[#FFB200]/20 group-hover:ring-[#FFB200]/50 transition-all duration-300 overflow-hidden relative">
                  <Image
                    src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    fill
                    alt="user"
                    className="object-cover"
                  />
                </div>
                <FaChevronDown
                  className={`text-xs text-slate-500 dark:text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>

                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-72 z-50 overflow-hidden"
                    >
                      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-5 bg-linear-to-br from-[#FFB200]/10 to-transparent border-b border-slate-100 dark:border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                              <Image
                                className="rounded-full border-2 border-[#FFB200]/50 object-cover"
                                src={
                                  user?.photoURL ||
                                  "https://i.ibb.co/5GzXkwq/user.png"
                                }
                                fill
                                alt="profile"
                              />
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h1 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                                {user?.displayName}
                              </h1>
                              <p className="text-xs text-slate-500 dark:text-gray-400 truncate">
                                {user?.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 space-y-1">
                          {[
                            { name: "Foods", href: "/foods", icon: FaUtensils, color: "text-[#FFB200]", bg: "bg-[#FFB200]/10" },
                            { name: "Add Food", href: "/add-food", icon: FaPlus, color: "text-green-500", bg: "bg-green-500/10" }
                          ].map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all duration-200 group"
                            >
                              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <item.icon className={`${item.color} text-sm`} />
                              </div>
                              <span className="text-sm font-medium">{item.name}</span>
                            </Link>
                          ))}
                        </div>

                        <div className="p-2 mt-1 border-t border-slate-100 dark:border-white/5">
                          <button
                            onClick={() => {
                              setIsDropdownOpen(false);
                              handleLogOut();
                            }}
                            className="flex w-full items-center gap-3 px-3 py-2.5 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group dark:hover:bg-red-500/10"
                          >
                            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <FaSignOutAlt className="text-sm" />
                            </div>
                            <span className="text-sm font-medium">Log out</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-2 border-2 border-[#FFB200] rounded-full text-[#FFB200] font-bold hover:bg-[#FFB200] hover:text-white transition-all duration-300"
            >
              <FaArrowRight className="text-[14px]" />
              Login
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 dark:text-white text-2xl focus:outline-none p-2"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-gray-950 dark:bg-gray-950/98 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg ${isActive(link.href)
                        ? "text-[#FFB200] font-bold"
                        : "text-slate-100 dark:text-gray-300 hover:text-[#FFB200]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <div className="border-t border-slate-200 dark:border-white/10 pt-6 mt-2">
                {user ? (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                          alt="user"
                          fill
                          className="rounded-full border-2 border-[#FFB200] object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-950 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h1 className="text-slate-900 dark:text-white font-bold text-lg truncate">
                          {user?.displayName}
                        </h1>
                        <p className="text-slate-500 dark:text-gray-400 text-sm truncate">
                          {user?.email}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <Link
                        href="/my-foods"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 active:scale-95 transition-all"
                      >
                        <FaUtensils className="text-[#FFB200]" />
                        <span className="font-medium">My Foods</span>
                      </Link>

                      <Link
                        href="/add-food"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 active:scale-95 transition-all"
                      >
                        <FaPlus className="text-green-500" />
                        <span className="font-medium">Add Food</span>
                      </Link>

                      <button
                        onClick={() => {
                          setIsOpen(false);
                          handleLogOut();
                        }}
                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-red-50 text-red-500 active:scale-95 transition-all dark:bg-red-500/10"
                      >
                        <FaSignOutAlt />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-[#FFB200] rounded-2xl text-[#FFB200] font-bold text-lg hover:bg-[#FFB200] hover:text-white transition-all duration-300"
                    >
                      <FaArrowRight className="text-[14px]" />
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
