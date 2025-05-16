// src/pages/BeeSmartLanding.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function BeeSmartLanding() {
  return (
    <>
      <Helmet>
        <title>NeoComb</title>
        <link rel="icon" type="image/png" href="/favicons/neocomb-fav.png" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#ffe266] to-[#fcb933] font-sans text-gray-800">
        {/* Header */}

        <header className="w-full px-6 py-2 flex items-center justify-between shadow-sm bg-white sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <img src="/assets/neocomb-logo.svg" alt="beeSmart" className="h-12" />
          </div>
          <nav className="flex gap-4 text-base text-gray-700 font-semibold">
  <a
    href="#labee"
    className="px-4 py-2 rounded-lg hover:text-[#592AD0] hover:bg-[#f0e7ff] transition"
  >
    LaBee
  </a>
  <a
    href="#thumbee"
    className="px-4 py-2 rounded-lg hover:text-[#2DD4BF] hover:bg-[#d7fafa] transition"
  >
    ThumBee
  </a>
</nav>

        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center max-w-3xl mx-auto min-h-screen flex flex-col justify-center relative overflow-hidden">
          {/* Паттерн фоном, поверх родительского градиента */}


          {/* Пчела-анимация */}


          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
              Learn. Build. Bee Smart
            </h2>
            <div className="flex justify-center mb-6 z-10">
              <img
                src="/assets/neocomb-large.png"
                alt="beeSmart Logo"
                className="h-24 md:h-28 animate-float"
                style={{ animationDuration: '6s' }}
              />
            </div>

            <p className="text-lg text-gray-800 mb-10 leading-relaxed">
              We create smart next-generation educational tools that make learning creative, playful, and accessible for all young creators.
            </p>
          </div>
        </section>



        {/* LaBee Section */}
        <section id="labee" className="bg-gradient-to-r from-white to-[#f5f0ff] py-20 px-6 md:px-12 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/assets/labee-large.svg" alt="LaBee" className="w-full" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#592AD0] mb-4">LaBee</h3>
              <p className="text-gray-700 text-lg mb-4">
                LaBee is an AI assistant that empowers children to build their own Roblox games from scratch.
                It offers a step-by-step guide, code explanations, gamified XP system and educational missions.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 mb-6">
                <li>Friendly AI chat with real code samples</li>
                <li>Visual XP and Rank system to keep kids motivated</li>
                <li>Localization and mobile-first UX</li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.beesmart.LaBee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#592AD0] hover:bg-[#4721a8] text-white px-5 py-3 rounded-full text-sm font-semibold">
                Get it on Google Play <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ThumBee Section */}
        <section id="thumbee" className="bg-gradient-to-r from-white to-[#d1f9f6] py-20 px-6 md:px-12 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold text-[#10B981] mb-4">ThumBee</h3>
              <p className="text-gray-700 text-lg mb-4">
                ThumBee helps young developers and game creators design engaging Roblox thumbnails using AI.
                With simple prompts and auto-styling, it brings ideas to life visually — in seconds.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 mb-6">
                <li>Optimized styles for Roblox discovery</li>
                <li>Simple and safe interface for kids</li>
                <li>Export-ready and shareable assets</li>
              </ul>
              <a
                href="/thumbee"
                className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#1cc4ac] text-white px-5 py-3 rounded-full text-sm font-semibold transition">
                Learn More <FaArrowRight />
              </a>

            </div>
            <div className="order-1 md:order-2">
              <img src="/assets/logo-scalable.svg" alt="ThumBee" className="w-full" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>


  );
}
