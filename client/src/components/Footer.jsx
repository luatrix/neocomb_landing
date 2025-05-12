import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#f0e6c8] text-gray-600 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <img src="/assets/beesmart-logo.png" alt="beeSmart logo" className="h-5" />
          <span className="text-gray-500">© 2025 beeSmart. All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#592AD0]">Privacy</a>
          <a href="#" className="hover:text-[#2DD4BF]">Terms</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}
