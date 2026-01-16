import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-none transition-colors duration-300 font-medium">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FFB200]/5 dark:bg-[#FFB200]/10 rounded-full blur-[100px]" />

      <div className="w-full md:w-10/12 mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Meal<span className="text-[#FFB200]">Mate</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs font-medium">
              MealMate is your premium smart digital food menu platform. We bridge the gap between delicious dishes and hungry souls with an elegant digital experience.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, hover: "hover:bg-blue-600", lightBg: "bg-gray-100", darkBg: "dark:bg-gray-800" },
                { icon: <FaTwitter />, hover: "hover:bg-sky-500", lightBg: "bg-gray-100", darkBg: "dark:bg-gray-800" },
                { icon: <FaInstagram />, hover: "hover:bg-pink-600", lightBg: "bg-gray-100", darkBg: "dark:bg-gray-800" },
                { icon: <FaLinkedinIn />, hover: "hover:bg-blue-700", lightBg: "bg-gray-100", darkBg: "dark:bg-gray-800" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${social.lightBg} ${social.darkBg} text-gray-600 dark:text-gray-300 hover:text-white ${social.hover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">Quick Explorer</h3>
            <ul className="space-y-3">
              {["Home", "All Foods", "Categories", "Our Chefs", "Featured Items"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#FFB200] dark:hover:text-[#FFB200] transition-colors flex items-center group font-medium">
                    <span className="w-0 h-px bg-[#FFB200] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">Support Hub</h3>
            <ul className="space-y-3">
              {["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#FFB200] dark:hover:text-[#FFB200] transition-colors flex items-center group font-medium">
                    <span className="w-0 h-px bg-[#FFB200] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">Join The Taste</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Subscribe to get the latest menus and special discounts directly in your inbox.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 py-3 pl-4 pr-12 rounded-xl focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <button className="absolute right-2 top-2 bottom-2 px-3 bg-[#FFB200] hover:bg-[#e6a100] dark:bg-[#FFB200] dark:hover:bg-[#be8603] text-white rounded-lg transition-colors flex items-center justify-center group/btn shadow-sm">
                <FaPaperPlane className="text-sm transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
            <p className="text-[13px] text-gray-800 dark:text-gray-500 italic font-semibold">* We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left font-semibold">
            &copy; {currentYear} <span className="text-gray-800 dark:text-gray-300 font-semibold">MealMate</span>. Crafted with ❤️ for Food Lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}


