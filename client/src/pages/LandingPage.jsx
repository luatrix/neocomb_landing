// LandingPage.jsx
import React from 'react';
import { FaArrowRight, FaMagic, FaPalette, FaBolt } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d1fae5] via-white to-[#a7f3d0] font-baloo">
      {/* Topbar */}
<header className="w-full px-6 py-4 flex items-center justify-between shadow-sm bg-white">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src="/assets/logo.png" alt="ThumBee" className="h-6" />
  </div>

  {/* Language Switcher */}
  <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11h1.3a6.002 6.002 0 01-1.5 3.9A6.002 6.002 0 0112.05 7h-1.3V6zM9 6v1H7.95a6.002 6.002 0 011.5 3.9A6.002 6.002 0 017.05 7H9V6zm1 8a6 6 0 004.472-2.09A5.978 5.978 0 0015 10a6 6 0 00-4-5.659V7H9v1H7.05a5.978 5.978 0 001.528 2.91A6 6 0 0010 14z" />
    </svg>
    <select className="bg-transparent focus:outline-none">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  </div>
</header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mt-16 mb-4">
          Create stunning game thumbnails <br /> in seconds
        </h1>
        <img src="/assets/logo-scalable.svg" alt="ThumBee" className="mx-auto w-72 mb-6" />
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          ThumBee helps Roblox creators stand out with AI-generated, eye-catching thumbnails for any game idea.
        </p>
        <button
  disabled
  className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-3 rounded-full text-lg font-semibold opacity-60 cursor-not-allowed"
>
  Coming Soon <FaArrowRight />
</button>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-12 text-center">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <FaMagic className="text-[#10B981] text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Prompt-based generation</h3>
          <p className="text-gray-600 text-sm">
            Just describe your idea — ThumBee turns it into a thumbnail instantly.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <FaPalette className="text-[#10B981] text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Multiple styles</h3>
          <p className="text-gray-600 text-sm">
            Choose from vibrant, cinematic, pixel, or cartoony styles for any mood.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <FaBolt className="text-[#10B981] text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Fast & Free</h3>
          <p className="text-gray-600 text-sm">
            No design skills needed. Generate unlimited thumbnails for free.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pb-10">
        © 2025 ThumBee by beeSmart Education. All rights reserved.
      </footer>
    </div>
  );
}
