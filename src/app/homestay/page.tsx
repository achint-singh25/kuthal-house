'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function HomestayPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/homestay-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4">Kuthal House Homestay</h1>
            <p className="text-lg max-w-2xl mx-auto">
              A tranquil stay surrounded by art and nature, nestled in the foothills of Mussoorie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          The homestay at Kuthal House is where comfort meets creativity. Designed with care and a deep appreciation for art and quietude, each room offers a unique experience. Whether you&#39;re here for a peaceful retreat or an artistic awakening, this space embraces you with warmth and inspiration.
          <br /><br />
          Located just 14 km from Mussoorie and near Dehradun Zoo and Robber&#39;s Cave, it&#39;s the perfect base to explore the mountains or simply unwind with a book in hand, surrounded by sculpture and serenity.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="px-6 md:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {['room1.jpg', 'room2.jpg', 'view.jpg'].map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow">
            <Image src={`/homestay/${src}`} alt={`Room ${index + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 md:px-20 border-t mt-10 text-center text-sm text-gray-600">
        <p>Kuthal Gate, Mussoorie Rd, Salan Gaon, Bhagwant Pur, Kuthal Gaon, Uttarakhand</p>
        <p>Email: <a href="mailto:kuthalhouse@gmail.com" className="underline">kuthalhouse@gmail.com</a> | Contact: <a href="tel:9770686715" className="underline">9770686715</a></p>
        <div className="flex justify-center mt-4 space-x-4">
          <Instagram className="h-5 w-5" />
          <Facebook className="h-5 w-5" />
        </div>
        <p className="text-xs mt-4">Crafted with care — a space where creativity finds home.</p>
      </footer>
    </div>
  );
}
