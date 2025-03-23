'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex justify-between items-center w-[90%] max-w-5xl">
      <div className="text-lg font-semibold">Kuthal House</div>

      {/* Desktop Menu */}
      <div className="space-x-6 text-sm hidden md:flex">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/cafe" className="hover:underline">Café</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/homestay" className="hover:underline">Homestay</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/publishing" className="hover:underline">Publishing</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col space-y-4 text-sm md:hidden z-50"
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/cafe" onClick={() => setMenuOpen(false)}>Café</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/homestay" onClick={() => setMenuOpen(false)}>Homestay</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link href="/publishing" onClick={() => setMenuOpen(false)}>Publishing</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
