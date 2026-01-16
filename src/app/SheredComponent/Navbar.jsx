import React from "react";
import { FaSearch, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import logo from "../../assets/Rectangle 2.png"; 
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
   <div className="bg-gray-950">
     <nav className="h-20 flex items-center  text-gray-100 justify-between w-full md:w-10/12 px-2 md:px-8 mx-auto">
      
      <div className="flex items-center gap-1.5">
        <Image src={logo} alt="Village Chef" className="w-7 h-7" />
        <h1  className="font-semibold text-2xl text-[#FFB200]">Meal <span className="text-white">Mate</span></h1>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex gap-10 font-medium">
        <Link href="/" className="cursor-pointer hover:text-[#f9b233] transition">Home</Link>
        <Link href="/foods" className="cursor-pointer hover:text-[#f9b233] transition">Foods</Link>
        <Link href="/add-food" className="cursor-pointer hover:text-[#f9b233] transition">Add Food</Link>
        <Link href="/" className="cursor-pointer hover:text-[#f9b233] transition">Contact</Link>
      </ul>
        <Link href='/login' className="flex items-center gap-2 px-6 py-1.5 border-2 border-[#f9b233] rounded-full text-[#f9b233] text-[16px] font-medium hover:bg-[#f9b233] hover:text-black transition ml-7">
          <FaArrowRight className="text-[14px]" />
          Login
        </Link>
      </div>
    </nav>
   </div>
  );
}
