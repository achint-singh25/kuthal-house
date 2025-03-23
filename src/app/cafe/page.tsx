'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function CafePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50 px-6 md:px-20 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Kuthal House</div>
        <div className="space-x-6 text-sm hidden md:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/cafe" className="hover:underline">Café</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link href="/homestay" className="hover:underline">Homestay</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/publishing" className="hover:underline">Publishing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/cafe-hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              className="text-center text-white px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-bold mb-4">Kuthal House Art Café</h1>
              <p className="text-lg max-w-2xl mx-auto">Born of solitude, nurtured by dreams — now a living space for art, connection, and community.</p>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 px-6 md:px-20 text-center">
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            Long before it took a physical form, Kuthal House Art Café was a vision—an idea nurtured with intention, imagination, and quiet determination...<br /><br />
            Nestled in the serene setting of Kuthal Gaon–Kuthal Gate, the name came naturally: ‘Kuthal’—a tribute to the land that holds it...
          </p>
        </section>

        {/* Menu Section */}
        <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Menu</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer hearty fare and handcrafted beverages made with love. Preview our menus below or open them in a new tab for a closer look.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Food Menu */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Food Menu</h3>
              <img
                src="/previews/FoodPreview.jpg"
                alt="Food Menu Preview"
                className="rounded-lg w-full object-cover border"
              />
              <a
                href="/menus/Food.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline">Open Full Food Menu</Button>
              </a>
            </div>

            {/* Beverage Menu */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Beverage Menu</h3>
              <img
                src="/previews/BeveragesPreview.jpg"
                alt="Beverage Menu Preview"
                className="rounded-lg w-full object-cover border"
              />
              <a
                href="/menus/Beverages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline">Open Full Beverage Menu</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Visit Info */}
        <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
          <h2 className="text-2xl font-semibold mb-6">Plan Your Visit</h2>
          <p className="text-gray-700 mb-2">⏰ Open Daily: 11 AM – 11 PM</p>
          <p className="text-gray-700 mb-2">📍 Kuthal Gate, Mussoorie Rd, Salan Gaon, Bhagwant Pur, Kuthal Gaon, Uttarakhand</p>
          <p className="text-gray-700 mb-2">📞 9770686715 | ✉️ kuthalhouse@gmail.com</p>
          <div className="mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Kuthal%20House&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              className="rounded-xl border"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 px-6 md:px-20 border-t mt-10 text-center text-sm text-gray-600">
          <p>Kuthal Gate, Mussoorie Rd, Salan Gaon, Bhagwant Pur, Kuthal Gaon, Uttarakhand</p>
          <p>Email: kuthalhouse@gmail.com | Contact: 9770686715</p>
          <div className="flex justify-center mt-4 space-x-4">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
          <p className="text-xs mt-4">Crafted with care — a space where creativity finds home.</p>
        </footer>
      </div>
    </div>
  );
}
