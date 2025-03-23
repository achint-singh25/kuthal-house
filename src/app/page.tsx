'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              className="text-center text-white px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold mb-4">Where Art Lives.</h1>
              <p className="text-lg mb-6 max-w-xl mx-auto">
                A peaceful creative haven near Kuthal Gate, on the foothills of
                Mussoorie — where sculpture, spirituality, and hospitality come
                together.
              </p>
              <Link
                href="/cafe"
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                Explore Kuthal House
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
