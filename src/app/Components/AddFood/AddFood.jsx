"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Utensils,
  AlignLeft,
  Type,
  DollarSign,
  Calendar,
  BarChart,
  Image as ImageIcon,
  User,
  Mail,
  Loader2
} from "lucide-react";
import { AuthContext } from "@/app/Context/AuthContext";

export default function AddItem() {
  const { user } = use(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setLoading(true);

    const newProduct = {
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      priority: e.target.priority.value,
      price: parseFloat(e.target.price.value),
      fullDescription: e.target.fullDescription.value,
      date: e.target.date.value,
      imageUrl: e.target.image.value,
      postedBy: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };

    fetch("https://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "Culinary Item Added!",
          text: "Your new product has been successfully listed.",
          icon: "success",
          confirmButtonColor: "#FFB200",
          background: "white",
          color: "#0f172a",
          customClass: {
            popup: 'rounded-2xl border border-slate-100 shadow-2xl'
          }
        });
        router.push("/foods");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        Swal.fire({
          title: "Submission Error",
          text: "Failed to add the product. Please check your connection.",
          icon: "error",
          confirmButtonColor: "#FFB200",
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] py-12 md:py-24 px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none rounded-3xl p-6 md:p-12">

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
              Add New <span className="text-[#FFB200]">Culinary Work</span>
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="h-1.5 w-24 bg-[#FFB200] rounded-full" />
            </div>
            <p className="mt-6 text-slate-500 dark:text-gray-400 font-medium text-sm md:text-base max-w-lg mx-auto uppercase tracking-widest">
              Expand your menu with a fresh masterpiece
            </p>
          </div>

          <form onSubmit={handleAddProduct} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                    <Type size={14} className="text-[#FFB200]" /> Food Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl"
                    placeholder="Enter dish name"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                    <AlignLeft size={14} className="text-[#FFB200]" /> Short Remark
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl"
                    placeholder="A brief menu hook..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                      <DollarSign size={14} className="text-[#FFB200]" /> Valuation
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                      <Calendar size={14} className="text-[#FFB200]" /> Listing Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                    <BarChart size={14} className="text-[#FFB200]" /> Display Priority
                  </label>
                  <select
                    name="priority"
                    className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl cursor-pointer"
                  >
                    <option value="" className="dark:bg-slate-900">Select priority</option>
                    <option value="High" className="dark:bg-slate-900">High Impact</option>
                    <option value="Medium" className="dark:bg-slate-900">Standard</option>
                    <option value="Low" className="dark:bg-slate-900">Low Key</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                    <ImageIcon size={14} className="text-[#FFB200]" /> Visual URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all rounded-t-xl"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 ml-1">
                    <Utensils size={14} className="text-[#FFB200]" /> Elaborate Narrative
                  </label>
                  <textarea
                    name="fullDescription"
                    className="w-full bg-slate-50 dark:bg-black/20 border-b-2 border-slate-200 dark:border-white/10 px-6 py-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[#FFB200] transition-all min-h-[178px] resize-none rounded-t-xl"
                    placeholder="Describe the soul of this dish..."
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-70">
                  <div className="flex items-center gap-4 bg-slate-100 dark:bg-white/5 px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/10">
                    <User size={16} className="text-slate-400" />
                    <div className="overflow-hidden">
                      <p className="text-[9px] font-black uppercase text-slate-400 dark:text-gray-500 tracking-widest">Compiler</p>
                      <p className="text-[11px] font-bold dark:text-white truncate">{user?.displayName || "Anonymous"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-100 dark:bg-white/5 px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/10">
                    <Mail size={16} className="text-slate-400" />
                    <div className="overflow-hidden">
                      <p className="text-[9px] font-black uppercase text-slate-400 dark:text-gray-500 tracking-widest">Network ID</p>
                      <p className="text-[11px] font-bold dark:text-white truncate">{user?.email || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={loading}
              type="submit"
              className="w-full bg-[#FFB200] hover:bg-amber-500 text-black h-18 rounded-[1.25rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-[#FFB200]/20 disabled:opacity-50 text-base md:text-lg italic"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                <>
                  <PlusCircle size={22} />
                  Claim to Menu
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
