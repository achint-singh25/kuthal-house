'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function HomePage() {
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
        <section className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              className="text-center text-white px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold mb-4">Where Art Lives.</h1>
              <p className="text-lg mb-6 max-w-xl mx-auto">
                A peaceful creative haven near Kuthal Gate, on the foothills of Mussoorie — where sculpture, spirituality, and hospitality come together.
              </p>
              <Link href="/gallery">
                <Button className="bg-white text-black hover:bg-gray-200">Explore Kuthal House</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Kuthal House</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Nestled in the foothills of Mussoorie, Kuthal House is a one-of-a-kind creative space that brings together a homestay, an art café, a sculpture gallery, a boutique shop, and an independent publishing house — all envisioned by artist Nitu Singh.
          </p>
        </section>

        {/* Offerings Section */}
        <section className="py-10 bg-gray-50 px-6 md:px-20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Explore Our Spaces</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Art Café */}
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/cafe.jpg" alt="Art Café" className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">Kuthal House Art Café</h4>
                <p className="text-gray-600 text-sm mb-4">A cozy café serving hearty fare and warm beverages, surrounded by sculptures and symbolic artwork by Nitu Singh.</p>
                <Link href="/cafe">
                  <Button variant="outline">Discover More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Art Gallery */}
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/gallery.jpg" alt="Art Gallery" className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">Kuthal House Art Gallery</h4>
                <p className="text-gray-600 text-sm mb-4">An immersive display of wooden, metal, and canvas sculptures that delve into Indian symbolism and spiritual philosophy.</p>
                <Link href="/gallery">
                  <Button variant="outline">Visit Gallery</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Homestay */}
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/homestay.jpg" alt="Homestay" className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-2">Kuthal House Homestay</h4>
                <p className="text-gray-600 text-sm mb-4">Stay in one of our 4–6 cozy rooms equipped with modern amenities — just 14 km from Mussoorie and near Dehradun Zoo and Robber’s Cave.</p>
                <Link href="/homestay">
                  <Button variant="outline">Book Your Stay</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 px-6 md:px-20 py-10 mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Address</h4>
              <p className="text-sm">Kuthal Gate, Mussoorie Rd, Salan Gaon, Bhagwant Pur, Kuthal Gaon, Uttarakhand</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Contact</h4>
              <p className="text-sm">Email: <a href="mailto:kuthalhouse@gmail.com" className="underline">kuthalhouse@gmail.com</a></p>
              <p className="text-sm">Phone: <a href="tel:9770686715" className="underline">9770686715</a></p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-8">© 2025 Kuthal House | Designed with ❤️</p>
        </footer>
      </div>
    </div>
  );
}
