'use client';

import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xkgjreqk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {submitted ? (
        <div className="text-center text-green-600 mb-8">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border px-4 py-2 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      )}

      {/* Contact Details */}
      <div className="text-center mt-16">
        <p className="mb-2">📧 <a href="mailto:kuthalhouse@gmail.com" className="underline">kuthalhouse@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:9770686715" className="underline">9770686715</a></p>
        <div className="flex justify-center space-x-4 mt-4">
          <Instagram className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
