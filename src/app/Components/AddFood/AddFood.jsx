"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Utensils,
  AlignLeft,
  DollarSign,
  Image as ImageIcon,
  User,
  Loader2,
  Info,
  CheckCircle2,
} from "lucide-react";
import { AuthContext } from "@/app/Context/AuthContext";

export default function AddFood() {
  const { user } = use(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const parseList = (str) => str.split(',').map(s => s.trim()).filter(Boolean);

    const newProduct = {
      name: form.name.value,
      slug: form.slug.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
      discountPrice: form.discountPrice.value ? parseFloat(form.discountPrice.value) : null,
      category: form.category.value,
      rating: parseFloat(form.rating.value) || 0,
      totalReviews: parseInt(form.totalReviews.value) || 0,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      ingredients: parseList(form.ingredients.value),
      nutrition: {
        calories: parseInt(form.calories.value) || 0,
        protein: form.protein.value,
        carbs: form.carbs.value,
        fat: form.fat.value,
      },
      allergens: parseList(form.allergens.value),
      tags: parseList(form.tags.value),
      spicyLevel: form.spicyLevel.value,
      servingSize: form.servingSize.value,
      prepTime: form.prepTime.value,
      availability: form.availability.checked,
      customization: {
        addons: parseList(form.addons.value).map(addon => {
          const [name, price] = addon.split(':');
          return { name: name?.trim(), price: parseFloat(price) || 0 };
        }),
        remove: []
      },
      pairWith: parseList(form.pairWith.value),
      origin: form.origin.value,
      chefNote: form.chefNote.value,
      postedBy: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };

    fetch("http://localhost:5000/foods", {
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
          title: "Masterpiece Added!",
          text: `${newProduct.name} is now part of the menu.`,
          icon: "success",
          confirmButtonColor: "#FFB200",
          background: "#ffffff",
          color: "#0f172a",
          customClass: {
            popup: 'rounded-2xl border border-slate-100 shadow-2xl dark:bg-[#1a1a1a] dark:text-white dark:border-white/10'
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
          background: "#ffffff",
          color: "#0f172a",
          customClass: {
            popup: 'dark:bg-[#1a1a1a] dark:text-white'
          }
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-[#FFB200]/30 transition-colors duration-300">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-200 h-200 bg-[#FFB200]/10 dark:bg-[#FFB200]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-200 h-200 bg-red-600/10 dark:bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
            Create <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB200] to-yellow-500">Masterpiece</span>
          </h1>
          <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Curate the next culinary sensation for the Meal Mate menu with precision and style.
          </p>
        </motion.div>

        <form onSubmit={handleAddProduct} className="grid gap-8 lg:gap-12">

          <motion.div variants={itemVariants} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl ring-1 ring-slate-900/5 dark:ring-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FFB200]/10 text-[#FFB200]">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Essentials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Dish Name</label>
                <input type="text" name="name" placeholder="e.g. Truffle Pasta" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium" required />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Unique Slug</label>
                <input type="text" name="slug" placeholder="e.g. truffle-pasta-deluxe" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium" required />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Category</label>
                <input type="text" name="category" placeholder="e.g. Main Course" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium" required />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <motion.div variants={itemVariants} className="lg:col-span-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl ring-1 ring-slate-900/5 dark:ring-0 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#FFB200]/10 text-[#FFB200]">
                  <AlignLeft size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Story</h3>
              </div>

              <div className="space-y-6 grow">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Tagline</label>
                  <input type="text" name="shortDescription" placeholder="A brief, catchy description..." className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium" required />
                </div>
                <div className="grow">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Full Description</label>
                  <textarea name="description" placeholder="Describe the flavors, textures, and inspiration..." className="w-full h-40 md:h-52 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium resize-none leading-relaxed" required></textarea>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl ring-1 ring-slate-900/5 dark:ring-0 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#FFB200]/10 text-[#FFB200]">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Value & Specs</h3>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Price</label>
                    <input type="number" step="0.01" name="price" placeholder="0.00" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-xl font-bold text-[#FFB200] placeholder-slate-500 dark:placeholder-slate-700 focus:outline-none focus:border-[#FFB200] transition-all" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Discount</label>
                    <input type="number" step="0.01" name="discountPrice" placeholder="0.00" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-xl font-bold text-slate-700 dark:text-white/70 placeholder-slate-500 dark:placeholder-slate-700 focus:outline-none focus:border-[#FFB200] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Serving Size</label>
                  <input type="text" name="servingSize" placeholder="e.g. 2 Persons" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Prep Time</label>
                  <input type="text" name="prepTime" placeholder="e.g. 25 mins" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Spice Level</label>
                  <select name="spicyLevel" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#FFB200] transition-all cursor-pointer appearance-none">
                    <option value="None" className="bg-white dark:bg-slate-900">No Spice</option>
                    <option value="Mild" className="bg-white dark:bg-slate-900">Mild</option>
                    <option value="Medium" className="bg-white dark:bg-slate-900">Medium</option>
                    <option value="Hot" className="bg-white dark:bg-slate-900">Hot</option>
                    <option value="Extra Hot" className="bg-white dark:bg-slate-900">Extra Hot</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl ring-1 ring-slate-900/5 dark:ring-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#FFB200]/10 text-[#FFB200]">
                  <Utensils size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Composition</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Ingredients (CSV)</label>
                  <textarea name="ingredients" placeholder="Flour, Eggs, Milk, Sugar..." className="w-full h-32 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] focus:ring-1 focus:ring-[#FFB200] transition-all hover:bg-slate-100 dark:hover:bg-black/30 font-medium resize-none"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Allergens</label>
                  <input type="text" name="allergens" placeholder="Gluten, Dairy..." className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-100 dark:bg-black/20 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                  <input type="number" name="calories" placeholder="Kcal" className="bg-transparent border-b border-slate-300 dark:border-white/10 py-2 text-center text-sm focus:outline-none focus:border-[#FFB200] text-slate-900 dark:text-white placeholder-slate-500" />
                  <input type="text" name="protein" placeholder="Protein" className="bg-transparent border-b border-slate-300 dark:border-white/10 py-2 text-center text-sm focus:outline-none focus:border-[#FFB200] text-slate-900 dark:text-white placeholder-slate-500" />
                  <input type="text" name="carbs" placeholder="Carbs" className="bg-transparent border-b border-slate-300 dark:border-white/10 py-2 text-center text-sm focus:outline-none focus:border-[#FFB200] text-slate-900 dark:text-white placeholder-slate-500" />
                  <input type="text" name="fat" placeholder="Fat" className="bg-transparent border-b border-slate-300 dark:border-white/10 py-2 text-center text-sm focus:outline-none focus:border-[#FFB200] text-slate-900 dark:text-white placeholder-slate-500" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl ring-1 ring-slate-900/5 dark:ring-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#FFB200]/10 text-[#FFB200]">
                    <ImageIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visuals & Extras</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Image URL</label>
                    <input type="text" name="image" placeholder="https://..." className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-[#FFB200] placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all font-mono text-sm" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Tags</label>
                      <input type="text" name="tags" placeholder="Spicy, Vegan..." className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Origin</label>
                      <input type="text" name="origin" placeholder="Italy" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Add-ons (Name:Price)</label>
                    <input type="text" name="addons" placeholder="Cheese:2.50, Sauce:1.00" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">Chefs Note</label>
                    <textarea name="chefNote" placeholder="Best served hot..." className="w-full h-20 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-[#FFB200] transition-all resize-none"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <input type="hidden" name="rating" value="0" />
          <input type="hidden" name="totalReviews" value="0" />
          <input type="hidden" name="pairWith" value="" />

          <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-slate-100 dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/5">
              <input type="checkbox" name="availability" id="avail" className="w-5 h-5 accent-[#FFB200] cursor-pointer" defaultChecked />
              <label htmlFor="avail" className="text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer select-none">Available for Order</label>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="hidden md:flex items-center gap-3 text-right">
                <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">Posting As</div>
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-300 font-bold">
                  <User size={16} className="text-[#FFB200]" />
                  {user?.displayName || "Admin_User"}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full md:w-auto bg-[#FFB200] hover:bg-[#e6a100] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] shadow-lg shadow-[#FFB200]/20 flex items-center justify-center gap-3 transition-colors text-sm md:text-base"
              >
                {loading ? <Loader2 className="animate-spin" /> : <PlusCircle size={20} />}
                <span>Publish Masterpiece</span>
              </motion.button>
            </div>
          </motion.div>

        </form>
      </motion.div>
    </div>
  );
}
