"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, LogIn, ChevronLeft } from "lucide-react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, setUser, signInGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;
      setUser(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome Back!",
        text: "You have successfully logged in.",
        showConfirmButton: false,
        timer: 1500,
        background: "#141414",
        color: "#fff",
      });
      router.push("/foods");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        confirmButtonColor: "#D61C1C",
        background: "#141414",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInGoogle();
      const user = result.user;
      setUser(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
        background: "#141414",
        color: "#fff",
      });
      router.push("/foods");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Google sign-in failed.",
        confirmButtonColor: "#FF5A3C",
        background: "#141414",
        color: "#fff",
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.4] scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/60 via-transparent to-red-900/20 z-1" />

      <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-[#FFB200] transition-all group">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FFB200] group-hover:text-black transition-all">
          <ChevronLeft size={20} />
        </div>
        <span className="font-bold uppercase tracking-widest text-xs">Back to home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-162.5 px-6 py-12"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFB200]/10 rounded-full blur-[80px]" />

          <div className="text-center mb-10 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-black text-[#FFB200] italic tracking-tighter uppercase leading-[0.9]">
              Meal <span className="text-white">Mate</span>
            </h1>
            <p className="text-gray-200 mt-4 font-medium tracking-wide text-sm sm:text-base opacity-80">
              Savor the flavor of your exclusive account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-200 uppercase tracking-[0.3em] ml-1">
                Identity
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB200] transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full bg-white/5 border border-white/10 text-white pl-11 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 focus:border-[#FFB200] transition-all placeholder:text-gray-600 font-semibold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-gray-200 uppercase tracking-[0.3em]">
                  Security
                </label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB200] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full bg-white/5 border border-white/10 text-white pl-11 pr-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 focus:border-[#FFB200] transition-all placeholder:text-gray-600 font-semibold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full bg-[#D61C1C] hover:bg-red-700 text-white py-4.5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-red-900/30 transition-all flex items-center justify-center gap-2 group/btn h-14"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Enter Kitchen</span>
                  <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center px-4">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.4em]">
              <span className="bg-[#0e0e0e] px-4 text-gray-300 rounded-full">Or Social</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-2xl hover:bg-gray-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google Entry
          </motion.button>

          <p className="text-center mt-12 text-gray-500 font-bold text-xs uppercase tracking-widest">
            First time here?{" "}
            <Link href="/sign-up" className="text-[#FFB200] hover:text-white transition-colors underline decoration-2 underline-offset-4 decoration-[#FFB200]/30 hover:decoration-[#FFB200]">
              Register Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
