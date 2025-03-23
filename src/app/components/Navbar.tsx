'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 px-6 md:px-20 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Kuthal House</div>

      {/* Desktop Nav */}
      <div className="space-x-6 text-sm hidden md:flex">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/cafe" className="hover:underline">Café</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/homestay" className="hover:underline">Homestay</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/publishing" className="hover:underline">Publishing</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t flex flex-col space-y-4 p-6 text-sm md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/cafe" onClick={() => setMenuOpen(false)}>Café</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/homestay" onClick={() => setMenuOpen(false)}>Homestay</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/publishing" onClick={() => setMenuOpen(false)}>Publishing</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
