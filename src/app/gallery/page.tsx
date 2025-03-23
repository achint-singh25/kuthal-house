'use client';

import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
    

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/gallery-hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              className="text-center text-white px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-bold mb-4">Kuthal House Art Gallery</h1>
              <p className="text-lg max-w-2xl mx-auto">A space for stories, emotions, and ideas to converge and connect.</p>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 px-6 md:px-20 text-center">
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            The Kuthal House Art Gallery is the realization of a deeply personal vision. In fact, the very concept of Kuthal House as a physical space was born from the artist’s need for a place to showcase sculptures and artwork—it was always meant to be.
            <br /><br />
            The gallery now serves as a vibrant reflection of the artist’s inner world, featuring a curated collection of in-house pieces alongside works by other artists who have chosen this space to share their creative expressions.
            <br /><br />
            More than just a gallery, it is a space for stories, emotions, and ideas to converge and connect.
          </p>
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
