'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

export default function HomestayPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/homestay-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4">Kuthal House Homestay</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Where comfort meets creativity in the lap of nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            Nestled in the serene foothills of Mussoorie, the Kuthal House Homestay offers a warm,
            welcoming retreat infused with artistic charm. Designed by the artist herself, this space
            is more than just accommodation—it's a lived experience of tranquility, inspiration,
            and connection.
          </p>
          <p>
            Guests can unwind in 4–6 thoughtfully curated rooms, each blending modern comforts with
            subtle artistic flourishes. Whether you’re sipping tea on a sun-drenched veranda, reading
            in a cozy nook, or admiring the sculptures scattered across the property, every moment
            feels deeply intentional.
          </p>
          <p>
            Located just 14 km from Mussoorie and near local gems like Robber’s Cave and the Dehradun
            Zoo, our homestay is ideal for travelers seeking quietude without being far from adventure.
            Whether you're here for a peaceful retreat or an artistic awakening, Kuthal House invites
            you to feel at home—in every sense of the word.
          </p>
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
  );
}
